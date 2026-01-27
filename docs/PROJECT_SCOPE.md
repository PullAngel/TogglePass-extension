# TogglePass – Project Scope (Session 0)

## Purpose
TogglePass is a browser extension designed to allow users to temporarily reveal or hide password fields on web pages in a controlled, reversible, and non-invasive way.

The project is intended as a professional portfolio piece, demonstrating QA-oriented thinking, clean architecture, and responsible handling of sensitive UI elements.

---

## MVP Scope (In Scope)

The Minimum Viable Product (MVP) includes:

- Toggle visibility of password fields (`type="password"`) to plain text and back.
- Operates only on the currently active browser tab.
- State is not persisted:
  - Resets on page reload.
  - Resets when the browser is closed.
- Acts only on inputs that can be verified as password fields.
- Guaranteed reversibility:
  - All modified inputs are restored to their original state.
- User interaction methods:
  - Toolbar button (on/off).
  - Keyboard shortcut (Ctrl + Alt + S).
- Minimal, non-intrusive UI.
- No storage of sensitive data.
- No network communication.

---

## Explicitly Out of Scope (MVP)

The following are intentionally excluded from the MVP:

- Persistent per-site configuration.
- Password management or storage.
- Automated detection of compromised credentials.
- Screen recording or screenshot protection.
- Context menu functionality (right-click).
- Whitelist / blacklist configuration.
- Support for browsers outside Chromium-based ones.
- Automated test frameworks beyond minimal critical checks.

These items are documented separately as future enhancements.

---

## Target Environment

- Browsers: Chrome / Brave (Chromium-based).
- Operating System: Windows (primary).
- Linux compatibility is desirable but not mandatory for MVP.

---

## Quality & Security Principles

- Principle of least privilege (minimal permissions).
- No modification of non-password inputs.
- No data persistence of sensitive information.
- Behavior must be predictable, reversible, and observable.
- Avoid patterns that may trigger antivirus false positives.

---

## Documentation & Workflow

- Agile-inspired workflow using Git and GitHub.
- Manual testing with documented test cases.
- Clear commit history.
- All decisions documented for traceability and interview discussion.

---

## Versioning

- Initial version: v1.0.0 (MVP)
- Future features will follow semantic versioning.

