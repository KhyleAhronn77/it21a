// =======================================================
// JS A: LIVE DATE AND TIME DISPLAY (For index.html)
// =======================================================

function updateClock() {
    const now = new Date();
    // Formats the date and time based on the user's locale
    const formattedTime = now.toLocaleDateString() + " " + now.toLocaleTimeString();

    const clockElement = document.getElementById('live-time');
    
    // Check if the element exists (this prevents errors on non-Home pages)
    if (clockElement) {
        clockElement.textContent = "Current Server Time: " + formattedTime;
    }
}

// Update the clock immediately and then every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Call it once to prevent a one-second delay on page load
updateClock();


// =======================================================
// JS B: MASCOT STATUS TOGGLE (Shared for all Year Level Pages)
// =======================================================

// Ensures the DOM elements are loaded before attempting to select them
document.addEventListener('DOMContentLoaded', () => {
    const statusButton = document.getElementById('statusButton');
    const mascotStatusElement = document.getElementById('mascotStatus');

    // Only proceed if the mascot elements exist on the current page
    if (statusButton && mascotStatusElement) {
        
        const pageTitle = document.title;
        let restingMessage, readyMessage, readyClass;

        // --- Logic to assign page-specific messages and classes based on page title ---
        if (pageTitle.includes('Black Panthers')) {
            restingMessage = "The Black Panther is currently observing from the shadows.";
            readyMessage = "The Black Panther is READY to pounce! ⚡️";
            readyClass = 'panther-ready';
        } else if (pageTitle.includes('Yellow Kitty')) {
            restingMessage = "The Yellow Kitty is currently napping on the warmest server rack.";
            readyMessage = "The Yellow Kitty is READY to code! 😻";
            readyClass = 'kitty-ready';
        } else if (pageTitle.includes('Green Ninja')) {
            restingMessage = "The Green Ninja is currently deployed on a secure mission.";
            readyMessage = "The Green Ninja is ACTIVATED and debugging! ⚔️";
            readyClass = 'ninja-ready';
        } else if (pageTitle.includes('Blue Dragon')) {
            restingMessage = "The Blue Dragon is currently meditating in the mountains.";
            // FIX: Changed generic "Mascot" to "The Blue Dragon" for consistency
            readyMessage = "The Blue Dragon is READY for ACTION! 🔥"; 
            readyClass = 'dragon-ready';
        } else {
            // Default fallback
            restingMessage = "Mascot status unknown.";
            readyMessage = "Mascot status confirmed.";
            readyClass = 'mascot-ready';
        }

        // -----------------------------------------------------------

        statusButton.addEventListener('click', function() {
            // Check if the ready class is currently applied
            const isReady = mascotStatusElement.classList.contains(readyClass);

            if (isReady) {
                // Switch back to "Resting"
                mascotStatusElement.textContent = restingMessage;
                mascotStatusElement.classList.remove(readyClass);
                statusButton.textContent = "Check Status";

            } else {
                // Switch to "Ready"
                mascotStatusElement.textContent = readyMessage;
                mascotStatusElement.classList.add(readyClass); // Adds the custom CSS styling
                statusButton.textContent = "Return to Rest";
            }
        });
    }
});