const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dangerousgoodsregulationinformationtype = require("../models/Dangerousgoodsregulationinformationtype");
const Dangerousgoodsattributetype= require("../models/Dangerousgoodsattributetype");

router.get("/", verify, async (req, res) => {
  try {
    const Dangerousgoodsregulationinformationtypes = await Dangerousgoodsregulationinformationtype.find();
    res.json(Dangerousgoodsregulationinformationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dangerousgoodsregulationinformationtype = await Dangerousgoodsregulationinformationtype.findById(req.params.id);
    res.json({
        _id: dangerousgoodsregulationinformationtype._id,
        id: dangerousgoodsregulationinformationtype.id,
        dangerousGoodsRegulationCode: dangerousgoodsregulationinformationtype.dangerousGoodsRegulationCode,
        dangerousGoodsRegulationName: dangerousgoodsregulationinformationtype.dangerousGoodsRegulationName,
        dangerousGoodsHazardClass: dangerousgoodsregulationinformationtype.dangerousGoodsHazardClass,
        dangerousGoodsPackingGroup: dangerousgoodsregulationinformationtype.dangerousGoodsPackingGroup,
        dangerousGoodsAttribute: dangerousgoodsregulationinformationtype.dangerousGoodsAttribute,
        dangerousGoodsAttributeId: dangerousgoodsregulationinformationtype.dangerousGoodsAttribute.Id,
        dangerousGoodsRegulationCodeId: dangerousgoodsregulationinformationtype.dangerousGoodsRegulationCode.Id,
        createdAt: dangerousgoodsregulationinformationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dangerousgoodsattributes = await Dangerousgoodsattributetype.findById(req.body.dangerousGoodsAttributeId);
    const dangerousgoodsregulationcodes = await Enumerationlibrary.findById(req.body.dangerousGoodsRegulationCodeId);
    const dangerousgoodsregulationinformationtype = new Dangerousgoodsregulationinformationtype ({
        id: req.body.id,
        dangerousGoodsRegulationCode: req.body.dangerousGoodsRegulationCode,
        dangerousGoodsRegulationName: req.body.dangerousGoodsRegulationName,
        dangerousGoodsHazardClass: req.body.dangerousGoodsHazardClass,
        dangerousGoodsPackingGroup: req.body.dangerousGoodsPackingGroup,
        dangerousGoodsAttribute: req.body.dangerousGoodsAttribute,
        dangerousGoodsAttribute: [{
          Id: dangerousgoodsattributes._id,
          Name: dangerousgoodsattributes.id
        }],
        dangerousGoodsRegulationCode: [{
          Id: dangerousgoodsregulationcodes._id,
          Name: dangerousgoodsregulationcodes.id
        }],
    });
    const savedDangerousgoodsregulationinformationtype = await dangerousgoodsregulationinformationtype.save();
    res.status(200).json(savedDangerousgoodsregulationinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDangerousgoodsregulationinformationtype = await Dangerousgoodsregulationinformationtype.remove({ _id: req.params.id });
    res.json(removedDangerousgoodsregulationinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const dangerousgoodsattribute = await Dangerousgoodsattributetype.findById(req.body.dangerousGoodsAttributeId);
    const dangerousgoodsregulationcode = await Enumerationlibrary.findById(req.body.dangerousGoodsRegulationCodeId);
    const updatedDangerousgoodsregulationinformationtype = await Dangerousgoodsregulationinformationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             dangerousGoodsRegulationCode: req.body.dangerousGoodsRegulationCode,
             dangerousGoodsRegulationName: req.body.dangerousGoodsRegulationName,
             dangerousGoodsHazardClass: req.body.dangerousGoodsHazardClass,
             dangerousGoodsPackingGroup: req.body.dangerousGoodsPackingGroup,
             dangerousGoodsAttribute: req.body.dangerousGoodsAttribute,
             dangerousGoodsRegulationCode: {
              Id: req.body.dangerousgoodsregulationcode.id,
              Name: req.body.dangerousgoodsregulationcode.id
             },
             dangerousGoodsRegulationCode: {
              Id: req.body.dangerousgoodsregulationcode.id,
              Name: req.body.dangerousgoodsregulationcode.id
             },

        }
      }
    );
    res.json(updatedDangerousgoodsregulationinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;