const express = require('express');
const { createDonation, getAllDonations } = require('../controllers/donationController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createDonation);
router.get('/', getAllDonations);

module.exports = router;