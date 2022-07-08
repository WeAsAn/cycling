const profileRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { Route } = require('../../db/models');
const Profile = require('../../views/Profile');

profileRouter.get('/', async (req, res) => {
  const { user } = req.session;
  // console.log(user);
  const routes = await Route.findAll({
    raw: true,
    where: {
      user_id: user.id,
    },
  });
  // console.log(routes);
  const profile = React.createElement(Profile, { user, routes });
  const html = ReactDOMServer.renderToStaticMarkup(profile);
  res.write('<!doctype html>');
  res.end(html);
});

module.exports = profileRouter;
