// This script runs in the context of the popup window

console.log("Popup script started!");

document.getElementById('changeColorBtn').addEventListener('click', () => {
    console.log("Popup button clicked!");

    // Send a message to the content script in the active tab
    browser.tabs.query({active: true, currentWindow: true})
        .then((tabs) => {
            if (tabs && tabs[0]) {
                const activeTabId = tabs[0].id;
                console.log(`Sending message to tab ID: ${activeTabId}`);
                browser.tabs.sendMessage(activeTabId, { action: "changeBackground", color: "lightcoral" })
                    .catch(error => {
                        // Handle potential errors, e.g., no content script injected yet
                        console.error("Error sending message:", error);
                        // Check if the error is because the content script didn't exist
                        if (error.message && error.message.includes("Could not establish connection")) {
                            console.warn("Content script may not be running on this page.");
                        }
                    });
            }
        })
        .catch(error => {
            console.error("Error querying tabs:", error);
        });
});

console.log("Popup script finished setup.");