(function () {

    const pageHeading = document.querySelector(".page-heading");

    if (!pageHeading) {
        return;
    }


    /*
     * Page heading fade-in
     */

    function showTitle() {

        pageHeading.classList.remove("fade-out");

    }


    /*
     * Page heading fade-out
     */

    function hideTitle() {

        pageHeading.classList.add("fade-out");

    }


    /*
     * Landing-page elements
     */

    const elements = document.querySelectorAll(".landing-nav a, .landing-nav p");

    if (elements.length > 0) {

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


        elements.forEach(function (element) {

            observer.observe(element);


            /*
             * Navigation links
             */

            if (element.tagName === "A") {

                element.addEventListener("click", function (event) {

                    event.preventDefault();

                    const destination = element.href;


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

            }

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