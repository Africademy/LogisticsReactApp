const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Deliveryinstructions = require("../models/Deliveryinstructions");

router.get("/", verify, async (req, res) => {
  try {
    const Deliveryinstructionss = await Deliveryinstructions.find();
    res.json(Deliveryinstructionss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const deliveryinstructions = await Deliveryinstructions.findById(req.params.id);
    res.json({
        _id: deliveryinstructions._id,
        languageCode: deliveryinstructions.languageCode,
        codeListVersion: deliveryinstructions.codeListVersion,
        createdAt: deliveryinstructions.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const deliveryinstructions = new Deliveryinstructions ({
        languageCode: req.body.languageCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDeliveryinstructions = await deliveryinstructions.save();
    res.status(200).json(savedDeliveryinstructions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDeliveryinstructions = await Deliveryinstructions.remove({ _id: req.params.id });
    res.json(removedDeliveryinstructions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDeliveryinstructions = await Deliveryinstructions.updateOne(
      { _id: req.params.id },
      {
        $set:{
             languageCode: req.body.languageCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDeliveryinstructions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;