const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dangerousgoodsinformationtype = require("../models/Dangerousgoodsinformationtype");
const Contacttype= require("../models/Contacttype");
const Dangerousgoodsregulationinformationtype= require("../models/Dangerousgoodsregulationinformationtype");
const Description1000type= require("../models/Description1000type");
const Description200type= require("../models/Description200type");
const Identifiertype= require("../models/Identifiertype");

router.get("/", verify, async (req, res) => {
  try {
    const Dangerousgoodsinformationtypes = await Dangerousgoodsinformationtype.find();
    res.json(Dangerousgoodsinformationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dangerousgoodsinformationtype = await Dangerousgoodsinformationtype.findById(req.params.id);
    res.json({
        _id: dangerousgoodsinformationtype._id,
        id: dangerousgoodsinformationtype.id,
        dangerousGoodsUNIdentifier: dangerousgoodsinformationtype.dangerousGoodsUNIdentifier,
        dangerousGoodsShippingName: dangerousgoodsinformationtype.dangerousGoodsShippingName,
        dangerousGoodsTechnicalName: dangerousgoodsinformationtype.dangerousGoodsTechnicalName,
        dangerousGoodsDescription: dangerousgoodsinformationtype.dangerousGoodsDescription,
        contact: dangerousgoodsinformationtype.contact,
        dangerousGoodsRegulationInformation: dangerousgoodsinformationtype.dangerousGoodsRegulationInformation,
        contactId: dangerousgoodsinformationtype.contact.Id,
        dangerousGoodsRegulationInformationId: dangerousgoodsinformationtype.dangerousGoodsRegulationInformation.Id,
        dangerousGoodsDescriptionId: dangerousgoodsinformationtype.dangerousGoodsDescription.Id,
        dangerousGoodsShippingNameId: dangerousgoodsinformationtype.dangerousGoodsShippingName.Id,
        dangerousGoodsTechnicalNameId: dangerousgoodsinformationtype.dangerousGoodsTechnicalName.Id,
        dangerousGoodsUNIdentifierId: dangerousgoodsinformationtype.dangerousGoodsUNIdentifier.Id,
        createdAt: dangerousgoodsinformationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const contacts = await Contacttype.findById(req.body.contactId);
    const dangerousgoodsregulationinformations = await Dangerousgoodsregulationinformationtype.findById(req.body.dangerousGoodsRegulationInformationId);
    const dangerousgoodsdescriptions = await Description1000type.findById(req.body.dangerousGoodsDescriptionId);
    const dangerousgoodsshippingnames = await Description200type.findById(req.body.dangerousGoodsShippingNameId);
    const dangerousgoodstechnicalnames = await Description200type.findById(req.body.dangerousGoodsTechnicalNameId);
    const dangerousgoodsunidentifiers = await Identifiertype.findById(req.body.dangerousGoodsUNIdentifierId);
    const dangerousgoodsinformationtype = new Dangerousgoodsinformationtype ({
        id: req.body.id,
        dangerousGoodsUNIdentifier: req.body.dangerousGoodsUNIdentifier,
        dangerousGoodsShippingName: req.body.dangerousGoodsShippingName,
        dangerousGoodsTechnicalName: req.body.dangerousGoodsTechnicalName,
        dangerousGoodsDescription: req.body.dangerousGoodsDescription,
        contact: req.body.contact,
        dangerousGoodsRegulationInformation: req.body.dangerousGoodsRegulationInformation,
        contact: [{
          Id: contacts._id,
          Name: contacts.id
        }],
        dangerousGoodsRegulationInformation: [{
          Id: dangerousgoodsregulationinformations._id,
          Name: dangerousgoodsregulationinformations.id
        }],
        dangerousGoodsDescription: [{
          Id: dangerousgoodsdescriptions._id,
          Name: dangerousgoodsdescriptions.id
        }],
        dangerousGoodsShippingName: [{
          Id: dangerousgoodsshippingnames._id,
          Name: dangerousgoodsshippingnames.id
        }],
        dangerousGoodsTechnicalName: [{
          Id: dangerousgoodstechnicalnames._id,
          Name: dangerousgoodstechnicalnames.id
        }],
        dangerousGoodsUNIdentifier: [{
          Id: dangerousgoodsunidentifiers._id,
          Name: dangerousgoodsunidentifiers.id
        }],
    });
    const savedDangerousgoodsinformationtype = await dangerousgoodsinformationtype.save();
    res.status(200).json(savedDangerousgoodsinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDangerousgoodsinformationtype = await Dangerousgoodsinformationtype.remove({ _id: req.params.id });
    res.json(removedDangerousgoodsinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const contact = await Contacttype.findById(req.body.contactId);
    const dangerousgoodsregulationinformation = await Dangerousgoodsregulationinformationtype.findById(req.body.dangerousGoodsRegulationInformationId);
    const dangerousgoodsdescription = await Description1000type.findById(req.body.dangerousGoodsDescriptionId);
    const dangerousgoodsshippingname = await Description200type.findById(req.body.dangerousGoodsShippingNameId);
    const dangerousgoodsunidentifier = await Identifiertype.findById(req.body.dangerousGoodsUNIdentifierId);
    const updatedDangerousgoodsinformationtype = await Dangerousgoodsinformationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             dangerousGoodsUNIdentifier: req.body.dangerousGoodsUNIdentifier,
             dangerousGoodsShippingName: req.body.dangerousGoodsShippingName,
             dangerousGoodsTechnicalName: req.body.dangerousGoodsTechnicalName,
             dangerousGoodsDescription: req.body.dangerousGoodsDescription,
             contact: req.body.contact,
             dangerousGoodsRegulationInformation: req.body.dangerousGoodsRegulationInformation,
             dangerousGoodsUNIdentifier: {
              Id: req.body.dangerousgoodsunidentifier.id,
              Name: req.body.dangerousgoodsunidentifier.id
             },
             dangerousGoodsUNIdentifier: {
              Id: req.body.dangerousgoodsunidentifier.id,
              Name: req.body.dangerousgoodsunidentifier.id
             },
             dangerousGoodsUNIdentifier: {
              Id: req.body.dangerousgoodsunidentifier.id,
              Name: req.body.dangerousgoodsunidentifier.id
             },
             dangerousGoodsUNIdentifier: {
              Id: req.body.dangerousgoodsunidentifier.id,
              Name: req.body.dangerousgoodsunidentifier.id
             },
             dangerousGoodsUNIdentifier: {
              Id: req.body.dangerousgoodsunidentifier.id,
              Name: req.body.dangerousgoodsunidentifier.id
             },
             dangerousGoodsUNIdentifier: {
              Id: req.body.dangerousgoodsunidentifier.id,
              Name: req.body.dangerousgoodsunidentifier.id
             },

        }
      }
    );
    res.json(updatedDangerousgoodsinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;