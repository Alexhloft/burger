const form = document.querySelector('.form__elem');
const btn = form.querySelector('.btn');
const popupOrder = document.querySelector('.order-popup');

btn.addEventListener('click', e => {
    e.preventDefault();

    formData = new FormData();
    formData.append("name", form.elements.name.value);
    formData.append("phone", form.elements.phone.value);
    formData.append("comment", form.elements.comment.value);
    formData.append("to", "Alexhoxlov@ya.ru");

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "https://webdev-api.loftschool.com/sendmail"); // https://webdev-api.loftschool.com/sendmail/fail https://webdev-api.loftschool.com/sendmail
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(formData);

    console.log(xhr);
    console.log(formData);
    
    xhr.addEventListener('load', () => {
        popupOrder.classList.add('order-popup--active');
        document.body.classList.add('body-active-menu');
        popupContent = popupOrder.querySelector('.order-popup__content');

        if (xhr.status < 400) {
            popupContent.innerText = 'Сообщение отправлено';
        } else {
            popupContent.innerText = 'Сообщение не отправлено';
        }
    })

    popupOrder.addEventListener("click", e => {
        closeBtn = popupOrder.querySelector('.order-popup__btn');
        if (e.target == popupOrder || e.target == closeBtn) {
            e.preventDefault();
            
            popupOrder.classList.remove('order-popup--active');
            document.body.classList.remove('body-active-menu');
        }
    });

})


