/**
 * Scrollbar Behavior Script
 */

document.querySelectorAll(".button-home").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
    })
});

document.querySelectorAll(".button-portfolio").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
    })
});

document.querySelectorAll(".button-contact").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    })
});