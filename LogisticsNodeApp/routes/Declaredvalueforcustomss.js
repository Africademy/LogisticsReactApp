const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Declaredvalueforcustoms = require("../models/Declaredvalueforcustoms");

router.get("/", verify, async (req, res) => {
  try {
    const Declaredvalueforcustomss = await Declaredvalueforcustoms.find();
    res.json(Declaredvalueforcustomss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const declaredvalueforcustoms = await Declaredvalueforcustoms.findById(req.params.id);
    res.json({
        _id: declaredvalueforcustoms._id,
        currencyCode: declaredvalueforcustoms.currencyCode,
        codeListVersion: declaredvalueforcustoms.codeListVersion,
        createdAt: declaredvalueforcustoms.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const declaredvalueforcustoms = new Declaredvalueforcustoms ({
        currencyCode: req.body.currencyCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedDeclaredvalueforcustoms = await declaredvalueforcustoms.save();
    res.status(200).json(savedDeclaredvalueforcustoms);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDeclaredvalueforcustoms = await Declaredvalueforcustoms.remove({ _id: req.params.id });
    res.json(removedDeclaredvalueforcustoms);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedDeclaredvalueforcustoms = await Declaredvalueforcustoms.updateOne(
      { _id: req.params.id },
      {
        $set:{
             currencyCode: req.body.currencyCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedDeclaredvalueforcustoms);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;