const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Person = require("../models/Person");
const Identitydocumenttype= require("../models/Identitydocumenttype");

router.get("/", verify, async (req, res) => {
  try {
    const Persons = await Person.find();
    res.json(Persons);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.json({
        _id: person._id,
        id: person.id,
        personName: person.personName,
        dateOfBirth: person.dateOfBirth,
        gender: person.gender,
        nationality: person.nationality,
        identityDocument: person.identityDocument,
        identityDocumentId: person.identityDocument.Id,
        genderId: person.gender.Id,
        nationalityId: person.nationality.Id,
        createdAt: person.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const identitydocuments = await Identitydocumenttype.findById(req.body.identityDocumentId);
    const genders = await Enumerationlibrary.findById(req.body.genderId);
    const nationalitys = await Enumerationlibrary.findById(req.body.nationalityId);
    const person = new Person ({
        id: req.body.id,
        personName: req.body.personName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        nationality: req.body.nationality,
        identityDocument: req.body.identityDocument,
        identityDocument: [{
          Id: identitydocuments._id,
          Name: identitydocuments.id
        }],
        gender: [{
          Id: genders._id,
          Name: genders.id
        }],
        nationality: [{
          Id: nationalitys._id,
          Name: nationalitys.id
        }],
    });
    const savedPerson = await person.save();
    res.status(200).json(savedPerson);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPerson = await Person.remove({ _id: req.params.id });
    res.json(removedPerson);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const identitydocument = await Identitydocumenttype.findById(req.body.identityDocumentId);
    const gender = await Enumerationlibrary.findById(req.body.genderId);
    const updatedPerson = await Person.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             personName: req.body.personName,
             dateOfBirth: req.body.dateOfBirth,
             gender: req.body.gender,
             nationality: req.body.nationality,
             identityDocument: req.body.identityDocument,
             gender: {
              Id: req.body.gender.id,
              Name: req.body.gender.id
             },
             gender: {
              Id: req.body.gender.id,
              Name: req.body.gender.id
             },
             gender: {
              Id: req.body.gender.id,
              Name: req.body.gender.id
             },

        }
      }
    );
    res.json(updatedPerson);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;