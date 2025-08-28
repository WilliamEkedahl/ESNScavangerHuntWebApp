// very confidential stuff please dont snoop around here :P
const checkpoint1 = "apple-mango-QF";
const checkpoint2 = "banana-pear-ZX";
const checkpoint3 = "cherry-lemon-KJ";
const checkpoint4 = "grape-peach-MN";
const checkpoint5 = "melon-apple-RT";
const checkpoint6 = "peach-banana-LD";
const checkpoint7 = "orange-mango-WQ";
const checkpoint8 = "lemon-cherry-PV";
const checkpoint9 = "mango-pear-KT";
const checkpoint10 = "apple-grape-HS";
const checkpoint11 = "coral-bike-LS";
const checkpoint12 = "mine-river-TP";

// passwords stored in an array
const checkpoints = [
    checkpoint1, checkpoint2, checkpoint3, checkpoint4, checkpoint5,
    checkpoint6, checkpoint7, checkpoint8, checkpoint9, checkpoint10, checkpoint11, checkpoint12
];

// logic to check password matches or not
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("passwordForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const input = document.getElementById("SecretCodeInput").value.trim();
        const confirmation = document.getElementById("StatusMessage");

        if (checkpoints.includes(input)) {
            localStorage.setItem("usedCheckpoint", input);
            confirmation.style.color = "green";
            confirmation.textContent = "Success! Redirecting...";
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

