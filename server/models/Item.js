const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    
    itemName: {
        type: String,
        required: true,
        trim: true
    },
    itemImage: {
        type: String,
        trim: true,
    },
    itemDescription: {
        type: String,
        required: true,
        trim: true
    },
    itemCondition: {
        type: String,
        required: true,
        trim: true
    },
    itemSpecifics: {
        type: String,
        required: true,
        trim: true
    }


});

const Item = model('Item', itemSchema)

module.exports = Item;