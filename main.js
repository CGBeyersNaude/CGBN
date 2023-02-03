window.onload = function() {
    ChangeTheme();
};


const hamburger_button = document.querySelector('.hamburger');
const hamburger_menu = document.querySelector('.hamburger-menu-container');
const hamburger_container_container = document.querySelector('.hamburger-menu-container-container');
const button_icon_hamburger = '<span class="material-symbols-outlined">menu</span>';
const button_icon_cross = '<span class="material-symbols-outlined">close</span>';

hamburger_button.addEventListener('click', function() {
    hamburger_button.classList.toggle('is-active');
    hamburger_menu.classList.toggle('is-active');
    hamburger_container_container.classList.toggle('is-active');

    if (hamburger_button.innerHTML == button_icon_hamburger) {
        hamburger_button.innerHTML = button_icon_cross;
    } else {
        hamburger_button.innerHTML = button_icon_hamburger;
    }


});


const storedTheme = localStorage.getItem('theme');
const theme_button = document.querySelector('.theme-button');
const button_icon_light = '<span class="material-symbols-outlined">light_mode</span>'
const button_icon_dark = '<span class="material-symbols-outlined">dark_mode</span>'

theme_button.addEventListener('click', function() {
    let theme = 'light';
    if (theme_button.innerHTML == button_icon_dark) {
        theme_button.innerHTML = button_icon_light;
        theme = 'light';
    } else {
        theme_button.innerHTML = button_icon_dark;
        theme = 'dark';
    }

    localStorage.setItem('theme', theme);
    ChangeTheme();
});

function ChangeTheme() {
    if (localStorage.getItem('theme') == 'dark') {
        document.body.classList.add('dark-mode');
        theme_button.innerHTML = button_icon_dark;
    } else {
        document.body.classList.remove('dark-mode');
        theme_button.innerHTML = button_icon_light;
    }
}