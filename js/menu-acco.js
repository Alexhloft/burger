let menuAcco = () => {

    let calcWidth = () => {
        let windowWidth = window.innerWidth;
        let links = document.querySelectorAll('.menu-acco__trigger');
        let link = document.querySelector('.menu-acco__trigger');
        let linksWidth = parseFloat(getComputedStyle(link).width);

        let reqWidth = windowWidth - linksWidth * links.length;
        
        return reqWidth > 550 ? 550 : reqWidth;
    };

    let menuLink = document.querySelectorAll('.menu-acco__trigger');

    menuLink.forEach(function(personName) {
        personName.addEventListener('click', function(e) {
            e.preventDefault();
            let activePerson = document.querySelector('.menu-acco__item.active');

            if (activePerson) {
                let menuAccordeonDetails = activePerson.querySelector('.menu-acco__content');
                menuAccordeonDetails.style.width = '0px';
                activePerson.classList.remove('active');
            }

            if (!activePerson || activePerson.querySelector('.menu-acco__trigger') != e.target) {
                let currentPerson = e.target.closest('.menu-acco__item');
                currentPerson.classList.add('active');
                let currentPersonInfo = currentPerson.querySelector('.menu-acco__content');
                currentPersonInfo.style.width = calcWidth() + 'px';
            }
        })
    })
}

menuAcco();
