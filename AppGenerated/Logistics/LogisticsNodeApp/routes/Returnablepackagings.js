const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Returnablepackaging = require("../models/Returnablepackaging");

router.get("/", verify, async (req, res) => {
  try {
    const Returnablepackagings = await Returnablepackaging.find();
    res.json(Returnablepackagings);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const returnablepackaging = await Returnablepackaging.findById(req.params.id);
    res.json({
        _id: returnablepackaging._id,
        packagingQuantity: returnablepackaging.packagingQuantity,
        createdAt: returnablepackaging.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const returnablepackaging = new Returnablepackaging ({
        packagingQuantity: req.body.packagingQuantity,
    });
    const savedReturnablepackaging = await returnablepackaging.save();
    res.status(200).json(savedReturnablepackaging);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedReturnablepackaging = await Returnablepackaging.remove({ _id: req.params.id });
    res.json(removedReturnablepackaging);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedReturnablepackaging = await Returnablepackaging.updateOne(
      { _id: req.params.id },
      {
        $set:{
             packagingQuantity: req.body.packagingQuantity,

        }
      }
    );
    res.json(updatedReturnablepackaging);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;