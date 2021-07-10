const { monggose, Schema } = require('mongoose')

const imageSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = monggose.model('Image', imageSchema)