//utilisation de nodes.js express
const express = require('express')
const app = express()
const blagues = require('./blagues.json')

app.get('/blagues', (req,res) => {
    res.status(200).json(blagues)
})

app.get('/blagues/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const blague = blagues.find(blague => blague.id === id)
    res.status(200).json(blague.content)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})