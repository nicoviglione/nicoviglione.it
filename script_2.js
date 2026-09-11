/* =========================
   DISCOGRAFIA
========================= */

const songs = [
    {
        title: "Sì, No, Boh",
        year: "2025",
        cover: "images/music/si-no-boh.png",
        page: "music/ita/boh.html"
    },
    {
        title: "Via Con Te",
        year: "2025",
        cover: "images/music/via-con-te.png",
        page: "https://open.spotify.com/"
    },
    {
        title: "The Gunman's Trail",
        year: "2026",
        cover: "images/music/gunman.jpg",
        page: "https://open.spotify.com/"
    },
    {
        title: "Jack",
        year: "2026",
        cover: "images/music/jack.jpg",
        page: "https://open.spotify.com/"
    },
    {
        title: "Like An Alien",
        year: "2026",
        cover: "images/music/alien.jpg",
        page: "https://open.spotify.com/"
    },
    {
        title: "When You Get To December",
        year: "2026",
        cover: "images/music/december.jpg",
        page: "https://open.spotify.com/"
    }
];

let currentSong = 0;

const cover = document.getElementById("cover");
const coverLink = document.getElementById("cover-link");
const title = document.getElementById("song-title");
const year = document.getElementById("song-year");
const listen = document.getElementById("listen-button");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

function showSong(index) {
    const song = songs[index];

    if (!song) {
        return;
    }

    if (cover) {
        cover.src = song.cover;
        cover.alt = `Copertina di ${song.title}`;
    }

    if (coverLink) {
        coverLink.href = song.page;
    }

    if (title) {
        title.textContent = song.title;
    }

    if (year) {
        year.textContent = song.year;
    }

    if (listen) {
        listen.href = song.page;
    }
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        currentSong = (currentSong + 1) % songs.length;
        showSong(currentSong);
    });
}

if (previousButton) {
    previousButton.addEventListener("click", () => {
        currentSong = (currentSong - 1 + songs.length) % songs.length;
        showSong(currentSong);
    });
}

showSong(currentSong);


/* =========================
   GALLERY CAROUSEL
========================= */

const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryPrevious = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");
const galleryCurrent = document.getElementById("gallery-current");
const galleryTotal = document.getElementById("gallery-total");

let currentGallery = 0;

if (galleryTotal) {
    galleryTotal.textContent = String(gallerySlides.length).padStart(2, "0");
}

function showGallery(index) {
    gallerySlides.forEach((slide) => {
        slide.classList.remove("active");
    });

    if (gallerySlides[index]) {
        gallerySlides[index].classList.add("active");
    }

    if (galleryCurrent) {
        galleryCurrent.textContent = String(index + 1).padStart(2, "0");
    }
}

if (galleryNext) {
    galleryNext.addEventListener("click", () => {
        currentGallery = (currentGallery + 1) % gallerySlides.length;
        showGallery(currentGallery);
    });
}

if (galleryPrevious) {
    galleryPrevious.addEventListener("click", () => {
        currentGallery =
            (currentGallery - 1 + gallerySlides.length) % gallerySlides.length;

        showGallery(currentGallery);
    });
}

showGallery(currentGallery);


/* =========================
   SCROLL FADE
========================= */

const fadeSections = document.querySelectorAll(".fade-section");

const fadeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.08
    }
);

fadeSections.forEach((section) => {
    fadeObserver.observe(section);
});


/* =========================
   HEADER + HERO FADE
========================= */

const header = document.querySelector("header");
const hero = document.querySelector(".hero-fade");
let scrollFrame = null;

function updateHeaderAndHero() {
    const scrollY = window.scrollY;

    if (header) {
        header.style.opacity = Math.max(
            0,
            Math.min(1, 1 - scrollY / 85)
        );
    }

    if (hero) {
        const heroTop = hero.getBoundingClientRect().top;

        hero.style.opacity = Math.max(
            0,
            Math.min(1, (heroTop + 360) / 440)
        );
    }

    scrollFrame = null;
}

function requestScrollUpdate() {
    if (scrollFrame !== null) {
        return;
    }

    scrollFrame = requestAnimationFrame(updateHeaderAndHero);
}

window.addEventListener("scroll", requestScrollUpdate, {
    passive: true
});

updateHeaderAndHero();


/* =========================
   TASTIERA
========================= */

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && nextButton) {
        nextButton.click();
    }

    if (event.key === "ArrowLeft" && previousButton) {
        previousButton.click();
    }
});
