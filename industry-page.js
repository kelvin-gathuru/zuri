var btnControl = document.getElementById("nav-item");
var btns = btnControl.querySelector(".hide-display");

for (let i = 0; i < btns.length; i++) {
    btns[1].addEventListener("click", function() {
        var current = document.querySelector(".active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    });
}

console.log("hello");