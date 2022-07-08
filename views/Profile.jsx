const React = require('react');

const Layout = require('./Layout');

module.exports = function Profile({ user, routes }) {
  return (
    <Layout user={user}>
      <div className="container">
        <h1>Моя страница</h1>
        <div>
          <h3>
            Имя/логин:
            {user.login}

          </h3>
          <h3>
            Эл.почта:
            {user.email}
          </h3>
          <div>
            <h3>Мои маршруты: </h3>
            <ul>
              {routes.map((route) => <li><a href={`/route/${route.id}`}>{route.name}</a></li>)}
            </ul>
          </div>
          <h1 />
          <h3><a href="/route/new">Добавить маршрут</a></h3>
        </div>
      </div>
    </Layout>
  );
};
