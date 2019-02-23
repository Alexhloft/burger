btns = document.querySelectorAll('.reviews__btn');
popup = document.querySelector('.popup');
closeBtn = document.querySelector('.popup__close-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', e => {
        e.preventDefault();
        
        revHover = e.target.closest('.reviews__hover');
        revContent = revHover.querySelector('.reviews__content').innerHTML;
        popupContent = document.querySelector('.popup__content');
        popupContent.innerHTML = revContent;

        popup.classList.add('popup--active');
        document.body.classList.add('body-active-menu');

        contentChildren = popupContent.children;
        for ( i = 0; i < contentChildren.length; i++) {
            contentChildren[i].style.color = '#2f3234';
        }
    });
});

popup.addEventListener("click", e => {
    if (e.target == popup || e.target == closeBtn) {
        e.preventDefault();
        
        popup.classList.remove('popup--active');
        document.body.classList.remove('body-active-menu');
    }
});
