const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Manifestitem = require("../models/Manifestitem");

router.get("/", verify, async (req, res) => {
  try {
    const Manifestitems = await Manifestitem.find();
    res.json(Manifestitems);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const manifestitem = await Manifestitem.findById(req.params.id);
    res.json({
        _id: manifestitem._id,
        MimeTypeQualifierCode: manifestitem.MimeTypeQualifierCode,
        UniformResourceIdentifier: manifestitem.UniformResourceIdentifier,
        Description: manifestitem.Description,
        LanguageCode: manifestitem.LanguageCode,
        createdAt: manifestitem.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const manifestitem = new Manifestitem ({
        MimeTypeQualifierCode: req.body.MimeTypeQualifierCode,
        UniformResourceIdentifier: req.body.UniformResourceIdentifier,
        Description: req.body.Description,
        LanguageCode: req.body.LanguageCode,
    });
    const savedManifestitem = await manifestitem.save();
    res.status(200).json(savedManifestitem);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedManifestitem = await Manifestitem.remove({ _id: req.params.id });
    res.json(removedManifestitem);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedManifestitem = await Manifestitem.updateOne(
      { _id: req.params.id },
      {
        $set:{
             MimeTypeQualifierCode: req.body.MimeTypeQualifierCode,
             UniformResourceIdentifier: req.body.UniformResourceIdentifier,
             Description: req.body.Description,
             LanguageCode: req.body.LanguageCode,

        }
      }
    );
    res.json(updatedManifestitem);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;