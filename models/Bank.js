const { monggose, Schema } = require('mongoose')

const bankSchema = new Schema({
    nameBank: {
        type: String,
        required: true
    },
    nomorRekening: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = monggose.model('Bank', bankSchema)