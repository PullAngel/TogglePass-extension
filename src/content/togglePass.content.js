// TogglePass – Content Script
// Phase: controlled toggle via messaging

const TOGGLE_ATTR = "data-togglepass-original-type";

console.log("[TogglePass] Content script initialized");

function getPasswordInputs() {
  return Array.from(document.querySelectorAll("input")).filter(input => {
    return (
      input.type === "password" &&
      !input.disabled &&
      !input.readOnly
    );
  });
}

function revealPasswords() {
  const inputs = getPasswordInputs();

  inputs.forEach(input => {
    if (!input.hasAttribute(TOGGLE_ATTR)) {
      input.setAttribute(TOGGLE_ATTR, input.type);
      input.type = "text";
    }
  });

  console.log(`[TogglePass] Revealed ${inputs.length} password(s)`);
}

function hidePasswords() {
  const toggled = document.querySelectorAll(`input[${TOGGLE_ATTR}]`);

  toggled.forEach(input => {
    const originalType = input.getAttribute(TOGGLE_ATTR);
    input.type = originalType;
    input.removeAttribute(TOGGLE_ATTR);
  });

  console.log(`[TogglePass] Restored ${toggled.length} password(s)`);
}

// Listen to background messages
chrome.runtime.onMessage.addListener((message) => {
  if (message.type !== "TOGGLE_PASS") return;

  if (message.enabled) {
    revealPasswords();
  } else {
    hidePasswords();
  }
});
