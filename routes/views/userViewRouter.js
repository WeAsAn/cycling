const userViewRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Registration = require('../../views/Registration');
const Login = require('../../views/Login');

userViewRouter.get('/registration', (req, res) => {
  const regform = React.createElement(Registration);
  const html = ReactDOMServer.renderToStaticMarkup(regform);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

userViewRouter.get('/login', (req, res) => {
  const login = React.createElement(Login);
  const html = ReactDOMServer.renderToStaticMarkup(login);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = userViewRouter;
