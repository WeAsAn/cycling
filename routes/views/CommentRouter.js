const CommentRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Comment = require('../../views/Comment');


CommentRouter.get('/:id', (req, res) => {
    const { user } = req.session;
    console.log(user);
    const com = React.createElement(Comment, {user});
    const html = ReactDOMServer.renderToStaticMarkup(com);
    res.write('<!doctype html>');
    res.end(html);
  })
  
  
  module.exports = CommentRouter;