'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const arr = [
      {
        user_id: 1,
        name: 'Ладожское озеро',
        length: 30,
        city: 'Ленинградская область',
        about: 'Огромное и прекрасное, Ладожское озеро расположено в непосредственной близи от Северной столицы, и само по себе представляет приозерный заповедник, с различными представителями дикой фауны, лесами, заводями, скальными берегами, но главное - вполне проходимыми, то есть проезжаемыми дорогами. Отправляясь, следует уже обладать определённой туристической сноровкой',
        check_rating: 5,
        start_point:'Сосново',
        finish_point: 'Приозерск',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        name: 'Пушкин и Павловск',
        length: 5,
        city: 'Ленинградская область',
        about: 'Эти два небольших Городка расположены всего в 10 километрах от Северной Столицы. Добраться сюда на велике можно в течение часа. Екатерининский парк и дворец - основное ради чего сюда едут все туристы. На осмотр всей территории потребуется также немного времени - около часа. Как дополнение осмотрите Александровский парк, он относительно компактный.',
        check_rating: 4,
        start_point:'Пушкин',
        finish_point: 'Павловск',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 1,
        name: 'Выборг',
        length: 3,
        city: 'Ленинградская область',
        about: ' Сам Выборг и его окрестности таят в себе интереснейшие места с видами на живописный Выборгский залив. Город небольшой и настолько шикарный, что при попадании в него, кажется, что здесь достопримечательностей, больше, чем жителей, которых насчитывают всего 80 тысяч.',
        check_rating: 4,
        start_point:'Монрепо',
        finish_point: 'Выборг, Горная улица 10',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 4,
        name: 'Фонтанка',
        length: 10,
        city: 'Санкт-Петербург',
        about: 'С велополосой в центре Петербурга, вдоль набережной реки Фонтанки, готовы мириться не все водители — многие паркуют свои машины прямо на велодорожке, игнорируя запрещающие знаки. Это, пожалуй, единственный минус данного маршрута. Однако дорожка, начинающаяся у набережной Кутузова, становится всё длиннее — её дополнил участок от Гороховой улицы до Старо-Петергофского проспекта, а длина всего маршрута таким образом составила 11,2 километра.',
        start_point:'Фонтанка 10',
        finish_point: 'Фонтанка 30',
        check_rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Routes', arr, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Routes', null, {});
  }
};
