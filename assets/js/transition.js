(function () {

    const pageHeading = document.querySelector(".page-heading");

    if (!pageHeading) {
        return;
    }


    /*
     * Page heading fade-in
     */

    if (pageHeading) {

    pageHeading.style.opacity = "0";

    requestAnimationFrame(function () {

        requestAnimationFrame(function () {

            pageHeading.style.opacity = "1";

        });

    });

}


    /*
     * Page heading fade-out
     */

    function hideTitle() {

        pageHeading.classList.add("fade-out");

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
                 * Fade the current page heading out.
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
     * Browser Back transition
     */

    let goingBack = false;

    if (!links.length) {

        history.pushState({
            transitionPage: true
        }, "", window.location.href);


        window.addEventListener("popstate", function () {

            if (goingBack) {
                return;
            }

            /*
             * Temporarily restore the current page
             * so the transition can play first.
             */

            history.pushState({
                transitionPage: true
            }, "", window.location.href);


            hideTitle();

            goingBack = true;


            setTimeout(function () {

                history.back();

            }, 600);

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