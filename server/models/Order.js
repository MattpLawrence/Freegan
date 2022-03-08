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