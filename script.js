document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    this.style.display = "none";
});