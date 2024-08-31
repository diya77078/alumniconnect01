const Donation = require('../models/Donation');
const User = require('../models/User');

exports.createDonation = async (req, res) => {
  const { amount, message } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const donation = new Donation({ donor: user._id, amount, message });
    await donation.save();

    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate('donor', 'name email');
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};