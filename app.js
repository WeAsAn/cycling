require('@babel/register');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const isAuth = require('./middlewares/isAuth');
const homeRouter = require('./routes/views/homeRouter');
const userRouter = require('./routes/api/usersRouter');
const userViewRouter = require('./routes/views/userViewRouter');
const index = require('./routes/views/index');
const { sequelize } = require('./db/models');

const profileRouter = require('./routes/views/profileRouter');

const routeRouter = require('./routes/views/routeRouter');
const CommentRouter = require('./routes/views/CommentRouter');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve('public')));

const sessionConfig = {
  store: new FileStore(),
  name: 'u_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));
app.use(isAuth); // из локальной переменной делает глобальную

app.use('/', index);
app.use('/home', homeRouter);
app.use('/new', userRouter);
app.use('/', userViewRouter);
app.use('/profile', profileRouter);
app.use('/routes', routeRouter);
app.use('/routes/comment/', CommentRouter)

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту`);
  sequelize.authenticate();
});
