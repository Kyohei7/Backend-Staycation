const { monggose, Schema } = require('mongoose')

const activitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean,
        required: true
    }
})

module.exports = monggose.model('Activity', activitySchema)