const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src='/js/client' defer></script>
      <title>{title}</title>
    </head>
    <body>
      {children}
    </body>
    </html>
  );
};