const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticservicetype = require("../models/Logisticservicetype");
const Amounttype= require("../models/Amounttype");
const Transactionalpartytype= require("../models/Transactionalpartytype");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticservicetypes = await Logisticservicetype.find();
    res.json(Logisticservicetypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticservicetype = await Logisticservicetype.findById(req.params.id);
    res.json({
        _id: logisticservicetype._id,
        id: logisticservicetype.id,
        logisticServiceRequirementCode: logisticservicetype.logisticServiceRequirementCode,
        cashOnDeliveryAmount: logisticservicetype.cashOnDeliveryAmount,
        insuranceValue: logisticservicetype.insuranceValue,
        logisticServiceChargeAmount: logisticservicetype.logisticServiceChargeAmount,
        cashOnDeliveryPayer: logisticservicetype.cashOnDeliveryPayer,
        cashOnDeliveryBillTo: logisticservicetype.cashOnDeliveryBillTo,
        cashOnDeliveryAmountId: logisticservicetype.cashOnDeliveryAmount.Id,
        insuranceValueId: logisticservicetype.insuranceValue.Id,
        logisticServiceChargeAmountId: logisticservicetype.logisticServiceChargeAmount.Id,
        cashOnDeliveryPayerId: logisticservicetype.cashOnDeliveryPayer.Id,
        cashOnDeliveryBillToId: logisticservicetype.cashOnDeliveryBillTo.Id,
        logisticServiceRequirementCodeId: logisticservicetype.logisticServiceRequirementCode.Id,
        createdAt: logisticservicetype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const cashondeliveryamounts = await Amounttype.findById(req.body.cashOnDeliveryAmountId);
    const insurancevalues = await Amounttype.findById(req.body.insuranceValueId);
    const logisticservicechargeamounts = await Amounttype.findById(req.body.logisticServiceChargeAmountId);
    const cashondeliverypayers = await Transactionalpartytype.findById(req.body.cashOnDeliveryPayerId);
    const cashondeliverybilltos = await Transactionalpartytype.findById(req.body.cashOnDeliveryBillToId);
    const logisticservicerequirementcodes = await Enumerationlibrary.findById(req.body.logisticServiceRequirementCodeId);
    const logisticservicetype = new Logisticservicetype ({
        id: req.body.id,
        logisticServiceRequirementCode: req.body.logisticServiceRequirementCode,
        cashOnDeliveryAmount: req.body.cashOnDeliveryAmount,
        insuranceValue: req.body.insuranceValue,
        logisticServiceChargeAmount: req.body.logisticServiceChargeAmount,
        cashOnDeliveryPayer: req.body.cashOnDeliveryPayer,
        cashOnDeliveryBillTo: req.body.cashOnDeliveryBillTo,
        cashOnDeliveryAmount: [{
          Id: cashondeliveryamounts._id,
          Name: cashondeliveryamounts.id
        }],
        insuranceValue: [{
          Id: insurancevalues._id,
          Name: insurancevalues.id
        }],
        logisticServiceChargeAmount: [{
          Id: logisticservicechargeamounts._id,
          Name: logisticservicechargeamounts.id
        }],
        cashOnDeliveryPayer: [{
          Id: cashondeliverypayers._id,
          Name: cashondeliverypayers.id
        }],
        cashOnDeliveryBillTo: [{
          Id: cashondeliverybilltos._id,
          Name: cashondeliverybilltos.id
        }],
        logisticServiceRequirementCode: [{
          Id: logisticservicerequirementcodes._id,
          Name: logisticservicerequirementcodes.id
        }],
    });
    const savedLogisticservicetype = await logisticservicetype.save();
    res.status(200).json(savedLogisticservicetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticservicetype = await Logisticservicetype.remove({ _id: req.params.id });
    res.json(removedLogisticservicetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const cashondeliveryamount = await Amounttype.findById(req.body.cashOnDeliveryAmountId);
    const cashondeliverypayer = await Transactionalpartytype.findById(req.body.cashOnDeliveryPayerId);
    const logisticservicerequirementcode = await Enumerationlibrary.findById(req.body.logisticServiceRequirementCodeId);
    const updatedLogisticservicetype = await Logisticservicetype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             logisticServiceRequirementCode: req.body.logisticServiceRequirementCode,
             cashOnDeliveryAmount: req.body.cashOnDeliveryAmount,
             insuranceValue: req.body.insuranceValue,
             logisticServiceChargeAmount: req.body.logisticServiceChargeAmount,
             cashOnDeliveryPayer: req.body.cashOnDeliveryPayer,
             cashOnDeliveryBillTo: req.body.cashOnDeliveryBillTo,
             logisticServiceRequirementCode: {
              Id: req.body.logisticservicerequirementcode.id,
              Name: req.body.logisticservicerequirementcode.id
             },
             logisticServiceRequirementCode: {
              Id: req.body.logisticservicerequirementcode.id,
              Name: req.body.logisticservicerequirementcode.id
             },
             logisticServiceRequirementCode: {
              Id: req.body.logisticservicerequirementcode.id,
              Name: req.body.logisticservicerequirementcode.id
             },
             logisticServiceRequirementCode: {
              Id: req.body.logisticservicerequirementcode.id,
              Name: req.body.logisticservicerequirementcode.id
             },
             logisticServiceRequirementCode: {
              Id: req.body.logisticservicerequirementcode.id,
              Name: req.body.logisticservicerequirementcode.id
             },
             logisticServiceRequirementCode: {
              Id: req.body.logisticservicerequirementcode.id,
              Name: req.body.logisticservicerequirementcode.id
             },

        }
      }
    );
    res.json(updatedLogisticservicetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;