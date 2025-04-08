/**
 * Scrollbar Behavior Script
 */

document.querySelectorAll("button[name='navigation']").forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.getAttribute("data-target-id"))
        const targetElement = document.querySelector(`#${button.getAttribute("data-target-id")}`);

        scrollTo({
            top: targetElement.getBoundingClientRect().top + (window.pageYOffset - document.getElementById("navBar").offsetHeight),
            behavior: "smooth"
        })
        ;
    })
});