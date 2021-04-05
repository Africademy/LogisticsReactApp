const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Servicetransaction = require("../models/Servicetransaction");

router.get("/", verify, async (req, res) => {
  try {
    const Servicetransactions = await Servicetransaction.find();
    res.json(Servicetransactions);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const servicetransaction = await Servicetransaction.findById(req.params.id);
    res.json({
        _id: servicetransaction._id,
        TypeOfServiceTransaction: servicetransaction.TypeOfServiceTransaction,
        IsNonRepudiationRequired: servicetransaction.IsNonRepudiationRequired,
        IsAuthenticationRequired: servicetransaction.IsAuthenticationRequired,
        IsNonRepudiationOfReceiptRequired: servicetransaction.IsNonRepudiationOfReceiptRequired,
        IsIntegrityCheckRequired: servicetransaction.IsIntegrityCheckRequired,
        IsApplicationErrorResponseRequested: servicetransaction.IsApplicationErrorResponseRequested,
        TimeToAcknowledgeReceipt: servicetransaction.TimeToAcknowledgeReceipt,
        TimeToAcknowledgeAcceptance: servicetransaction.TimeToAcknowledgeAcceptance,
        TimeToPerform: servicetransaction.TimeToPerform,
        Recurrence: servicetransaction.Recurrence,
        createdAt: servicetransaction.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const servicetransaction = new Servicetransaction ({
        TypeOfServiceTransaction: req.body.TypeOfServiceTransaction,
        IsNonRepudiationRequired: req.body.IsNonRepudiationRequired,
        IsAuthenticationRequired: req.body.IsAuthenticationRequired,
        IsNonRepudiationOfReceiptRequired: req.body.IsNonRepudiationOfReceiptRequired,
        IsIntegrityCheckRequired: req.body.IsIntegrityCheckRequired,
        IsApplicationErrorResponseRequested: req.body.IsApplicationErrorResponseRequested,
        TimeToAcknowledgeReceipt: req.body.TimeToAcknowledgeReceipt,
        TimeToAcknowledgeAcceptance: req.body.TimeToAcknowledgeAcceptance,
        TimeToPerform: req.body.TimeToPerform,
        Recurrence: req.body.Recurrence,
    });
    const savedServicetransaction = await servicetransaction.save();
    res.status(200).json(savedServicetransaction);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedServicetransaction = await Servicetransaction.remove({ _id: req.params.id });
    res.json(removedServicetransaction);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedServicetransaction = await Servicetransaction.updateOne(
      { _id: req.params.id },
      {
        $set:{
             TypeOfServiceTransaction: req.body.TypeOfServiceTransaction,
             IsNonRepudiationRequired: req.body.IsNonRepudiationRequired,
             IsAuthenticationRequired: req.body.IsAuthenticationRequired,
             IsNonRepudiationOfReceiptRequired: req.body.IsNonRepudiationOfReceiptRequired,
             IsIntegrityCheckRequired: req.body.IsIntegrityCheckRequired,
             IsApplicationErrorResponseRequested: req.body.IsApplicationErrorResponseRequested,
             TimeToAcknowledgeReceipt: req.body.TimeToAcknowledgeReceipt,
             TimeToAcknowledgeAcceptance: req.body.TimeToAcknowledgeAcceptance,
             TimeToPerform: req.body.TimeToPerform,
             Recurrence: req.body.Recurrence,

        }
      }
    );
    res.json(updatedServicetransaction);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;