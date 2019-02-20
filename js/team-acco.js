const items = document.querySelectorAll('.team-acco__item');
// console.log(items);

for (item of items) {
    item.addEventListener('click', e => {
        e.preventDefault();

        let curItem = e.currentTarget;
        let content = curItem.querySelector('.team-acco__content');
        let text = content.querySelector('.team-acco__text-content');
        let textTitle = content.querySelector('.team-acco__title');
        let img = content.querySelector('.team-acco__img');
        const bp = 768;
        let width = parseInt(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'));

        let heightText = text.clientHeight;
        let heightTitle = textTitle.clientHeight;
        let imgHeight = img.clientHeight;
        let mbTitle = parseInt(window.getComputedStyle(textTitle).getPropertyValue('margin-bottom'));
        let imgMb = parseInt(window.getComputedStyle(document.querySelector('.team-acco__pic')).getPropertyValue('margin-bottom'));
        
        // console.log(heightText);
        // console.log(heightTitle);
        // console.log(imgHeight);
        // console.log(mbTitle);

        let contentHeight = heightText+heightTitle+mbTitle;
        // console.log(contentHeight);

        if (curItem.classList.contains('active')) {
            curItem.classList.remove('active');
            content.style.height = 0;
        } else {
            Array.from(items).forEach(elem => {
                elem.classList.remove('active');
                elem.querySelector('.team-acco__content').style.height = 0;
            });

            curItem.classList.add('active');

            // console.log(width < bp);

            if (width <= bp) {
                content.style.height = `${imgHeight+imgMb+contentHeight}px`;
                // console.log(content.style.height+' 1true');
            } else if (contentHeight < imgHeight) {
                    content.style.height = `${imgHeight}px`;
                    // console.log(content.style.height+' 2true');
                } else {
                    content.style.height = `${contentHeight}px`;
                    // console.log(content.style.height+' false');
            }
        }

    })
}