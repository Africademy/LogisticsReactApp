const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Deliverytermstype = require("../models/Deliverytermstype");
const Codetype= require("../models/Codetype");
const Description500type= require("../models/Description500type");
const Logisticlocationtype= require("../models/Logisticlocationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Deliverytermstypes = await Deliverytermstype.find();
    res.json(Deliverytermstypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const deliverytermstype = await Deliverytermstype.findById(req.params.id);
    res.json({
        _id: deliverytermstype._id,
        id: deliverytermstype.id,
        incotermsCode: deliverytermstype.incotermsCode,
        alternateDeliveryTermsCode: deliverytermstype.alternateDeliveryTermsCode,
        deliveryInstructions: deliverytermstype.deliveryInstructions,
        deliveryTermsLocation: deliverytermstype.deliveryTermsLocation,
        alternateDeliveryTermsCodeId: deliverytermstype.alternateDeliveryTermsCode.Id,
        deliveryInstructionsId: deliverytermstype.deliveryInstructions.Id,
        deliveryTermsLocationId: deliverytermstype.deliveryTermsLocation.Id,
        incotermsCodeId: deliverytermstype.incotermsCode.Id,
        createdAt: deliverytermstype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const alternatedeliverytermscodes = await Codetype.findById(req.body.alternateDeliveryTermsCodeId);
    const deliveryinstructionss = await Description500type.findById(req.body.deliveryInstructionsId);
    const deliverytermslocations = await Logisticlocationtype.findById(req.body.deliveryTermsLocationId);
    const incotermscodes = await Enumerationlibrary.findById(req.body.incotermsCodeId);
    const deliverytermstype = new Deliverytermstype ({
        id: req.body.id,
        incotermsCode: req.body.incotermsCode,
        alternateDeliveryTermsCode: req.body.alternateDeliveryTermsCode,
        deliveryInstructions: req.body.deliveryInstructions,
        deliveryTermsLocation: req.body.deliveryTermsLocation,
        alternateDeliveryTermsCode: [{
          Id: alternatedeliverytermscodes._id,
          Name: alternatedeliverytermscodes.id
        }],
        deliveryInstructions: [{
          Id: deliveryinstructionss._id,
          Name: deliveryinstructionss.id
        }],
        deliveryTermsLocation: [{
          Id: deliverytermslocations._id,
          Name: deliverytermslocations.id
        }],
        incotermsCode: [{
          Id: incotermscodes._id,
          Name: incotermscodes.id
        }],
    });
    const savedDeliverytermstype = await deliverytermstype.save();
    res.status(200).json(savedDeliverytermstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDeliverytermstype = await Deliverytermstype.remove({ _id: req.params.id });
    res.json(removedDeliverytermstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const alternatedeliverytermscode = await Codetype.findById(req.body.alternateDeliveryTermsCodeId);
    const deliveryinstructions = await Description500type.findById(req.body.deliveryInstructionsId);
    const deliverytermslocation = await Logisticlocationtype.findById(req.body.deliveryTermsLocationId);
    const incotermscode = await Enumerationlibrary.findById(req.body.incotermsCodeId);
    const updatedDeliverytermstype = await Deliverytermstype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             incotermsCode: req.body.incotermsCode,
             alternateDeliveryTermsCode: req.body.alternateDeliveryTermsCode,
             deliveryInstructions: req.body.deliveryInstructions,
             deliveryTermsLocation: req.body.deliveryTermsLocation,
             incotermsCode: {
              Id: req.body.incotermscode.id,
              Name: req.body.incotermscode.id
             },
             incotermsCode: {
              Id: req.body.incotermscode.id,
              Name: req.body.incotermscode.id
             },
             incotermsCode: {
              Id: req.body.incotermscode.id,
              Name: req.body.incotermscode.id
             },
             incotermsCode: {
              Id: req.body.incotermscode.id,
              Name: req.body.incotermscode.id
             },

        }
      }
    );
    res.json(updatedDeliverytermstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;