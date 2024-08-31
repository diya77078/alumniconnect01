Feedback.js


const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      feedback: { type: String, required: true },
      rating: { type: Number, required: true },
    },
    { timestamps: true }
  );

  module.exports = mongoose.model('Feedback', feedbackSchema);