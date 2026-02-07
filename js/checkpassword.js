// very confidential stuff please dont snoop around here :P
const checkpoints = {
    team1: "team1-apple-K9P2L",
    team2: "team2-banana-W3R7X",
    team3: "team3-cherry-A1Z8M",
    team4: "team4-grape-L5N6Q",
    team5: "team5-melon-P9V2B",
    team6: "team6-peach-T4Y7S",
    team7: "team7-orange-H1J9K",
    team8: "team8-lemon-D5F2G",
    team9: "team9-mango-X3C8V",
    team10: "team10-pear-B7N1M",
    team11: "team11-apple-Q8W3E",
    team12: "team12-banana-R4T9Y",
    team13: "team13-cherry-U2I6O",
    team14: "team14-grape-P1S5D",
    team15: "team15-melon-F9G3H",
    team16: "team16-peach-J7K2L",
    team17: "team17-orange-Z4X8C",
    team18: "team18-lemon-V6B1N",
    team19: "team19-mango-M3Q9W",
    team20: "team20-pear-E5R7T",
    team21: "team21-apple-Y1U4I",
    team22: "team22-banana-O8P2A",
    team23: "team23-cherry-S6D3F",
    team24: "team24-grape-G9H5J",
    team25: "team25-melon-K1L7Z",
    team26: "team26-peach-X4C8V",
    team27: "team27-orange-B2N6M",
    team28: "team28-lemon-Q9W5E",
    team29: "team29-mango-R1T3Y",
    team30: "team30-pear-U7I2O",
    team31: "team31-apple-P4S8D",
    team32: "team32-banana-F6G1H",
    team33: "team33-cherry-J3K9L",
    team34: "team34-grape-Z5X2C",
    team35: "team35-melon-V8B4N",
    team36: "team36-peach-M7Q1W",
    team37: "team37-orange-E9R5T",
    team38: "team38-lemon-Y2U6I",
    team39: "team39-mango-O4P8A",
    team40: "team40-pear-S1D7F",
    team41: "team41-apple-G5H9J",
    team42: "team42-banana-K3L1Z",
    team43: "team43-cherry-X7C2V",
    team44: "team44-grape-B9N4M",
    team45: "team45-melon-Q2W8E",
    team46: "team46-peach-R6T1Y",
    team47: "team47-orange-U5I9O",
    team48: "team48-lemon-P3S7D",
    team49: "team49-mango-F8G2H",
    team50: "team50-pear-J4K6L",
    team51: "team51-apple-Z1X9C",
    team52: "team52-banana-V5B3N",
    team53: "team53-cherry-M2Q8W",
    team54: "team54-grape-E7R4T",
    team55: "team55-melon-Y9U1I",
    team56: "team56-peach-O3P5A",
    team57: "team57-orange-S8D2F",
    team58: "team58-lemon-G4H6J",
    team59: "team59-mango-K9L1Z",
    team60: "team60-pear-X5C7V",
    team61: "team61-apple-B3N9M",
    team62: "team62-banana-Q1W4E",
    team63: "team63-cherry-R8T2Y",
    team64: "team64-grape-U6I3O",
    team65: "team65-melon-P9S5D",
    team66: "team66-peach-F2G7H",
    team67: "team67-orange-J5K1L",
    team68: "team68-lemon-Z3X8C",
    team69: "team69-mango-V7B4N",
    team70: "team70-pear-M9Q2W",
    team71: "team71-apple-E1R6T",
    team72: "team72-banana-Y5U9I",
    team73: "team73-cherry-O2P4A",
    team74: "team74-grape-S7D1F",
    team75: "team75-melon-G3H8J",
    team76: "team76-peach-K6L2Z",
    team77: "team77-orange-X9C5V",
    team78: "team78-lemon-B1N7M",
    team79: "team79-mango-Q4W8E",
    team80: "team80-pear-R2T6Y",
    team81: "team81-apple-U9I3O",
    team82: "team82-banana-P5S1D",
    team83: "team83-cherry-F7G4H",
    team84: "team84-grape-J2K9L",
    team85: "team85-melon-Z6X1C",
    team86: "team86-peach-V3B8N",
    team87: "team87-orange-M5Q9W",
    team88: "team88-lemon-E2R7T",
    team89: "team89-mango-Y8U4I",
    team90: "team90-pear-O1P6A",
    team91: "team91-apple-S4D9F",
    team92: "team92-banana-G2H5J",
    team93: "team93-cherry-K8L3Z",
    team94: "team94-grape-X1C7V",
    team95: "team95-melon-B6N2M",
    team96: "team96-peach-Q9W4E",
    team97: "team97-orange-R3T8Y",
    team98: "team98-lemon-U1I5O",
    team99: "team99-mango-P7S2D",
    team100: "team100-pear-F4G9H",
    Teo: "racoon"
};

// logic to check if the password matches or not
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("passwordForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const input = document.getElementById("SecretCodeInput").value.trim();
        const confirmation = document.getElementById("StatusMessage");

        // Find the checkpoint key that matches the input password
        const checkpointName = Object.keys(checkpoints).find(key => checkpoints[key] === input);

        if (checkpointName) {
            // Store both the checkpoint name and password
            localStorage.setItem("usedCheckpointName", checkpointName);
            localStorage.setItem("usedCheckpointPassword", input);

            confirmation.style.color = "green";
            confirmation.textContent = `Success! Logged in as ${checkpointName}. Redirecting...`;

            setTimeout(() => {
                window.location.href = "scanner.html";
            }, 1000);
        } else {
            confirmation.style.color = "red";
            confirmation.textContent = "Wrong password entered";
        }

        document.getElementById("SecretCodeInput").value = "";
    });
});
