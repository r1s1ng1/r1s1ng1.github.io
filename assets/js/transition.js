(function () {

    const currentTitle = document.querySelector("body h1");

    if (!currentTitle) {
        return;
    }

    /*
     * Create the transition layer.
     */
    const transition = document.createElement("div");
    transition.className = "page-transition";

    const transitionTitle = document.createElement("h1");
    transitionTitle.className = "transition-title";

    transition.appendChild(transitionTitle);
    document.body.appendChild(transition);


    /*
     * If the previous page requested a transition,
     * keep the screen black while this page finishes loading.
     */
    const entering = sessionStorage.getItem("pageTransition");

    if (entering) {
        sessionStorage.removeItem("pageTransition");

        transitionTitle.textContent = currentTitle.textContent;

        transition.classList.add("active");

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                transition.classList.remove("active");
            });
        });
    }


    /*
     * Landing-page category links.
     */
    const landingLinks = document.querySelectorAll(".landing-nav a");

    if (landingLinks.length > 0) {

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


        landingLinks.forEach(function (link) {

            observer.observe(link);


            link.addEventListener("click", function (event) {

                event.preventDefault();

                const destination = link.href;
                const title = currentTitle.textContent;

                /*
                 * Tell the next page that it should
                 * begin underneath the transition layer.
                 */
                sessionStorage.setItem("pageTransition", "enter");


                /*
                 * Scroll the ACTUAL page back to the top.
                 */
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                /*
                 * Wait for the scroll, then cover the screen.
                 */
                setTimeout(function () {

                    transitionTitle.textContent = title;
                    transition.classList.add("active");

                    /*
                     * Give the title a moment before navigation.
                     */
                    setTimeout(function () {
                        window.location.href = destination;
                    }, 700);

                }, 700);

            });

        });

    }


    /*
     * Fade the page in normally when there is
     * no transition coming from another page.
     */
    if (!entering) {

        requestAnimationFrame(function () {
            transition.classList.remove("active");
        });

    }

})();
