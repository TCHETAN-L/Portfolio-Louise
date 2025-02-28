// Permet de boucler l'animation indéfiniment

var typed = new Typed(".text", {
    strings: ["géomaticienne", "développeuse web", "cartographe"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
});

let naMenu = document.querySelector(".menu-toggle");
console.log(naMenu);

let navMenu = document.querySelector(".menu");
console.log(navMenu);

naMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
