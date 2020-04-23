const client = require('../controller/clientController')

const clientRoutes = (app) => {
    app.get('/clients', client.index)
    app.get('/clients/:id', client.find)
    app.post('/clients', client.post)
    app.put('/clients/:id', client.put)
    app.delete('/clients/:id', client.delete)
}

module.exports = clientRoutes