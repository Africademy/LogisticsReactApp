const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportcapacitybookingidentification = require("../models/Transportcapacitybookingidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcapacitybookingidentifications = await Transportcapacitybookingidentification.find();
    res.json(Transportcapacitybookingidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookingidentification = await Transportcapacitybookingidentification.findById(req.params.id);
    res.json({
        _id: transportcapacitybookingidentification._id,
        entityIdentification: transportcapacitybookingidentification.entityIdentification,
        createdAt: transportcapacitybookingidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportcapacitybookingidentification = new Transportcapacitybookingidentification ({
        entityIdentification: req.body.entityIdentification,
    });
    const savedTransportcapacitybookingidentification = await transportcapacitybookingidentification.save();
    res.status(200).json(savedTransportcapacitybookingidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcapacitybookingidentification = await Transportcapacitybookingidentification.remove({ _id: req.params.id });
    res.json(removedTransportcapacitybookingidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportcapacitybookingidentification = await Transportcapacitybookingidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             entityIdentification: req.body.entityIdentification,

        }
      }
    );
    res.json(updatedTransportcapacitybookingidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;