const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportcapacitybookingspacerequirement = require("../models/Transportcapacitybookingspacerequirement");
const Transportcargocharacteristicstype= require("../models/Transportcargocharacteristicstype");
const Passengerinformationtype= require("../models/Passengerinformationtype");
const Transportmeanstype= require("../models/Transportmeanstype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcapacitybookingspacerequirements = await Transportcapacitybookingspacerequirement.find();
    res.json(Transportcapacitybookingspacerequirements);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookingspacerequirement = await Transportcapacitybookingspacerequirement.findById(req.params.id);
    res.json({
        _id: transportcapacitybookingspacerequirement._id,
        id: transportcapacitybookingspacerequirement.id,
        transportCargoCharacteristics: transportcapacitybookingspacerequirement.transportCargoCharacteristics,
        packageTotal: transportcapacitybookingspacerequirement.packageTotal,
        includedTransportMeans: transportcapacitybookingspacerequirement.includedTransportMeans,
        passengerInformation: transportcapacitybookingspacerequirement.passengerInformation,
        includedTransportEquipment: transportcapacitybookingspacerequirement.includedTransportEquipment,
        numberOfPiecesOfEquipment: transportcapacitybookingspacerequirement.numberOfPiecesOfEquipment,
        transportEquipmentWeight: transportcapacitybookingspacerequirement.transportEquipmentWeight,
        dimension: transportcapacitybookingspacerequirement.dimension,
        transportEquipmentWeightId: transportcapacitybookingspacerequirement.transportEquipmentWeight.Id,
        transportCargoCharacteristicsId: transportcapacitybookingspacerequirement.transportCargoCharacteristics.Id,
        includedTransportEquipmentId: transportcapacitybookingspacerequirement.includedTransportEquipment.Id,
        dimensionId: transportcapacitybookingspacerequirement.dimension.Id,
        packageTotalId: transportcapacitybookingspacerequirement.packageTotal.Id,
        passengerInformationId: transportcapacitybookingspacerequirement.passengerInformation.Id,
        includedTransportMeansId: transportcapacitybookingspacerequirement.includedTransportMeans.Id,
        createdAt: transportcapacitybookingspacerequirement.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportequipmentweights = await Measurementtype.findById(req.body.transportEquipmentWeightId);
    const transportcargocharacteristicss = await Transportcargocharacteristicstype.findById(req.body.transportCargoCharacteristicsId);
    const includedtransportequipments = await Transportequipmenttype.findById(req.body.includedTransportEquipmentId);
    const dimensions = await Dimensiontype.findById(req.body.dimensionId);
    const packagetotals = await Enumerationlibrary.findById(req.body.packageTotalId);
    const passengerinformations = await Passengerinformationtype.findById(req.body.passengerInformationId);
    const includedtransportmeanss = await Transportmeanstype.findById(req.body.includedTransportMeansId);
    const transportcapacitybookingspacerequirement = new Transportcapacitybookingspacerequirement ({
        id: req.body.id,
        transportCargoCharacteristics: req.body.transportCargoCharacteristics,
        packageTotal: req.body.packageTotal,
        includedTransportMeans: req.body.includedTransportMeans,
        passengerInformation: req.body.passengerInformation,
        includedTransportEquipment: req.body.includedTransportEquipment,
        numberOfPiecesOfEquipment: req.body.numberOfPiecesOfEquipment,
        transportEquipmentWeight: req.body.transportEquipmentWeight,
        dimension: req.body.dimension,
        transportEquipmentWeight: [{
          Id: transportequipmentweights._id,
          Name: transportequipmentweights.id
        }],
        transportCargoCharacteristics: [{
          Id: transportcargocharacteristicss._id,
          Name: transportcargocharacteristicss.id
        }],
        includedTransportEquipment: [{
          Id: includedtransportequipments._id,
          Name: includedtransportequipments.id
        }],
        dimension: [{
          Id: dimensions._id,
          Name: dimensions.id
        }],
        packageTotal: [{
          Id: packagetotals._id,
          Name: packagetotals.id
        }],
        passengerInformation: [{
          Id: passengerinformations._id,
          Name: passengerinformations.id
        }],
        includedTransportMeans: [{
          Id: includedtransportmeanss._id,
          Name: includedtransportmeanss.id
        }],
    });
    const savedTransportcapacitybookingspacerequirement = await transportcapacitybookingspacerequirement.save();
    res.status(200).json(savedTransportcapacitybookingspacerequirement);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcapacitybookingspacerequirement = await Transportcapacitybookingspacerequirement.remove({ _id: req.params.id });
    res.json(removedTransportcapacitybookingspacerequirement);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const transportequipmentweight = await Measurementtype.findById(req.body.transportEquipmentWeightId);
    const transportcargocharacteristics = await Transportcargocharacteristicstype.findById(req.body.transportCargoCharacteristicsId);
    const includedtransportequipment = await Transportequipmenttype.findById(req.body.includedTransportEquipmentId);
    const dimension = await Dimensiontype.findById(req.body.dimensionId);
    const packagetotal = await Enumerationlibrary.findById(req.body.packageTotalId);
    const passengerinformation = await Passengerinformationtype.findById(req.body.passengerInformationId);
    const includedtransportmeans = await Transportmeanstype.findById(req.body.includedTransportMeansId);
    const updatedTransportcapacitybookingspacerequirement = await Transportcapacitybookingspacerequirement.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             transportCargoCharacteristics: req.body.transportCargoCharacteristics,
             packageTotal: req.body.packageTotal,
             includedTransportMeans: req.body.includedTransportMeans,
             passengerInformation: req.body.passengerInformation,
             includedTransportEquipment: req.body.includedTransportEquipment,
             numberOfPiecesOfEquipment: req.body.numberOfPiecesOfEquipment,
             transportEquipmentWeight: req.body.transportEquipmentWeight,
             dimension: req.body.dimension,
             includedTransportMeans: {
              Id: req.body.includedtransportmeans.id,
              Name: req.body.includedtransportmeans.id
             },
             includedTransportMeans: {
              Id: req.body.includedtransportmeans.id,
              Name: req.body.includedtransportmeans.id
             },
             includedTransportMeans: {
              Id: req.body.includedtransportmeans.id,
              Name: req.body.includedtransportmeans.id
             },
             includedTransportMeans: {
              Id: req.body.includedtransportmeans.id,
              Name: req.body.includedtransportmeans.id
             },
             includedTransportMeans: {
              Id: req.body.includedtransportmeans.id,
              Name: req.body.includedtransportmeans.id
             },
             includedTransportMeans: {
              Id: req.body.includedtransportmeans.id,
              Name: req.body.includedtransportmeans.id
             },
             includedTransportMeans: {
              Id: req.body.includedtransportmeans.id,
              Name: req.body.includedtransportmeans.id
             },

        }
      }
    );
    res.json(updatedTransportcapacitybookingspacerequirement);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;