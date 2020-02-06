const express = require("express")
const app = express()
const path = require("path")
const PORT = 3031

app.use(express.static(path.join(__dirname, "..", "public")))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
