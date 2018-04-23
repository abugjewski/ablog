const navBar = document.querySelector(".main-nav")
const logoBar = document.querySelector(".logo")

window.addEventListener("scroll", function(){
    if (scrollY > 150) {
        navBar.style.backgroundColor = "var(--color-white)"
        navBar.style.boxShadow = "0 1px 2px var(--color-shadow)"
        if (window.matchMedia("only screen and (min-width: 768px)").matches) {
            logoBar.style.display = "initial"
        } else {
            logoBar.style.display = "none"
        }
    } else {
        navBar.style.backgroundColor = "transparent"
        navBar.style.boxShadow = ""
        logoBar.style.display = "initial"
    }
})