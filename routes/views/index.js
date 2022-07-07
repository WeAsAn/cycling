const indexRouter = require('express').Router();

indexRouter.get('/', (req, res) => {
  res.redirect('/home');
});

module.exports = indexRouter;
