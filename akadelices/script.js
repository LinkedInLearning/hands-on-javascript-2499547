// Where contact form submissions are sent
const CONTACT_EMAIL = "info@akadelicesllc.com";

const INTEREST_LABELS = {
  rent: "Renting a home",
  lease: "Leasing a home (group home provider)",
  partner: "Investing / partnership",
};

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const form = document.querySelector("#contact-form");
const status = form.querySelector(".form-status");
const backToTop = document.querySelector(".back-to-top");

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// Header shadow and back-to-top button once the page scrolls
const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
  backToTop.classList.toggle("visible", window.scrollY > 600);
};
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Mobile menu
const setNavOpen = (open) => {
  navToggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
};

navToggle.addEventListener("click", () => {
  setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNavOpen(false);
});

// CTA buttons preselect the matching option in the contact form
document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    const option = form.querySelector(
      `input[name="interest"][value="${link.dataset.interest}"]`
    );
    if (option) option.checked = true;
  });
});

// Contact form: validate, then open the visitor's email app with the details
const showStatus = (message, type) => {
  status.textContent = message;
  status.className = `form-status ${type}`;
};

const validate = () => {
  let firstInvalid = null;
  ["name", "email"].forEach((name) => {
    const input = form.elements[name];
    const valid = input.value.trim() !== "" && input.checkValidity();
    input.setAttribute("aria-invalid", String(!valid));
    if (!valid && !firstInvalid) firstInvalid = input;
  });
  return firstInvalid;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstInvalid = validate();
  if (firstInvalid) {
    showStatus("Please enter your name and a valid email address.", "error");
    firstInvalid.focus();
    return;
  }

  const data = new FormData(form);
  const interest = INTEREST_LABELS[data.get("interest")];
  const lines = [
    `Interest: ${interest}`,
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone") || "-"}`,
  ];
  lines.push("", data.get("message") || "");

  const subject = encodeURIComponent(`Website inquiry: ${interest}`);
  const body = encodeURIComponent(lines.join("\n"));
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  showStatus(
    "Thanks! Your email app should open with your message ready to send.",
    "success"
  );
});
