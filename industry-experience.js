var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", display);

function display() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.querySelectorAll(".navlink").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

var cross = document.querySelector(".cross");
var hide = document.querySelector(".hide");
cross.addEventListener("click", rotate);

// function rotate() {
//     hide.classList.remove("hide");
//     hide.classList.toggle("hidden");
//     cross.classList.toggle("rotate");
// }

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
