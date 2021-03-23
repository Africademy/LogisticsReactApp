const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Financialinstitutioninformationtype = require("../models/Financialinstitutioninformationtype");
const Financialaccounttype= require("../models/Financialaccounttype");
const Financialroutingnumbertype= require("../models/Financialroutingnumbertype");
const Multidescription70type= require("../models/Multidescription70type");
const Address= require("../models/Address");

router.get("/", verify, async (req, res) => {
  try {
    const Financialinstitutioninformationtypes = await Financialinstitutioninformationtype.find();
    res.json(Financialinstitutioninformationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const financialinstitutioninformationtype = await Financialinstitutioninformationtype.findById(req.params.id);
    res.json({
        _id: financialinstitutioninformationtype._id,
        id: financialinstitutioninformationtype.id,
        financialInstitutionName: financialinstitutioninformationtype.financialInstitutionName,
        financialInstitutionBranchName: financialinstitutioninformationtype.financialInstitutionBranchName,
        financialAccount: financialinstitutioninformationtype.financialAccount,
        financialRoutingNumber: financialinstitutioninformationtype.financialRoutingNumber,
        additionalFinancialInformation: financialinstitutioninformationtype.additionalFinancialInformation,
        address: financialinstitutioninformationtype.address,
        financialAccountId: financialinstitutioninformationtype.financialAccount.Id,
        financialRoutingNumberId: financialinstitutioninformationtype.financialRoutingNumber.Id,
        additionalFinancialInformationId: financialinstitutioninformationtype.additionalFinancialInformation.Id,
        addressId: financialinstitutioninformationtype.address.Id,
        createdAt: financialinstitutioninformationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const financialaccounts = await Financialaccounttype.findById(req.body.financialAccountId);
    const financialroutingnumbers = await Financialroutingnumbertype.findById(req.body.financialRoutingNumberId);
    const additionalfinancialinformations = await Multidescription70type.findById(req.body.additionalFinancialInformationId);
    const addresss = await Address.findById(req.body.addressId);
    const financialinstitutioninformationtype = new Financialinstitutioninformationtype ({
        id: req.body.id,
        financialInstitutionName: req.body.financialInstitutionName,
        financialInstitutionBranchName: req.body.financialInstitutionBranchName,
        financialAccount: req.body.financialAccount,
        financialRoutingNumber: req.body.financialRoutingNumber,
        additionalFinancialInformation: req.body.additionalFinancialInformation,
        address: req.body.address,
        financialAccount: [{
          Id: financialaccounts._id,
          Name: financialaccounts.id
        }],
        financialRoutingNumber: [{
          Id: financialroutingnumbers._id,
          Name: financialroutingnumbers.id
        }],
        additionalFinancialInformation: [{
          Id: additionalfinancialinformations._id,
          Name: additionalfinancialinformations.id
        }],
        address: [{
          Id: addresss._id,
          Name: addresss.id
        }],
    });
    const savedFinancialinstitutioninformationtype = await financialinstitutioninformationtype.save();
    res.status(200).json(savedFinancialinstitutioninformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedFinancialinstitutioninformationtype = await Financialinstitutioninformationtype.remove({ _id: req.params.id });
    res.json(removedFinancialinstitutioninformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const financialaccount = await Financialaccounttype.findById(req.body.financialAccountId);
    const financialroutingnumber = await Financialroutingnumbertype.findById(req.body.financialRoutingNumberId);
    const additionalfinancialinformation = await Multidescription70type.findById(req.body.additionalFinancialInformationId);
    const address = await Address.findById(req.body.addressId);
    const updatedFinancialinstitutioninformationtype = await Financialinstitutioninformationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             financialInstitutionName: req.body.financialInstitutionName,
             financialInstitutionBranchName: req.body.financialInstitutionBranchName,
             financialAccount: req.body.financialAccount,
             financialRoutingNumber: req.body.financialRoutingNumber,
             additionalFinancialInformation: req.body.additionalFinancialInformation,
             address: req.body.address,
             address: {
              Id: req.body.address.id,
              Name: req.body.address.id
             },
             address: {
              Id: req.body.address.id,
              Name: req.body.address.id
             },
             address: {
              Id: req.body.address.id,
              Name: req.body.address.id
             },
             address: {
              Id: req.body.address.id,
              Name: req.body.address.id
             },

        }
      }
    );
    res.json(updatedFinancialinstitutioninformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;