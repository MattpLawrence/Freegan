//Future development model to create multiple items in an order

const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  claimDate: {
      type: Date,
      default: Date.now,
  }, 
  items: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Item',
      },
  ],
});

const Order = model('Order', orderSchema);


module.exports = Order;