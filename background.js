chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "chat") {
    try {
      fetch("https://gemini-pro-api.vercel.app/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: request.message }),
      })
        .then((response) => response.json())
        .then((data) => sendResponse({ reply: data.reply }))
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.error("Error:", error);
    }

    return true;
  }
});
