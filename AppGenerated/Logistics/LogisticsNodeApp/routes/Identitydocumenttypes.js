const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Identitydocumenttype = require("../models/Identitydocumenttype");

router.get("/", verify, async (req, res) => {
  try {
    const Identitydocumenttypes = await Identitydocumenttype.find();
    res.json(Identitydocumenttypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const identitydocumenttype = await Identitydocumenttype.findById(req.params.id);
    res.json({
        _id: identitydocumenttype._id,
        id: identitydocumenttype.id,
        identityDocumentNumber: identitydocumenttype.identityDocumentNumber,
        identityDocumentType: identitydocumenttype.identityDocumentType,
        identityDocumentIssuer: identitydocumenttype.identityDocumentIssuer,
        identityDocumentTypeId: identitydocumenttype.identityDocumentType.Id,
        createdAt: identitydocumenttype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const identitydocumenttypes = await Enumerationlibrary.findById(req.body.identityDocumentTypeId);
    const identitydocumenttype = new Identitydocumenttype ({
        id: req.body.id,
        identityDocumentNumber: req.body.identityDocumentNumber,
        identityDocumentType: req.body.identityDocumentType,
        identityDocumentIssuer: req.body.identityDocumentIssuer,
        identityDocumentType: [{
          Id: identitydocumenttypes._id,
          Name: identitydocumenttypes.id
        }],
    });
    const savedIdentitydocumenttype = await identitydocumenttype.save();
    res.status(200).json(savedIdentitydocumenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedIdentitydocumenttype = await Identitydocumenttype.remove({ _id: req.params.id });
    res.json(removedIdentitydocumenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const identitydocumenttype = await Enumerationlibrary.findById(req.body.identityDocumentTypeId);
    const updatedIdentitydocumenttype = await Identitydocumenttype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             identityDocumentNumber: req.body.identityDocumentNumber,
             identityDocumentType: req.body.identityDocumentType,
             identityDocumentIssuer: req.body.identityDocumentIssuer,
             identityDocumentType: {
              Id: req.body.identitydocumenttype.id,
              Name: req.body.identitydocumenttype.id
             },

        }
      }
    );
    res.json(updatedIdentitydocumenttype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;