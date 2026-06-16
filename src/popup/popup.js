document.getElementById("toggle-btn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "POPUP_TOGGLE" });
  window.close();
});
