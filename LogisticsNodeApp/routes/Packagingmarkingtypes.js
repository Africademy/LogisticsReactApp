const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Packagingmarkingtype = require("../models/Packagingmarkingtype");

router.get("/", verify, async (req, res) => {
  try {
    const Packagingmarkingtypes = await Packagingmarkingtype.find();
    res.json(Packagingmarkingtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const packagingmarkingtype = await Packagingmarkingtype.findById(req.params.id);
    res.json({
        _id: packagingmarkingtype._id,
        id: packagingmarkingtype.id,
        markingTypeCode: packagingmarkingtype.markingTypeCode,
        markingContentDateTime: packagingmarkingtype.markingContentDateTime,
        markingContentText: packagingmarkingtype.markingContentText,
        markingTypeCodeId: packagingmarkingtype.markingTypeCode.Id,
        createdAt: packagingmarkingtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const markingtypecodes = await Enumerationlibrary.findById(req.body.markingTypeCodeId);
    const packagingmarkingtype = new Packagingmarkingtype ({
        id: req.body.id,
        markingTypeCode: req.body.markingTypeCode,
        markingContentDateTime: req.body.markingContentDateTime,
        markingContentText: req.body.markingContentText,
        markingTypeCode: [{
          Id: markingtypecodes._id,
          Name: markingtypecodes.id
        }],
    });
    const savedPackagingmarkingtype = await packagingmarkingtype.save();
    res.status(200).json(savedPackagingmarkingtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPackagingmarkingtype = await Packagingmarkingtype.remove({ _id: req.params.id });
    res.json(removedPackagingmarkingtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const markingtypecode = await Enumerationlibrary.findById(req.body.markingTypeCodeId);
    const updatedPackagingmarkingtype = await Packagingmarkingtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             markingTypeCode: req.body.markingTypeCode,
             markingContentDateTime: req.body.markingContentDateTime,
             markingContentText: req.body.markingContentText,
             markingTypeCode: {
              Id: req.body.markingtypecode.id,
              Name: req.body.markingtypecode.id
             },

        }
      }
    );
    res.json(updatedPackagingmarkingtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;