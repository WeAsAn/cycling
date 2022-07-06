const home_router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
// const Home = require('../../../../WEEK_1/DAY_4/214/views/Home');


home_router.get('/' (req, res) => {
  const main = React.createElement(Home, { title: 'VeloProgulka.Net'});
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!doctype html>');
  res.end(html);
})

