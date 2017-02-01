'use strict'

module.exports.index = (event, context, callback) => {
  const message = "<p>Hello<p>"
  const html = `
  <html>
    <body>${message}</body>
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
