/* =========================================================
   TIMMYTECH DIGITAL SOLUTIONS
   PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. WAIT FOR PAGE TO LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       GET ALL PORTFOLIO CARDS
    ===================================================== */

    const portfolioCards =
        document.querySelectorAll(".portfolio-card");


    /* =====================================================
       GET ALL CONTENT SECTIONS
    ===================================================== */

    const contentSections =
        document.querySelectorAll(".content-box");


    /* =====================================================
       PROJECT LINKS
       ===================================================== */

    const projectLinks = {

        /*
         * Admission Forecast System
         */
        forecast:
            "https://admission-forecast-system-982ull634nglkvcmihbyqx.streamlit.app/",


        /*
         * Pharma Expiry Alert System
         */
        expiry:
            "https://pharma-expiry-alert-system.netlify.app/",


        /*
         * GitHub Profile
         */
        github:
            "https://github.com/Timmytech220",


        /*
         * TimmyPay Backend / API
         *
         * NOTE:
         * This is currently the Render backend URL.
         * We can replace it later with the actual
         * frontend URL when TimmyPay frontend is hosted.
         */
        timmypay:
            "https://timmypay-api.onrender.com"

    };


    /* =====================================================
       2. AUTOMATICALLY SET PROJECT LINKS
       ===================================================== */

    /*
     * Admission Forecast
     */

    const forecastButtons =
        document.querySelectorAll(
            '[data-project="forecast"]'
        );


    forecastButtons.forEach(function (button) {

        button.setAttribute(
            "href",
            projectLinks.forecast
        );

        button.setAttribute(
            "target",
            "_blank"
        );

        button.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /*
     * Pharma Expiry Alert
     */

    const expiryButtons =
        document.querySelectorAll(
            '[data-project="expiry"]'
        );


    expiryButtons.forEach(function (button) {

        button.setAttribute(
            "href",
            projectLinks.expiry
        );

        button.setAttribute(
            "target",
            "_blank"
        );

        button.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /*
     * GitHub
     */

    const githubButtons =
        document.querySelectorAll(
            '[data-project="github"]'
        );


    githubButtons.forEach(function (button) {

        button.setAttribute(
            "href",
            projectLinks.github
        );

        button.setAttribute(
            "target",
            "_blank"
        );

        button.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /*
     * TimmyPay
     */

    const timmypayButtons =
        document.querySelectorAll(
            '[data-project="timmypay"]'
        );


    timmypayButtons.forEach(function (button) {

        button.setAttribute(
            "href",
            projectLinks.timmypay
        );

        button.setAttribute(
            "target",
            "_blank"
        );

        button.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       3. SECTION SWITCHING
       ===================================================== */

    portfolioCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const targetId =
                card.getAttribute("data-section");


            if (!targetId) {

                return;

            }


            const targetSection =
                document.getElementById(targetId);


            if (!targetSection) {

                console.warn(
                    "Section not found:",
                    targetId
                );

                return;

            }


            /* ------------------------------------------------
               CHECK IF THIS SECTION IS ALREADY OPEN
            ------------------------------------------------ */

            const alreadyOpen =
                targetSection.classList.contains("active");


            /* ------------------------------------------------
               CLOSE ALL SECTIONS
            ------------------------------------------------ */

            contentSections.forEach(function (section) {

                section.classList.remove("active");

            });


            /* ------------------------------------------------
               REMOVE ACTIVE FROM ALL CARDS
            ------------------------------------------------ */

            portfolioCards.forEach(function (item) {

                item.classList.remove("active");

            });


            /* ------------------------------------------------
               IF IT WAS ALREADY OPEN,
               KEEP EVERYTHING CLOSED
            ------------------------------------------------ */

            if (alreadyOpen) {

                return;

            }


            /* ------------------------------------------------
               OPEN THE SELECTED SECTION
            ------------------------------------------------ */

            targetSection.classList.add("active");

            card.classList.add("active");


            /* ------------------------------------------------
               SMALL DELAY BEFORE SCROLLING
            ------------------------------------------------ */

            setTimeout(function () {

                targetSection.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }, 100);

        });

    });


    /* =====================================================
       4. MOBILE MENU
       ===================================================== */

    const menuButton =
        document.querySelector(".menu-btn");


    const topNav =
        document.querySelector(".top-nav");


    if (menuButton && topNav) {

        menuButton.addEventListener(
            "click",
            function () {

                topNav.classList.toggle("open");


                /* --------------------------------------------
                   CHANGE MENU ICON
                -------------------------------------------- */

                if (
                    topNav.classList.contains("open")
                ) {

                    menuButton.innerHTML = "✕";

                } else {

                    menuButton.innerHTML = "☰";

                }

            }
        );

    }


    /* =====================================================
       5. CLOSE MOBILE MENU WHEN NAVIGATION IS CLICKED
       ===================================================== */

    const navLinks =
        document.querySelectorAll(".nav-links a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (topNav) {

                    topNav.classList.remove("open");

                }


                if (menuButton) {

                    menuButton.innerHTML = "☰";

                }

            }
        );

    });


    /* =====================================================
       6. CLOSE MOBILE MENU WHEN PORTFOLIO CARD IS CLICKED
       ===================================================== */

    portfolioCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                if (topNav) {

                    topNav.classList.remove("open");

                }


                if (menuButton) {

                    menuButton.innerHTML = "☰";

                }

            }
        );

    });


    /* =====================================================
       7. CLOSE SECTION WITH ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {

                return;

            }


            contentSections.forEach(
                function (section) {

                    section.classList.remove(
                        "active"
                    );

                }
            );


            portfolioCards.forEach(
                function (card) {

                    card.classList.remove(
                        "active"
                    );

                }
            );

        }
    );


    /* =====================================================
       8. PROJECT BUTTON FEEDBACK
       ===================================================== */

    const projectButtons =
        document.querySelectorAll(".project-btn");


    projectButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                /*
                 * Prevent the click from accidentally
                 * triggering a parent portfolio card.
                 */

                event.stopPropagation();

            }
        );

    });


    /* =====================================================
       9. CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(".current-year");


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       10. SIMPLE PAGE READY MESSAGE
       ===================================================== */

    console.log(
        "Timmytech Digital Solutions Portfolio loaded successfully."
    );


});