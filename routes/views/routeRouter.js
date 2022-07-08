const routeRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Layout = require('../../views/Layout');
const Routesviews = require('../../views/Routesviews.jsx');
const RoutesCards = require('../../views/RoutesCards');
const { Route, User, Comment } = require('../../db/models');

routeRouter.get('/', async (req, res) => {
  // const entries = await Route.findAll({ order: [['id', 'DESC']] });
  const { user } = req.session;
  const routes = await Route.findAll({
    raw: true,
    nest: true,
    order: [['final_rating', 'DESC']],
    include: [{ model: User }],
  });
  // console.log(routes);
  //   const ng = User.login
  //   console.log(routes[0].User.login);
  //   console.log(user[0].login);
  const route = React.createElement(Routesviews, { routes, user });
  const html = ReactDOMServer.renderToStaticMarkup(route);
  res.write('<!doctype html>');
  res.end(html);
});

routeRouter.get('/:id', async (req, res) => {
  console.log(req.params.id);
  const routeid = await Route.findOne({
    where: { id: req.params.id },
    raw: true,
    nest: true,
    // include: [{ model: User }, { model: Comment }],
    include: [{ model: User }],
  });
  //   console.log(routeid);
  const comments = await Comment.findAll({
    where: { roure_id: req.params.id },
    raw: true,
    nest: true,
    // include: [{ model: User }, { model: Comment }],
    include: [{ model: User }, { model: Route }],
  });
  //   console.log(comments);

  //   console.log(routeid.name);
  const { user } = req.session;
  const showRoute = React.createElement(RoutesCards, { routeid, comments, user });
  const html = ReactDOMServer.renderToStaticMarkup(showRoute);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = routeRouter;
