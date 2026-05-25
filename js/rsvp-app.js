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
        <span class="rsvp-field__label">Meal choice</span>
        <input class="rsvp-input" type="text" placeholder="Chicken, beef, vegetarian, etc." data-guest-id="${escapeHtml(g.id)}" data-field="meal_choice" />
      </label>
      <label class="rsvp-field">
        <span class="rsvp-field__label">Dietary restrictions</span>
        <input class="rsvp-input" type="text" placeholder="Allergies or dietary needs" data-guest-id="${escapeHtml(g.id)}" data-field="dietary_restrictions" />
      </label>
      <label class="rsvp-field">
        <span class="rsvp-field__label">Notes</span>
        <textarea class="rsvp-input rsvp-input--textarea" rows="3" placeholder="Optional note" data-guest-id="${escapeHtml(g.id)}" data-field="notes"></textarea>
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
  const normalizedPhone = els.phone.value.replace(/\D/g, "");

  const { data, error } = await supabase
    .from("parties")
    .select(
      `
        id,
        party_name,
        guests (
          id,
          first_name,
          last_name
        )
      `
    )
    .eq("lookup_last_name", normalizedLastName)
    .contains("lookup_phone", [normalizedPhone])
    .single();

  if (error || !data) {
    setMessage("No invitation found. Please check your last name and phone number.", true);
    return;
  }

  setMessage("");
  showParty(data);
}

async function submitRSVP(e) {
  e.preventDefault();
  if (!supabase || !party) return;

  const guests = party.guests || [];
  const rows = guests.map((guest) => ({
    guest_id: guest.id,
    attending: responses[guest.id]?.attending === "yes",
    meal_choice: responses[guest.id]?.meal_choice || "",
    dietary_restrictions: responses[guest.id]?.dietary_restrictions || "",
    notes: responses[guest.id]?.notes || "",
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
