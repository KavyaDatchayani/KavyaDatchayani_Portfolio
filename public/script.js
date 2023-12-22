// navbar response
function toggle() {
    var a = document.getElementById("mynavbar");
    if (a.className === "navbar") {
        a.className += " response";

    } else {
        a.className = "navbar";
    }
}



// typing loop
var typed = new Typed(".text", {
    strings: ["Full Stack Web Developer", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

