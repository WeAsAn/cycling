const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout title="Login">
      <h1>
      </h1>
      <form name="login" method="POST" action="/home">
        <label htmlFor="inputemail" className="block mar-b-1">Email:</label>
        <input type="email" name="inputemail" placeholder="введите email" className="block w-100 no-outline no-border pad-1 mar-b-2" /><br />
        <label htmlFor="inputpassword" className="block mar-b-1">Пароль:</label>
        <input type="password" name="inputpassword" placeholder="введите password" className="block w-100 no-outline no-border pad-1 mar-b-2" /><br />
        <button type="submit" className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline">Login me!</button>
      </form>
      <div className="errorMessage" />
    </Layout>
  );
};
