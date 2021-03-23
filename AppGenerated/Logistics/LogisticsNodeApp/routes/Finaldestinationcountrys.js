const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Finaldestinationcountry = require("../models/Finaldestinationcountry");

router.get("/", verify, async (req, res) => {
  try {
    const Finaldestinationcountrys = await Finaldestinationcountry.find();
    res.json(Finaldestinationcountrys);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const finaldestinationcountry = await Finaldestinationcountry.findById(req.params.id);
    res.json({
        _id: finaldestinationcountry._id,
        codeListVersion: finaldestinationcountry.codeListVersion,
        createdAt: finaldestinationcountry.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const finaldestinationcountry = new Finaldestinationcountry ({
        codeListVersion: req.body.codeListVersion,
    });
    const savedFinaldestinationcountry = await finaldestinationcountry.save();
    res.status(200).json(savedFinaldestinationcountry);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedFinaldestinationcountry = await Finaldestinationcountry.remove({ _id: req.params.id });
    res.json(removedFinaldestinationcountry);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedFinaldestinationcountry = await Finaldestinationcountry.updateOne(
      { _id: req.params.id },
      {
        $set:{
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedFinaldestinationcountry);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;