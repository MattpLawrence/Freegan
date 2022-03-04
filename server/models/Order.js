const { Schema } = require('mongoose');

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

const Order = mongoose.model('Order', orderSchema);


module.exports = Order;