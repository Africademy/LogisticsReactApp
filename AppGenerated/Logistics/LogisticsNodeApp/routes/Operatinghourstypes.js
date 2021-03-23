const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Operatinghourstype = require("../models/Operatinghourstype");

router.get("/", verify, async (req, res) => {
  try {
    const Operatinghourstypes = await Operatinghourstype.find();
    res.json(Operatinghourstypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const operatinghourstype = await Operatinghourstype.findById(req.params.id);
    res.json({
        _id: operatinghourstype._id,
        id: operatinghourstype.id,
        dayOfTheWeekCode: operatinghourstype.dayOfTheWeekCode,
        isOperational: operatinghourstype.isOperational,
        closingTime: operatinghourstype.closingTime,
        openingTime: operatinghourstype.openingTime,
        dayOfTheWeekCodeId: operatinghourstype.dayOfTheWeekCode.Id,
        createdAt: operatinghourstype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dayoftheweekcodes = await Enumerationlibrary.findById(req.body.dayOfTheWeekCodeId);
    const operatinghourstype = new Operatinghourstype ({
        id: req.body.id,
        dayOfTheWeekCode: req.body.dayOfTheWeekCode,
        isOperational: req.body.isOperational,
        closingTime: req.body.closingTime,
        openingTime: req.body.openingTime,
        dayOfTheWeekCode: [{
          Id: dayoftheweekcodes._id,
          Name: dayoftheweekcodes.id
        }],
    });
    const savedOperatinghourstype = await operatinghourstype.save();
    res.status(200).json(savedOperatinghourstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedOperatinghourstype = await Operatinghourstype.remove({ _id: req.params.id });
    res.json(removedOperatinghourstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const dayoftheweekcode = await Enumerationlibrary.findById(req.body.dayOfTheWeekCodeId);
    const updatedOperatinghourstype = await Operatinghourstype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             dayOfTheWeekCode: req.body.dayOfTheWeekCode,
             isOperational: req.body.isOperational,
             closingTime: req.body.closingTime,
             openingTime: req.body.openingTime,
             dayOfTheWeekCode: {
              Id: req.body.dayoftheweekcode.id,
              Name: req.body.dayoftheweekcode.id
             },

        }
      }
    );
    res.json(updatedOperatinghourstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;