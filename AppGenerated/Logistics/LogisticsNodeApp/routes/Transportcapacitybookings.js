const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const Transportcapacitybooking = require("../models/Transportcapacitybooking");
const Transportcapacitybookingspacerequirement = require("../models/Transportcapacitybookingspacerequirement");
const Transportcapacitybookingtransportmovementtype = require("../models/Transportcapacitybookingtransportmovementtype");
const Incotermscode = require("../models/Incotermscode");
const Transportservicecategorycode = require("../models/Transportservicecategorycode");
const Transportserviceconditiontypecode = require("../models/Transportserviceconditiontypecode");
const Transportservicelevelcode = require("../models/Transportservicelevelcode");
const Logisticservicesbuyer = require("../models/Logisticservicesbuyer");
const Logisticservicesseller = require("../models/Logisticservicesseller");
const Transportcargocharacteristicstype = require("../models/Transportcargocharacteristicstype");
const Packagetotaltype = require("../models/Packagetotaltype");
const Logisticlocationtype = require("../models/Logisticlocationtype");
const Logisticeventdatetime = require("../models/Logisticeventdatetime");
const Logisticeventperiod = require("../models/Logisticeventperiod");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcapacitybookings = await Transportcapacitybooking.find();
    res.json(Transportcapacitybookings);
  } catch (ex) {
    res.status(400).json({
      message: ex.message
    });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookings = await Transportcapacitybooking.find({
      bookingid: Number(req.params.id)
    });
    if (transportcapacitybookings.length === 0) return res.json({
      message: 'No data found'
    });
    res.json(transportcapacitybookings);

    // let data = [];
    // transportcapacitybookings.forEach(transportcapacitybooking => {
    //   data.push({
    //     _id: transportcapacitybooking._id,
    // bookingid: transportcapacitybooking.bookingid,
    // creationDateTime: transportcapacitybooking.creationDateTime,
    // documentStatusCode: transportcapacitybooking.documentStatusCode,
    // documentActionCode: transportcapacitybooking.documentActionCode,
    // documentStructureVersion: transportcapacitybooking.documentStructureVersion,
    // lastUpdateDateTime: transportcapacitybooking.lastUpdateDateTime,
    // revisionNumber: transportcapacitybooking.revisionNumber,
    // extension: transportcapacitybooking.extension,
    // documentEffectiveDate: transportcapacitybooking.documentEffectiveDate,
    // avpList: transportcapacitybooking.avpList,
    // transportCapacityBookingIdentification: transportcapacitybooking.transportCapacityBookingIdentification,
    // transportServiceCategoryCode: transportcapacitybooking.transportServiceCategoryCode,
    // transportServiceConditionTypeCode: transportcapacitybooking.transportServiceConditionTypeCode,
    // transportServiceLevelCode: transportcapacitybooking.transportServiceLevelCode,
    // logisticServicesBuyer: transportcapacitybooking.logisticServicesBuyer,
    // logisticServicesSeller: transportcapacitybooking.logisticServicesSeller,
    // pickUpParty: transportcapacitybooking.pickUpParty,
    // dropOffParty: transportcapacitybooking.dropOffParty,
    // plannedPickUp: transportcapacitybooking.plannedPickUp,
    // plannedDropOff: transportcapacitybooking.plannedDropOff,
    // transportReference: transportcapacitybooking.transportReference,
    // deliveryTerms: transportcapacitybooking.deliveryTerms,
    // handlingInstruction: transportcapacitybooking.handlingInstruction,
    // transportCapacityBookingSpaceRequirements: transportcapacitybooking.transportCapacityBookingSpaceRequirements,
    // transportCapacityBookingTransportMovement: transportcapacitybooking.transportCapacityBookingTransportMovement,
    // transportCapacityBookingSpaceRequirementsId: transportcapacitybooking.transportCapacityBookingSpaceRequirements.Id,
    // transportCapacityBookingTransportMovementId: transportcapacitybooking.transportCapacityBookingTransportMovement.Id,
    // avpListId: transportcapacitybooking.avpList.Id,
    // documentStatusCodeId: transportcapacitybooking.documentStatusCode.Id,
    // dropOffPartyId: transportcapacitybooking.dropOffParty.Id,
    // plannedPickUpId: transportcapacitybooking.plannedPickUp.Id,
    // plannedDropOffId: transportcapacitybooking.plannedDropOff.Id,
    // transportReferenceId: transportcapacitybooking.transportReference.Id,
    // handlingInstructionId: transportcapacitybooking.handlingInstruction.Id,
    // documentActionCodeId: transportcapacitybooking.documentActionCode.Id,
    // transportCapacityBookingIdentificationId: transportcapacitybooking.transportCapacityBookingIdentification.Id,
    // transportServiceCategoryCodeId: transportcapacitybooking.transportServiceCategoryCode.Id,
    // transportServiceConditionTypeCodeId: transportcapacitybooking.transportServiceConditionTypeCode.Id,
    // transportServiceLevelCodeId: transportcapacitybooking.transportServiceLevelCode.Id,
    // logisticServicesBuyerId: transportcapacitybooking.logisticServicesBuyer.Id,
    // logisticServicesSellerId: transportcapacitybooking.logisticServicesSeller.Id,
    // pickUpPartyId: transportcapacitybooking.pickUpParty.Id,
    // deliveryTermsId: transportcapacitybooking.deliveryTerms.Id,
    //     createdAt: transportcapacitybooking.createdAt
    //   });
    // });
    // res.send(data);
  } catch (ex) {
    res.status(400).json({
      message: ex.message
    });
  }
});

