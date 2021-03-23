const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Tab1 = require("../models/Tab1");
const Tab2= require("../models/Tab2");

router.get("/", verify, async (req, res) => {
  try {
    const Tab1s = await Tab1.find();
    res.json(Tab1s);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const tab1 = await Tab1.findById(req.params.id);
    let multiselectIds = new Array();
    for(var i=0; i<tab1.multiselect.length; i++){
      multiselectIds.push(tab1.multiselects[i].Id);
    }
    res.json({
        _id: tab1._id,
        id: tab1.id,
        intcol: tab1.intcol,
        VarCharCol: tab1.VarCharCol,
        DateTime: tab1.DateTime,
        FloatCol: tab1.FloatCol,
        TimeCol: tab1.TimeCol,
        DecimalCol: tab1.DecimalCol,
        MediumTextCol: tab1.MediumTextCol,
        fk1Id: tab1.fk1.Id,
        fk2Ids: fk2Ids,
        createdAt: tab1.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const fk1 = await Tab2.findById(req.body.fk1Id);
    let fk2s = new Array();
    for(var i=0; i<req.body.fk2Ids.length; i++){
      const fk2 = await Tab2.findById(req.body.fk2Ids[i]);
      fk2s.push(
        {
          Id: fk2._id,
          Name: fk2.varcharcol
        }
      );
    }
    const tab1 = new Tab1 ({
        id: req.body.id,
        intcol: req.body.intcol,
        VarCharCol: req.body.VarCharCol,
        DateTime: req.body.DateTime,
        FloatCol: req.body.FloatCol,
        TimeCol: req.body.TimeCol,
        DecimalCol: req.body.DecimalCol,
        MediumTextCol: req.body.MediumTextCol,
        fk1: [{
          Id: fk1._id,
          Name: fk1.id
        }],
        fk2: tab2s,
    });
    const savedTab1 = await tab1.save();
    res.status(200).json(savedTab1);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTab1 = await Tab1.remove({ _id: req.params.id });
    res.json(removedTab1);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const fk1 = await Tab2.findById(req.body.fk1Id);
    const updatedTab1 = await Tab1.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             intcol: req.body.intcol,
             VarCharCol: req.body.VarCharCol,
             DateTime: req.body.DateTime,
             FloatCol: req.body.FloatCol,
             TimeCol: req.body.TimeCol,
             DecimalCol: req.body.DecimalCol,
             MediumTextCol: req.body.MediumTextCol,
             fk1: {
              Id: req.body.fk1.id,
              Name: req.body.fk1.id
             },
        fk1s: tab2s,

        }
      }
    );
    res.json(updatedTab1);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;