const slide = (function(option) {
    const left = document.querySelector(option.l);
    const right = document.querySelector(option.r);
    const slider = document.querySelector(option.list);
    const computed = getComputedStyle(slider); 
    let sliderWidth = parseInt(computed.width);

    window.addEventListener('resize', function() {
        currentRight = 0;
        sliderWidth = parseInt(computed.width);
        slider.style.right = currentRight;
    }, true);

    var sliderItemsCounter = slider.children.length;

    let moveSlide = function(direction) {
        direction.addEventListener('click', function(e) {
            e.preventDefault();
            let currentRight = parseInt(computed.right);

            if (currentRight < (sliderItemsCounter-1)*sliderWidth && direction == right) {
                slider.style.right = currentRight + sliderWidth + 'px';
            }

            if (currentRight > 0 && direction == left) {
                slider.style.right = currentRight - sliderWidth + 'px';
            }
        });
    }

    let addListener = function() {
        moveSlide(right);
        moveSlide(left);
    }

    return {init: addListener}
})({
    l: '.burgers__left',
    r: '.burgers__right',
    list: '.burgers__list'
})

slide.init();