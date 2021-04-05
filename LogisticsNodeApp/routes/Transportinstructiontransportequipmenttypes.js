const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportinstructiontransportequipmenttype = require("../models/Transportinstructiontransportequipmenttype");
const Transportsealtype= require("../models/Transportsealtype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportinstructiontransportequipmenttypes = await Transportinstructiontransportequipmenttype.find();
    res.json(Transportinstructiontransportequipmenttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportinstructiontransportequipmenttype = await Transportinstructiontransportequipmenttype.findById(req.params.id);
    res.json({
        _id: transportinstructiontransportequipmenttype._id,
        id: transportinstructiontransportequipmenttype.id,
        transportEquipmentWeight: transportinstructiontransportequipmenttype.transportEquipmentWeight,
        transportEquipmentProviderPartyRole: transportinstructiontransportequipmenttype.transportEquipmentProviderPartyRole,
        pickUpLocation: transportinstructiontransportequipmenttype.pickUpLocation,
        returnLocation: transportinstructiontransportequipmenttype.returnLocation,
        transportSeal: transportinstructiontransportequipmenttype.transportSeal,
        dimension: transportinstructiontransportequipmenttype.dimension,
        transportEquipmentTypeCode: transportinstructiontransportequipmenttype.transportEquipmentTypeCode,
        returnableAssetTypeIdentification: transportinstructiontransportequipmenttype.returnableAssetTypeIdentification,
        individualReturnableAssetIdentification: transportinstructiontransportequipmenttype.individualReturnableAssetIdentification,
        individualAssetIdentification: transportinstructiontransportequipmenttype.individualAssetIdentification,
        dimensionId: transportinstructiontransportequipmenttype.dimension.Id,
        pickUpLocationId: transportinstructiontransportequipmenttype.pickUpLocation.Id,
        returnLocationId: transportinstructiontransportequipmenttype.returnLocation.Id,
        transportEquipmentWeightId: transportinstructiontransportequipmenttype.transportEquipmentWeight.Id,
        transportSealId: transportinstructiontransportequipmenttype.transportSeal.Id,
        transportEquipmentProviderPartyRoleId: transportinstructiontransportequipmenttype.transportEquipmentProviderPartyRole.Id,
        transportEquipmentTypeCodeId: transportinstructiontransportequipmenttype.transportEquipmentTypeCode.Id,
        individualAssetIdentificationId: transportinstructiontransportequipmenttype.individualAssetIdentification.Id,
        returnableAssetTypeIdentificationId: transportinstructiontransportequipmenttype.returnableAssetTypeIdentification.Id,
        individualReturnableAssetIdentificationId: transportinstructiontransportequipmenttype.individualReturnableAssetIdentification.Id,
        createdAt: transportinstructiontransportequipmenttype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dimensions = await Dimensiontype.findById(req.body.dimensionId);
    const pickuplocations = await Logisticlocationtype.findById(req.body.pickUpLocationId);
    const returnlocations = await Logisticlocationtype.findById(req.body.returnLocationId);
    const transportequipmentweights = await Measurementtype.findById(req.body.transportEquipmentWeightId);
    const transportseals = await Transportsealtype.findById(req.body.transportSealId);
    const transportequipmentproviderpartyroles = await Enumerationlibrary.findById(req.body.transportEquipmentProviderPartyRoleId);
    const transportequipmenttypecodes = await Enumerationlibrary.findById(req.body.transportEquipmentTypeCodeId);
    const individualassetidentifications = await Enumerationlibrary.findById(req.body.individualAssetIdentificationId);
    const returnableassettypeidentifications = await Returnableassetidentification.findById(req.body.returnableAssetTypeIdentificationId);
    const individualreturnableassetidentifications = await Returnableassetidentification.findById(req.body.individualReturnableAssetIdentificationId);
    const transportinstructiontransportequipmenttype = new Transportinstructiontransportequipmenttype ({
        id: req.body.id,
        transportEquipmentWeight: req.body.transportEquipmentWeight,
        transportEquipmentProviderPartyRole: req.body.transportEquipmentProviderPartyRole,
        pickUpLocation: req.body.pickUpLocation,
        returnLocation: req.body.returnLocation,
        transportSeal: req.body.transportSeal,
        dimension: req.body.dimension,
        transportEquipmentTypeCode: req.body.transportEquipmentTypeCode,
        returnableAssetTypeIdentification: req.body.returnableAssetTypeIdentification,
        individualReturnableAssetIdentification: req.body.individualReturnableAssetIdentification,
        individualAssetIdentification: req.body.individualAssetIdentification,
        dimension: [{
          Id: dimensions._id,
          Name: dimensions.id
        }],
        pickUpLocation: [{
          Id: pickuplocations._id,
          Name: pickuplocations.id
        }],
        returnLocation: [{
          Id: returnlocations._id,
          Name: returnlocations.id
        }],
        transportEquipmentWeight: [{
          Id: transportequipmentweights._id,
          Name: transportequipmentweights.id
        }],
        transportSeal: [{
          Id: transportseals._id,
          Name: transportseals.id
        }],
        transportEquipmentProviderPartyRole: [{
          Id: transportequipmentproviderpartyroles._id,
          Name: transportequipmentproviderpartyroles.id
        }],
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
    const savedTransportinstructiontransportequipmenttype = await transportinstructiontransportequipmenttype.save();
    res.status(200).json(savedTransportinstructiontransportequipmenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportinstructiontransportequipmenttype = await Transportinstructiontransportequipmenttype.remove({ _id: req.params.id });
    res.json(removedTransportinstructiontransportequipmenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const dimension = await Dimensiontype.findById(req.body.dimensionId);
    const pickuplocation = await Logisticlocationtype.findById(req.body.pickUpLocationId);
    const transportequipmentweight = await Measurementtype.findById(req.body.transportEquipmentWeightId);
    const transportseal = await Transportsealtype.findById(req.body.transportSealId);
    const transportequipmentproviderpartyrole = await Enumerationlibrary.findById(req.body.transportEquipmentProviderPartyRoleId);
    const returnableassettypeidentification = await Returnableassetidentification.findById(req.body.returnableAssetTypeIdentificationId);
    const updatedTransportinstructiontransportequipmenttype = await Transportinstructiontransportequipmenttype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             transportEquipmentWeight: req.body.transportEquipmentWeight,
             transportEquipmentProviderPartyRole: req.body.transportEquipmentProviderPartyRole,
             pickUpLocation: req.body.pickUpLocation,
             returnLocation: req.body.returnLocation,
             transportSeal: req.body.transportSeal,
             dimension: req.body.dimension,
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
    res.json(updatedTransportinstructiontransportequipmenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;