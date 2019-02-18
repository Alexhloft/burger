let menu =  (function(options) {

    let button = document.querySelector('#toggle');
    let menu = document.querySelector('#overlay');
    let body = document.querySelector('body');
    let menuItem = document.querySelectorAll('.nav__item-overlay');

    let _toggleMenu = function(e) {
        button.classList.toggle('menu-btn--active');
        menu.classList.toggle('overlay--active');
        body.classList.toggle('body-active-menu');
    }

    let addListeners = function() {
        button.addEventListener('click', _toggleMenu);

        for (var i=0; i < menuItem.length; i++ ) {
            menuItem[i].addEventListener('click', _toggleMenu);
        }
    }

    return {open: addListeners};

})({
    button: '#toggle',
    menu: '#overlay'
});

menu.open();
