# TogglePass – Requirements (MVP)

## 1. Functional Requirements

### FR-01: Toggle password visibility
The extension shall allow the user to toggle the visibility of password fields between masked and plain text.

**Acceptance Criteria**
- Only input elements originally defined as `type="password"` are affected.
- Inputs already of type `text` are not modified.
- The toggle operation is reversible.

---

### FR-02: Toolbar control
The extension shall provide a toolbar button to enable or disable the functionality.

**Acceptance Criteria**
- Button reflects current state (on/off).
- Clicking the button toggles the state.

---

### FR-03: Keyboard shortcut
The extension shall support a keyboard shortcut to toggle the state.

**Default shortcut**
- Ctrl + Alt + S

**Acceptance Criteria**
- Shortcut toggles functionality without opening UI.
- No visual feedback is required when triggered via shortcut.

---

### FR-04: Active tab scope
The extension shall operate only on the currently active browser tab.

**Acceptance Criteria**
- No background or inactive tabs are affected.

---

### FR-05: Session-based behavior
The extension state shall reset when:
- The page is reloaded.
- The browser is closed.

**Acceptance Criteria**
- No persistent configuration is stored.

---

### FR-06: Guaranteed reversibility
The extension shall restore all modified inputs to their original state when disabled.

**Acceptance Criteria**
- No residual DOM changes remain after disabling.

---

### FR-07: Non-invasive operation
The extension shall not interfere with:
- Form submission
- Validation logic
- Event listeners

---

## 2. Non-Functional Requirements

### NFR-01: Security
- No sensitive data is stored.
- No network requests are made.

### NFR-02: Performance
- DOM operations must be minimal.
- No noticeable UI lag.

### NFR-03: Compatibility
- Compatible with Chromium-based browsers (Chrome, Brave).

---

## 3. Constraints

- No backend services.
- No filesystem access.
- No persistent storage of secrets.

---

## 4. Out of Scope (MVP)

- Context menu actions.
- Custom per-field selection.
- Password management features.
- Alerting or monitoring capabilities.
- Antivirus evasion mechanisms.

---

## 5. Traceability

Each requirement will be:
- Linked to test cases.
- Verified manually during MVP phase.

