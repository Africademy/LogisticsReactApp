const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportinstructionconsignmentitemtype = require("../models/Transportinstructionconsignmentitemtype");
const Dangerousgoodsinformationtype= require("../models/Dangerousgoodsinformationtype");
const Ecom_attributevaluepairlisttype= require("../models/Ecom_attributevaluepairlisttype");
const Logisticunittype= require("../models/Logisticunittype");
const Packagetotaltype= require("../models/Packagetotaltype");
const Transportreferencetype= require("../models/Transportreferencetype");
const Handlinginstructiontype= require("../models/Handlinginstructiontype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportinstructionconsignmentitemtypes = await Transportinstructionconsignmentitemtype.find();
    res.json(Transportinstructionconsignmentitemtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportinstructionconsignmentitemtype = await Transportinstructionconsignmentitemtype.findById(req.params.id);
    res.json({
        _id: transportinstructionconsignmentitemtype._id,
        id: transportinstructionconsignmentitemtype.id,
        lineItemNumber: transportinstructionconsignmentitemtype.lineItemNumber,
        parentLineItemNumber: transportinstructionconsignmentitemtype.parentLineItemNumber,
        note: transportinstructionconsignmentitemtype.note,
        transportCargoCharacteristics: transportinstructionconsignmentitemtype.transportCargoCharacteristics,
        packageTotal: transportinstructionconsignmentitemtype.packageTotal,
        logisticUnit: transportinstructionconsignmentitemtype.logisticUnit,
        referencedTransportEquipment: transportinstructionconsignmentitemtype.referencedTransportEquipment,
        transportReference: transportinstructionconsignmentitemtype.transportReference,
        handlingInstruction: transportinstructionconsignmentitemtype.handlingInstruction,
        dangerousGoodsInformation: transportinstructionconsignmentitemtype.dangerousGoodsInformation,
        avpList: transportinstructionconsignmentitemtype.avpList,
        dangerousGoodsInformationId: transportinstructionconsignmentitemtype.dangerousGoodsInformation.Id,
        noteId: transportinstructionconsignmentitemtype.note.Id,
        avpListId: transportinstructionconsignmentitemtype.avpList.Id,
        logisticUnitId: transportinstructionconsignmentitemtype.logisticUnit.Id,
        packageTotalId: transportinstructionconsignmentitemtype.packageTotal.Id,
        transportCargoCharacteristicsId: transportinstructionconsignmentitemtype.transportCargoCharacteristics.Id,
        referencedTransportEquipmentId: transportinstructionconsignmentitemtype.referencedTransportEquipment.Id,
        transportReferenceId: transportinstructionconsignmentitemtype.transportReference.Id,
        handlingInstructionId: transportinstructionconsignmentitemtype.handlingInstruction.Id,
        createdAt: transportinstructionconsignmentitemtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dangerousgoodsinformations = await Dangerousgoodsinformationtype.findById(req.body.dangerousGoodsInformationId);
    const notes = await Description500type.findById(req.body.noteId);
    const avplists = await Ecom_attributevaluepairlisttype.findById(req.body.avpListId);
    const logisticunits = await Logisticunittype.findById(req.body.logisticUnitId);
    const packagetotals = await Packagetotaltype.findById(req.body.packageTotalId);
    const transportcargocharacteristicss = await Transportcargocharacteristicstype.findById(req.body.transportCargoCharacteristicsId);
    const referencedtransportequipments = await Transportequipmenttype.findById(req.body.referencedTransportEquipmentId);
    const transportreferences = await Transportreferencetype.findById(req.body.transportReferenceId);
    const handlinginstructions = await Handlinginstructiontype.findById(req.body.handlingInstructionId);
    const transportinstructionconsignmentitemtype = new Transportinstructionconsignmentitemtype ({
        id: req.body.id,
        lineItemNumber: req.body.lineItemNumber,
        parentLineItemNumber: req.body.parentLineItemNumber,
        note: req.body.note,
        transportCargoCharacteristics: req.body.transportCargoCharacteristics,
        packageTotal: req.body.packageTotal,
        logisticUnit: req.body.logisticUnit,
        referencedTransportEquipment: req.body.referencedTransportEquipment,
        transportReference: req.body.transportReference,
        handlingInstruction: req.body.handlingInstruction,
        dangerousGoodsInformation: req.body.dangerousGoodsInformation,
        avpList: req.body.avpList,
        dangerousGoodsInformation: [{
          Id: dangerousgoodsinformations._id,
          Name: dangerousgoodsinformations.id
        }],
        note: [{
          Id: notes._id,
          Name: notes.id
        }],
        avpList: [{
          Id: avplists._id,
          Name: avplists.id
        }],
        logisticUnit: [{
          Id: logisticunits._id,
          Name: logisticunits.id
        }],
        packageTotal: [{
          Id: packagetotals._id,
          Name: packagetotals.id
        }],
        transportCargoCharacteristics: [{
          Id: transportcargocharacteristicss._id,
          Name: transportcargocharacteristicss.id
        }],
        referencedTransportEquipment: [{
          Id: referencedtransportequipments._id,
          Name: referencedtransportequipments.id
        }],
        transportReference: [{
          Id: transportreferences._id,
          Name: transportreferences.id
        }],
        handlingInstruction: [{
          Id: handlinginstructions._id,
          Name: handlinginstructions.id
        }],
    });
    const savedTransportinstructionconsignmentitemtype = await transportinstructionconsignmentitemtype.save();
    res.status(200).json(savedTransportinstructionconsignmentitemtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportinstructionconsignmentitemtype = await Transportinstructionconsignmentitemtype.remove({ _id: req.params.id });
    res.json(removedTransportinstructionconsignmentitemtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const dangerousgoodsinformation = await Dangerousgoodsinformationtype.findById(req.body.dangerousGoodsInformationId);
    const note = await Description500type.findById(req.body.noteId);
    const avplist = await Ecom_attributevaluepairlisttype.findById(req.body.avpListId);
    const logisticunit = await Logisticunittype.findById(req.body.logisticUnitId);
    const packagetotal = await Packagetotaltype.findById(req.body.packageTotalId);
    const transportcargocharacteristics = await Transportcargocharacteristicstype.findById(req.body.transportCargoCharacteristicsId);
    const referencedtransportequipment = await Transportequipmenttype.findById(req.body.referencedTransportEquipmentId);
    const transportreference = await Transportreferencetype.findById(req.body.transportReferenceId);
    const handlinginstruction = await Handlinginstructiontype.findById(req.body.handlingInstructionId);
    const updatedTransportinstructionconsignmentitemtype = await Transportinstructionconsignmentitemtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             lineItemNumber: req.body.lineItemNumber,
             parentLineItemNumber: req.body.parentLineItemNumber,
             note: req.body.note,
             transportCargoCharacteristics: req.body.transportCargoCharacteristics,
             packageTotal: req.body.packageTotal,
             logisticUnit: req.body.logisticUnit,
             referencedTransportEquipment: req.body.referencedTransportEquipment,
             transportReference: req.body.transportReference,
             handlingInstruction: req.body.handlingInstruction,
             dangerousGoodsInformation: req.body.dangerousGoodsInformation,
             avpList: req.body.avpList,
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },
             handlingInstruction: {
              Id: req.body.handlinginstruction.id,
              Name: req.body.handlinginstruction.id
             },

        }
      }
    );
    res.json(updatedTransportinstructionconsignmentitemtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;