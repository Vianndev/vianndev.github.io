const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");
const startingAnim = document.querySelectorAll(".startingAnim");
let typeWriterIteration = 0 ;
const typeWriterElem = document.querySelector(".hello");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active")
}) );
gsap.set(".startingAnim", {opacity: 0});

function typeWriterAnimFinished (){
    gsap.set(".startingAnim", {opacity: 1});
    var tl = gsap.timeline();
    tl.from("header", {y: -100, opacity:0 ,duration: 1.3, ease: 'power1'} );
    tl.from(".second-child, .bonjour", {x: -100, opacity:0 , duration: 1.3,ease:'power1'}, "<");
    tl.from(".cool, .tete", {x: 100,opacity: 0, duration: 1.3 , ease:'power1'},"<");
   
};

Promise.all(typeWriterElem.getAnimations().map((animation) => animation.finished)).then(
    () => typeWriterAnimFinished()
);