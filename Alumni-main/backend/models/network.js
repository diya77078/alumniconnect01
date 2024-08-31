const mongoose = require('mongoose');

const networkSchema = mongoose.Schema(
  {
    alumniName: { type: String, required: true },
    profession: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Network', networkSchema);