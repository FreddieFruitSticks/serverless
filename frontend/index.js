'use strict'

module.exports.index = (event, context, callback) => {
  const html = "<p>Hello<p>"

  const response = {
    statusCode:200,
    header:{
      'Content-Type': 'text/html',
    },
    body:html
  }

  callback(null, response)
}
