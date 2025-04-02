    /**
 * Mobile Menu Management Script
 */

    const page = document.querySelector("body");
    const menu = document.querySelector("#menu");
    const background = document.querySelector("#background-menu");
    const optionMenuList = document.querySelectorAll(".option-menu");
    const languageButtons = document.querySelectorAll("button[name='lang']");
    
    //Disable the page's scrollbar when the user opens the menu
    menu.addEventListener("change", (event) => {    
        if (event.target.checked) {
            page.classList.add("overflow-hidden");
        }
        else {
            page.classList.remove("overflow-hidden");
        }
    });
    
    //Close the menu when the user hits the opaque black background at the bottom of the menu
    background.addEventListener("click", (event) => {
        if (menu.checked) {
            //Close the menu manually
            menu.checked = false;
            page.classList.remove("overflow-hidden");
        }
    });
    
    //Close the menu when the user hits one of the options menu
    optionMenuList.forEach(optionMenu => {
        optionMenu.addEventListener("click", () => {
            if (menu.checked) {
                //Close the menu manually
                menu.checked = false;
                page.classList.remove("overflow-hidden");
            }
        }); 
    });

    languageButtons.forEach(button => {
        button.addEventListener("click", () => {
            var lang = button.getAttribute('data-lang');
            lang = lang == "es" ? "en" : "es";
            localStorage.setItem("lang", lang);
            window.location.assign(`/${lang}`)
        })
    });