const header = $('.header');
const mockup = $('#mockup');
let mockupPosition = 100;
mockup.length ? mockupPosition = mockup.position().top + mockup.height() : mockupPosition = 100;

$(window).on('load', function () {
    $(window).scrollTop(0);
    setTimeout(function () {
        header.addClass('reset-delay');
        $('.navigation').addClass('reset-delay');
        $('.logo').addClass('reset-delay');
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= mockupPosition) {
                header.addClass('scrolled');
                sideHeadings.length && sideHeadings.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
                sideHeadings.length && sideHeadings.removeClass('scrolled');
            }
        });

        !mockup.length ? header.addClass('bright') : header.removeClass('brith');

    }, 2000);
    AOS.init();

    $(window).resize(function () {
        AOS.refresh();
    });

    header.addClass('loaded');

    ymaps.ready(initMap);


});


$(window).resize(function () {
    AOS.refresh;
});

function initMap() {
    let map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 11
    });

    ymaps.behavior.storage.add('mybehavior', MyBehavior);
    map.behaviors.enable('mybehavior');
}

function MyBehavior() {
    this.options = new ymaps.option.Manager(); // Менеджер опций
    this.events = new ymaps.event.Manager(); // Менеджер событий
}

// Определим методы
MyBehavior.prototype = {
    constructor: MyBehavior,
    // Когда поведение будет включено, добавится событие щелчка на карту
    enable: function () {
        /* this._parent - родителем для поведения является менеджер поведений;
           this._parent.getMap() - получаем ссылку на карту;
           this._parent.getMap().events.add - добавляем слушатель события на карту. */
        this._parent.getMap().events.add('click', this._onClick, this);
    },
    disable: function () {
        this._parent.getMap().events.remove('click', this._onClick, this);
    },
    // Устанавливает родителя для исходного поведения
    setParent: function (parent) {
        this._parent = parent;
    },
    // Получает родителя
    getParent: function () {
        return this._parent;
    },
    // При щелчке на карте происходит ее центрирование по месту клика
    _onClick: function (e) {
        const coords = e.get('coords');
        this._parent.getMap().setCenter(coords);
    }
};