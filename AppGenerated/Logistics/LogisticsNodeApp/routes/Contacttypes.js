const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Contacttype = require("../models/Contacttype");
const Communicationchannel= require("../models/Communicationchannel");
const Description70type= require("../models/Description70type");
const Contacttypecode = require("../models/Contacttypecode");


router.get("/", verify, async (req, res) => {
  try {
    const Contacttypes = await Contacttype.find();
    res.json(Contacttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const contacttype = await Contacttype.findById(req.params.id);
    res.json({
        _id: contacttype._id,
        id: contacttype.id,
        contactTypeCode: contacttype.contactTypeCode,
        personName: contacttype.personName,
        departmentName: contacttype.departmentName,
        jobTitle: contacttype.jobTitle,
        responsibility: contacttype.responsibility,
        communicationChannel: contacttype.communicationChannel,
        afterHoursCommunicationChannel: contacttype.afterHoursCommunicationChannel,
        communicationChannelId: contacttype.communicationChannel.Id,
        afterHoursCommunicationChannelId: contacttype.afterHoursCommunicationChannel.Id,
        responsibilityId: contacttype.responsibility.Id,
        contactTypeCodeId: contacttype.contactTypeCode.Id,
        createdAt: contacttype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const communicationchannels = await Communicationchannel.findById(req.body.communicationChannelId);
    const responsibilitys = await Description70type.findById(req.body.responsibilityId);
    const contacttypecodes = await Contacttypecode.findById(req.body.contactTypeCodeId);
    const contacttype = new Contacttype ({

        personName: req.body.personName,
        departmentName: req.body.departmentName,
        jobTitle: req.body.jobTitle,
       
        communicationChannel: {
          Id: communicationchannels._id,
          Name: communicationchannels.id
        },
        responsibility: {
          Id: responsibilitys._id,
          Name: responsibilitys.id
        },
        contactTypeCode: {
          Id: contacttypecodes._id,
          Name: contacttypecodes.id
        },
    });
    const savedContacttype = await contacttype.save();
    res.status(200).json(savedContacttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedContacttype = await Contacttype.remove({ _id: req.params.id });
    res.json(removedContacttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const communicationchannel = await Communicationchanneltype.findById(req.body.communicationChannelId);
    const responsibility = await Description70type.findById(req.body.responsibilityId);
    const contacttypecode = await Enumerationlibrary.findById(req.body.contactTypeCodeId);
    const updatedContacttype = await Contacttype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             contactTypeCode: req.body.contactTypeCode,
             personName: req.body.personName,
             departmentName: req.body.departmentName,
             jobTitle: req.body.jobTitle,
             responsibility: req.body.responsibility,
             communicationChannel: req.body.communicationChannel,
             afterHoursCommunicationChannel: req.body.afterHoursCommunicationChannel,
             contactTypeCode: {
              Id: req.body.contacttypecode.id,
              Name: req.body.contacttypecode.id
             },
             contactTypeCode: {
              Id: req.body.contacttypecode.id,
              Name: req.body.contacttypecode.id
             },
             contactTypeCode: {
              Id: req.body.contacttypecode.id,
              Name: req.body.contacttypecode.id
             },
             contactTypeCode: {
              Id: req.body.contacttypecode.id,
              Name: req.body.contacttypecode.id
             },

        }
      }
    );
    res.json(updatedContacttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;