router.post("/", verify, async (req, res) => {
  try {

    const transportservicecategorycodes = await Transportservicecategorycode.findById(req.body.transportServiceCategoryCodeId);
    const transportserviceconditiontypecodes = await Transportserviceconditiontypecode.findById(req.body.transportServiceConditionTypeCodeId);
    const transportservicelevelcodes = await Transportservicelevelcode.findById(req.body.transportServiceLevelCodeId);
    // const logisticservicesbuyers = await Logisticservicesbuyer.findById(req.body.logisticServicesBuyerId);
    // const logisticservicessellers = await Logisticservicesseller.findById(req.body.logisticServicesSellerId);
    const transportcargocharacteristicstypes = await Transportcargocharacteristicstype.findById(req.body.transportcargocharacteristicstypeId)
    const packagetotaltypes = await Packagetotaltype.findById(req.body.packagetotaltypeId)
    const plannedPickUplogisticlocationtypes = await Logisticlocationtype.findById(req.body.plannedPickUpLogisticLocationTypeId)
    const plannedPickUplogisticeventdatetimes = await Logisticeventdatetime.findById(req.body.plannedPickUpLogisticEventDateTimeId)
    const plannedPickUplogisticeventperiods = await Logisticeventperiod.findById(req.body.plannedPickUpLogisticEventPeriodId)
    const plannedDropOfflogisticlocationtypes = await Logisticlocationtype.findById(req.body.plannedDropOffLogisticLocationTypeId)
    const plannedDropOfflogisticeventdatetimes = await Logisticeventdatetime.findById(req.body.plannedDropOffLogisticEventDateTimeId)
    const plannedDropOfflogisticeventperiods = await Logisticeventperiod.findById(req.body.plannedDropOffLogisticEventPeriodId)

    const transportcapacitybooking = new Transportcapacitybooking({

      transportCapacityBookingIdentification: req.body.transportCapacityBookingIdentification,
      
      transportCapacityBookingSpaceRequirements: {
        Transportcargocharacteristicstypes: transportcargocharacteristicstypes._id,
        Packagetotaltypes: packagetotaltypes._id
      },
      plannedPickUp: {
        Logisticlocation: plannedPickUplogisticlocationtypes._id,
        LogisticEventDateTime: plannedPickUplogisticeventdatetimes._id,
        LogisticEventPeriod: plannedPickUplogisticeventperiods._id
      },
      plannedDropOff: {
        Logisticlocation: plannedDropOfflogisticlocationtypes._id,
        LogisticEventDateTime: plannedDropOfflogisticeventdatetimes._id,
        LogisticEventPeriod: plannedDropOfflogisticeventperiods._id
      },
      transportServiceCategoryCode: {
        Id: transportservicecategorycodes._id,
        Name: transportservicecategorycodes.codeListVersion
      },
      transportServiceConditionTypeCode: {
        Id: transportserviceconditiontypecodes._id,
        Name: transportserviceconditiontypecodes.codeListVersion
      },
      transportServiceLevelCode: {
        Id: transportservicelevelcodes._id,
        Name: transportservicelevelcodes.codeListVersion
      },
      logisticServicesBuyer: {
        Id: 78767,
        Name: "Sudarshan"
      },
      logisticServicesSeller: {
        Id: 9865,
        Name: "Prabhu"
      }
    });
    const savedTransportcapacitybooking = await transportcapacitybooking.save();
    res.status(200).json(savedTransportcapacitybooking);
  } catch (ex) {
    res.status(400).json({
      message: ex.message
    });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcapacitybooking = await Transportcapacitybooking.remove({
      id: req.params.id
    });
    res.json(removedTransportcapacitybooking);
  } catch (ex) {
    res.status(400).json({
      message: ex.message
    });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookingspacerequirements = await Transportcapacitybookingspacerequirement.findById(req.body.transportCapacityBookingSpaceRequirementsId);
    const transportcapacitybookingtransportmovement = await Transportcapacitybookingtransportmovementtype.findById(req.body.transportCapacityBookingTransportMovementId);
    const avplist = await Ecomstringattributevaluepairlist.findById(req.body.avpListId);
    const documentstatuscode = await Enumerationlibrary.findById(req.body.documentStatusCodeId);
    const deliveryterms = await Incotermscode.findById(req.body.deliveryTermsId);
    const updatedTransportcapacitybooking = await Transportcapacitybooking.updateOne({
      id: req.params.id
    }, {
      $set: {
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
    });
    res.json(updatedTransportcapacitybooking);
  } catch (ex) {
    res.status(400).json({
      message: ex.message
    });
  }
});

module.exports = router;