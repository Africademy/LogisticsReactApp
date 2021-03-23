const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Enumerationlibrary = require("../models/Enumerationlibrary");

router.get("/", verify, async (req, res) => {
  try {
    const Enumerationlibrarys = await Enumerationlibrary.find();
    res.json(Enumerationlibrarys);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const enumerationlibrary = await Enumerationlibrary.findById(req.params.id);
    res.json({
        _id: enumerationlibrary._id,
        id: enumerationlibrary.id,
        semanticResourceURN: enumerationlibrary.semanticResourceURN,
        CodeValue: enumerationlibrary.CodeValue,
        resourceSubTypeCode: enumerationlibrary.resourceSubTypeCode,
        CodeList: enumerationlibrary.CodeList,
        Domain: enumerationlibrary.Domain,
        ExternalLink: enumerationlibrary.ExternalLink,
        codeName: enumerationlibrary.codeName,
        Definition: enumerationlibrary.Definition,
        changeLog: enumerationlibrary.changeLog,
        Status: enumerationlibrary.Status,
        Version: enumerationlibrary.Version,
        ChangeDate: enumerationlibrary.ChangeDate,
        changeLogComment: enumerationlibrary.changeLogComment,
        createdAt: enumerationlibrary.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const enumerationlibrary = new Enumerationlibrary ({
        id: req.body.id,
        semanticResourceURN: req.body.semanticResourceURN,
        CodeValue: req.body.CodeValue,
        resourceSubTypeCode: req.body.resourceSubTypeCode,
        CodeList: req.body.CodeList,
        Domain: req.body.Domain,
        ExternalLink: req.body.ExternalLink,
        codeName: req.body.codeName,
        Definition: req.body.Definition,
        changeLog: req.body.changeLog,
        Status: req.body.Status,
        Version: req.body.Version,
        ChangeDate: req.body.ChangeDate,
        changeLogComment: req.body.changeLogComment,
    });
    const savedEnumerationlibrary = await enumerationlibrary.save();
    res.status(200).json(savedEnumerationlibrary);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedEnumerationlibrary = await Enumerationlibrary.remove({ _id: req.params.id });
    res.json(removedEnumerationlibrary);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedEnumerationlibrary = await Enumerationlibrary.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             semanticResourceURN: req.body.semanticResourceURN,
             CodeValue: req.body.CodeValue,
             resourceSubTypeCode: req.body.resourceSubTypeCode,
             CodeList: req.body.CodeList,
             Domain: req.body.Domain,
             ExternalLink: req.body.ExternalLink,
             codeName: req.body.codeName,
             Definition: req.body.Definition,
             changeLog: req.body.changeLog,
             Status: req.body.Status,
             Version: req.body.Version,
             ChangeDate: req.body.ChangeDate,
             changeLogComment: req.body.changeLogComment,

        }
      }
    );
    res.json(updatedEnumerationlibrary);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;