const CommentRouter = require('express').Router();
const { logPlugin } = require('@babel/preset-env/lib/debug');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Comment } = require('../../db/models');

CommentRouter.get('/:id', (req, res) => {
  const { user } = req.session;
  console.log(user);
  const routeId = req.params;
  console.log(routeId);
  const com = React.createElement(Comment, { user, routeId });
  const html = ReactDOMServer.renderToStaticMarkup(com);
  res.write('<!doctype html>');
  res.end(html);
});

CommentRouter.delete('/:id', async (req, res) => {
  try {
    console.log(req.params);
    const { id: user_id } = req.params;
    await Comment.destroy({ where: { id: user_id } });
    res.status(204).json({ status: 'ok' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorText: 'not today' });
  }
});

module.exports = CommentRouter;
