const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
  const { feedback, rating } = req.body;
  const userId = req.user.id;

  try {
    const newFeedback = new Feedback({ user: userId, feedback, rating });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user', 'name email');
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};