const fs = require('fs')
const data = require('../../data.json')

module.exports = {
    index(req, res) {
        return res.json({ data })
    },
    find(req, res) {
        const { id } = req.params

        const clientFound = data.find(client => client.id == id)
        if (!clientFound)
            return res.status(204).json()

        const {
            name,
            username,
            email,
            address,
            geo
        } = req.body


        return res.json({ clientFound })

    },
    post(req, res) {
        const {
            name,
            username,
            email,
            address,
            geo
        } = req.body

        const id = Number(data.length + 1)

        data.push({
            id,
            name,
            username,
            email,
            address,
            geo
        })

        fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
            if (err) throw err
        })
        return res.json({ data })
    },
    put(req, res) {
        const { id } = req.params

        const clientFound = data.find(client => client.id == id)
        if (!clientFound)
            return res.status(204).json()

        const { name } = req.body

        clientFound.name = name

        fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
            if (err) throw err
        })

        return res.json({ clientFound })
    },
    delete(req, res) { 
        const { id } = req.params
        const foundClient = data.find(client => client.id == id)
        const clientsFiltered = data.filter(client => client.id  != id)

        /* Client not found */
        if (!foundClient) return res.status(204).json()

        fs.writeFile('data.json', JSON.stringify(clientsFiltered, null, 2), (err) => {
            if (err) throw err
        })
        return res.json({ data })
    }
}