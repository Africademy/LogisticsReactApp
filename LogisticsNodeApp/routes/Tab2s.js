const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Tab2 = require("../models/Tab2");

router.get("/", verify, async (req, res) => {
  try {
    const Tab2s = await Tab2.find();
    res.json(Tab2s);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const tab2 = await Tab2.findById(req.params.id);
    res.json({
        _id: tab2._id,
        id: tab2.id,
        varcharcol: tab2.varcharcol,
        createdAt: tab2.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const tab2 = new Tab2 ({
        id: req.body.id,
        varcharcol: req.body.varcharcol,
    });
    const savedTab2 = await tab2.save();
    res.status(200).json(savedTab2);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTab2 = await Tab2.remove({ _id: req.params.id });
    res.json(removedTab2);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedTab2 = await Tab2.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             varcharcol: req.body.varcharcol,

        }
      }
    );
    res.json(updatedTab2);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;