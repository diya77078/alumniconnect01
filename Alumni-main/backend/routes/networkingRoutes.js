const express = require('express');
const { addNetworking, getAllNetworking } = require('../controllers/networkingController');

const router = express.Router();

router.post('/', addNetworking);
router.get('/', getAllNetworking);

module.exports = router;