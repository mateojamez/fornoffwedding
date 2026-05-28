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

/** @param {string | null | undefined} value */
function safeText(value) {
  const text = String(value ?? "").trim();
  return text === "" ? "—" : text;
}

/** @param {{ first_name: string, last_name?: string | null }} guest */
function fullName(guest) {
  const first = String(guest.first_name ?? "").trim();
  const last = String(guest.last_name ?? "").trim();
  return last ? `${first} ${last}` : first;
}

/** @param {HTMLElement} el */
function clear(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

/**
 * @param {HTMLElement} tbody
 * @param {Array<string>} cols
 */
function appendRow(tbody, cols) {
  const tr = document.createElement("tr");
  for (const col of cols) {
    const td = document.createElement("td");
    td.textContent = col;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

const els = {
  summary: document.getElementById("rsvpcheck-summary"),
  message: document.getElementById("rsvpcheck-message"),
  attendingBody: document.getElementById("rsvpcheck-attending"),
  notAttendingBody: document.getElementById("rsvpcheck-not-attending"),
  noResponseBody: document.getElementById("rsvpcheck-no-response"),
  refresh: document.getElementById("rsvpcheck-refresh"),
};

let supabase = null;

function setMessage(text, isError = false) {
  if (!els.message) return;
  els.message.textContent = text;
  els.message.classList.toggle("rsvp-message--error", isError);
}

async function loadDashboard() {
  if (!supabase) {
    setMessage(
      "RSVP dashboard is not configured. Add Supabase values in js/supabase-config.js.",
      true
    );
    return;
  }

  setMessage("Loading RSVP dashboard...");

  const [{ data: guests, error: guestsError }, { data: rsvps, error: rsvpsError }] =
    await Promise.all([
      supabase
        .from("guests")
        .select(
          `
          id,
          first_name,
          last_name,
          party_id,
          parties (
            party_name
          )
        `
        )
        .order("first_name", { ascending: true })
        .order("last_name", { ascending: true }),
      supabase.from("rsvps").select("guest_id, attending, dietary_restrictions"),
    ]);

  if (guestsError || rsvpsError) {
    console.error("Dashboard load failed:", guestsError || rsvpsError);
    setMessage("Could not load RSVP data. Check your table permissions.", true);
    return;
  }

  const rsvpByGuestId = new Map();
  for (const row of rsvps ?? []) {
    rsvpByGuestId.set(row.guest_id, row);
  }

  /** @type {Array<{name: string, party: string, dietary: string}>} */
  const attending = [];
  /** @type {Array<{name: string, party: string, dietary: string}>} */
  const notAttending = [];
  /** @type {Array<{name: string, party: string, dietary: string}>} */
  const noResponse = [];

  for (const guest of guests ?? []) {
    const guestRsvp = rsvpByGuestId.get(guest.id) || null;
    const partyName = Array.isArray(guest.parties)
      ? guest.parties[0]?.party_name
      : guest.parties?.party_name;

    const rowBase = {
      name: fullName(guest),
      party: safeText(partyName),
      dietary: safeText(guestRsvp?.dietary_restrictions),
    };

    if (guestRsvp?.attending === true) {
      attending.push(rowBase);
    } else if (guestRsvp) {
      notAttending.push(rowBase);
    } else {
      noResponse.push(rowBase);
    }
  }

  clear(els.attendingBody);
  clear(els.notAttendingBody);
  clear(els.noResponseBody);

  for (const row of attending) {
    appendRow(els.attendingBody, [row.name, row.party, row.dietary]);
  }
  for (const row of notAttending) {
    appendRow(els.notAttendingBody, [row.name, row.party, row.dietary]);
  }
  for (const row of noResponse) {
    appendRow(els.noResponseBody, [row.name, row.party, row.dietary]);
  }

  if (attending.length === 0) {
    appendRow(els.attendingBody, ["No guests marked as attending yet.", "—", "—"]);
  }
  if (notAttending.length === 0) {
    appendRow(els.notAttendingBody, ["No guests marked as not attending.", "—", "—"]);
  }
  if (noResponse.length === 0) {
    appendRow(els.noResponseBody, ["No guests without a response.", "—", "—"]);
  }

  if (els.summary) {
    const total = (guests ?? []).length;
    els.summary.textContent =
      `Total Guests: ${total} | Attending: ${attending.length} | Not Attending: ${notAttending.length} | No Response: ${noResponse.length}`;
  }

  setMessage("RSVP dashboard updated.");
}

function init() {
  if (isConfigReady()) {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  els.refresh?.addEventListener("click", () => {
    loadDashboard();
  });

  loadDashboard();
}

init();
