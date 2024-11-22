function helloButton() {
    let mainContent = document.getElementById("main-content");

    let helloGuiButton = document.getElementById("main-button1");
    let wavingGuy1Selected = true;

    helloGuiButton.addEventListener('click', (e) => {
        if (!wavingGuy1Selected) {
            document.documentElement.style.setProperty('--bgimage', "url('resources/images/guy-waving.png')");
            wavingGuy1Selected = true;
        } else if (wavingGuy1Selected) {
            document.documentElement.style.setProperty('--bgimage', "url('resources/images/dancing-waving-guy.jpg')");
            wavingGuy1Selected = false;
        }

        mainContent.classList.add("playfadein-class");
        setTimeout((e) => {
            mainContent.classList.remove("playfadein-class");
        }, 750);
    });
}

export function init() {
    helloButton();
}