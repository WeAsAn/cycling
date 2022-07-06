const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout title="Login">
      <h1>
        Авторизация
      </h1>
      <form name="login">
        <label htmlFor="inputemail">Эл. почта:</label>
        <input type="email" name="inputemail" placeholder="Введите email" />
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
