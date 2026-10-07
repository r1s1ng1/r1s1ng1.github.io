const correctPIN = "30035";

const pinGate = document.getElementById("pinGate");
const pinInput = document.getElementById("pinInput");
const pinButton = document.getElementById("pinButton");
const pinError = document.getElementById("pinError");

const protectedContent = document.getElementById("protectedContent");
const pageHeading = document.querySelector(".page-heading");

function unlock() {

    if (pinInput.value === correctPIN) {

        pinError.textContent = "";

        pageHeading.classList.add("fade-out");

        setTimeout(function () {

            pinGate.style.display = "none";

            protectedContent.classList.add("visible");

            pageHeading.classList.remove("fade-out");

        }, 600);

    } else {

        pinError.textContent = "incorrect pin";

        pinInput.value = "";

    }

}

pinButton.addEventListener("click", unlock);

pinInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        unlock();
    }

});