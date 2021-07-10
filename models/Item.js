const { monggose, Schema } = require('mongoose')
const { ObjectId } = monggose.Schema

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        default: 'Indonesia'
    },
    city: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean
    },
    description: {
        type: String,
        required: true
    },
    imageId: {
        type: ObjectId,
        ref: 'Image'
    },
    featureId: {
        type: ObjectId,
        ref: 'Feature'
    },
    activityId: {
        type: ObjectId,
        ref: 'Activity'
    },
})

module.exports = monggose.model('Item', itemSchema)