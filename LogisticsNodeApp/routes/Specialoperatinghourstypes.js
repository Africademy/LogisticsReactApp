const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Specialoperatinghourstype = require("../models/Specialoperatinghourstype");

router.get("/", verify, async (req, res) => {
  try {
    const Specialoperatinghourstypes = await Specialoperatinghourstype.find();
    res.json(Specialoperatinghourstypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const specialoperatinghourstype = await Specialoperatinghourstype.findById(req.params.id);
    res.json({
        _id: specialoperatinghourstype._id,
        id: specialoperatinghourstype.id,
        isOperational: specialoperatinghourstype.isOperational,
        specialDate: specialoperatinghourstype.specialDate,
        closingTime: specialoperatinghourstype.closingTime,
        openingTime: specialoperatinghourstype.openingTime,
        specialDateName: specialoperatinghourstype.specialDateName,
        specialDateNameId: specialoperatinghourstype.specialDateName.Id,
        createdAt: specialoperatinghourstype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const specialdatenames = await Description80type.findById(req.body.specialDateNameId);
    const specialoperatinghourstype = new Specialoperatinghourstype ({
        id: req.body.id,
        isOperational: req.body.isOperational,
        specialDate: req.body.specialDate,
        closingTime: req.body.closingTime,
        openingTime: req.body.openingTime,
        specialDateName: req.body.specialDateName,
        specialDateName: [{
          Id: specialdatenames._id,
          Name: specialdatenames.id
        }],
    });
    const savedSpecialoperatinghourstype = await specialoperatinghourstype.save();
    res.status(200).json(savedSpecialoperatinghourstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedSpecialoperatinghourstype = await Specialoperatinghourstype.remove({ _id: req.params.id });
    res.json(removedSpecialoperatinghourstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const specialdatename = await Description80type.findById(req.body.specialDateNameId);
    const updatedSpecialoperatinghourstype = await Specialoperatinghourstype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             isOperational: req.body.isOperational,
             specialDate: req.body.specialDate,
             closingTime: req.body.closingTime,
             openingTime: req.body.openingTime,
             specialDateName: req.body.specialDateName,
             specialDateName: {
              Id: req.body.specialdatename.id,
              Name: req.body.specialdatename.id
             },

        }
      }
    );
    res.json(updatedSpecialoperatinghourstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;