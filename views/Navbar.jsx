const React = require('react');

module.exports = function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <header>
        <a href="#" className="logo">Logo</a>
        <ul>
          <li><a href="#">Маршруты</a></li>
          <li><a href="#">Велики</a></li>
          <li><a href="#">Войти</a></li>
          <li><a href="#">Регистрация</a></li>
        </ul>
      </header>
    </nav>
  );
};
