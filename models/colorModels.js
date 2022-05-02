const mongoose = require('mongoose')
const {Schema} = mongoose

const colorSchema = new Schema({
    col1: String,
    col2: String, 
    col3: String,
    col4: String,
    col5: String,
    name: String
}, {timestamps: true})

const Color = mongoose.model('Color', colorSchema)

module.exports = Color