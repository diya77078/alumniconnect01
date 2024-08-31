const express = require('express');
const { createJob, getAllJobs } = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createJob);
router.get('/', getAllJobs);

module.exports = router;