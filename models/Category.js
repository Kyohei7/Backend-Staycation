const { monggose, Schema } = require('mongoose')

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = monggose.model('Category', categorySchema)