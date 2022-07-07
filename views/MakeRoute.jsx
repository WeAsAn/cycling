const React = require('react');
const Layout = require('./Layout');

module.exports = function MakeRout({}) {
  const styles = { width: '600px', height: '400px' };
  return (
    <Layout>
      <div className=".container-md">
        <div id="constructor" style={styles} className=".img-fluid" />
        <form action="post" name="newmap">
          <input type="text" name="name" id="" />
          <input type="text" name="info" id="" />
        </form>
        <button type="submit" className="btn btn-dark">Опубликовать</button>
      </div>
    </Layout>
  );
};
