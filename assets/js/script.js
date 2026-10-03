/* =========================================================
   PRO DARK DEVELOPER PORTFOLIO
   Main JavaScript
   Author: Inshal Akber
   ========================================================= */


/* =========================================================
   01. PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("pageLoader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 700);

    }

});


/* =========================================================
   02. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       03. TYPING ANIMATION
    ===================================================== */

    const typingText = document.getElementById("typingText");

    const typingWords = [
        "Web Developer",
        "Frontend Developer",
        "PHP Developer",
        "Laravel Developer",
        "Full Stack Developer"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;


    function typeEffect() {

        const currentWord = typingWords[wordIndex];


        if (!isDeleting) {

            typingText.textContent =
                currentWord.substring(0, characterIndex + 1);

            characterIndex++;


            if (characterIndex === currentWord.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            typingText.textContent =
                currentWord.substring(0, characterIndex - 1);

            characterIndex--;


            if (characterIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (wordIndex >= typingWords.length) {
                    wordIndex = 0;
                }

            }

        }


        const typingSpeed =
            isDeleting ? 50 : 90;


        setTimeout(
            typeEffect,
            typingSpeed
        );

    }


    if (typingText) {
        setTimeout(
            typeEffect,
            1000
        );
    }


    /* =====================================================
       04. NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.getElementById("mainNavbar");


    function navbarScroll() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        navbarScroll
    );


    navbarScroll();


    /* =====================================================
       05. SCROLL PROGRESS BAR
    ===================================================== */

    const scrollProgress =
        document.getElementById("scrollProgress");


    function updateScrollProgress() {

        if (!scrollProgress) {
            return;
        }


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;


        if (documentHeight <= 0) {
            return;
        }


        const scrollPercentage =
            (scrollTop / documentHeight) * 100;


        scrollProgress.style.width =
            scrollPercentage + "%";

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress
    );


    updateScrollProgress();


    /* =====================================================
       06. ACTIVE NAVIGATION LINK
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNav() {

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;


            const sectionHeight =
                section.offsetHeight;


            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(link => {

                    link.classList.remove(
                        "active"
                    );

                });


                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${sectionId}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

                }

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    /* =====================================================
       07. MOBILE NAVBAR AUTO CLOSE
    ===================================================== */

    const navbarMenu =
        document.getElementById(
            "navbarMenu"
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            function () {

                if (
                    window.innerWidth < 992 &&
                    navbarMenu &&
                    navbarMenu.classList.contains("show")
                ) {

                    const toggleButton =
                        document.querySelector(
                            ".navbar-toggler"
                        );


                    if (toggleButton) {

                        toggleButton.click();

                    }

                }

            }
        );

    });


    /* =====================================================
       08. NUMBER COUNTER ANIMATION
    ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-count]"
        );


    let countersStarted = false;


    function startCounters() {

        if (countersStarted) {
            return;
        }


        const statsSection =
            document.querySelector(
                ".hero-stats"
            );


        if (!statsSection) {
            return;
        }


        const sectionPosition =
            statsSection.getBoundingClientRect().top;


        const screenPosition =
            window.innerHeight * 0.85;


        if (sectionPosition < screenPosition) {

            countersStarted = true;


            counters.forEach(counter => {

                const target =
                    Number(
                        counter.getAttribute(
                            "data-count"
                        )
                    );


                let current = 0;

                const duration = 1500;

                const intervalTime = 20;


                const increment =
                    target /
                    (duration / intervalTime);


                const suffix =
                    counter.textContent.includes("%")
                        ? "%"
                        : "+";


                const counterInterval =
                    setInterval(() => {

                        current += increment;


                        if (current >= target) {

                            current = target;

                            clearInterval(
                                counterInterval
                            );

                        }


                        counter.textContent =
                            Math.floor(current) +
                            suffix;

                    }, intervalTime);

            });

        }

    }


    window.addEventListener(
        "scroll",
        startCounters
    );


    startCounters();


    /* =====================================================
       09. SKILL BAR ANIMATION
    ===================================================== */

    const skillBars =
        document.querySelectorAll(
            ".skill-bar span"
        );


    let skillsAnimated = false;


    function animateSkills() {

        if (skillsAnimated) {
            return;
        }


        const skillsSection =
            document.getElementById(
                "skills"
            );


        if (!skillsSection) {
            return;
        }


        const sectionPosition =
            skillsSection.getBoundingClientRect().top;


        const screenPosition =
            window.innerHeight * 0.85;


        if (sectionPosition < screenPosition) {

            skillsAnimated = true;


            skillBars.forEach(bar => {

                const width =
                    bar.style.width;


                bar.style.width = "0";


                setTimeout(() => {

                    bar.style.width =
                        width;

                }, 150);

            });

        }

    }


    window.addEventListener(
        "scroll",
        animateSkills
    );


    animateSkills();


    /* =====================================================
       10. PROJECT FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );


    const projectCards =
        document.querySelectorAll(
            ".project-card-wrapper"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add(
                    "active"
                );


                const filter =
                    this.getAttribute(
                        "data-filter"
                    );


                projectCards.forEach(card => {

                    const category =
                        card.getAttribute(
                            "data-category"
                        );


                    const categoryList =
                        category
                            ? category.split(" ")
                            : [];


                    if (
                        filter === "all" ||
                        categoryList.includes(
                            filter
                        )
                    ) {

                        card.classList.remove(
                            "hide-project"
                        );

                    } else {

                        card.classList.add(
                            "hide-project"
                        );

                    }

                });

            }
        );

    });


    /* =====================================================
       11. PROJECT MODAL ELEMENTS
    ===================================================== */

    const projectModal =
        document.getElementById(
            "projectModal"
        );


    const modalOverlay =
        document.getElementById(
            "modalOverlay"
        );


    const modalClose =
        document.getElementById(
            "modalClose"
        );


    const modalImage =
        document.getElementById(
            "modalProjectImage"
        );


    const modalVideo =
        document.getElementById(
            "modalProjectVideo"
        );


    const modalImageContainer =
        document.querySelector(
            ".modal-image"
        );


    let modalYouTubeIframe = null;


    const modalNumber =
        document.getElementById(
            "modalProjectNumber"
        );


    const modalTitle =
        document.getElementById(
            "modalProjectTitle"
        );


    const modalDescription =
        document.getElementById(
            "modalProjectDescription"
        );


    const modalTech =
        document.getElementById(
            "modalProjectTech"
        );


    const modalGithub =
        document.getElementById(
            "modalGithub"
        );


    const modalLive =
        document.getElementById(
            "modalLive"
        );


    /* =====================================================
       12. YOUTUBE URL DETECTOR
    ===================================================== */

    function isYouTubeVideo(url) {

        if (!url) {
            return false;
        }


        return (
            url.includes("youtube.com") ||
            url.includes("youtu.be")
        );

    }


    /* =====================================================
       13. CONVERT YOUTUBE URL TO EMBED URL
    ===================================================== */

    function getYouTubeEmbedUrl(url) {

        if (!url) {
            return "";
        }


        let videoId = "";


        if (url.includes("youtu.be/")) {

            videoId =
                url
                    .split("youtu.be/")[1]
                    .split("?")[0]
                    .split("&")[0];

        }


        else if (url.includes("watch?v=")) {

            videoId =
                url
                    .split("watch?v=")[1]
                    .split("&")[0];

        }


        else if (url.includes("/embed/")) {

            videoId =
                url
                    .split("/embed/")[1]
                    .split("?")[0]
                    .split("&")[0];

        }


        if (!videoId) {
            return "";
        }


        return (
            `https://www.youtube.com/embed/${videoId}?rel=0`
        );

    }


    /* =====================================================
       14. CREATE YOUTUBE IFRAME
    ===================================================== */

    function createYouTubeIframe(videoUrl) {

        if (!modalImageContainer) {
            return;
        }


        if (modalYouTubeIframe) {

            modalYouTubeIframe.remove();

            modalYouTubeIframe = null;

        }


        const embedUrl =
            getYouTubeEmbedUrl(
                videoUrl
            );


        if (!embedUrl) {
            return;
        }


        modalYouTubeIframe =
            document.createElement(
                "iframe"
            );


        modalYouTubeIframe.src =
            embedUrl;


        modalYouTubeIframe.title =
            "YouTube video player";


        modalYouTubeIframe.setAttribute(
            "frameborder",
            "0"
        );


        modalYouTubeIframe.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        );


        modalYouTubeIframe.setAttribute(
            "allowfullscreen",
            ""
        );


        modalYouTubeIframe.style.width =
            "100%";


        modalYouTubeIframe.style.height =
            "100%";


        modalYouTubeIframe.style.border =
            "0";


        modalYouTubeIframe.style.display =
            "block";


        modalYouTubeIframe.style.background =
            "#000";


        modalYouTubeIframe.style.objectFit =
            "contain";


        modalImageContainer.appendChild(
            modalYouTubeIframe
        );

    }


    /* =====================================================
       15. REMOVE YOUTUBE IFRAME
    ===================================================== */

    function removeYouTubeIframe() {

        if (modalYouTubeIframe) {

            modalYouTubeIframe.src =
                "about:blank";


            modalYouTubeIframe.remove();

            modalYouTubeIframe = null;

        }

    }


    /* =====================================================
       16. OPEN PROJECT MODAL
    ===================================================== */

    const projectButtons =
        document.querySelectorAll(
            "[data-project]"
        );


    projectButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const projectId =
                    this.getAttribute(
                        "data-project"
                    );


                const project =
                    projects[projectId];


                if (!project) {
                    return;
                }


                /* =========================================
                   RESET PREVIOUS MEDIA
                ========================================= */

                removeYouTubeIframe();


                if (modalVideo) {

                    modalVideo.pause();

                    modalVideo.removeAttribute(
                        "src"
                    );

                    modalVideo.load();

                    modalVideo.style.display =
                        "none";

                }


                if (modalImage) {

                    modalImage.style.display =
                        "none";

                }


                /* =========================================
                   VIDEO / YOUTUBE / IMAGE LOGIC
                ========================================= */

                if (
                    project.isVideo &&
                    project.video
                ) {


                    /* =====================================
                       YOUTUBE VIDEO
                    ===================================== */

                    if (
                        isYouTubeVideo(
                            project.video
                        )
                    ) {

                        createYouTubeIframe(
                            project.video
                        );

                    }


                    /* =====================================
                       LOCAL MP4 VIDEO
                    ===================================== */

                    else if (modalVideo) {

                        modalVideo.style.display =
                            "block";


                        modalVideo.src =
                            project.video;


                        if (project.image) {

                            modalVideo.poster =
                                project.image;

                        }


                        modalVideo.muted =
                            true;


                        modalVideo.load();


                        modalVideo.play().catch(() => {

                            /*
                               Browser autoplay blocked.
                               User can press play manually.
                            */

                        });

                    }

                }


                /* =========================================
                   IMAGE PROJECT
                ========================================= */

                else {

                    if (modalImage) {

                        modalImage.style.display =
                            "block";


                        modalImage.src =
                            project.image;


                        modalImage.alt =
                            project.title;

                    }

                }


                /* =========================================
                   PROJECT NUMBER
                ========================================= */

                if (modalNumber) {

                    modalNumber.textContent =
                        project.number;

                }


                /* =========================================
                   PROJECT TITLE
                ========================================= */

                if (modalTitle) {

                    modalTitle.textContent =
                        project.title;

                }


                /* =========================================
                   PROJECT DESCRIPTION
                ========================================= */

                if (modalDescription) {

                    modalDescription.textContent =
                        project.description;

                }


                /* =========================================
                   TECHNOLOGIES
                ========================================= */

                if (modalTech) {

                    modalTech.innerHTML = "";


                    project.technologies.forEach(
                        technology => {

                            const span =
                                document.createElement(
                                    "span"
                                );


                            span.textContent =
                                technology;


                            modalTech.appendChild(
                                span
                            );

                        }
                    );

                }


                /* =========================================
                   GITHUB
                ========================================= */

                if (modalGithub) {

                    modalGithub.href =
                        project.github;

                }


                /* =========================================
                   LIVE DEMO
                ========================================= */

                if (modalLive) {

                    modalLive.href =
                        project.live;

                }


                /* =========================================
                   OPEN MODAL
                ========================================= */

                if (projectModal) {

                    projectModal.classList.add(
                        "active"
                    );

                }


                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    /* =====================================================
       17. CLOSE PROJECT MODAL
    ===================================================== */

    function closeProjectModal() {

        if (projectModal) {

            projectModal.classList.remove(
                "active"
            );

        }


        document.body.style.overflow =
            "";


        /* Stop YouTube */

        removeYouTubeIframe();


        /* Stop local video */

        if (modalVideo) {

            modalVideo.pause();

            modalVideo.currentTime = 0;

            modalVideo.removeAttribute(
                "src"
            );

            modalVideo.load();

            modalVideo.style.display =
                "none";

        }


        /* Hide image */

        if (modalImage) {

            modalImage.style.display =
                "none";

        }

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProjectModal
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeProjectModal
        );

    }


    /* =====================================================
       18. ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                projectModal &&
                projectModal.classList.contains(
                    "active"
                )
            ) {

                closeProjectModal();

            }

        }
    );


    /* =====================================================
       19. CONTACT FORM VALIDATION
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const subject =
                    document.getElementById(
                        "subject"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                if (
                    name === "" ||
                    email === "" ||
                    subject === "" ||
                    message === ""
                ) {

                    showFormMessage(
                        "Please fill in all fields.",
                        "error"
                    );

                    return;

                }


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(email)
                ) {

                    showFormMessage(
                        "Please enter a valid email address.",
                        "error"
                    );

                    return;

                }


                showFormMessage(
                    "Message validated successfully! We will connect this form to the backend next.",
                    "success"
                );


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       20. FORM MESSAGE
    ===================================================== */

    function showFormMessage(
        message,
        type
    ) {

        const oldMessage =
            document.querySelector(
                ".form-message"
            );


        if (oldMessage) {
            oldMessage.remove();
        }


        const messageBox =
            document.createElement(
                "div"
            );


        messageBox.className =
            "form-message";


        messageBox.textContent =
            message;


        messageBox.style.marginTop =
            "15px";


        messageBox.style.padding =
            "12px 15px";


        messageBox.style.borderRadius =
            "7px";


        messageBox.style.fontSize =
            "12px";


        messageBox.style.fontFamily =
            '"JetBrains Mono", monospace';


        if (type === "success") {

            messageBox.style.color =
                "#86efac";


            messageBox.style.background =
                "rgba(34, 197, 94, 0.08)";


            messageBox.style.border =
                "1px solid rgba(34, 197, 94, 0.2)";

        } else {

            messageBox.style.color =
                "#fca5a5";


            messageBox.style.background =
                "rgba(239, 68, 68, 0.08)";


            messageBox.style.border =
                "1px solid rgba(239, 68, 68, 0.2)";

        }


        contactForm.appendChild(
            messageBox
        );


        setTimeout(() => {

            if (messageBox) {
                messageBox.remove();
            }

        }, 5000);

    }


    /* =====================================================
       21. BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    function handleBackToTop() {

        if (!backToTop) {
            return;
        }


        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        handleBackToTop
    );


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =====================================================
       22. REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".project-card-wrapper, .service-card, .skill-category, .highlight-item, .terminal-window"
        );


    revealElements.forEach(element => {

        element.style.opacity =
            "0";


        element.style.transform =
            "translateY(25px)";


        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    function revealOnScroll() {

        revealElements.forEach(element => {

            const elementTop =
                element.getBoundingClientRect()
                    .top;


            const screenPosition =
                window.innerHeight - 80;


            if (
                elementTop < screenPosition
            ) {

                element.style.opacity =
                    "1";


                element.style.transform =
                    "translateY(0)";

            }

        });

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    revealOnScroll();


    /* =====================================================
       23. MOUSE GLOW EFFECT
    ===================================================== */

    const mouseGlow =
        document.createElement(
            "div"
        );


    mouseGlow.className =
        "mouse-glow";


    mouseGlow.style.position =
        "fixed";


    mouseGlow.style.width =
        "180px";


    mouseGlow.style.height =
        "180px";


    mouseGlow.style.borderRadius =
        "50%";


    mouseGlow.style.pointerEvents =
        "none";


    mouseGlow.style.zIndex =
        "999";


    mouseGlow.style.background =
        "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)";


    mouseGlow.style.transform =
        "translate(-50%, -50%)";


    mouseGlow.style.left =
        "-200px";


    mouseGlow.style.top =
        "-200px";


    mouseGlow.style.transition =
        "left 0.12s ease-out, top 0.12s ease-out";


    document.body.appendChild(
        mouseGlow
    );


    document.addEventListener(
        "mousemove",
        function (event) {

            mouseGlow.style.left =
                event.clientX + "px";


            mouseGlow.style.top =
                event.clientY + "px";

        }
    );


    /* =====================================================
       24. PROJECT CARD TILT EFFECT
    ===================================================== */

    const projectCardsForTilt =
        document.querySelectorAll(
            ".project-card"
        );


    projectCardsForTilt.forEach(card => {

        card.addEventListener(
            "mousemove",
            function (event) {

                if (window.innerWidth < 992) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 2;


                card.style.transform =
                    `translateY(-8px)
                     perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       25. CURRENT YEAR
    ===================================================== */

    const currentYear =
        new Date().getFullYear();


    const footerYear =
        document.querySelector(
            ".footer-bottom span"
        );


    if (footerYear) {

        footerYear.textContent =
            `© ${currentYear} Inshal Akber. All rights reserved.`;

    }


});