const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportsealtype = require("../models/Transportsealtype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportsealtypes = await Transportsealtype.find();
    res.json(Transportsealtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportsealtype = await Transportsealtype.findById(req.params.id);
    res.json({
        _id: transportsealtype._id,
        id: transportsealtype.id,
        sealIdentification: transportsealtype.sealIdentification,
        sealTypeCode: transportsealtype.sealTypeCode,
        sealAffixingPartyRole: transportsealtype.sealAffixingPartyRole,
        sealConditionCode: transportsealtype.sealConditionCode,
        sealIdentificationId: transportsealtype.sealIdentification.Id,
        sealTypeCodeId: transportsealtype.sealTypeCode.Id,
        sealAffixingPartyRoleId: transportsealtype.sealAffixingPartyRole.Id,
        sealConditionCodeId: transportsealtype.sealConditionCode.Id,
        createdAt: transportsealtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const sealidentifications = await Identifiertype.findById(req.body.sealIdentificationId);
    const sealtypecodes = await Enumerationlibrary.findById(req.body.sealTypeCodeId);
    const sealaffixingpartyroles = await Enumerationlibrary.findById(req.body.sealAffixingPartyRoleId);
    const sealconditioncodes = await Enumerationlibrary.findById(req.body.sealConditionCodeId);
    const transportsealtype = new Transportsealtype ({
        id: req.body.id,
        sealIdentification: req.body.sealIdentification,
        sealTypeCode: req.body.sealTypeCode,
        sealAffixingPartyRole: req.body.sealAffixingPartyRole,
        sealConditionCode: req.body.sealConditionCode,
        sealIdentification: [{
          Id: sealidentifications._id,
          Name: sealidentifications.id
        }],
        sealTypeCode: [{
          Id: sealtypecodes._id,
          Name: sealtypecodes.id
        }],
        sealAffixingPartyRole: [{
          Id: sealaffixingpartyroles._id,
          Name: sealaffixingpartyroles.id
        }],
        sealConditionCode: [{
          Id: sealconditioncodes._id,
          Name: sealconditioncodes.id
        }],
    });
    const savedTransportsealtype = await transportsealtype.save();
    res.status(200).json(savedTransportsealtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportsealtype = await Transportsealtype.remove({ _id: req.params.id });
    res.json(removedTransportsealtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const sealidentification = await Identifiertype.findById(req.body.sealIdentificationId);
    const sealtypecode = await Enumerationlibrary.findById(req.body.sealTypeCodeId);
    const updatedTransportsealtype = await Transportsealtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             sealIdentification: req.body.sealIdentification,
             sealTypeCode: req.body.sealTypeCode,
             sealAffixingPartyRole: req.body.sealAffixingPartyRole,
             sealConditionCode: req.body.sealConditionCode,
             sealTypeCode: {
              Id: req.body.sealtypecode.id,
              Name: req.body.sealtypecode.id
             },
             sealTypeCode: {
              Id: req.body.sealtypecode.id,
              Name: req.body.sealtypecode.id
             },
             sealTypeCode: {
              Id: req.body.sealtypecode.id,
              Name: req.body.sealtypecode.id
             },
             sealTypeCode: {
              Id: req.body.sealtypecode.id,
              Name: req.body.sealtypecode.id
             },

        }
      }
    );
    res.json(updatedTransportsealtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;