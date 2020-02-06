const express = require("express")
const app = express()
const path = require("path")
const PORT = 3031
const home = require("../client/views")

app.use(express.static(path.join(__dirname, "..", "public")))

app.get("/", (req, res) => {
  const indexPage = home()
  res.send(indexPage)
})

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
