function isAuth(req, res, next) {
  if (req.session.user) {
    res.locals.user = req.session.user;
  }
  next();
}
// из локальной переменной делает глобальную

module.exports = isAuth;
