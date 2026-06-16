# CLAUDE.md

## Project Overview

TogglePass is a Chrome/Brave Manifest V3 extension.

Current MVP functionality:

* Detect password inputs (`input[type="password"]`)
* Toggle visibility between password and text
* Operate only on the active tab
* Use a popup UI with a button
* Restore original password state when toggled again
* No persistence between browser sessions

The extension currently works and is used in real browsing sessions.

---

## Project Goals

Primary goal:

Build a professional-quality browser extension that can be used as a portfolio project for QA, testing, browser extension development and cybersecurity-adjacent work.

Secondary goals:

* Learn Git and GitHub workflows
* Learn Agile-style development
* Maintain clean architecture
* Keep implementation simple and maintainable

---

## Architecture Constraints

Do not replace the existing architecture unless strictly necessary.

Current architecture:

Popup UI
→ sends message
→ content script receives message
→ content script performs toggle

The content script owns password state.

Avoid introducing unnecessary complexity.

---

## MVP Requirements

Implemented:

* Toggle password visibility
* Reversible behavior
* Active tab only
* Chrome / Brave support
* Manifest V3

Not yet implemented:

* Keyboard shortcut
* Improved popup UI
* Dynamic icons
* Chrome Web Store packaging
* Automated tests

---

## Explicit Non-Goals

Do not implement:

* Password storage
* Credential capture
* Logging sensitive values
* Network transmission of passwords
* Remote synchronization

The project is a visibility-toggle utility only.

---

## Coding Style

Prefer:

* Small functions
* Readable code
* Minimal dependencies
* Native browser APIs
* Manifest V3 compatibility

Avoid:

* Large frameworks
* Excessive abstraction
* Build systems unless justified

---

## Development Priority Order

1. Stability
2. Simplicity
3. UX
4. New features

Never sacrifice stability for feature count.
