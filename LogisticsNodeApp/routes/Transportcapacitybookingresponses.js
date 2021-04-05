const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportcapacitybookingresponse = require("../models/Transportcapacitybookingresponse");
const Entityidentificationtype= require("../models/Entityidentificationtype");
const Transportcapacitybooking= require("../models/Transportcapacitybooking");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcapacitybookingresponses = await Transportcapacitybookingresponse.find();
    res.json(Transportcapacitybookingresponses);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookingresponse = await Transportcapacitybookingresponse.findById(req.params.id);
    res.json({
        _id: transportcapacitybookingresponse._id,
        id: transportcapacitybookingresponse.id,
        creationDateTime: transportcapacitybookingresponse.creationDateTime,
        documentStatusCode: transportcapacitybookingresponse.documentStatusCode,
        documentActionCode: transportcapacitybookingresponse.documentActionCode,
        documentStructureVersion: transportcapacitybookingresponse.documentStructureVersion,
        lastUpdateDateTime: transportcapacitybookingresponse.lastUpdateDateTime,
        revisionNumber: transportcapacitybookingresponse.revisionNumber,
        extension: transportcapacitybookingresponse.extension,
        documentEffectiveDate: transportcapacitybookingresponse.documentEffectiveDate,
        avpList: transportcapacitybookingresponse.avpList,
        transportCapacityBookingResponseIdentification: transportcapacitybookingresponse.transportCapacityBookingResponseIdentification,
        transportCapacityBookingStatusCode: transportcapacitybookingresponse.transportCapacityBookingStatusCode,
        logisticServicesBuyer: transportcapacitybookingresponse.logisticServicesBuyer,
        logisticServicesSeller: transportcapacitybookingresponse.logisticServicesSeller,
        transportCapacityBooking: transportcapacitybookingresponse.transportCapacityBooking,
        transportCapacityBookingResponseIdentificationId: transportcapacitybookingresponse.transportCapacityBookingResponseIdentification.Id,
        avpListId: transportcapacitybookingresponse.avpList.Id,
        documentStatusCodeId: transportcapacitybookingresponse.documentStatusCode.Id,
        documentActionCodeId: transportcapacitybookingresponse.documentActionCode.Id,
        transportCapacityBookingStatusCodeId: transportcapacitybookingresponse.transportCapacityBookingStatusCode.Id,
        logisticServicesBuyerId: transportcapacitybookingresponse.logisticServicesBuyer.Id,
        logisticServicesSellerId: transportcapacitybookingresponse.logisticServicesSeller.Id,
        transportCapacityBookingId: transportcapacitybookingresponse.transportCapacityBooking.Id,
        createdAt: transportcapacitybookingresponse.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportcapacitybookingresponseidentifications = await Entityidentificationtype.findById(req.body.transportCapacityBookingResponseIdentificationId);
    const avplists = await Ecomstringattributevaluepairlist.findById(req.body.avpListId);
    const documentstatuscodes = await Enumerationlibrary.findById(req.body.documentStatusCodeId);
    const documentactioncodes = await Enumerationlibrary.findById(req.body.documentActionCodeId);
    const transportcapacitybookingstatuscodes = await Enumerationlibrary.findById(req.body.transportCapacityBookingStatusCodeId);
    const logisticservicesbuyers = await Enumerationlibrary.findById(req.body.logisticServicesBuyerId);
    const logisticservicessellers = await Enumerationlibrary.findById(req.body.logisticServicesSellerId);
    const transportcapacitybookings = await Transportcapacitybooking.findById(req.body.transportCapacityBookingId);
    const transportcapacitybookingresponse = new Transportcapacitybookingresponse ({
        id: req.body.id,
        creationDateTime: req.body.creationDateTime,
        documentStatusCode: req.body.documentStatusCode,
        documentActionCode: req.body.documentActionCode,
        documentStructureVersion: req.body.documentStructureVersion,
        lastUpdateDateTime: req.body.lastUpdateDateTime,
        revisionNumber: req.body.revisionNumber,
        extension: req.body.extension,
        documentEffectiveDate: req.body.documentEffectiveDate,
        avpList: req.body.avpList,
        transportCapacityBookingResponseIdentification: req.body.transportCapacityBookingResponseIdentification,
        transportCapacityBookingStatusCode: req.body.transportCapacityBookingStatusCode,
        logisticServicesBuyer: req.body.logisticServicesBuyer,
        logisticServicesSeller: req.body.logisticServicesSeller,
        transportCapacityBooking: req.body.transportCapacityBooking,
        transportCapacityBookingResponseIdentification: [{
          Id: transportcapacitybookingresponseidentifications._id,
          Name: transportcapacitybookingresponseidentifications.id
        }],
        avpList: [{
          Id: avplists._id,
          Name: avplists.qualifierCodeName
        }],
        documentStatusCode: [{
          Id: documentstatuscodes._id,
          Name: documentstatuscodes.id
        }],
        documentActionCode: [{
          Id: documentactioncodes._id,
          Name: documentactioncodes.id
        }],
        transportCapacityBookingStatusCode: [{
          Id: transportcapacitybookingstatuscodes._id,
          Name: transportcapacitybookingstatuscodes.id
        }],
        logisticServicesBuyer: [{
          Id: logisticservicesbuyers._id,
          Name: logisticservicesbuyers.id
        }],
        logisticServicesSeller: [{
          Id: logisticservicessellers._id,
          Name: logisticservicessellers.id
        }],
        transportCapacityBooking: [{
          Id: transportcapacitybookings._id,
          Name: transportcapacitybookings.id
        }],
    });
    const savedTransportcapacitybookingresponse = await transportcapacitybookingresponse.save();
    res.status(200).json(savedTransportcapacitybookingresponse);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcapacitybookingresponse = await Transportcapacitybookingresponse.remove({ _id: req.params.id });
    res.json(removedTransportcapacitybookingresponse);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookingresponseidentification = await Entityidentificationtype.findById(req.body.transportCapacityBookingResponseIdentificationId);
    const avplist = await Ecomstringattributevaluepairlist.findById(req.body.avpListId);
    const documentstatuscode = await Enumerationlibrary.findById(req.body.documentStatusCodeId);
    const transportcapacitybooking = await Transportcapacitybooking.findById(req.body.transportCapacityBookingId);
    const updatedTransportcapacitybookingresponse = await Transportcapacitybookingresponse.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             creationDateTime: req.body.creationDateTime,
             documentStatusCode: req.body.documentStatusCode,
             documentActionCode: req.body.documentActionCode,
             documentStructureVersion: req.body.documentStructureVersion,
             lastUpdateDateTime: req.body.lastUpdateDateTime,
             revisionNumber: req.body.revisionNumber,
             extension: req.body.extension,
             documentEffectiveDate: req.body.documentEffectiveDate,
             avpList: req.body.avpList,
             transportCapacityBookingResponseIdentification: req.body.transportCapacityBookingResponseIdentification,
             transportCapacityBookingStatusCode: req.body.transportCapacityBookingStatusCode,
             logisticServicesBuyer: req.body.logisticServicesBuyer,
             logisticServicesSeller: req.body.logisticServicesSeller,
             transportCapacityBooking: req.body.transportCapacityBooking,
             transportCapacityBooking: {
              Id: req.body.transportcapacitybooking.id,
              Name: req.body.transportcapacitybooking.id
             },
             transportCapacityBooking: {
              Id: req.body.transportcapacitybooking.id,
              Name: req.body.transportcapacitybooking.qualifierCodeName
             },
             transportCapacityBooking: {
              Id: req.body.transportcapacitybooking.id,
              Name: req.body.transportcapacitybooking.id
             },
             transportCapacityBooking: {
              Id: req.body.transportcapacitybooking.id,
              Name: req.body.transportcapacitybooking.id
             },
             transportCapacityBooking: {
              Id: req.body.transportcapacitybooking.id,
              Name: req.body.transportcapacitybooking.id
             },
             transportCapacityBooking: {
              Id: req.body.transportcapacitybooking.id,
              Name: req.body.transportcapacitybooking.id
             },
             transportCapacityBooking: {
              Id: req.body.transportcapacitybooking.id,
              Name: req.body.transportcapacitybooking.id
             },
             transportCapacityBooking: {
              Id: req.body.transportcapacitybooking.id,
              Name: req.body.transportcapacitybooking.id
             },

        }
      }
    );
    res.json(updatedTransportcapacitybookingresponse);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;