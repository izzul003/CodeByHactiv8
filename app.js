const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

app.get('/', routes)

app.listen(port, () => console.log(`CodeByHacktiv8 listening at http://localhost:${port}`))