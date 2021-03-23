const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportcapacitybookingresponseidentification = require("../models/Transportcapacitybookingresponseidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcapacitybookingresponseidentifications = await Transportcapacitybookingresponseidentification.find();
    res.json(Transportcapacitybookingresponseidentifications);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookingresponseidentification = await Transportcapacitybookingresponseidentification.findById(req.params.id);
    res.json({
        _id: transportcapacitybookingresponseidentification._id,
        entityIdentification: transportcapacitybookingresponseidentification.entityIdentification,
        createdAt: transportcapacitybookingresponseidentification.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportcapacitybookingresponseidentification = new Transportcapacitybookingresponseidentification ({
        entityIdentification: req.body.entityIdentification,
    });
    const savedTransportcapacitybookingresponseidentification = await transportcapacitybookingresponseidentification.save();
    res.status(200).json(savedTransportcapacitybookingresponseidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcapacitybookingresponseidentification = await Transportcapacitybookingresponseidentification.remove({ _id: req.params.id });
    res.json(removedTransportcapacitybookingresponseidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportcapacitybookingresponseidentification = await Transportcapacitybookingresponseidentification.updateOne(
      { _id: req.params.id },
      {
        $set:{
             entityIdentification: req.body.entityIdentification,

        }
      }
    );
    res.json(updatedTransportcapacitybookingresponseidentification);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;