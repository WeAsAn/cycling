const React = require('react');
const NewNavbar = require('./NewNavbar');

module.exports = function Layout({ title, user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" /> */}
        <link rel="stylesheet" href="/styles/NavbarStyle.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=e3e8d61a-6cc0-459f-b26d-25250d5308ed" type="text/javascript" defer></script>
        <script src="/js/client.js" defer />
        <script src="/js/maps.js" defer />
        <title>{title}</title>
        <NewNavbar user={user} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
