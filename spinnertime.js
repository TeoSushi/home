document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("spinner-container").style.display = "block";
    document.getElementById("transparent-overlay").style.display = "block";
    document.body.classList.add("transparent-effect");

    setTimeout(function () {
        document.body.classList.remove("transparent-effect");

        setTimeout(function () {
            document.getElementById("spinner-container").style.display = "none";
            document.getElementById("transparent-overlay").style.display = "none";
        }, 100);
    }, 1000);
});
