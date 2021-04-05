const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticunitidentificationtype = require("../models/Logisticunitidentificationtype");
const Additionallogisticunitidentificationtype= require("../models/Additionallogisticunitidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticunitidentificationtypes = await Logisticunitidentificationtype.find();
    res.json(Logisticunitidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticunitidentificationtype = await Logisticunitidentificationtype.findById(req.params.id);
    res.json({
        _id: logisticunitidentificationtype._id,
        id: logisticunitidentificationtype.id,
        sscc: logisticunitidentificationtype.sscc,
        additionalLogisticUnitIdentification: logisticunitidentificationtype.additionalLogisticUnitIdentification,
        additionalLogisticUnitIdentificationId: logisticunitidentificationtype.additionalLogisticUnitIdentification.Id,
        createdAt: logisticunitidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionallogisticunitidentifications = await Additionallogisticunitidentificationtype.findById(req.body.additionalLogisticUnitIdentificationId);
    const logisticunitidentificationtype = new Logisticunitidentificationtype ({
        id: req.body.id,
        sscc: req.body.sscc,
        additionalLogisticUnitIdentification: req.body.additionalLogisticUnitIdentification,
        additionalLogisticUnitIdentification: [{
          Id: additionallogisticunitidentifications._id,
          Name: additionallogisticunitidentifications.id
        }],
    });
    const savedLogisticunitidentificationtype = await logisticunitidentificationtype.save();
    res.status(200).json(savedLogisticunitidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticunitidentificationtype = await Logisticunitidentificationtype.remove({ _id: req.params.id });
    res.json(removedLogisticunitidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const additionallogisticunitidentification = await Additionallogisticunitidentificationtype.findById(req.body.additionalLogisticUnitIdentificationId);
    const updatedLogisticunitidentificationtype = await Logisticunitidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             sscc: req.body.sscc,
             additionalLogisticUnitIdentification: req.body.additionalLogisticUnitIdentification,
             additionalLogisticUnitIdentification: {
              Id: req.body.additionallogisticunitidentification.id,
              Name: req.body.additionallogisticunitidentification.id
             },

        }
      }
    );
    res.json(updatedLogisticunitidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;