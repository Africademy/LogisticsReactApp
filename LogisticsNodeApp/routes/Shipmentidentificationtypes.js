const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Shipmentidentificationtype = require("../models/Shipmentidentificationtype");
const Additionalshipmentidentificationtype= require("../models/Additionalshipmentidentificationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Shipmentidentificationtypes = await Shipmentidentificationtype.find();
    res.json(Shipmentidentificationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const shipmentidentificationtype = await Shipmentidentificationtype.findById(req.params.id);
    res.json({
        _id: shipmentidentificationtype._id,
        id: shipmentidentificationtype.id,
        gsin: shipmentidentificationtype.gsin,
        additionalShipmentIdentification: shipmentidentificationtype.additionalShipmentIdentification,
        additionalShipmentIdentificationId: shipmentidentificationtype.additionalShipmentIdentification.Id,
        createdAt: shipmentidentificationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalshipmentidentifications = await Additionalshipmentidentificationtype.findById(req.body.additionalShipmentIdentificationId);
    const shipmentidentificationtype = new Shipmentidentificationtype ({
        id: req.body.id,
        gsin: req.body.gsin,
        additionalShipmentIdentification: req.body.additionalShipmentIdentification,
        additionalShipmentIdentification: [{
          Id: additionalshipmentidentifications._id,
          Name: additionalshipmentidentifications.id
        }],
    });
    const savedShipmentidentificationtype = await shipmentidentificationtype.save();
    res.status(200).json(savedShipmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedShipmentidentificationtype = await Shipmentidentificationtype.remove({ _id: req.params.id });
    res.json(removedShipmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const additionalshipmentidentification = await Additionalshipmentidentificationtype.findById(req.body.additionalShipmentIdentificationId);
    const updatedShipmentidentificationtype = await Shipmentidentificationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             gsin: req.body.gsin,
             additionalShipmentIdentification: req.body.additionalShipmentIdentification,
             additionalShipmentIdentification: {
              Id: req.body.additionalshipmentidentification.id,
              Name: req.body.additionalshipmentidentification.id
             },

        }
      }
    );
    res.json(updatedShipmentidentificationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;