const React = require('react');
const Layout = require('./Layout');

module.exports = function Comment({ user,routeId }) {
  return (
    <Layout user={user}>
      <h1>
        Оставьте комментарий
      </h1>
      <form className="mycomment" name="mycomment" id={routeId.id}>
        <label htmlFor="llogin"  className="block mar-b-1">
          Login:
          <span className="nav-link" name="llogin">
          {' '}
            {user.login}
          </span>
          {' '}
        </label>
        <br />
        <div  className="form-check form-check-inline">
          <input type="radio" id="star-5" name="rating" value="5" />
          {' '}
          5
          <label htmlFor="star-5" title="Оценка «5»" />
          {' '}
          <input type="radio" id="star-4" name="rating" value="4" />
          {' '}
          4
          <label htmlFor="star-4" title="Оценка «4»" />
          {' '}
          <input type="radio" id="star-3" name="rating" value="3" />
          {' '}
          3
          <label htmlFor="star-3" title="Оценка «3»" />
          {' '}
          <input type="radio" id="star-2" name="rating" value="2" />
          {' '}
          2
          <label htmlFor="star-2" title="Оценка «2»" />
          {' '}
          <input type="radio" id="star-1" name="rating" value="1" />
          {' '}
          1
          <label htmlFor="star-1" title="Оценка «1»" />
        </div>
        <br />
        <label htmlFor="inputcomment" className="block mar-b-1">
          Comment:
          {' '}
          {/* <input type="text" name="inputcomment" placeholder="введите comment" className="block w-100 no-outline no-border pad-1 mar-b-2" /> */}
          <textarea className="form-control" name="inputcomment" placeholder="Напишите комментарий" rows="3" />
          {' '}
        </label>
        <br />
        <button type="submit" className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline">My comment!</button>
      </form>
    </Layout>
  );
};
