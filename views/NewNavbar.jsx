const React = require('react');

module.exports = function NewLout({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/home">Cycle Big Trip </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {user && user ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">{user.login}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/lg/registration">Маршруты</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">Личный кабинет</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/new/logout">Выход</a>
              </li>
            </>
          )
            : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/lg/registration">Маршруты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registration">Регистрация</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Вход</a>
                </li>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
};
