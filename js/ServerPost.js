const usedPassword = localStorage.getItem("usedCheckpoint");

//sends required information to server
if (usedPassword) {


} else {
    console.log("Not authenticated. Redirecting to login page...");
    window.location.href = "index.html";
}