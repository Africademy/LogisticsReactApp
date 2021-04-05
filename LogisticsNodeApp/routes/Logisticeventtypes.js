const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticeventtype = require("../models/Logisticeventtype");
const Dateoptionaltimetype= require("../models/Dateoptionaltimetype");
const Datetimerangetype= require("../models/Datetimerangetype");
const Timemeasurementtype= require("../models/Timemeasurementtype");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticeventtypes = await Logisticeventtype.find();
    res.json(Logisticeventtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticeventtype = await Logisticeventtype.findById(req.params.id);
    res.json({
        _id: logisticeventtype._id,
        id: logisticeventtype.id,
        logisticEventTypeCode: logisticeventtype.logisticEventTypeCode,
        logisticEventDuration: logisticeventtype.logisticEventDuration,
        logisticLocation: logisticeventtype.logisticLocation,
        logisticEventPeriod: logisticeventtype.logisticEventPeriod,
        logisticEventDateTime: logisticeventtype.logisticEventDateTime,
        logisticEventDateTimeId: logisticeventtype.logisticEventDateTime.Id,
        logisticEventPeriodId: logisticeventtype.logisticEventPeriod.Id,
        logisticEventDurationId: logisticeventtype.logisticEventDuration.Id,
        logisticEventTypeCodeId: logisticeventtype.logisticEventTypeCode.Id,
        logisticLocationId: logisticeventtype.logisticLocation.Id,
        createdAt: logisticeventtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const logisticeventdatetimes = await Dateoptionaltimetype.findById(req.body.logisticEventDateTimeId);
    const logisticeventperiods = await Datetimerangetype.findById(req.body.logisticEventPeriodId);
    const logisticeventdurations = await Timemeasurementtype.findById(req.body.logisticEventDurationId);
    const logisticeventtypecodes = await Enumerationlibrary.findById(req.body.logisticEventTypeCodeId);
    const logisticlocations = await Logisticlocationtype.findById(req.body.logisticLocationId);
    const logisticeventtype = new Logisticeventtype ({
        id: req.body.id,
        logisticEventTypeCode: req.body.logisticEventTypeCode,
        logisticEventDuration: req.body.logisticEventDuration,
        logisticLocation: req.body.logisticLocation,
        logisticEventPeriod: req.body.logisticEventPeriod,
        logisticEventDateTime: req.body.logisticEventDateTime,
        logisticEventDateTime: [{
          Id: logisticeventdatetimes._id,
          Name: logisticeventdatetimes.id
        }],
        logisticEventPeriod: [{
          Id: logisticeventperiods._id,
          Name: logisticeventperiods.id
        }],
        logisticEventDuration: [{
          Id: logisticeventdurations._id,
          Name: logisticeventdurations.id
        }],
        logisticEventTypeCode: [{
          Id: logisticeventtypecodes._id,
          Name: logisticeventtypecodes.id
        }],
        logisticLocation: [{
          Id: logisticlocations._id,
          Name: logisticlocations.id
        }],
    });
    const savedLogisticeventtype = await logisticeventtype.save();
    res.status(200).json(savedLogisticeventtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticeventtype = await Logisticeventtype.remove({ _id: req.params.id });
    res.json(removedLogisticeventtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const logisticeventdatetime = await Dateoptionaltimetype.findById(req.body.logisticEventDateTimeId);
    const logisticeventperiod = await Datetimerangetype.findById(req.body.logisticEventPeriodId);
    const logisticeventduration = await Timemeasurementtype.findById(req.body.logisticEventDurationId);
    const logisticeventtypecode = await Enumerationlibrary.findById(req.body.logisticEventTypeCodeId);
    const logisticlocation = await Logisticlocationtype.findById(req.body.logisticLocationId);
    const updatedLogisticeventtype = await Logisticeventtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             logisticEventTypeCode: req.body.logisticEventTypeCode,
             logisticEventDuration: req.body.logisticEventDuration,
             logisticLocation: req.body.logisticLocation,
             logisticEventPeriod: req.body.logisticEventPeriod,
             logisticEventDateTime: req.body.logisticEventDateTime,
             logisticLocation: {
              Id: req.body.logisticlocation.id,
              Name: req.body.logisticlocation.id
             },
             logisticLocation: {
              Id: req.body.logisticlocation.id,
              Name: req.body.logisticlocation.id
             },
             logisticLocation: {
              Id: req.body.logisticlocation.id,
              Name: req.body.logisticlocation.id
             },
             logisticLocation: {
              Id: req.body.logisticlocation.id,
              Name: req.body.logisticlocation.id
             },
             logisticLocation: {
              Id: req.body.logisticlocation.id,
              Name: req.body.logisticlocation.id
             },

        }
      }
    );
    res.json(updatedLogisticeventtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;