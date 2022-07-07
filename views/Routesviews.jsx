const React = require('react');
const { route } = require('../routes/views');
const Layout = require('./Layout');

module.exports = function Route({ routes }) {
  return (
    <Layout>
      { routes.map((el) => (
        <div className="card" key={el.id}>
          <div className="card-header">
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {el.name}
            </h5>
            <p className="card-text">
              Локация:
              {' '}
              {el.city}
            </p>
            <p className="card-text">
              Длина маршрута:
              {' '}
              {el.length}
              {' '}
              км
              {' '}
            </p>
            <p className="card-text">
              Рейтинг:
              {' '}
              {el.final_rating}
            </p>
            <p className="card-text">
              Автор маршрута:
              {' '}
              {el.User.login}
            </p>
            <a href={`/routes/${el.id}`} className="btn btn-outline-dark">Подробнее о маршруте</a>
            {/* <a href={`/routes/${el.id}/comment`} className="btn btn-outline-dark">Оставить комментарий</a> */}
          </div>
        </div>
      ))}
    </Layout>

  );
};

// {entries.map((entry) => (
//   <li className="entry-item pad-b-4" key={entry.id}>
//     <a href={`/entries/${entry.id}`} className="entry-title font-2 pad-b-1-4 c-white">{entry.title}</a>
//     <span className="entry-date block font-3-4 c-lt-gray">Written on {entry.createdAt.toString()}</span>
//     <p className="entry-stub">{entry.body}</p>
//   </li>
// ))}
