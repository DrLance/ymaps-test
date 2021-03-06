﻿ymaps.ready(init);

function init() {
    // Стоимость за километр.
    var DELIVERY_TARIFF = 20,
    // Минимальная стоимость.
        MINIMUM_COST = 500,
        myMap = new ymaps.Map('map', {
            center: [55.753994, 37.622093],
            zoom: 9,
            controls: []
        }),
    // Создадим панель маршрутизации.
        routePanelControl = new ymaps.control.RoutePanel({
            options: {
                // Добавим заголовок панели.
                showHeader: true,
                title: 'Расчёт доставки'
            }
        }),
        zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 145,
                    right: 10
                }
            }
        });
    // Пользователь сможет построить только автомобильный маршрут.
    routePanelControl.routePanel.options.set({
        types: {auto: true}
    });

    // Если вы хотите задать неизменяемую точку "откуда", раскомментируйте код ниже.
    /*routePanelControl.routePanel.state.set({
        fromEnabled: false,
        from: 'Москва, Льва Толстого 16'
     });*/

    myMap.controls.add(routePanelControl).add(zoomControl);

    // Получим ссылку на маршрут.
    routePanelControl.routePanel.getRouteAsync().then(function (route) {
  
        
        // Повесим обработчик на событие построения маршрута.
        route.model.events.add('requestsuccess', function () {
//////////////////////////////////////////////////////////////////////
            var my_waypoints  = route.properties.get('waypoints');
            document.getElementById('pointA').innerHTML = my_waypoints[0]['name'];
            document.getElementById('map_coordsA').innerHTML = my_waypoints[0]['coordinates'][1]+','+my_waypoints[0]['coordinates'][0];
            document.getElementById('pointB').innerHTML = my_waypoints[1]['name'];
            document.getElementById('map_coordsB').innerHTML = my_waypoints[1]['coordinates'][1]+','+my_waypoints[1]['coordinates'][0];
//////////////////////////////////////////////////////////////////////
            
            var activeRoute = route.getActiveRoute();
            if (activeRoute) {
                // Получим протяженность маршрута.
                var length = route.getActiveRoute().properties.get("distance"),
                // Вычислим стоимость доставки.
                    price = calculate(Math.round(length.value / 1000)),
                // Создадим макет содержимого балуна маршрута.
                    balloonContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<span>Расстояние: ' + length.text + '.</span><br/>' +
                        '<span style="font-weight: bold; font-style: italic">Стоимость доставки: ' + price + ' р.</span>');
                document.getElementById('Route_length').innerHTML = length.text;
                // Зададим этот макет для содержимого балуна.
                route.options.set('routeBalloonContentLayout', balloonContentLayout);
                // Откроем балун.
                activeRoute.balloon.open();
            }
        });

    });
    // Функция, вычисляющая стоимость доставки.
    function calculate(routeLength) {
        return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
    }
}