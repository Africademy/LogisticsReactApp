const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportinstructiontermstype = require("../models/Transportinstructiontermstype");
const Logisticservicetype= require("../models/Logisticservicetype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportinstructiontermstypes = await Transportinstructiontermstype.find();
    res.json(Transportinstructiontermstypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportinstructiontermstype = await Transportinstructiontermstype.findById(req.params.id);
    res.json({
        _id: transportinstructiontermstype._id,
        id: transportinstructiontermstype.id,
        transportServiceCategoryType: transportinstructiontermstype.transportServiceCategoryType,
        transportCollectChargeAmount: transportinstructiontermstype.transportCollectChargeAmount,
        transportPaymentMethodTypeCode: transportinstructiontermstype.transportPaymentMethodTypeCode,
        transportPickUpChargeAmount: transportinstructiontermstype.transportPickUpChargeAmount,
        transportServiceConditionType: transportinstructiontermstype.transportServiceConditionType,
        transportServiceLevelCode: transportinstructiontermstype.transportServiceLevelCode,
        routeID: transportinstructiontermstype.routeID,
        logisticService: transportinstructiontermstype.logisticService,
        transportCollectChargeAmountId: transportinstructiontermstype.transportCollectChargeAmount.Id,
        transportPickUpChargeAmountId: transportinstructiontermstype.transportPickUpChargeAmount.Id,
        routeIDId: transportinstructiontermstype.routeID.Id,
        logisticServiceId: transportinstructiontermstype.logisticService.Id,
        transportServiceCategoryTypeId: transportinstructiontermstype.transportServiceCategoryType.Id,
        transportPaymentMethodTypeCodeId: transportinstructiontermstype.transportPaymentMethodTypeCode.Id,
        transportServiceConditionTypeId: transportinstructiontermstype.transportServiceConditionType.Id,
        transportServiceLevelCodeId: transportinstructiontermstype.transportServiceLevelCode.Id,
        createdAt: transportinstructiontermstype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportcollectchargeamounts = await Amounttype.findById(req.body.transportCollectChargeAmountId);
    const transportpickupchargeamounts = await Amounttype.findById(req.body.transportPickUpChargeAmountId);
    const routeids = await Identifiertype.findById(req.body.routeIDId);
    const logisticservices = await Logisticservicetype.findById(req.body.logisticServiceId);
    const transportservicecategorytypes = await Enumerationlibrary.findById(req.body.transportServiceCategoryTypeId);
    const transportpaymentmethodtypecodes = await Enumerationlibrary.findById(req.body.transportPaymentMethodTypeCodeId);
    const transportserviceconditiontypes = await Enumerationlibrary.findById(req.body.transportServiceConditionTypeId);
    const transportservicelevelcodes = await Enumerationlibrary.findById(req.body.transportServiceLevelCodeId);
    const transportinstructiontermstype = new Transportinstructiontermstype ({
        id: req.body.id,
        transportServiceCategoryType: req.body.transportServiceCategoryType,
        transportCollectChargeAmount: req.body.transportCollectChargeAmount,
        transportPaymentMethodTypeCode: req.body.transportPaymentMethodTypeCode,
        transportPickUpChargeAmount: req.body.transportPickUpChargeAmount,
        transportServiceConditionType: req.body.transportServiceConditionType,
        transportServiceLevelCode: req.body.transportServiceLevelCode,
        routeID: req.body.routeID,
        logisticService: req.body.logisticService,
        transportCollectChargeAmount: [{
          Id: transportcollectchargeamounts._id,
          Name: transportcollectchargeamounts.id
        }],
        transportPickUpChargeAmount: [{
          Id: transportpickupchargeamounts._id,
          Name: transportpickupchargeamounts.id
        }],
        routeID: [{
          Id: routeids._id,
          Name: routeids.id
        }],
        logisticService: [{
          Id: logisticservices._id,
          Name: logisticservices.id
        }],
        transportServiceCategoryType: [{
          Id: transportservicecategorytypes._id,
          Name: transportservicecategorytypes.id
        }],
        transportPaymentMethodTypeCode: [{
          Id: transportpaymentmethodtypecodes._id,
          Name: transportpaymentmethodtypecodes.id
        }],
        transportServiceConditionType: [{
          Id: transportserviceconditiontypes._id,
          Name: transportserviceconditiontypes.id
        }],
        transportServiceLevelCode: [{
          Id: transportservicelevelcodes._id,
          Name: transportservicelevelcodes.id
        }],
    });
    const savedTransportinstructiontermstype = await transportinstructiontermstype.save();
    res.status(200).json(savedTransportinstructiontermstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportinstructiontermstype = await Transportinstructiontermstype.remove({ _id: req.params.id });
    res.json(removedTransportinstructiontermstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const transportcollectchargeamount = await Amounttype.findById(req.body.transportCollectChargeAmountId);
    const routeid = await Identifiertype.findById(req.body.routeIDId);
    const logisticservice = await Logisticservicetype.findById(req.body.logisticServiceId);
    const transportservicecategorytype = await Enumerationlibrary.findById(req.body.transportServiceCategoryTypeId);
    const updatedTransportinstructiontermstype = await Transportinstructiontermstype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             transportServiceCategoryType: req.body.transportServiceCategoryType,
             transportCollectChargeAmount: req.body.transportCollectChargeAmount,
             transportPaymentMethodTypeCode: req.body.transportPaymentMethodTypeCode,
             transportPickUpChargeAmount: req.body.transportPickUpChargeAmount,
             transportServiceConditionType: req.body.transportServiceConditionType,
             transportServiceLevelCode: req.body.transportServiceLevelCode,
             routeID: req.body.routeID,
             logisticService: req.body.logisticService,
             transportServiceCategoryType: {
              Id: req.body.transportservicecategorytype.id,
              Name: req.body.transportservicecategorytype.id
             },
             transportServiceCategoryType: {
              Id: req.body.transportservicecategorytype.id,
              Name: req.body.transportservicecategorytype.id
             },
             transportServiceCategoryType: {
              Id: req.body.transportservicecategorytype.id,
              Name: req.body.transportservicecategorytype.id
             },
             transportServiceCategoryType: {
              Id: req.body.transportservicecategorytype.id,
              Name: req.body.transportservicecategorytype.id
             },
             transportServiceCategoryType: {
              Id: req.body.transportservicecategorytype.id,
              Name: req.body.transportservicecategorytype.id
             },
             transportServiceCategoryType: {
              Id: req.body.transportservicecategorytype.id,
              Name: req.body.transportservicecategorytype.id
             },
             transportServiceCategoryType: {
              Id: req.body.transportservicecategorytype.id,
              Name: req.body.transportservicecategorytype.id
             },
             transportServiceCategoryType: {
              Id: req.body.transportservicecategorytype.id,
              Name: req.body.transportservicecategorytype.id
             },

        }
      }
    );
    res.json(updatedTransportinstructiontermstype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;