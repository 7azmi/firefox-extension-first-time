// This script runs in the context of example.com

console.log("My background changer extension script started!");

// Initial background change on page load
document.body.style.backgroundColor = 'lightblue';
console.log("Initial background color set to lightblue.");

// Listen for messages from other parts of the extension (e.g., popup or background)
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received in content script:", request);

    // Check if the message is the one we expect from the popup
    if (request.action === "changeBackground" && request.color) {
        document.body.style.backgroundColor = request.color;
        console.log(`Background color changed to ${request.color} by popup message.`);

        // Optionally, send a response back (though not needed for this example)
        // sendResponse({ status: "done" });
    }
});