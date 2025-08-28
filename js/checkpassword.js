// very confidential stuff please dont snoop around here :P
const checkpoints = {
    station1: "apple-mango-QF",
    checkpoint2: "banana-pear-ZX",
    checkpoint3: "cherry-lemon-KJ",
    checkpoint4: "grape-peach-MN",
    checkpoint5: "melon-apple-RT",
    checkpoint6: "peach-banana-LD",
    checkpoint7: "orange-mango-WQ",
    checkpoint8: "lemon-cherry-PV",
    checkpoint9: "mango-pear-KT",
    checkpoint10: "apple-grape-HS",
    checkpoint11: "coral-bike-LS",
    checkpoint12: "mine-river-TP"
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
