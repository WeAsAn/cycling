const React = require('react');
const Layout = require('./Layout');

module.exports = function RoutesCard({ routeid, comments, user }) {
  return (
    <Layout user={user}>
      <h1>
        Вело Маршрут
      </h1>
      <div className="card-group">
        <div className="card">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{routeid.name}</h5>
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
              {(routeid.check_rating) / routeid.counter }
            </p>
            <p className="card-text">
              Автор маршрута:
              {' '}
              {routeid.User.login}
            </p>
            <p className="card-text">
              {' '}
              Описание:
              {' '}
              {routeid.about}
            </p>
            <a href="/routes/" className="btn btn-outline-dark">Назад</a>
            {user && user ? 
            (<a href={`/routes/comment/${routeid.id}`} className="btn btn-outline-dark">Оставить комментарий</a>)
            : (<></>)}
          </div>
        </div>
      </div>

      <div className="card-group">
        <div className="card">
          {
          comments.map((el) => (
            <div className="card-body" key={el.id}>
              <h5 className="card-title">
                Автор комментария:
                {' '}
                {el.User.login}
              </h5>
              <p className="card-text">
                Рейтинг:
                {' '}
                {el.rating}
              </p>
              <p className="card-text">
                {' '}
                Комментарий:
                {' '}
                {el.comment}
              </p>
              <br />
                  <button className="btn btn-outline-dark" name='deleteComment'>Удалить</button>
            </div>
          ))
}
        </div>
      </div>
    </Layout>
  );
};
