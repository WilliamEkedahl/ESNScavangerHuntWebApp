// very confidential stuff please dont snoop around here :P
const checkpoints = {
    station1: "apple-mango-QF",
    station2: "banana-pear-ZX",
    station3: "cherry-lemon-KJ",
    station4: "grape-peach-MN",
    station5: "melon-apple-RT",
    station6: "peach-banana-LD",
    station7: "orange-mango-WQ",
    station8: "lemon-cherry-PV",
    station9: "mango-pear-KT",
    station10: "apple-grape-HS",
    station11: "coral-bike-LS",
    station12: "mine-river-TP",
    TestStation1: "test1",
    TestStation2: "test2",
    TestStation3: "test3",
    TestStation4: "test4",
    TestStation5: "test5",
    TestStation6: "test6",
    TestStation7: "test7",
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
