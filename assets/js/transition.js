(function () {

    const pageTitle = document.querySelector("body h1");

    if (!pageTitle) {
        return;
    }


    /*
     * Landing-page link fade
     */

    const links = document.querySelectorAll(".landing-nav a");

    if (links.length > 0) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }

            });

        }, {
            threshold: 0.5
        });

        links.forEach(function (link) {

            observer.observe(link);

            link.addEventListener("click", function (event) {

                event.preventDefault();

                const destination = link.href;

                /*
                 * Scroll the actual page back to the top.
                 */
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                /*
                 * Wait for the scroll, then fade
                 * the current page title out.
                 */
                setTimeout(function () {

                    pageTitle.classList.add("page-title-out");

                    /*
                     * Navigate after the title has faded.
                     */
                    setTimeout(function () {
                        window.location.href = destination;
                    }, 600);

                }, 700);

            });

        });

    }


    /*
     * Fade the page title in when a page loads.
     */

    pageTitle.classList.add("page-title-in");

    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            pageTitle.classList.add("page-title-visible");
        });
    });

})();