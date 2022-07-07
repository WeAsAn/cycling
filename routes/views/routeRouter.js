const routeRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Layout = require('../../views/Layout');
const Routesviews = require('../../views/Routesviews.jsx');
const { Route, User } = require('../../db/models');

routeRouter.get('/', async (req, res) => {
  // const entries = await Route.findAll({ order: [['id', 'DESC']] });
  const routes = await Route.findAll({
    raw: true,
    nest: true,
    include: [{ model: User }],
  });
//   const ng = User.login
//   console.log(routes[0].User.login);
//   console.log(user[0].login);
  const route = React.createElement(Routesviews, { routes });
  const html = ReactDOMServer.renderToStaticMarkup(route);
  res.write('<!doctype html>');
  res.end(html);
});

module.exports = routeRouter;
