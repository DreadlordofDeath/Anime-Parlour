const nav = document.querySelector("nav")
const closeBurger = document.getElementById("closeBurger");
const burger = document.getElementById("burger");
let navIsOpen = false;


if (window.innerWidth < 1000) {
        document.body.style.overflowX="hidden"
        nav.style.transform = "translate(100%)"
        burger.style.display = "block"
    
}
else {
    nav.classList.add("nav")
}
function openNav() {
    navIsOpen = true;
    nav.style.display="block"
    closeBurger.style.display = "block"
    nav.style.transform = "translate(0)"
    burger.style.display = "none"

}

function closeNav() {
    navIsOpen = false
    nav.style.transform = "translate(100%)"
    closeBurger.style.display = "none"
    burger.style.display = "block"
    nav.style.display="none"
}

