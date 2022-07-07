const React = require('react');

const Layout = require('./Layout');

module.exports = function Profile({ user, routes }) {
  return (
    <Layout>
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
            {routes.map((route) => <a href={`/routes/${route.id}`}>{route.name}</a>)}
          </div>
          <h1 />
          <h3><button>Добавить маршрут</button></h3>
        </div>
      </div>
    </Layout>
    
  );
};
