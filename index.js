const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Color = require('./models/colorModels')

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

app.post('/MyPalletes', (req,res) => {
    const color = new Color(req.body)

    color.save()
        .then(() => console.log('Saved!'))
        .catch(err => console.log(err))
})

app.get('/MyPalletes', (req,res) => {
    Color.find().sort({createdAt: -1})
        .then(result => res.send({result:result}))
        .catch(err => console.log(err))
})

app.delete('/MyPalletes', (req,res) => {
    Color.findByIdAndDelete(req.body.id)
        .then(console.log('GONE!'))
})
