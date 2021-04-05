const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportmeanstype = require("../models/Transportmeanstype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportmeanstypes = await Transportmeanstype.find();
    res.json(Transportmeanstypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportmeanstype = await Transportmeanstype.findById(req.params.id);
    res.json({
        _id: transportmeanstype._id,
        id: transportmeanstype.id,
        transportMeansType: transportmeanstype.transportMeansType,
        transportMeansID: transportmeanstype.transportMeansID,
        transportMeansName: transportmeanstype.transportMeansName,
        transportMeansTypeId: transportmeanstype.transportMeansType.Id,
        createdAt: transportmeanstype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportmeanstypes = await Enumerationlibrary.findById(req.body.transportMeansTypeId);
    const transportmeanstype = new Transportmeanstype ({
        id: req.body.id,
        transportMeansType: req.body.transportMeansType,
        transportMeansID: req.body.transportMeansID,
        transportMeansName: req.body.transportMeansName,
        transportMeansType: [{
          Id: transportmeanstypes._id,
          Name: transportmeanstypes.id
        }],
    });
    const savedTransportmeanstype = await transportmeanstype.save();
    res.status(200).json(savedTransportmeanstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportmeanstype = await Transportmeanstype.remove({ _id: req.params.id });
    res.json(removedTransportmeanstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const transportmeanstype = await Enumerationlibrary.findById(req.body.transportMeansTypeId);
    const updatedTransportmeanstype = await Transportmeanstype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             transportMeansType: req.body.transportMeansType,
             transportMeansID: req.body.transportMeansID,
             transportMeansName: req.body.transportMeansName,
             transportMeansType: {
              Id: req.body.transportmeanstype.id,
              Name: req.body.transportmeanstype.id
             },

        }
      }
    );
    res.json(updatedTransportmeanstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;