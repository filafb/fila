const html = require("html-template-tag")

const home = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="styles/fonts.css" />
      <link rel="stylesheet" href="styles/reset.css" />
      <link rel="stylesheet" href="styles/main.css" />
      <title>Fila</title>
    </head>
    <body>
      <section class="hero">
        <div class="first-impression">
          <p>Oi mundo!</p>
        </div>
      </section>
    </body>
  </html>
`

module.exports = home
