const express = require('express');
const { submitFeedback, getAllFeedback } = require('../controllers/feedbackController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, submitFeedback);
router.get('/', getAllFeedback);

module.exports = router;