const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportcapacitybooking = require("../models/Transportcapacitybooking");
const Transportcapacitybookingspacerequirement= require("../models/Transportcapacitybookingspacerequirement");
const Transportcapacitybookingtransportmovementtype= require("../models/Transportcapacitybookingtransportmovementtype");
const Incotermscode= require("../models/Incotermscode");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcapacitybookings = await Transportcapacitybooking.find();
    res.json(Transportcapacitybookings);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybooking = await Transportcapacitybooking.findById(req.params.id);
    res.json({
        _id: transportcapacitybooking._id,
        id: transportcapacitybooking.id,
        creationDateTime: transportcapacitybooking.creationDateTime,
        documentStatusCode: transportcapacitybooking.documentStatusCode,
        documentActionCode: transportcapacitybooking.documentActionCode,
        documentStructureVersion: transportcapacitybooking.documentStructureVersion,
        lastUpdateDateTime: transportcapacitybooking.lastUpdateDateTime,
        revisionNumber: transportcapacitybooking.revisionNumber,
        extension: transportcapacitybooking.extension,
        documentEffectiveDate: transportcapacitybooking.documentEffectiveDate,
        avpList: transportcapacitybooking.avpList,
        transportCapacityBookingIdentification: transportcapacitybooking.transportCapacityBookingIdentification,
        transportServiceCategoryCode: transportcapacitybooking.transportServiceCategoryCode,
        transportServiceConditionTypeCode: transportcapacitybooking.transportServiceConditionTypeCode,
        transportServiceLevelCode: transportcapacitybooking.transportServiceLevelCode,
        logisticServicesBuyer: transportcapacitybooking.logisticServicesBuyer,
        logisticServicesSeller: transportcapacitybooking.logisticServicesSeller,
        pickUpParty: transportcapacitybooking.pickUpParty,
        dropOffParty: transportcapacitybooking.dropOffParty,
        plannedPickUp: transportcapacitybooking.plannedPickUp,
        plannedDropOff: transportcapacitybooking.plannedDropOff,
        transportReference: transportcapacitybooking.transportReference,
        deliveryTerms: transportcapacitybooking.deliveryTerms,
        handlingInstruction: transportcapacitybooking.handlingInstruction,
        transportCapacityBookingSpaceRequirements: transportcapacitybooking.transportCapacityBookingSpaceRequirements,
        transportCapacityBookingTransportMovement: transportcapacitybooking.transportCapacityBookingTransportMovement,
        transportCapacityBookingSpaceRequirementsId: transportcapacitybooking.transportCapacityBookingSpaceRequirements.Id,
        transportCapacityBookingTransportMovementId: transportcapacitybooking.transportCapacityBookingTransportMovement.Id,
        avpListId: transportcapacitybooking.avpList.Id,
        documentStatusCodeId: transportcapacitybooking.documentStatusCode.Id,
        dropOffPartyId: transportcapacitybooking.dropOffParty.Id,
        plannedPickUpId: transportcapacitybooking.plannedPickUp.Id,
        plannedDropOffId: transportcapacitybooking.plannedDropOff.Id,
        transportReferenceId: transportcapacitybooking.transportReference.Id,
        handlingInstructionId: transportcapacitybooking.handlingInstruction.Id,
        documentActionCodeId: transportcapacitybooking.documentActionCode.Id,
        transportCapacityBookingIdentificationId: transportcapacitybooking.transportCapacityBookingIdentification.Id,
        transportServiceCategoryCodeId: transportcapacitybooking.transportServiceCategoryCode.Id,
        transportServiceConditionTypeCodeId: transportcapacitybooking.transportServiceConditionTypeCode.Id,
        transportServiceLevelCodeId: transportcapacitybooking.transportServiceLevelCode.Id,
        logisticServicesBuyerId: transportcapacitybooking.logisticServicesBuyer.Id,
        logisticServicesSellerId: transportcapacitybooking.logisticServicesSeller.Id,
        pickUpPartyId: transportcapacitybooking.pickUpParty.Id,
        deliveryTermsId: transportcapacitybooking.deliveryTerms.Id,
        createdAt: transportcapacitybooking.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const transportcapacitybookingspacerequirementss = await Transportcapacitybookingspacerequirement.findById(req.body.transportCapacityBookingSpaceRequirementsId);
    const transportcapacitybookingtransportmovements = await Transportcapacitybookingtransportmovementtype.findById(req.body.transportCapacityBookingTransportMovementId);
    const avplists = await Ecomstringattributevaluepairlist.findById(req.body.avpListId);
    const documentstatuscodes = await Enumerationlibrary.findById(req.body.documentStatusCodeId);
    const dropoffpartys = await Enumerationlibrary.findById(req.body.dropOffPartyId);
    const plannedpickups = await Enumerationlibrary.findById(req.body.plannedPickUpId);
    const planneddropoffs = await Enumerationlibrary.findById(req.body.plannedDropOffId);
    const transportreferences = await Enumerationlibrary.findById(req.body.transportReferenceId);
    const handlinginstructions = await Enumerationlibrary.findById(req.body.handlingInstructionId);
    const documentactioncodes = await Enumerationlibrary.findById(req.body.documentActionCodeId);
    const transportcapacitybookingidentifications = await Enumerationlibrary.findById(req.body.transportCapacityBookingIdentificationId);
    const transportservicecategorycodes = await Enumerationlibrary.findById(req.body.transportServiceCategoryCodeId);
    const transportserviceconditiontypecodes = await Enumerationlibrary.findById(req.body.transportServiceConditionTypeCodeId);
    const transportservicelevelcodes = await Enumerationlibrary.findById(req.body.transportServiceLevelCodeId);
    const logisticservicesbuyers = await Enumerationlibrary.findById(req.body.logisticServicesBuyerId);
    const logisticservicessellers = await Enumerationlibrary.findById(req.body.logisticServicesSellerId);
    const pickuppartys = await Enumerationlibrary.findById(req.body.pickUpPartyId);
    const deliverytermss = await Incotermscode.findById(req.body.deliveryTermsId);
    const transportcapacitybooking = new Transportcapacitybooking ({
        id: req.body.id,
        creationDateTime: req.body.creationDateTime,
        documentStatusCode: req.body.documentStatusCode,
        documentActionCode: req.body.documentActionCode,
        documentStructureVersion: req.body.documentStructureVersion,
        lastUpdateDateTime: req.body.lastUpdateDateTime,
        revisionNumber: req.body.revisionNumber,
        extension: req.body.extension,
        documentEffectiveDate: req.body.documentEffectiveDate,
        avpList: req.body.avpList,
        transportCapacityBookingIdentification: req.body.transportCapacityBookingIdentification,
        transportServiceCategoryCode: req.body.transportServiceCategoryCode,
        transportServiceConditionTypeCode: req.body.transportServiceConditionTypeCode,
        transportServiceLevelCode: req.body.transportServiceLevelCode,
        logisticServicesBuyer: req.body.logisticServicesBuyer,
        logisticServicesSeller: req.body.logisticServicesSeller,
        pickUpParty: req.body.pickUpParty,
        dropOffParty: req.body.dropOffParty,
        plannedPickUp: req.body.plannedPickUp,
        plannedDropOff: req.body.plannedDropOff,
        transportReference: req.body.transportReference,
        deliveryTerms: req.body.deliveryTerms,
        handlingInstruction: req.body.handlingInstruction,
        transportCapacityBookingSpaceRequirements: req.body.transportCapacityBookingSpaceRequirements,
        transportCapacityBookingTransportMovement: req.body.transportCapacityBookingTransportMovement,
        transportCapacityBookingSpaceRequirements: [{
          Id: transportcapacitybookingspacerequirementss._id,
          Name: transportcapacitybookingspacerequirementss.id
        }],
        transportCapacityBookingTransportMovement: [{
          Id: transportcapacitybookingtransportmovements._id,
          Name: transportcapacitybookingtransportmovements.id
        }],
        avpList: [{
          Id: avplists._id,
          Name: avplists.qualifierCodeName
        }],
        documentStatusCode: [{
          Id: documentstatuscodes._id,
          Name: documentstatuscodes.id
        }],
        dropOffParty: [{
          Id: dropoffpartys._id,
          Name: dropoffpartys.id
        }],
        plannedPickUp: [{
          Id: plannedpickups._id,
          Name: plannedpickups.id
        }],
        plannedDropOff: [{
          Id: planneddropoffs._id,
          Name: planneddropoffs.id
        }],
        transportReference: [{
          Id: transportreferences._id,
          Name: transportreferences.id
        }],
        handlingInstruction: [{
          Id: handlinginstructions._id,
          Name: handlinginstructions.id
        }],
        documentActionCode: [{
          Id: documentactioncodes._id,
          Name: documentactioncodes.id
        }],
        transportCapacityBookingIdentification: [{
          Id: transportcapacitybookingidentifications._id,
          Name: transportcapacitybookingidentifications.id
        }],
        transportServiceCategoryCode: [{
          Id: transportservicecategorycodes._id,
          Name: transportservicecategorycodes.id
        }],
        transportServiceConditionTypeCode: [{
          Id: transportserviceconditiontypecodes._id,
          Name: transportserviceconditiontypecodes.id
        }],
        transportServiceLevelCode: [{
          Id: transportservicelevelcodes._id,
          Name: transportservicelevelcodes.id
        }],
        logisticServicesBuyer: [{
          Id: logisticservicesbuyers._id,
          Name: logisticservicesbuyers.id
        }],
        logisticServicesSeller: [{
          Id: logisticservicessellers._id,
          Name: logisticservicessellers.id
        }],
        pickUpParty: [{
          Id: pickuppartys._id,
          Name: pickuppartys.id
        }],
        deliveryTerms: [{
          Id: deliverytermss._id,
          Name: deliverytermss.codeListVersion
        }],
    });
    const savedTransportcapacitybooking = await transportcapacitybooking.save();
    res.status(200).json(savedTransportcapacitybooking);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcapacitybooking = await Transportcapacitybooking.remove({ _id: req.params.id });
    res.json(removedTransportcapacitybooking);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookingspacerequirements = await Transportcapacitybookingspacerequirement.findById(req.body.transportCapacityBookingSpaceRequirementsId);
    const transportcapacitybookingtransportmovement = await Transportcapacitybookingtransportmovementtype.findById(req.body.transportCapacityBookingTransportMovementId);
    const avplist = await Ecomstringattributevaluepairlist.findById(req.body.avpListId);
    const documentstatuscode = await Enumerationlibrary.findById(req.body.documentStatusCodeId);
    const deliveryterms = await Incotermscode.findById(req.body.deliveryTermsId);
    const updatedTransportcapacitybooking = await Transportcapacitybooking.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             creationDateTime: req.body.creationDateTime,
             documentStatusCode: req.body.documentStatusCode,
             documentActionCode: req.body.documentActionCode,
             documentStructureVersion: req.body.documentStructureVersion,
             lastUpdateDateTime: req.body.lastUpdateDateTime,
             revisionNumber: req.body.revisionNumber,
             extension: req.body.extension,
             documentEffectiveDate: req.body.documentEffectiveDate,
             avpList: req.body.avpList,
             transportCapacityBookingIdentification: req.body.transportCapacityBookingIdentification,
             transportServiceCategoryCode: req.body.transportServiceCategoryCode,
             transportServiceConditionTypeCode: req.body.transportServiceConditionTypeCode,
             transportServiceLevelCode: req.body.transportServiceLevelCode,
             logisticServicesBuyer: req.body.logisticServicesBuyer,
             logisticServicesSeller: req.body.logisticServicesSeller,
             pickUpParty: req.body.pickUpParty,
             dropOffParty: req.body.dropOffParty,
             plannedPickUp: req.body.plannedPickUp,
             plannedDropOff: req.body.plannedDropOff,
             transportReference: req.body.transportReference,
             deliveryTerms: req.body.deliveryTerms,
             handlingInstruction: req.body.handlingInstruction,
             transportCapacityBookingSpaceRequirements: req.body.transportCapacityBookingSpaceRequirements,
             transportCapacityBookingTransportMovement: req.body.transportCapacityBookingTransportMovement,
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.qualifierCodeName
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.id
             },
             deliveryTerms: {
              Id: req.body.deliveryterms.id,
              Name: req.body.deliveryterms.codeListVersion
             },

        }
      }
    );
    res.json(updatedTransportcapacitybooking);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;