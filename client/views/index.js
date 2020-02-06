const html = require("html-template-tag")

const home = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Fila</title>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>
`

module.exports = home
