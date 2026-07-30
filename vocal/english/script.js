const demos = document.querySelectorAll(".demo");
const player = document.getElementById("demoPlayer");

let activeDemo = null;

demos.forEach(demo => {
    demo.addEventListener("click", function(e) {
        e.preventDefault();

        // Reset previous selection
        if (activeDemo && activeDemo !== this) {
            activeDemo.textContent =
                activeDemo.textContent.replace(" <", " >");
        }

        // If clicking the currently playing demo, stop it
        if (activeDemo === this && !player.paused) {
            player.pause();
            player.currentTime = 0;

            this.textContent =
                this.textContent.replace(" <", " >");

            activeDemo = null;
            return;
        }

        // Load and play selected demo
        player.src = "audio/" + this.dataset.audio;
        player.play();

        this.textContent =
            this.textContent.replace(" >", " <");

        activeDemo = this;
    });
});

player.addEventListener("ended", () => {
    if (activeDemo) {
        activeDemo.textContent =
            activeDemo.textContent.replace(" <", " >");

        activeDemo = null;
    }
});
