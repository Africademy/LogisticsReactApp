const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticunittype = require("../models/Logisticunittype");
const Dimensiontype= require("../models/Dimensiontype");
const Logisticunitidentificationtype= require("../models/Logisticunitidentificationtype");
const Packagingmarkingtype= require("../models/Packagingmarkingtype");
const Quantitytype= require("../models/Quantitytype");
const Returnablepackagingtype= require("../models/Returnablepackagingtype");
const Transportequipmenttype= require("../models/Transportequipmenttype");
const Unitmeasurementtype= require("../models/Unitmeasurementtype");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticunittypes = await Logisticunittype.find();
    res.json(Logisticunittypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticunittype = await Logisticunittype.findById(req.params.id);
    res.json({
        _id: logisticunittype._id,
        id: logisticunittype.id,
        parentLogisticUnitId: logisticunittype.parentLogisticUnitId,
        grossWeight: logisticunittype.grossWeight,
        packageLevelCode: logisticunittype.packageLevelCode,
        packageTypeCode: logisticunittype.packageTypeCode,
        tradeItemQuantity: logisticunittype.tradeItemQuantity,
        packagingMarking: logisticunittype.packagingMarking,
        referencedTransportEquipment: logisticunittype.referencedTransportEquipment,
        returnablePackaging: logisticunittype.returnablePackaging,
        dimension: logisticunittype.dimension,
        unitMeasurement: logisticunittype.unitMeasurement,
        sscc: logisticunittype.sscc,
        additionalLogisticUnitIdentification: logisticunittype.additionalLogisticUnitIdentification,
        additionalLogisticUnitIdentificationId: logisticunittype.additionalLogisticUnitIdentification.Id,
        dimensionId: logisticunittype.dimension.Id,
        parentLogisticUnitIdId: logisticunittype.parentLogisticUnitId.Id,
        grossWeightId: logisticunittype.grossWeight.Id,
        packagingMarkingId: logisticunittype.packagingMarking.Id,
        tradeItemQuantityId: logisticunittype.tradeItemQuantity.Id,
        returnablePackagingId: logisticunittype.returnablePackaging.Id,
        referencedTransportEquipmentId: logisticunittype.referencedTransportEquipment.Id,
        unitMeasurementId: logisticunittype.unitMeasurement.Id,
        packageLevelCodeId: logisticunittype.packageLevelCode.Id,
        packageTypeCodeId: logisticunittype.packageTypeCode.Id,
        createdAt: logisticunittype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionallogisticunitidentifications = await Additionallogisticunitidentificationtype.findById(req.body.additionalLogisticUnitIdentificationId);
    const dimensions = await Dimensiontype.findById(req.body.dimensionId);
    const parentlogisticunitids = await Logisticunitidentificationtype.findById(req.body.parentLogisticUnitIdId);
    const grossweights = await Measurementtype.findById(req.body.grossWeightId);
    const packagingmarkings = await Packagingmarkingtype.findById(req.body.packagingMarkingId);
    const tradeitemquantitys = await Quantitytype.findById(req.body.tradeItemQuantityId);
    const returnablepackagings = await Returnablepackagingtype.findById(req.body.returnablePackagingId);
    const referencedtransportequipments = await Transportequipmenttype.findById(req.body.referencedTransportEquipmentId);
    const unitmeasurements = await Unitmeasurementtype.findById(req.body.unitMeasurementId);
    const packagelevelcodes = await Enumerationlibrary.findById(req.body.packageLevelCodeId);
    const packagetypecodes = await Enumerationlibrary.findById(req.body.packageTypeCodeId);
    const logisticunittype = new Logisticunittype ({
        id: req.body.id,
        parentLogisticUnitId: req.body.parentLogisticUnitId,
        grossWeight: req.body.grossWeight,
        packageLevelCode: req.body.packageLevelCode,
        packageTypeCode: req.body.packageTypeCode,
        tradeItemQuantity: req.body.tradeItemQuantity,
        packagingMarking: req.body.packagingMarking,
        referencedTransportEquipment: req.body.referencedTransportEquipment,
        returnablePackaging: req.body.returnablePackaging,
        dimension: req.body.dimension,
        unitMeasurement: req.body.unitMeasurement,
        sscc: req.body.sscc,
        additionalLogisticUnitIdentification: req.body.additionalLogisticUnitIdentification,
        additionalLogisticUnitIdentification: [{
          Id: additionallogisticunitidentifications._id,
          Name: additionallogisticunitidentifications.id
        }],
        dimension: [{
          Id: dimensions._id,
          Name: dimensions.id
        }],
        parentLogisticUnitId: [{
          Id: parentlogisticunitids._id,
          Name: parentlogisticunitids.id
        }],
        grossWeight: [{
          Id: grossweights._id,
          Name: grossweights.id
        }],
        packagingMarking: [{
          Id: packagingmarkings._id,
          Name: packagingmarkings.id
        }],
        tradeItemQuantity: [{
          Id: tradeitemquantitys._id,
          Name: tradeitemquantitys.id
        }],
        returnablePackaging: [{
          Id: returnablepackagings._id,
          Name: returnablepackagings.id
        }],
        referencedTransportEquipment: [{
          Id: referencedtransportequipments._id,
          Name: referencedtransportequipments.id
        }],
        unitMeasurement: [{
          Id: unitmeasurements._id,
          Name: unitmeasurements.id
        }],
        packageLevelCode: [{
          Id: packagelevelcodes._id,
          Name: packagelevelcodes.id
        }],
        packageTypeCode: [{
          Id: packagetypecodes._id,
          Name: packagetypecodes.id
        }],
    });
    const savedLogisticunittype = await logisticunittype.save();
    res.status(200).json(savedLogisticunittype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticunittype = await Logisticunittype.remove({ _id: req.params.id });
    res.json(removedLogisticunittype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const additionallogisticunitidentification = await Additionallogisticunitidentificationtype.findById(req.body.additionalLogisticUnitIdentificationId);
    const dimension = await Dimensiontype.findById(req.body.dimensionId);
    const parentlogisticunitid = await Logisticunitidentificationtype.findById(req.body.parentLogisticUnitIdId);
    const grossweight = await Measurementtype.findById(req.body.grossWeightId);
    const packagingmarking = await Packagingmarkingtype.findById(req.body.packagingMarkingId);
    const tradeitemquantity = await Quantitytype.findById(req.body.tradeItemQuantityId);
    const returnablepackaging = await Returnablepackagingtype.findById(req.body.returnablePackagingId);
    const referencedtransportequipment = await Transportequipmenttype.findById(req.body.referencedTransportEquipmentId);
    const unitmeasurement = await Unitmeasurementtype.findById(req.body.unitMeasurementId);
    const packagelevelcode = await Enumerationlibrary.findById(req.body.packageLevelCodeId);
    const updatedLogisticunittype = await Logisticunittype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             parentLogisticUnitId: req.body.parentLogisticUnitId,
             grossWeight: req.body.grossWeight,
             packageLevelCode: req.body.packageLevelCode,
             packageTypeCode: req.body.packageTypeCode,
             tradeItemQuantity: req.body.tradeItemQuantity,
             packagingMarking: req.body.packagingMarking,
             referencedTransportEquipment: req.body.referencedTransportEquipment,
             returnablePackaging: req.body.returnablePackaging,
             dimension: req.body.dimension,
             unitMeasurement: req.body.unitMeasurement,
             sscc: req.body.sscc,
             additionalLogisticUnitIdentification: req.body.additionalLogisticUnitIdentification,
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },
             packageLevelCode: {
              Id: req.body.packagelevelcode.id,
              Name: req.body.packagelevelcode.id
             },

        }
      }
    );
    res.json(updatedLogisticunittype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;