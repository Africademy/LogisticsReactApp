const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Organisationtype = require("../models/Organisationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Organisationtypes = await Organisationtype.find();
    res.json(Organisationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const organisationtype = await Organisationtype.findById(req.params.id);
    res.json({
        _id: organisationtype._id,
        id: organisationtype.id,
        organisationName: organisationtype.organisationName,
        issuedCapital: organisationtype.issuedCapital,
        issuedCapitalId: organisationtype.issuedCapital.Id,
        createdAt: organisationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const issuedcapitals = await Amounttype.findById(req.body.issuedCapitalId);
    const organisationtype = new Organisationtype ({
        id: req.body.id,
        organisationName: req.body.organisationName,
        issuedCapital: req.body.issuedCapital,
        issuedCapital: [{
          Id: issuedcapitals._id,
          Name: issuedcapitals.id
        }],
    });
    const savedOrganisationtype = await organisationtype.save();
    res.status(200).json(savedOrganisationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedOrganisationtype = await Organisationtype.remove({ _id: req.params.id });
    res.json(removedOrganisationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const issuedcapital = await Amounttype.findById(req.body.issuedCapitalId);
    const updatedOrganisationtype = await Organisationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             organisationName: req.body.organisationName,
             issuedCapital: req.body.issuedCapital,
             issuedCapital: {
              Id: req.body.issuedcapital.id,
              Name: req.body.issuedcapital.id
             },

        }
      }
    );
    res.json(updatedOrganisationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;