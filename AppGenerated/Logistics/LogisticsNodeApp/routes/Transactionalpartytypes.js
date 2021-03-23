const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transactionalpartytype = require("../models/Transactionalpartytype");
const Dutyfeetaxregistrationtype= require("../models/Dutyfeetaxregistrationtype");
const Financialinstitutioninformationtype= require("../models/Financialinstitutioninformationtype");
const Organisationtype= require("../models/Organisationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Transactionalpartytypes = await Transactionalpartytype.find();
    res.json(Transactionalpartytypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transactionalpartytype = await Transactionalpartytype.findById(req.params.id);
    res.json({
        _id: transactionalpartytype._id,
        id: transactionalpartytype.id,
        gln: transactionalpartytype.gln,
        additionalPartyIdentification: transactionalpartytype.additionalPartyIdentification,
        address: transactionalpartytype.address,
        contact: transactionalpartytype.contact,
        dutyFeeTaxRegistration: transactionalpartytype.dutyFeeTaxRegistration,
        organisationDetails: transactionalpartytype.organisationDetails,
        financialInstitutionInformation: transactionalpartytype.financialInstitutionInformation,
        additionalPartyIdentificationId: transactionalpartytype.additionalPartyIdentification.Id,
        dutyFeeTaxRegistrationId: transactionalpartytype.dutyFeeTaxRegistration.Id,
        financialInstitutionInformationId: transactionalpartytype.financialInstitutionInformation.Id,
        organisationDetailsId: transactionalpartytype.organisationDetails.Id,
        addressId: transactionalpartytype.address.Id,
        contactId: transactionalpartytype.contact.Id,
        createdAt: transactionalpartytype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const additionalpartyidentifications = await Additionalpartyidentificationtype.findById(req.body.additionalPartyIdentificationId);
    const dutyfeetaxregistrations = await Dutyfeetaxregistrationtype.findById(req.body.dutyFeeTaxRegistrationId);
    const financialinstitutioninformations = await Financialinstitutioninformationtype.findById(req.body.financialInstitutionInformationId);
    const organisationdetailss = await Organisationtype.findById(req.body.organisationDetailsId);
    const addresss = await Address.findById(req.body.addressId);
    const contacts = await Contacttype.findById(req.body.contactId);
    const transactionalpartytype = new Transactionalpartytype ({
        id: req.body.id,
        gln: req.body.gln,
        additionalPartyIdentification: req.body.additionalPartyIdentification,
        address: req.body.address,
        contact: req.body.contact,
        dutyFeeTaxRegistration: req.body.dutyFeeTaxRegistration,
        organisationDetails: req.body.organisationDetails,
        financialInstitutionInformation: req.body.financialInstitutionInformation,
        additionalPartyIdentification: [{
          Id: additionalpartyidentifications._id,
          Name: additionalpartyidentifications.id
        }],
        dutyFeeTaxRegistration: [{
          Id: dutyfeetaxregistrations._id,
          Name: dutyfeetaxregistrations.id
        }],
        financialInstitutionInformation: [{
          Id: financialinstitutioninformations._id,
          Name: financialinstitutioninformations.id
        }],
        organisationDetails: [{
          Id: organisationdetailss._id,
          Name: organisationdetailss.id
        }],
        address: [{
          Id: addresss._id,
          Name: addresss.id
        }],
        contact: [{
          Id: contacts._id,
          Name: contacts.id
        }],
    });
    const savedTransactionalpartytype = await transactionalpartytype.save();
    res.status(200).json(savedTransactionalpartytype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransactionalpartytype = await Transactionalpartytype.remove({ _id: req.params.id });
    res.json(removedTransactionalpartytype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const additionalpartyidentification = await Additionalpartyidentificationtype.findById(req.body.additionalPartyIdentificationId);
    const dutyfeetaxregistration = await Dutyfeetaxregistrationtype.findById(req.body.dutyFeeTaxRegistrationId);
    const financialinstitutioninformation = await Financialinstitutioninformationtype.findById(req.body.financialInstitutionInformationId);
    const organisationdetails = await Organisationtype.findById(req.body.organisationDetailsId);
    const address = await Address.findById(req.body.addressId);
    const contact = await Contacttype.findById(req.body.contactId);
    const updatedTransactionalpartytype = await Transactionalpartytype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             gln: req.body.gln,
             additionalPartyIdentification: req.body.additionalPartyIdentification,
             address: req.body.address,
             contact: req.body.contact,
             dutyFeeTaxRegistration: req.body.dutyFeeTaxRegistration,
             organisationDetails: req.body.organisationDetails,
             financialInstitutionInformation: req.body.financialInstitutionInformation,
             contact: {
              Id: req.body.contact.id,
              Name: req.body.contact.id
             },
             contact: {
              Id: req.body.contact.id,
              Name: req.body.contact.id
             },
             contact: {
              Id: req.body.contact.id,
              Name: req.body.contact.id
             },
             contact: {
              Id: req.body.contact.id,
              Name: req.body.contact.id
             },
             contact: {
              Id: req.body.contact.id,
              Name: req.body.contact.id
             },
             contact: {
              Id: req.body.contact.id,
              Name: req.body.contact.id
             },

        }
      }
    );
    res.json(updatedTransactionalpartytype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;