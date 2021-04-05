const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportequipmenttype = require("../models/Transportequipmenttype");
const Individualassetidentification= require("../models/Individualassetidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Transportequipmenttypes = await Transportequipmenttype.find();
    res.json(Transportequipmenttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportequipmenttype = await Transportequipmenttype.findById(req.params.id);
    res.json({
        _id: transportequipmenttype._id,
        id: transportequipmenttype.id,
        transportEquipmentTypeCode: transportequipmenttype.transportEquipmentTypeCode,
        returnableAssetTypeIdentification: transportequipmenttype.returnableAssetTypeIdentification,
        individualReturnableAssetIdentification: transportequipmenttype.individualReturnableAssetIdentification,
        individualAssetIdentification: transportequipmenttype.individualAssetIdentification,
        transportEquipmentTypeCodeId: transportequipmenttype.transportEquipmentTypeCode.Id,
        individualAssetIdentificationId: transportequipmenttype.individualAssetIdentification.Id,
        returnableAssetTypeIdentificationId: transportequipmenttype.returnableAssetTypeIdentification.Id,
        individualReturnableAssetIdentificationId: transportequipmenttype.individualReturnableAssetIdentification.Id,
        createdAt: transportequipmenttype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportequipmenttypecodes = await Enumerationlibrary.findById(req.body.transportEquipmentTypeCodeId);
    const individualassetidentifications = await Individualassetidentification.findById(req.body.individualAssetIdentificationId);
    const returnableassettypeidentifications = await Returnableassetidentification.findById(req.body.returnableAssetTypeIdentificationId);
    const individualreturnableassetidentifications = await Returnableassetidentification.findById(req.body.individualReturnableAssetIdentificationId);
    const transportequipmenttype = new Transportequipmenttype ({
        id: req.body.id,
        transportEquipmentTypeCode: req.body.transportEquipmentTypeCode,
        returnableAssetTypeIdentification: req.body.returnableAssetTypeIdentification,
        individualReturnableAssetIdentification: req.body.individualReturnableAssetIdentification,
        individualAssetIdentification: req.body.individualAssetIdentification,
        transportEquipmentTypeCode: [{
          Id: transportequipmenttypecodes._id,
          Name: transportequipmenttypecodes.id
        }],
        individualAssetIdentification: [{
          Id: individualassetidentifications._id,
          Name: individualassetidentifications.id
        }],
        returnableAssetTypeIdentification: [{
          Id: returnableassettypeidentifications._id,
          Name: returnableassettypeidentifications.id
        }],
        individualReturnableAssetIdentification: [{
          Id: individualreturnableassetidentifications._id,
          Name: individualreturnableassetidentifications.id
        }],
    });
    const savedTransportequipmenttype = await transportequipmenttype.save();
    res.status(200).json(savedTransportequipmenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportequipmenttype = await Transportequipmenttype.remove({ _id: req.params.id });
    res.json(removedTransportequipmenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const transportequipmenttypecode = await Enumerationlibrary.findById(req.body.transportEquipmentTypeCodeId);
    const individualassetidentification = await Individualassetidentification.findById(req.body.individualAssetIdentificationId);
    const returnableassettypeidentification = await Returnableassetidentification.findById(req.body.returnableAssetTypeIdentificationId);
    const updatedTransportequipmenttype = await Transportequipmenttype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             transportEquipmentTypeCode: req.body.transportEquipmentTypeCode,
             returnableAssetTypeIdentification: req.body.returnableAssetTypeIdentification,
             individualReturnableAssetIdentification: req.body.individualReturnableAssetIdentification,
             individualAssetIdentification: req.body.individualAssetIdentification,
             returnableAssetTypeIdentification: {
              Id: req.body.returnableassettypeidentification.id,
              Name: req.body.returnableassettypeidentification.id
             },
             returnableAssetTypeIdentification: {
              Id: req.body.returnableassettypeidentification.id,
              Name: req.body.returnableassettypeidentification.id
             },
             returnableAssetTypeIdentification: {
              Id: req.body.returnableassettypeidentification.id,
              Name: req.body.returnableassettypeidentification.id
             },
             returnableAssetTypeIdentification: {
              Id: req.body.returnableassettypeidentification.id,
              Name: req.body.returnableassettypeidentification.id
             },

        }
      }
    );
    res.json(updatedTransportequipmenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;