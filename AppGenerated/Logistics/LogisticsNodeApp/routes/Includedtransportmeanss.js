const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Includedtransportmeans = require("../models/Includedtransportmeans");

router.get("/", verify, async (req, res) => {
  try {
    const Includedtransportmeanss = await Includedtransportmeans.find();
    res.json(Includedtransportmeanss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const includedtransportmeans = await Includedtransportmeans.findById(req.params.id);
    res.json({
        _id: includedtransportmeans._id,
        transportMeansName: includedtransportmeans.transportMeansName,
        createdAt: includedtransportmeans.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const includedtransportmeans = new Includedtransportmeans ({
        transportMeansName: req.body.transportMeansName,
    });
    const savedIncludedtransportmeans = await includedtransportmeans.save();
    res.status(200).json(savedIncludedtransportmeans);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIncludedtransportmeans = await Includedtransportmeans.remove({ _id: req.params.id });
    res.json(removedIncludedtransportmeans);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedIncludedtransportmeans = await Includedtransportmeans.updateOne(
      { _id: req.params.id },
      {
        $set:{
             transportMeansName: req.body.transportMeansName,

        }
      }
    );
    res.json(updatedIncludedtransportmeans);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;