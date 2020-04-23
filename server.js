/* Dependencies */
const express = require('express')
/* Start App */
const app = express()

/* JSON */
app.use(express.json())
/* Routes */
const routes = require('./src/routes/clientRoutes')(app)

/* Initialization Server */
app.listen(3000, () => {
    console.log('server is running')
})