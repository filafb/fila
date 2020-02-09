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
          <span class="fisrt-header">f</span><span class="fisrt-header">i</span
          ><span class="fisrt-header">l</span><span class="fisrt-header">a</span
          ><span class="fisrt-header">f</span><span class="fisrt-header">b</span
          ><span class="fisrt-header">:</span><span class="fisrt-header">d</span
          ><span class="fisrt-header">e</span
          ><span class="fisrt-header">v</span>
        </div>
      </section>
    </body>
  </html>
`

module.exports = home
