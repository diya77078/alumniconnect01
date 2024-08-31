const Network = require('../models/Network');

exports.getAllNetworking = async (req, res) => {
  try {
    const networkings = await Network.find();
    res.json(networkings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addNetworking = async (req, res) => {
  const { alumniName, profession, location } = req.body;

  try {
    const networking = new Network({ alumniName, profession, location });
    await networking.save();
    res.status(201).json(networking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};