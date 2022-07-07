const React = require('react');
const Layout = require('./Layout');

module.exports = function RoutesCard({ routeid }) {
  return (
    <Layout>
      <h1>
       Вело Маршрут
      </h1>
      <div className="card-group">
        <div className="card">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
          <h5 class="card-title">{routeid.name}</h5>
            <p className="card-text">
              Локация:
              {' '}
              {routeid.city}
            </p>
            <p className="card-text">
              Длина маршрута:
              {' '}
              {routeid.length}
              {' '}
              км
              {' '}
            </p>
            <p className="card-text">
              Рейтинг:
              {' '}
              {routeid.final_rating}
            </p>
            <p className="card-text">
              Автор маршрута:
              {' '}
              {routeid.User.login}
            </p>
            <p className="card-text"> Описание: {routeid.about}</p>
            <a className="card-text" href={`/routes/`}><small className="text-muted">Назад</small></a>
          </div>
        </div>
      </div>
    </Layout>
  );
};