const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const Packagetotaltype = require("../models/Packagetotaltype");
const Packagetypecode = require("../models/Packagetypecode");

router.get("/", verify, async (req, res) => {
  try {
    const Packagetotaltypes = await Packagetotaltype.find();
    res.json(Packagetotaltypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const packagetotaltype = await Packagetotaltype.findById(req.params.id);
    res.json({
      _id: packagetotaltype._id,
      id: packagetotaltype.id,
      packageTypeCode: packagetotaltype.packageTypeCode,
      totalPackageQuantity: packagetotaltype.totalPackageQuantity,
      totalGrossVolume: packagetotaltype.totalGrossVolume,
      totalGrossWeight: packagetotaltype.totalGrossWeight,
      returnablePackaging: packagetotaltype.returnablePackaging,
      totalGrossVolumeId: packagetotaltype.totalGrossVolume.Id,
      totalGrossWeightId: packagetotaltype.totalGrossWeight.Id,
      returnablePackagingId: packagetotaltype.returnablePackaging.Id,
      packageTypeCodeId: packagetotaltype.packageTypeCode.Id,
      createdAt: packagetotaltype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const packagetypecodes = await Packagetypecode.findById(req.body.packageTypeCodeId);
    const packagetotaltype = new Packagetotaltype({
      totalPackageQuantity: req.body.totalPackageQuantity,
      totalGrossVolume: {
        Value: req.body.totalGrossVolume.value,
        Measurementtype: req.body.totalGrossVolume.measurementtype
      },
      totalGrossWeight: {
        Value: req.body.totalGrossWeight.Value,
        Measurementtype: req.body.totalGrossWeight.Measurementtype
      },
      packageTypeCode: {
        Id: packagetypecodes._id,
        Name: packagetypecodes.codeListVersion
      },
    });
    const savedPackagetotaltype = await packagetotaltype.save();
    res.status(200).json(savedPackagetotaltype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPackagetotaltype = await Packagetotaltype.remove({ _id: req.params.id });
    res.json(removedPackagetotaltype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const packagetypecodes = await Packagetypecode.findById(req.body.packageTypeCodeId);
    const updatedPackagetotaltype = await Packagetotaltype.updateOne(
      { _id: req.params.id },
      {
        $set: {
          totalPackageQuantity: req.body.totalPackageQuantity,
          totalGrossVolume: {
            Value: req.body.totalGrossVolume.value,
            Measurementtype: req.body.totalGrossVolume.measurementtype
          },
          totalGrossWeight: {
            Value: req.body.totalGrossWeight.Value,
            Measurementtype: req.body.totalGrossWeight.Measurementtype
          },
          packageTypeCode: {
            Id: packagetypecodes._id,
            Name: packagetypecodes.codeListVersion
          },
        }
      }
    );
    res.json(updatedPackagetotaltype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;