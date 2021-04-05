const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Languageofthepartycode = require("../models/Languageofthepartycode");

router.get("/", verify, async (req, res) => {
  try {
    const Languageofthepartycodes = await Languageofthepartycode.find();
    res.json(Languageofthepartycodes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const languageofthepartycode = await Languageofthepartycode.findById(req.params.id);
    res.json({
        _id: languageofthepartycode._id,
        codeListVersion: languageofthepartycode.codeListVersion,
        createdAt: languageofthepartycode.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const languageofthepartycode = new Languageofthepartycode ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedLanguageofthepartycode = await languageofthepartycode.save();
    res.status(200).json(savedLanguageofthepartycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLanguageofthepartycode = await Languageofthepartycode.remove({ _id: req.params.id });
    res.json(removedLanguageofthepartycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedLanguageofthepartycode = await Languageofthepartycode.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedLanguageofthepartycode);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;