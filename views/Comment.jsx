const React = require('react');
const Layout = require('./Layout');

module.exports = function Comment() {
  return (
    <Layout>
      <h1>
        Отсавьте комментарий
      </h1>
      <form className="registration" name="registration" method="POST">
        <label htmlFor="inputlogin" className="block mar-b-1">
          Login:
          {' '}
          <input type="text" name="inputlogin" placeholder="введите login" className="block w-100 no-outline no-border pad-1 mar-b-2" />
          {' '}
        </label>
        <br />
        <label htmlFor="inputcomment" className="block mar-b-1">
          Comment:
          {' '}
          {/* <input type="text" name="inputcomment" placeholder="введите comment" className="block w-100 no-outline no-border pad-1 mar-b-2" /> */}
          <textarea class="form-control" name="inputcomment"  placeholder="введите comment" rows="3"></textarea>
          {' '}
        </label>
        <br />
        <button type="submit" className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline">My comment!</button>
      </form>
    </Layout>
  );
};
