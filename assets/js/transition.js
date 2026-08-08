window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function(event) {

        const url = link.href;

        if (
            !url ||
            link.target === "_blank" ||
            url.startsWith("#") ||
            url.startsWith("mailto:") ||
            url.startsWith("tel:")
        ) {
            return;
        }

        event.preventDefault();

        document.body.classList.remove("loaded");
        document.body.classList.add("fade-out");

        setTimeout(function() {
            window.location.href = url;
        }, 250);
    });
});
