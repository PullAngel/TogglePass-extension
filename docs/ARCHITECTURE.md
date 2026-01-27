# TogglePass – Architecture Overview (MVP)

## 1. Architecture Principles

The architecture of TogglePass is designed following these principles:

- Separation of concerns
- Minimal permissions
- Explicit responsibility per component
- Testability over cleverness
- Reversible and observable behavior

The extension follows the standard Chromium extension model using Manifest V3.

---

## 2. High-Level Components

TogglePass is composed of the following components:

1. Manifest definition
2. Background service worker
3. Content script
4. User interface (popup)
5. Static assets (icons)

Each component has a clearly defined responsibility.

---

## 3. Component Responsibilities

### 3.1 manifest.json

**Purpose**
- Declares extension metadata.
- Defines permissions.
- Registers scripts and UI elements.

**Key Responsibilities**
- Enable toolbar action.
- Register keyboard shortcut.
- Declare content script injection rules.

No business logic is implemented here.

---

### 3.2 Background (Service Worker)

**Purpose**
- Central state controller for the extension.

**Responsibilities**
- Maintain on/off state for the current session.
- Handle toolbar button clicks.
- Handle keyboard shortcut commands.
- Communicate state changes to content scripts.

**Notes**
- No DOM access.
- No data persistence.
- Stateless across browser restarts.

---

### 3.3 Content Script

**Purpose**
- Interact with the web page DOM.

**Responsibilities**
- Detect password inputs based on verifiable criteria.
- Toggle input type between `password` and `text`.
- Preserve original state for guaranteed reversibility.
- Apply changes only when explicitly instructed.

**Constraints**
- Must not affect non-password inputs.
- Must not interfere with form logic or events.

---

### 3.4 Popup UI

**Purpose**
- Provide a minimal control interface for the user.

**Responsibilities**
- Display current on/off state.
- Display optional non-intrusive metrics (e.g., number of fields toggled).
- Allow manual toggle via click.

**Design Guidelines**
- Minimalist
- Dark theme (blue tones)
- Clear state indication

---

### 3.5 Assets

**Contents**
- Extension icons (multiple sizes).

**Responsibilities**
- Visual identity.
- Clear distinction between enabled / disabled states.

---

## 4. Data Flow

1. User triggers action (button or shortcut).
2. Background updates state.
3. Background sends message to active tab.
4. Content script applies or reverts DOM changes.
5. Popup reflects current state (if opened).

No data leaves the local browser context.

---

## 5. Testing Considerations

- Content script behavior can be tested via DOM inspection.
- Background logic can be tested via message simulation.
- UI behavior can be tested visually and functionally.
- Regression testing focuses on reversibility and scope isolation.

---

## 6. Future Extensibility

The architecture allows future additions without breaking MVP:

- Context menu integration.
- Field-level selection.
- Per-site configuration.
- Advanced security alerts.

These features are intentionally excluded from the MVP implementation.

