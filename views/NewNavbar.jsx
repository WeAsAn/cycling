const React = require('react');

module.exports = function NewLout() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Cycle Big Trip </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Про нас</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Маршруты</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/lg/registration">Регистрация</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/lg/login">Вход</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
