const CommentRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Comment = require('../../views/Comment');

CommentRouter.get('/:id', (req, res) => {
  const { user } = req.session;
  console.log(user);
  const com = React.createElement(Comment);
  const html = ReactDOMServer.renderToStaticMarkup(com);
  res.write('<!doctype html>');
  res.end(html);
});

CommentRouter.delete('/:id', async (req, res) => {
  try {
    const { id: user_id } = req.params;
    await Comment.destroy({ where: { id: user_id } });
    res.status(204).json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ errorText: 'not today' });
  }
});

module.exports = CommentRouter;
