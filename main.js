window.onload = function() {

};


const hamburger_button = document.querySelector('.hamburger');
const hamburger_menu = document.querySelector('.hamburger-menu-container');

const button_icon_hamburger = '<span class="material-symbols-outlined">menu</span>';
const button_icon_cross = '<span class="material-symbols-outlined">close</span>';

hamburger_button.addEventListener('click', function() {
    hamburger_button.classList.toggle('is-active');
    hamburger_menu.classList.toggle('is-active');

    if (hamburger_button.innerHTML == button_icon_hamburger) {
        hamburger_button.innerHTML = button_icon_cross;
    } else {
        hamburger_button.innerHTML = button_icon_hamburger;
    }


});


const storedTheme = localStorage.getItem("theme");

function ChangeTheme() {

}

const theme_button = document.querySelector('.theme-button');

const button_icon_light = '<span class="material-symbols-outlined">light_mode</span>'
const button_icon_dark = '<span class="material-symbols-outlined">dark_mode</span>'

theme_button.addEventListener('click', function() {
    if (theme_button.innerHTML == button_icon_dark) {
        theme_button.innerHTML = button_icon_light;
    } else {
        theme_button.innerHTML = button_icon_dark;
    }
});