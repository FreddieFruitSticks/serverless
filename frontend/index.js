'use strict'

exports.index = (event, context, callback) => {
  const message = "<p>Hello, World! Mr. Vurayai<p>"
  const html = `
  <html>
    <body><h1>${message}</h1></body>
  </html>
  `;
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
  context.succeed(response)
}
