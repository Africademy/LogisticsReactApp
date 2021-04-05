const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Scope = require("../models/Scope");

router.get("/", verify, async (req, res) => {
  try {
    const Scopes = await Scope.find();
    res.json(Scopes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const scope = await Scope.findById(req.params.id);
    res.json({
        _id: scope._id,
        Type: scope.Type,
        InstanceIdentifier: scope.InstanceIdentifier,
        Identifier: scope.Identifier,
        createdAt: scope.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const scope = new Scope ({
        Type: req.body.Type,
        InstanceIdentifier: req.body.InstanceIdentifier,
        Identifier: req.body.Identifier,
    });
    const savedScope = await scope.save();
    res.status(200).json(savedScope);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedScope = await Scope.remove({ _id: req.params.id });
    res.json(removedScope);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedScope = await Scope.updateOne(
      { _id: req.params.id },
      {
        $set:{
             Type: req.body.Type,
             InstanceIdentifier: req.body.InstanceIdentifier,
             Identifier: req.body.Identifier,

        }
      }
    );
    res.json(updatedScope);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;