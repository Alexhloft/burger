ymaps.ready(init);
function init(){ 
    var map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 14,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'hint',
        balloonContent: 'balloon'
    },
    {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg'
    });

    map.geoObjects.add(placemark);
}