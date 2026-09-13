(function () {

    const pageHeading = document.querySelector(".page-heading");


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

        });

    }


    /*
     * View Transitions
     *
     * Browsers that support this get the page transition.
     * Other browsers simply use normal navigation.
     */

    if ("startViewTransition" in document) {

        document.addEventListener("click", function (event) {

            const link = event.target.closest("a");

            if (!link) {
                return;
            }

            if (link.target && link.target !== "_self") {
                return;
            }

            if (link.origin !== window.location.origin) {
                return;
            }

            if (link.hasAttribute("download")) {
                return;
            }

            if (link.href === window.location.href) {
                return;
            }


            /*
             * Let the browser handle the navigation,
             * but wrap it in a View Transition.
             */

            event.preventDefault();

            const destination = link.href;

            document.startViewTransition(function () {

                window.location.href = destination;

            });

        });

    }


    /*
     * Page heading appearance
     */

    if (pageHeading) {

        pageHeading.classList.remove("fade-out");

    }

})();