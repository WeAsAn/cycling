const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout title="Registration">
      <h1>
        Регистрация
      </h1>
      <form name="registration">
        <label htmlFor="inputename">Ваше имя:</label>
        <input type="text" name="login" placeholder="Введите Ваше имя" />
        <br />
        <label htmlFor="inputemail">Эл. почта:</label>
        <input type="email" name="email" placeholder="Введите email" />
        <br />
        <label htmlFor="inputpassword">Пароль:</label>
        <input type="password" name="password" placeholder="Введите пароль" />
        <br />
        <button type="submit">Войти</button>
      </form>
      <div className="errorMessage" />
    </Layout>
  );
};
