// TogglePass – Background (Service Worker)

const TAB_STATE = new Map();

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type !== "POPUP_TOGGLE") return;

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab || !tab.id) return;

    const isRevealed = TAB_STATE.get(tab.id) === true;
    const nextState = !isRevealed;

    TAB_STATE.set(tab.id, nextState);

    chrome.tabs.sendMessage(tab.id, {
      type: "TOGGLE_PASS",
      enabled: nextState,
    });
  });
});

chrome.tabs.onRemoved.addListener(tabId => {
  TAB_STATE.delete(tabId);
});
