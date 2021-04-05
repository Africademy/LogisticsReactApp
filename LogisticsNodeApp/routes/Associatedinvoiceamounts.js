const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Associatedinvoiceamount = require("../models/Associatedinvoiceamount");

router.get("/", verify, async (req, res) => {
  try {
    const Associatedinvoiceamounts = await Associatedinvoiceamount.find();
    res.json(Associatedinvoiceamounts);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const associatedinvoiceamount = await Associatedinvoiceamount.findById(req.params.id);
    res.json({
        _id: associatedinvoiceamount._id,
        currencyCode: associatedinvoiceamount.currencyCode,
        codeListVersion: associatedinvoiceamount.codeListVersion,
        createdAt: associatedinvoiceamount.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const associatedinvoiceamount = new Associatedinvoiceamount ({
        currencyCode: req.body.currencyCode,
        codeListVersion: req.body.codeListVersion,
    });
    const savedAssociatedinvoiceamount = await associatedinvoiceamount.save();
    res.status(200).json(savedAssociatedinvoiceamount);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAssociatedinvoiceamount = await Associatedinvoiceamount.remove({ _id: req.params.id });
    res.json(removedAssociatedinvoiceamount);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAssociatedinvoiceamount = await Associatedinvoiceamount.updateOne(
      { _id: req.params.id },
      {
        $set:{
             currencyCode: req.body.currencyCode,
             codeListVersion: req.body.codeListVersion,

        }
      }
    );
    res.json(updatedAssociatedinvoiceamount);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;