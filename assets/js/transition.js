(function () {

    const pageTitle = document.querySelector("body h1");

    if (!pageTitle) {
        return;
    }


    /*
     * Page title fade-in
     */

    function showTitle() {
        pageTitle.classList.remove("page-title-out");
        pageTitle.classList.add("page-title-in");

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                pageTitle.classList.add("page-title-visible");
            });
        });
    }


    /*
     * Page title fade-out
     */

    function hideTitle() {
        pageTitle.classList.remove("page-title-visible");
        pageTitle.classList.add("page-title-out");
    }


    /*
     * Landing-page links
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
                 * Fade the current page title out.
                 */

                setTimeout(function () {

                    hideTitle();

                    setTimeout(function () {
                        window.location.href = destination;
                    }, 600);

                }, 700);

            });

        });

    }


    /*
     * Initial title appearance
     */

    showTitle();


    /*
     * Browser Back / Forward
     */

    window.addEventListener("pageshow", function () {

        showTitle();

    });

})();