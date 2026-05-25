import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./supabase-config.js";

function isConfigReady() {
  const urlOk =
    SUPABASE_URL &&
    !String(SUPABASE_URL).includes("your_supabase_project_url") &&
    SUPABASE_URL.startsWith("http");
  const keyOk =
    SUPABASE_ANON_KEY &&
    !String(SUPABASE_ANON_KEY).includes("your_supabase_anon_key") &&
    String(SUPABASE_ANON_KEY).length > 20;
  return urlOk && keyOk;
}

const els = {
  lookupPanel: document.getElementById("rsvp-lookup"),
  partyPanel: document.getElementById("rsvp-party"),
  formFind: document.getElementById("form-find"),
  formRsvp: document.getElementById("form-rsvp"),
  lastName: document.getElementById("last-name"),
  phone: document.getElementById("phone"),
  partyTitle: document.getElementById("party-title"),
  guestFields: document.getElementById("guest-fields"),
  message: document.getElementById("rsvp-message"),
  btnReset: document.getElementById("btn-reset-party"),
};

let supabase = null;
/** @type {{ id: string, party_name: string, guests: { id: string, first_name: string, last_name: string }[] } | null} */
let party = null;
const responses = {};

function setMessage(text, isError = false) {
  els.message.textContent = text;
  els.message.classList.toggle("rsvp-message--error", isError);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizePhone(value) {
  return String(value ?? "").replace(/\D/g, "");
}

/** @param {string | string[] | null | undefined} lookupPhone */
function phoneMatchesLookup(lookupPhone, normalizedPhone) {
  if (!normalizedPhone) return false;
  const phones = Array.isArray(lookupPhone)
    ? lookupPhone
    : lookupPhone != null && lookupPhone !== ""
      ? [lookupPhone]
      : [];
  return phones.some((p) => normalizePhone(p) === normalizedPhone);
}

function renderGuestFields(guests) {
  Object.keys(responses).forEach((k) => delete responses[k]);

  els.guestFields.innerHTML = guests
    .map(
      (g) => `
    <article class="rsvp-guest-card" data-guest-id="${escapeHtml(g.id)}">
      <h2 class="rsvp-guest-card__name">${escapeHtml(g.first_name)} ${escapeHtml(g.last_name)}</h2>
      <label class="rsvp-field">
        <span class="rsvp-field__label">Attending?</span>
        <select class="rsvp-input" required data-guest-id="${escapeHtml(g.id)}" data-field="attending">
          <option value="">Select one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label class="rsvp-field">
        <span class="rsvp-field__label">Dietary restrictions</span>
        <input class="rsvp-input" type="text" placeholder="Allergies or dietary needs" data-guest-id="${escapeHtml(g.id)}" data-field="dietary_restrictions" />
      </label>
    </article>
  `
    )
    .join("");

  els.guestFields.querySelectorAll("[data-field]").forEach((input) => {
    const guestId = input.getAttribute("data-guest-id");
    const field = input.getAttribute("data-field");
    const sync = () => {
      responses[guestId] = responses[guestId] || {};
      responses[guestId][field] = input.value;
    };
    input.addEventListener("input", sync);
    input.addEventListener("change", sync);
  });
}

function showLookup() {
  party = null;
  els.lookupPanel.hidden = false;
  els.partyPanel.hidden = true;
  els.formFind.reset();
  setMessage("");
}

function showParty(p) {
  party = p;
  els.lookupPanel.hidden = true;
  els.partyPanel.hidden = false;
  els.partyTitle.textContent = `RSVP for ${p.party_name}`;
  renderGuestFields(p.guests || []);
}

async function findParty(e) {
  e.preventDefault();
  if (!supabase) {
    setMessage(
      "RSVP is not configured yet. Add your Supabase URL and anon key in js/supabase-config.js (same values as NEXT_PUBLIC_* in .env.local).",
      true
    );
    return;
  }

  const normalizedLastName = els.lastName.value.trim().toLowerCase();
  const normalizedPhone = normalizePhone(els.phone.value);

  const { data: rows, error } = await supabase
    .from("parties")
    .select(
      `
        id,
        party_name,
        lookup_phone,
        guests (
          id,
          first_name,
          last_name
        )
      `
    )
    .ilike("lookup_last_name", normalizedLastName);

  if (error) {
    console.error("RSVP lookup failed:", error);
    setMessage("No invitation found. Please check your last name and phone number.", true);
    return;
  }

  const match = (rows ?? []).find((row) =>
    phoneMatchesLookup(row.lookup_phone, normalizedPhone)
  );

  if (!match) {
    setMessage("No invitation found. Please check your last name and phone number.", true);
    return;
  }

  const { lookup_phone: _lookupPhone, ...partyData } = match;
  setMessage("");
  showParty(partyData);
}

async function submitRSVP(e) {
  e.preventDefault();
  if (!supabase || !party) return;

  const guests = party.guests || [];
  const rows = guests.map((guest) => ({
    guest_id: guest.id,
    attending: responses[guest.id]?.attending === "yes",
    dietary_restrictions: responses[guest.id]?.dietary_restrictions || "",
    updated_at: new Date().toISOString(),
  }));

  const { error } = await supabase.from("rsvps").upsert(rows, { onConflict: "guest_id" });

  if (error) {
    console.error("RSVP upsert failed:", error);
    const detail = error.message || String(error);
    setMessage(`Could not save RSVP: ${detail}`, true);
    return;
  }

  setMessage("Thank you! Your RSVP has been saved.");
}

function init() {
  if (isConfigReady()) {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  els.formFind.addEventListener("submit", findParty);
  els.formRsvp.addEventListener("submit", submitRSVP);
  els.btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    showLookup();
  });
}

init();
