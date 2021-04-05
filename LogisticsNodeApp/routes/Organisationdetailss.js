const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Organisationdetails = require("../models/Organisationdetails");

router.get("/", verify, async (req, res) => {
  try {
    const Organisationdetailss = await Organisationdetails.find();
    res.json(Organisationdetailss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const organisationdetails = await Organisationdetails.findById(req.params.id);
    res.json({
        _id: organisationdetails._id,
        organisationName: organisationdetails.organisationName,
        createdAt: organisationdetails.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const organisationdetails = new Organisationdetails ({
        organisationName: req.body.organisationName,
    });
    const savedOrganisationdetails = await organisationdetails.save();
    res.status(200).json(savedOrganisationdetails);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedOrganisationdetails = await Organisationdetails.remove({ _id: req.params.id });
    res.json(removedOrganisationdetails);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedOrganisationdetails = await Organisationdetails.updateOne(
      { _id: req.params.id },
      {
        $set:{
             organisationName: req.body.organisationName,

        }
      }
    );
    res.json(updatedOrganisationdetails);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;