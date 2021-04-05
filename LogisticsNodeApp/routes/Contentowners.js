const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Contentowner = require("../models/Contentowner");

router.get("/", verify, async (req, res) => {
  try {
    const Contentowners = await Contentowner.find();
    res.json(Contentowners);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const contentowner = await Contentowner.findById(req.params.id);
    res.json({
        _id: contentowner._id,
        gln: contentowner.gln,
        createdAt: contentowner.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const contentowner = new Contentowner ({
        gln: req.body.gln,
    });
    const savedContentowner = await contentowner.save();
    res.status(200).json(savedContentowner);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedContentowner = await Contentowner.remove({ _id: req.params.id });
    res.json(removedContentowner);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedContentowner = await Contentowner.updateOne(
      { _id: req.params.id },
      {
        $set:{
             gln: req.body.gln,

        }
      }
    );
    res.json(updatedContentowner);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;