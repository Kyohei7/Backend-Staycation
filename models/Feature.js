const { monggose, Schema } = require('mongoose')

const featureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = monggose.model('Feature', featureSchema)