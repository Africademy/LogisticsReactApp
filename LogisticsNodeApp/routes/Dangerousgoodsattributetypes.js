const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dangerousgoodsattributetype = require("../models/Dangerousgoodsattributetype");
const Measurementtype= require("../models/Measurementtype");

router.get("/", verify, async (req, res) => {
  try {
    const Dangerousgoodsattributetypes = await Dangerousgoodsattributetype.find();
    res.json(Dangerousgoodsattributetypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dangerousgoodsattributetype = await Dangerousgoodsattributetype.findById(req.params.id);
    res.json({
        _id: dangerousgoodsattributetype._id,
        id: dangerousgoodsattributetype.id,
        dangerousGoodsAttributeTypeCode: dangerousgoodsattributetype.dangerousGoodsAttributeTypeCode,
        dangerousGoodsAttributeText: dangerousgoodsattributetype.dangerousGoodsAttributeText,
        dangerousGoodsAttributeMeasurement: dangerousgoodsattributetype.dangerousGoodsAttributeMeasurement,
        dangerousGoodsAttributeIndicator: dangerousgoodsattributetype.dangerousGoodsAttributeIndicator,
        dangerousGoodsAttributeDateTime: dangerousgoodsattributetype.dangerousGoodsAttributeDateTime,
        dangerousGoodsAttributeMeasurementId: dangerousgoodsattributetype.dangerousGoodsAttributeMeasurement.Id,
        dangerousGoodsAttributeTypeCodeId: dangerousgoodsattributetype.dangerousGoodsAttributeTypeCode.Id,
        createdAt: dangerousgoodsattributetype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dangerousgoodsattributemeasurements = await Measurementtype.findById(req.body.dangerousGoodsAttributeMeasurementId);
    const dangerousgoodsattributetypecodes = await Enumerationlibrary.findById(req.body.dangerousGoodsAttributeTypeCodeId);
    const dangerousgoodsattributetype = new Dangerousgoodsattributetype ({
        id: req.body.id,
        dangerousGoodsAttributeTypeCode: req.body.dangerousGoodsAttributeTypeCode,
        dangerousGoodsAttributeText: req.body.dangerousGoodsAttributeText,
        dangerousGoodsAttributeMeasurement: req.body.dangerousGoodsAttributeMeasurement,
        dangerousGoodsAttributeIndicator: req.body.dangerousGoodsAttributeIndicator,
        dangerousGoodsAttributeDateTime: req.body.dangerousGoodsAttributeDateTime,
        dangerousGoodsAttributeMeasurement: [{
          Id: dangerousgoodsattributemeasurements._id,
          Name: dangerousgoodsattributemeasurements.id
        }],
        dangerousGoodsAttributeTypeCode: [{
          Id: dangerousgoodsattributetypecodes._id,
          Name: dangerousgoodsattributetypecodes.id
        }],
    });
    const savedDangerousgoodsattributetype = await dangerousgoodsattributetype.save();
    res.status(200).json(savedDangerousgoodsattributetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDangerousgoodsattributetype = await Dangerousgoodsattributetype.remove({ _id: req.params.id });
    res.json(removedDangerousgoodsattributetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const dangerousgoodsattributemeasurement = await Measurementtype.findById(req.body.dangerousGoodsAttributeMeasurementId);
    const dangerousgoodsattributetypecode = await Enumerationlibrary.findById(req.body.dangerousGoodsAttributeTypeCodeId);
    const updatedDangerousgoodsattributetype = await Dangerousgoodsattributetype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             dangerousGoodsAttributeTypeCode: req.body.dangerousGoodsAttributeTypeCode,
             dangerousGoodsAttributeText: req.body.dangerousGoodsAttributeText,
             dangerousGoodsAttributeMeasurement: req.body.dangerousGoodsAttributeMeasurement,
             dangerousGoodsAttributeIndicator: req.body.dangerousGoodsAttributeIndicator,
             dangerousGoodsAttributeDateTime: req.body.dangerousGoodsAttributeDateTime,
             dangerousGoodsAttributeTypeCode: {
              Id: req.body.dangerousgoodsattributetypecode.id,
              Name: req.body.dangerousgoodsattributetypecode.id
             },
             dangerousGoodsAttributeTypeCode: {
              Id: req.body.dangerousgoodsattributetypecode.id,
              Name: req.body.dangerousgoodsattributetypecode.id
             },

        }
      }
    );
    res.json(updatedDangerousgoodsattributetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;