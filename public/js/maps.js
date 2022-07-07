const i = 0;
let cords = [];

function makeMap(id, cords) {
  const container = document.querySelector('.container-md');
  const div = document.createElement('div');
  div.setAttribute('id', `map${id}`);
  div.setAttribute('class', 'maps');
  container.append(div);
  const myMap = new ymaps.Map(`map${id}`, {
    center: [59.938879, 30.315212],
    zoom: 10,
  });
  const multiRoute = new ymaps.multiRouter.MultiRoute(
    {
      referencePoints: cords,
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
  myMap.behaviors.disable('drag');
  myMap.geoObjects.add(multiRoute);
}

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
  const typeSelector = new ymaps.control.TypeSelector({
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
    'constructor',
    {
      center: [59.938879, 30.315212],
      zoom: 12,
      controls: [buttonEditor, 'searchControl', 'fullscreenControl'],
    },
    {
      buttonMaxWidth: 300,
    },
  );
  let length = 0;
  multiRoute.model.events.add('requestsuccess', () => {
    const activeRoute = multiRoute.getActiveRoute();
    length = (activeRoute.properties.get('distance').value / 1000).toFixed();
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
  document.newmap.addEventListener('submit', (event) => {
    event.preventDefault();
    cords = multiRoute.properties._data.waypoints.map((obj) => obj.coordinates);
    // const mapURL = `https://yandex.ru/maps/?rtext=${cords
    //   .map((arr) => arr.reverse().join(','))
    //   .join('~')}&rtt=bc`;
    // console.log(mapURL);
    console.log(cords);
    const result = fetch('/new/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: event.target.name.value,
        about: event.target.info.value,
        length,
        city: event.target.city.value,
        start_poin: cords,
      }),
    });
    console.log(multiRoute.properties);
  });
  // myMap.behaviors.disable('drag'); убрать движение
  // document.location.hash = '&ll=' + centerURL.toString() + '&z=' + zoomURL.toString();
}

ymaps.ready(init);
