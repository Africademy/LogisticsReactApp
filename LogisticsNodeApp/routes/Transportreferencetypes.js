const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportreferencetype = require("../models/Transportreferencetype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportreferencetypes = await Transportreferencetype.find();
    res.json(Transportreferencetypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportreferencetype = await Transportreferencetype.findById(req.params.id);
    res.json({
        _id: transportreferencetype._id,
        id: transportreferencetype.id,
        creationDateTime: transportreferencetype.creationDateTime,
        revisionNumber: transportreferencetype.revisionNumber,
        lineItemNumber: transportreferencetype.lineItemNumber,
        transportReferenceTypeCode: transportreferencetype.transportReferenceTypeCode,
        transportReferenceTypeCodeId: transportreferencetype.transportReferenceTypeCode.Id,
        createdAt: transportreferencetype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportreferencetypecodes = await Enumerationlibrary.findById(req.body.transportReferenceTypeCodeId);
    const transportreferencetype = new Transportreferencetype ({
        id: req.body.id,
        creationDateTime: req.body.creationDateTime,
        revisionNumber: req.body.revisionNumber,
        lineItemNumber: req.body.lineItemNumber,
        transportReferenceTypeCode: req.body.transportReferenceTypeCode,
        transportReferenceTypeCode: [{
          Id: transportreferencetypecodes._id,
          Name: transportreferencetypecodes.id
        }],
    });
    const savedTransportreferencetype = await transportreferencetype.save();
    res.status(200).json(savedTransportreferencetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportreferencetype = await Transportreferencetype.remove({ _id: req.params.id });
    res.json(removedTransportreferencetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const transportreferencetypecode = await Enumerationlibrary.findById(req.body.transportReferenceTypeCodeId);
    const updatedTransportreferencetype = await Transportreferencetype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             creationDateTime: req.body.creationDateTime,
             revisionNumber: req.body.revisionNumber,
             lineItemNumber: req.body.lineItemNumber,
             transportReferenceTypeCode: req.body.transportReferenceTypeCode,
             transportReferenceTypeCode: {
              Id: req.body.transportreferencetypecode.id,
              Name: req.body.transportreferencetypecode.id
             },

        }
      }
    );
    res.json(updatedTransportreferencetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;