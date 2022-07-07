//       center: [59.938879, 30.315212],
function init() {
  const multiRoute = new ymaps.multiRouter.MultiRoute(
    {
      referencePoints: [],
      params: {
        editorMidPointsType: 'via',
        routingMode: 'bicycle',
        editorDrawOver: true,
      },
    },
    {
      boundsAutoApply: true,
    },
  );
  multiRoute.model.setParams({
    routingMode: 'bicycle',
  });

  const buttonEditor = new ymaps.control.Button({
    data: { content: 'Режим редактирования' },
  });
  const zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: 'small',
    },
  });
  let typeSelector = new ymaps.control.TypeSelector({
    data: { content: 'Вид' },
  });

  buttonEditor.events.add('select', () => {
    multiRoute.editor.start({
      addWayPoints: true,
      removeWayPoints: true,
      addMidPoints: true,
    });
  });

  buttonEditor.events.add('deselect', () => {
    // Выключение режима редактирования.
    multiRoute.editor.stop();
  });

  const myMap = new ymaps.Map(
    'map',
    {
      center: [59.938879, 30.315212],
      zoom: 12,
      controls: [buttonEditor, 'searchControl', 'fullscreenControl'],
    },
    {
      buttonMaxWidth: 300,
    },
  );
  multiRoute.model.events.add('requestsuccess', () => {
    const activeRoute = multiRoute.getActiveRoute();
    console.log(`Длина: ${(activeRoute.properties.get('distance').value / 1000).toFixed(1)}`);
    if (activeRoute.properties.get('blocked')) {
      console.log('На маршруте имеются участки с перекрытыми дорогами.');
    }
  });
  multiRoute.options.set({
    // Цвет метки начальной точки.
    wayPointStartIconFillColor: 'red',
    // Цвет метки конечной точки.
    wayPointFinishIconFillColor: 'blue',
    // Внешний вид линий (для всех маршрутов).
    // Чтобы задать внешний вид линий активного маршрута,
  });
  myMap.controls.add(typeSelector).add(zoomControl);
  myMap.geoObjects.add(multiRoute);
  document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(111);
    // let cords = multiRoute.properties._data.waypoints
    //   .map((obj) => obj.coordinates)
    //   .map((arr) => arr.reverse().join(','))
    //   .join('~');
    const cords = multiRoute.properties._data.waypoints.map((obj) => obj.coordinates);
    const mapURL = `https://yandex.ru/maps/?rtext=${cords}&rtt=bc`;
    console.log(mapURL);
    console.log(cords);
  });
  // myMap.behaviors.disable('drag'); убрать движение
  // document.location.hash = '&ll=' + centerURL.toString() + '&z=' + zoomURL.toString();
}
ymaps.ready(init);
