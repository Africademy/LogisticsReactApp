const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Codetype = require("../models/Codetype");

router.get("/", verify, async (req, res) => {
  try {
    const Codetypes = await Codetype.find();
    res.json(Codetypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const codetype = await Codetype.findById(req.params.id);
    res.json({
        _id: codetype._id,
        id: codetype.id,
        String80Type: codetype.String80Type,
        codeDescription: codetype.codeDescription,
        codeListAgencyCode: codetype.codeListAgencyCode,
        codeListAgencyCodeListVersion: codetype.codeListAgencyCodeListVersion,
        codeListAgencyName: codetype.codeListAgencyName,
        codeListName: codetype.codeListName,
        codeListURI: codetype.codeListURI,
        codeListVersion: codetype.codeListVersion,
        createdAt: codetype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const codetype = new Codetype ({
        id: req.body.id,
        String80Type: req.body.String80Type,
        codeDescription: req.body.codeDescription,
        codeListAgencyCode: req.body.codeListAgencyCode,
        codeListAgencyCodeListVersion: req.body.codeListAgencyCodeListVersion,
        codeListAgencyName: req.body.codeListAgencyName,
        codeListName: req.body.codeListName,
        codeListURI: req.body.codeListURI,
        codeListVersion: req.body.codeListVersion,
    });
    const savedCodetype = await codetype.save();
    res.status(200).json(savedCodetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedCodetype = await Codetype.remove({ _id: req.params.id });
    res.json(removedCodetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedCodetype = await Codetype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             String80Type: req.body.String80Type,
             codeDescription: req.body.codeDescription,
             codeListAgencyCode: req.body.codeListAgencyCode,
             codeListAgencyCodeListVersion: req.body.codeListAgencyCodeListVersion,
             codeListAgencyName: req.body.codeListAgencyName,
             codeListName: req.body.codeListName,
             codeListURI: req.body.codeListURI,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedCodetype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;