function showPage() {
    document.body.classList.remove("fade-out");
    document.body.classList.add("loaded");
}

window.addEventListener("pageshow", function() {
    showPage();
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