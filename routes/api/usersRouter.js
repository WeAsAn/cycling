const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

userRouter.post('/registration', async (req, res) => {
  try {
    console.log(req.body);
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

userRouter.post('/login', async (req, res) => {
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
    // const { id, login } = user;
    // const userSesion = { id, login };
    req.session.user = user;
    res.json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

userRouter.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('u_sid');
  res.redirect('/');
});

module.exports = userRouter;