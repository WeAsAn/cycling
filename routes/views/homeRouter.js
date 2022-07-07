const homeRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Layout = require('../../views/Layout');



homeRouter.get('/', (req, res) => {
  const { user } = req.session;
  console.log(user);
  const main = React.createElement(Layout, { user, title: '🚲VeloProgulka.Net🚲'});
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!doctype html>');
  res.end(html);
})


module.exports = homeRouter;
