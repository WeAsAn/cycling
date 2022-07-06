const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

userRouter.post('/registration', async (res, req) => {
  try {
    const { login, email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      res.json({ status: 'notok', errorMessage: 'Пользователь уже зарегистрирован!' });
      return;
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    await User.create({
      login,
      email,
      password: hash,
    });
    res.json({ status: 'ok' });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

userRouter.post('/login', async (res, req) => {
  try {
    const { login, email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.json({ status: 'notok', errorMessage: 'Такого пользователя не существует!' });
      return;
    }
    const userOk = bcrypt.compare(password, user.password);
    if (!userOk) {
      res.json({ status: 'notok', errorMessage: 'Неверный логин/пароль' });
      return;
    }
    req.session.user = user;
    res.json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

userRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCoockie('user_sid');
  res.redirect('/');
});

module.exports = userRouter;