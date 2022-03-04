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
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    itemSpecifics: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }  
});


const Item = model('Item', itemSchema);


module.exports = Item;