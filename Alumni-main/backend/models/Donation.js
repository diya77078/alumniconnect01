const mongoose = require('mongoose');

const donationSchema = mongoose.Schema(
  {
    donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Donation', donationSchema);
