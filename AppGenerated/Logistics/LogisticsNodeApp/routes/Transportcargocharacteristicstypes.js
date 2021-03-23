const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportcargocharacteristicstype = require("../models/Transportcargocharacteristicstype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcargocharacteristicstypes = await Transportcargocharacteristicstype.find();
    res.json(Transportcargocharacteristicstypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportcargocharacteristicstype = await Transportcargocharacteristicstype.findById(req.params.id);
    res.json({
        _id: transportcargocharacteristicstype._id,
        id: transportcargocharacteristicstype.id,
        cargoTypeCode: transportcargocharacteristicstype.cargoTypeCode,
        harmonizedSystemCode: transportcargocharacteristicstype.harmonizedSystemCode,
        cargoTypeDescription: transportcargocharacteristicstype.cargoTypeDescription,
        countryOfOriginCode: transportcargocharacteristicstype.countryOfOriginCode,
        finalDestinationCountry: transportcargocharacteristicstype.finalDestinationCountry,
        totalGrossVolume: transportcargocharacteristicstype.totalGrossVolume,
        totalGrossWeight: transportcargocharacteristicstype.totalGrossWeight,
        totalTransportNetWeight: transportcargocharacteristicstype.totalTransportNetWeight,
        totalChargeableWeight: transportcargocharacteristicstype.totalChargeableWeight,
        declaredWeightForCustoms: transportcargocharacteristicstype.declaredWeightForCustoms,
        totalLoadingLength: transportcargocharacteristicstype.totalLoadingLength,
        associatedInvoiceAmount: transportcargocharacteristicstype.associatedInvoiceAmount,
        declaredValueForCustoms: transportcargocharacteristicstype.declaredValueForCustoms,
        totalPackageQuantity: transportcargocharacteristicstype.totalPackageQuantity,
        totalItemQuantity: transportcargocharacteristicstype.totalItemQuantity,
        createdAt: transportcargocharacteristicstype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportcargocharacteristicstype = new Transportcargocharacteristicstype ({
        id: req.body.id,
        cargoTypeCode: req.body.cargoTypeCode,
        harmonizedSystemCode: req.body.harmonizedSystemCode,
        cargoTypeDescription: req.body.cargoTypeDescription,
        countryOfOriginCode: req.body.countryOfOriginCode,
        finalDestinationCountry: req.body.finalDestinationCountry,
        totalGrossVolume: req.body.totalGrossVolume,
        totalGrossWeight: req.body.totalGrossWeight,
        totalTransportNetWeight: req.body.totalTransportNetWeight,
        totalChargeableWeight: req.body.totalChargeableWeight,
        declaredWeightForCustoms: req.body.declaredWeightForCustoms,
        totalLoadingLength: req.body.totalLoadingLength,
        associatedInvoiceAmount: req.body.associatedInvoiceAmount,
        declaredValueForCustoms: req.body.declaredValueForCustoms,
        totalPackageQuantity: req.body.totalPackageQuantity,
        totalItemQuantity: req.body.totalItemQuantity,
    });
    const savedTransportcargocharacteristicstype = await transportcargocharacteristicstype.save();
    res.status(200).json(savedTransportcargocharacteristicstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcargocharacteristicstype = await Transportcargocharacteristicstype.remove({ _id: req.params.id });
    res.json(removedTransportcargocharacteristicstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTransportcargocharacteristicstype = await Transportcargocharacteristicstype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             cargoTypeCode: req.body.cargoTypeCode,
             harmonizedSystemCode: req.body.harmonizedSystemCode,
             cargoTypeDescription: req.body.cargoTypeDescription,
             countryOfOriginCode: req.body.countryOfOriginCode,
             finalDestinationCountry: req.body.finalDestinationCountry,
             totalGrossVolume: req.body.totalGrossVolume,
             totalGrossWeight: req.body.totalGrossWeight,
             totalTransportNetWeight: req.body.totalTransportNetWeight,
             totalChargeableWeight: req.body.totalChargeableWeight,
             declaredWeightForCustoms: req.body.declaredWeightForCustoms,
             totalLoadingLength: req.body.totalLoadingLength,
             associatedInvoiceAmount: req.body.associatedInvoiceAmount,
             declaredValueForCustoms: req.body.declaredValueForCustoms,
             totalPackageQuantity: req.body.totalPackageQuantity,
             totalItemQuantity: req.body.totalItemQuantity,

        }
      }
    );
    res.json(updatedTransportcargocharacteristicstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;