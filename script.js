document.addEventListener("DOMContentLoaded", () => {

  

    const counter = document.getElementById("counter");
    const progressBar = document.querySelector(".progress .bar");

    if (counter) {

        let currentValue = 0;
        const targetValue = 32;
        const duration = 1800;
        const startTime = performance.now();

        function animateCounter(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

          
            const easedProgress =
                1 - Math.pow(1 - progress, 3);

            currentValue = Math.floor(
                easedProgress * targetValue
            );

            counter.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            } else {
                counter.textContent = targetValue;
            }
        }

        requestAnimationFrame(animateCounter);
    }


    

    if (progressBar) {

        progressBar.style.width = "0%";

        setTimeout(() => {
            progressBar.style.width = "32%";
        }, 300);

        progressBar.style.transition =
            "width 1.8s cubic-bezier(0.22, 1, 0.36, 1)";
    }



    const cartButton = document.querySelector(".cart");

    if (cartButton) {

        cartButton.addEventListener("click", () => {

            cartButton.textContent = "ADDED ✓";

            cartButton.style.background = "#ffffff";
            cartButton.style.color = "#000000";

            setTimeout(() => {

                cartButton.textContent = "CART";

                cartButton.style.background = "#c8ff00";
                cartButton.style.color = "#000000";

            }, 1500);

        });
    }




    const cartIcon = document.querySelector(
        '.svgs a[href="#"] img'
    );

    if (cartIcon) {

        cartIcon.parentElement.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                alert("Your cart is currently empty.");
            }
        );
    }



    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const linkName =
                link.textContent.trim();

            console.log(
                `${linkName} clicked`
            );

        });

    });


    const heroOverlay =
        document.querySelector(".hero .overlay");

    if (heroOverlay) {

        heroOverlay.style.opacity = "0";
        heroOverlay.style.transform =
            "translateY(30px)";

        setTimeout(() => {

            heroOverlay.style.transition =
                "opacity 1s ease, transform 1s ease";

            heroOverlay.style.opacity = "1";
            heroOverlay.style.transform =
                "translateY(0)";

        }, 200);
    }


 

    const motionCards =
        document.querySelectorAll(
            ".motion .left-card, .motion .counter-box, .motion .info-box"
        );

    motionCards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform =
            "translateY(35px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            card.style.opacity = "1";
            card.style.transform =
                "translateY(0)";

        }, 500 + index * 200);

    });



    const footerLinks =
        document.querySelectorAll(".footer-right a");

    footerLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const linkText =
                link.textContent.trim();

            alert(
                `${linkText} section will be available soon.`
            );

        });

    });


    const motionImage =
        document.querySelector(".left-card img");

    if (motionImage) {

        motionImage.addEventListener(
            "mouseenter",
            () => {

                motionImage.style.transform =
                    "scale(1.05)";
            }
        );

        motionImage.addEventListener(
            "mouseleave",
            () => {

                motionImage.style.transform =
                    "scale(1)";
            }
        );

    }


    const revealElements =
        document.querySelectorAll(
            ".motion h2, .motion .cards, .footer"
        );

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        revealObserver.observe(element);

    });



    const style = document.createElement("style");

    style.textContent = `
        .show {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(style);



    console.log(
        "STRIDE Performance Systems initialized successfully."
    );

});