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
const Transportcargocharacteristicstype = require("../models/Transportcargocharacteristicstype");
const Packagetotaltype = require("../models/Packagetotaltype");
const Logisticlocationtype = require("../models/Logisticlocationtype");
const Logisticeventdatetime = require("../models/Logisticeventdatetime");
const Logisticeventperiod = require("../models/Logisticeventperiod");
const Contacttypecode = require("../models/Contacttypecode");
const Contacttype = require("../models/Contacttype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcapacitybookings = await Transportcapacitybooking.find()
      .populate(
        "transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes"
      )
      .populate("transportCapacityBookingSpaceRequirements.Packagetotaltypes")
      .populate("plannedPickUp.Logisticlocation")
      .populate("plannedPickUp.LogisticEventPeriod")
      .populate("plannedPickUp.contact")
      .populate("plannedDropOff.Logisticlocation")
      .populate("plannedDropOff.LogisticEventPeriod")
      .populate("plannedDropOff.contact")
      .exec((e, r) => {
        if (e) return res.status(400).send(e);
        res.send(r);
      });
  } catch (ex) {
    res.status(400).json({
      message: ex.message,
    });
  }
});

router.get("/filter", verify, async (req, res) => {
  console.log(req.params.id);
  try {
    const startDate =
      req.query.fromdate != "" ? new Date(Number(req.query.fromdate)) : false;
    const endDate =
      req.query.todate != "" ? new Date(Number(req.query.todate)) : false;
    const bookingId = req.query.bookingid ? req.query.bookingid : false;
    let transportcapacitybookings;

    console.log(startDate, endDate);

    if (bookingId && !startDate && !endDate) {
      transportcapacitybookings = await Transportcapacitybooking.findOne({
        bookingId: bookingId,
      })
        .populate(
          "transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes"
        )
        .populate("transportCapacityBookingSpaceRequirements.Packagetotaltypes")
        .populate("plannedPickUp.Logisticlocation")
        .populate("plannedPickUp.Logisticlocation.contact")
        .populate("plannedPickUp.LogisticEventPeriod")
        .populate("plannedDropOff.Logisticlocation")
        .populate("plannedDropOff.Logisticlocation.contact")
        .populate("plannedDropOff.LogisticEventPeriod")
        .exec(async (e, r) => {
          if (e) return res.status(400).send(e);
          // console.log(r);
          // const contact = await Contacttype.findById(
          //   r.plannedPickUp.Logisticlocation.contact
          // );
          // console.log(contact);
          // r.plannedPickUp.Logisticlocation.contact = contact;
          const data = [];
          data.push(r);
          res.send(data);
        });
    }

    if (startDate && endDate) {
      transportcapacitybookings = await Transportcapacitybooking.find()
        .populate(
          "transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes"
        )
        .populate("transportCapacityBookingSpaceRequirements.Packagetotaltypes")
        .populate("plannedPickUp.Logisticlocation")
        .populate("plannedPickUp.Logisticlocation.contact")
        .populate({
          path: "plannedPickUp.LogisticEventPeriod",
          match: {
            createdAt: {
              $gte: new Date(startDate),
              $lte: new Date(endDate),
            },
          },
        })
        .populate("plannedDropOff.Logisticlocation")
        .populate("plannedDropOff.Logisticlocation.contact")
        .populate("plannedDropOff.LogisticEventPeriod")
        // .where({
        //   "plannedPickUp.LogisticEventPeriod.createdAt": {
        //     $gte: new Date(startDate),
        //     $lte: new Date(endDate),
        //   },
        // })
        .exec(async (e, r) => {
          if (e) return res.status(400).send(e);
          if (!r) {
            return res.status(200).json({
              message: "No data found",
            });
          }

          // console.log(r);
          // const contact = await Contacttype.findById(
          //   r.plannedPickUp.Logisticlocation.contact
          // );
          // console.log(contact);
          // r.plannedPickUp.Logisticlocation.contact = contact;
          const data = [...r];
          res.send(data);
        });
    }

    if (transportcapacitybookings && transportcapacitybookings.length === 0)
      return res.json({
        message: "No data found",
      });
  } catch (ex) {
    res.status(400).json({
      message: ex.message,
    });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    let transportcapacitybookings;
    transportcapacitybookings = await Transportcapacitybooking.findOne({
      _id: req.params.id,
    })
      .populate(
        "transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes"
      )
      .populate("transportCapacityBookingSpaceRequirements.Packagetotaltypes")
      .populate("plannedPickUp.Logisticlocation")
      .populate("plannedPickUp.LogisticEventPeriod")
      .populate("plannedDropOff.Logisticlocation")
      .populate("plannedDropOff.LogisticEventPeriod")
      .exec(async (e, r) => {
        if (e) return res.status(400).send(e);

        try {
          r.plannedPickUp.Logisticlocation.contact = await Contacttype.findOne({
            _id: r.plannedPickUp.Logisticlocation.contact,
          });

          r.plannedDropOff.Logisticlocation.contact = await Contacttype.findOne(
            {
              _id: r.plannedDropOff.Logisticlocation.contact,
            }
          );

          // console.log(r);
          res.json(r);
        } catch (ex) {
          res.status(400).json({
            message: ex.message,
          });
        }
      });
    if (transportcapacitybookings && transportcapacitybookings.length === 0)
      return res.json({
        message: "No data found",
      });
  } catch (ex) {
    res.status(400).json({
      message: ex.message,
    });
  }
});

router.post("/", verify, async (req, res) => {
  const session = await Transportcapacitybooking.startSession();
  session.startTransaction();

  try {
    const ServiceDetailsData = req.body.ServiceDetailsData;
    const PickUpLocationData = req.body.PickUpLocationData;
    const PickUpTime = req.body.PickUpTime;
    const DropOffLocation = req.body.DropOffLocation;
    const DropOffTime = req.body.DropOffTime;
    const SpaceRequirements = req.body.SpaceRequirements;

    const transportservicecategorycodes = await Transportservicecategorycode.findById(
      ServiceDetailsData.servicecategoryCode
    );
    const transportserviceconditiontypecodes = await Transportserviceconditiontypecode.findById(
      ServiceDetailsData.serviceConditionTypeCode
    );
    const transportservicelevelcodes = await Transportservicelevelcode.findById(
      ServiceDetailsData.serviceLevelCode
    );

    // const logisticservicesbuyers = await Logisticservicesbuyer.findById(req.body.logisticServicesBuyerId);
    // const logisticservicessellers = await Logisticservicesseller.findById(req.body.logisticServicesSellerId);

    const transportcargocharacteristicstypes = await saveTransportcargocharacteristicstype(
      SpaceRequirements
    );
    const savedTransportcargocharacteristicstype = await transportcargocharacteristicstypes.save();
    // Transportcargocharacteristicstype.findById(
    //   SpaceRequirements.cargoType
    // );

    const packagetotaltypes = await savePackagetotaltype(SpaceRequirements);
    const savedPackagetotaltype = await packagetotaltypes.save();
    // Packagetotaltype.findById(
    //   SpaceRequirements.packageTypeCode
    // );

    const plannedPickUplogisticlocationtypes = await saveLogisticlocationtype(
      PickUpLocationData
    );
    const savedPlannedPickUplogisticlocationtypes = await plannedPickUplogisticlocationtypes.save();
    // Logisticlocationtype.findById(
    //   PickUpLocationData.AdditionalLocationIdentification
    // );

    // const plannedPickUplogisticeventdatetimes = new Logisticeventdatetime ({
    //     date: req.body.date,
    //     time: req.body.time,
    // });
    // const savedLogisticeventdatetime = await logisticeventdatetime.save();
    // const plannedPickUplogisticeventdatetimes = await Logisticeventdatetime.findById(
    //   PickUpTime.pickupStartTime
    // );

    const plannedPickUplogisticeventperiods = new Logisticeventperiod({
      beginDate: PickUpTime.pickupStartDate,
      beginTime: PickUpTime.pickupStartTime,
      endDate: PickUpTime.pickupEndDate,
      endTime: PickUpTime.pickupEndTime,
    });
    const savedLogisticeventperiod = await plannedPickUplogisticeventperiods.save();
    // const plannedPickUplogisticeventperiods = await Logisticeventperiod.findById(
    //   PickUpTime.plannedPickUpLogisticEventPeriodId
    // );

    const plannedDropOfflogisticlocationtypes = await saveLogisticlocationtype(
      DropOffLocation
    );
    const savedPlannedDropOfflogisticlocationtypes = await plannedDropOfflogisticlocationtypes.save();

    // const plannedDropOfflogisticlocationtypes = await Logisticlocationtype.findById(
    //   DropOffLocation.plannedDropOffLogisticLocationTypeId
    // );

    // const plannedDropOfflogisticeventdatetimes = new Logisticeventdatetime ({
    //     date: req.body.date,
    //     time: req.body.time,
    // });
    // const savedPlannedDropOffLogisticeventdatetime = await plannedDropOfflogisticeventdatetimes.save();
    // const plannedDropOfflogisticeventdatetimes = await Logisticeventdatetime.findById(
    //   DropOffTime.plannedDropOffLogisticEventDateTimeId
    // );

    const plannedDropOfflogisticeventperiods = new Logisticeventperiod({
      beginDate: DropOffTime.dropOffStartDate,
      beginTime: DropOffTime.dropOffStartTime,
      endDate: DropOffTime.dropOffEndDate,
      endTime: DropOffTime.dropOffEndTime,
    });
    const savedPlannedDropOffLogisticeventperiod = await plannedDropOfflogisticeventperiods.save();
    // const plannedDropOfflogisticeventperiods = await Logisticeventperiod.findById(
    //   DropOffTime.plannedDropOffLogisticEventPeriodId
    // );

    // Transportcapacitybooking.pre('save', function(next) {
    //     var doc = this;
    //     counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter)   {
    //         if(error)
    //             return next(error);
    //         doc.testvalue = counter.seq;
    //         next();
    //     });
    // });

    const transportcapacitybooking = new Transportcapacitybooking({
      bookingId: getRandomNumber(),

      transportCapacityBookingSpaceRequirements: {
        Transportcargocharacteristicstypes:
          savedTransportcargocharacteristicstype._id,
        Packagetotaltypes: savedPackagetotaltype._id,
      },
      plannedPickUp: {
        Logisticlocation: savedPlannedPickUplogisticlocationtypes._id,
        // LogisticEventDateTime: plannedPickUplogisticeventdatetimes._id,
        LogisticEventPeriod: savedLogisticeventperiod._id,
      },
      plannedDropOff: {
        Logisticlocation: savedPlannedDropOfflogisticlocationtypes._id,
        // LogisticEventDateTime: plannedDropOfflogisticeventdatetimes._id,
        LogisticEventPeriod: savedPlannedDropOffLogisticeventperiod._id,
      },
      transportServiceCategoryCode: {
        Id: transportservicecategorycodes._id,
        Name: transportservicecategorycodes.codeListVersion,
      },
      transportServiceConditionTypeCode: {
        Id: transportserviceconditiontypecodes._id,
        Name: transportserviceconditiontypecodes.codeListVersion,
      },
      transportServiceLevelCode: {
        Id: transportservicelevelcodes._id,
        Name: transportservicelevelcodes.codeListVersion,
      },
      logisticServicesBuyer: {
        Id: 78767,
        Name: "First name",
      },
      logisticServicesSeller: {
        Id: 9865,
        Name: "Last name",
      },
    });
    const savedTransportcapacitybooking = await transportcapacitybooking.save();

    await session.commitTransaction();
    session.endSession();
    res.status(200).json(savedTransportcapacitybooking);
  } catch (ex) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({
      message: ex.message,
    });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcapacitybooking = await Transportcapacitybooking.deleteOne(
      {
        _id: req.params.id,
      }
    );
    res.json(removedTransportcapacitybooking);
  } catch (ex) {
    res.status(400).json({
      message: ex.message,
    });
  }
});

router.put("/:id", verify, async (req, res) => {
  const session = await Transportcapacitybooking.startSession();
  session.startTransaction();

  try {
    const ServiceDetailsData = req.body.ServiceDetailsData;
    const PickUpLocationData = req.body.PickUpLocationData;
    const PickUpTime = req.body.PickUpTime;
    const DropOffLocation = req.body.DropOffLocation;
    const DropOffTime = req.body.DropOffTime;
    const SpaceRequirements = req.body.SpaceRequirements;
    const id = req.params.id;

    // const transportservicecategorycodes = await Transportservicecategorycode.findById(
    //   ServiceDetailsData.servicecategoryCode
    // );
    // const transportserviceconditiontypecodes = await Transportserviceconditiontypecode.findById(
    //   ServiceDetailsData.serviceConditionTypeCode
    // );
    // const transportservicelevelcodes = await Transportservicelevelcode.findById(
    //   ServiceDetailsData.serviceLevelCode
    // );

    // const transportcargocharacteristicstypes = await saveTransportcargocharacteristicstype(
    //   SpaceRequirements
    // );
    // // const savedTransportcargocharacteristicstype = await transportcargocharacteristicstypes.save();

    // const packagetotaltypes = await savePackagetotaltype(SpaceRequirements);
    // // const savedPackagetotaltype = await packagetotaltypes.save();

    // const plannedPickUplogisticlocationtypes = await saveLogisticlocationtype(
    //   PickUpLocationData
    // );
    // // const savedPlannedPickUplogisticlocationtypes = await plannedPickUplogisticlocationtypes.save();

    // const plannedPickUplogisticeventperiods = new Logisticeventperiod({
    //   beginDate: PickUpTime.pickupStartDate,
    //   beginTime: PickUpTime.pickupStartTime,
    //   endDate: PickUpTime.pickupEndDate,
    //   endTime: PickUpTime.pickupEndTime,
    // });
    // // const savedLogisticeventperiod = await plannedPickUplogisticeventperiods.save();

    // const plannedDropOfflogisticlocationtypes = await saveLogisticlocationtype(
    //   DropOffLocation
    // );
    // // const savedPlannedDropOfflogisticlocationtypes = await plannedDropOfflogisticlocationtypes.save();

    // const plannedDropOfflogisticeventperiods = new Logisticeventperiod({
    //   beginDate: DropOffTime.dropOffStartDate,
    //   beginTime: DropOffTime.dropOffStartTime,
    //   endDate: DropOffTime.dropOffEndDate,
    //   endTime: DropOffTime.dropOffEndTime,
    // });
    // // const savedPlannedDropOffLogisticeventperiod = await plannedDropOfflogisticeventperiods.save();

    // get all the values but dont save

    // const transportcapacitybooking = await Transportcapacitybooking.updateOne(
    //   {
    //     _id: id,
    //   },
    //   {
    //     $set: {
    //       transportCapacityBookingSpaceRequirements: {
    //         Transportcargocharacteristicstypes:
    //           savedTransportcargocharacteristicstype._id,
    //         Packagetotaltypes: savedPackagetotaltype._id,
    //       },
    //       plannedPickUp: {
    //         Logisticlocation: savedPlannedPickUplogisticlocationtypes._id,
    //         // LogisticEventDateTime: plannedPickUplogisticeventdatetimes._id,
    //         LogisticEventPeriod: savedLogisticeventperiod._id,
    //       },
    //       plannedDropOff: {
    //         Logisticlocation: savedPlannedDropOfflogisticlocationtypes._id,
    //         // LogisticEventDateTime: plannedDropOfflogisticeventdatetimes._id,
    //         LogisticEventPeriod: savedPlannedDropOffLogisticeventperiod._id,
    //       },
    //       transportServiceCategoryCode: {
    //         Id: transportservicecategorycodes._id,
    //         Name: transportservicecategorycodes.codeListVersion,
    //       },
    //       transportServiceConditionTypeCode: {
    //         Id: transportserviceconditiontypecodes._id,
    //         Name: transportserviceconditiontypecodes.codeListVersion,
    //       },
    //       transportServiceLevelCode: {
    //         Id: transportservicelevelcodes._id,
    //         Name: transportservicelevelcodes.codeListVersion,
    //       },
    //       logisticServicesBuyer: {
    //         Id: 78767,
    //         Name: "First name",
    //       },
    //       logisticServicesSeller: {
    //         Id: 9865,
    //         Name: "Last name",
    //       },
    //     },
    //   }
    // );
    // const savedTransportcapacitybooking = await transportcapacitybooking.save();

    // await session.commitTransaction();
    // session.endSession();
    // res.status(200).json(savedTransportcapacitybooking);
    // const transportcapacitybookingspacerequirements = await Transportcapacitybookingspacerequirement.findById(
    //   req.body.transportCapacityBookingSpaceRequirementsId
    // );
    // const transportcapacitybookingtransportmovement = await Transportcapacitybookingtransportmovementtype.findById(
    //   req.body.transportCapacityBookingTransportMovementId
    // );
    // const avplist = await Ecomstringattributevaluepairlist.findById(
    //   req.body.avpListId
    // );
    // const documentstatuscode = await Enumerationlibrary.findById(
    //   req.body.documentStatusCodeId
    // );
    // const deliveryterms = await Incotermscode.findById(
    //   req.body.deliveryTermsId
    // );
    // const updatedTransportcapacitybooking = await Transportcapacitybooking.updateOne(
    //   {
    //     id: req.params.id,
    //   },
    //   {
    //     $set: {
    //       id: req.body.id,
    //       creationDateTime: req.body.creationDateTime,
    //       documentStatusCode: req.body.documentStatusCode,
    //       documentActionCode: req.body.documentActionCode,
    //       documentStructureVersion: req.body.documentStructureVersion,
    //       lastUpdateDateTime: req.body.lastUpdateDateTime,
    //       revisionNumber: req.body.revisionNumber,
    //       extension: req.body.extension,
    //       documentEffectiveDate: req.body.documentEffectiveDate,
    //       avpList: req.body.avpList,
    //       transportCapacityBookingIdentification:
    //         req.body.transportCapacityBookingIdentification,
    //       transportServiceCategoryCode: req.body.transportServiceCategoryCode,
    //       transportServiceConditionTypeCode:
    //         req.body.transportServiceConditionTypeCode,
    //       transportServiceLevelCode: req.body.transportServiceLevelCode,
    //       logisticServicesBuyer: req.body.logisticServicesBuyer,
    //       logisticServicesSeller: req.body.logisticServicesSeller,
    //       pickUpParty: req.body.pickUpParty,
    //       dropOffParty: req.body.dropOffParty,
    //       plannedPickUp: req.body.plannedPickUp,
    //       plannedDropOff: req.body.plannedDropOff,
    //       transportReference: req.body.transportReference,
    //       deliveryTerms: req.body.deliveryTerms,
    //       handlingInstruction: req.body.handlingInstruction,
    //       transportCapacityBookingSpaceRequirements:
    //         req.body.transportCapacityBookingSpaceRequirements,
    //       transportCapacityBookingTransportMovement:
    //         req.body.transportCapacityBookingTransportMovement,
    //       deliveryTerms: {
    //         Id: req.body.deliveryterms.id,
    //         Name: req.body.deliveryterms.qualifierCodeName,
    //       },
    //       deliveryTerms: {
    //         Id: req.body.deliveryterms.id,
    //         Name: req.body.deliveryterms.codeListVersion,
    //       },
    //     },
    //   }
    // );
    // res.json(updatedTransportcapacitybooking);
  } catch (ex) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({
      message: ex.message,
    });
  }
});

async function saveTransportcargocharacteristicstype(body) {
  const Cargotypecode = require("../models/Cargotypecode");
  const Harmonizedsystemcode = require("../models/Harmonizedsystemcode");
  const Cargotypedescription = require("../models/Cargotypedescription");
  const Countryoforigincode = require("../models/Countryoforigincode");
  const Finaldestinationcountry = require("../models/Finaldestinationcountry");

  const cargotypecodes = await Cargotypecode.findById(body.cargoTypeCode);
  const harmonizedsystemcodes = await Harmonizedsystemcode.findById(
    body.harmonizedSystemCode
  );
  const cargotypedescription = await Cargotypedescription.findById(
    body.cargoTypeDescriptionCode
  );
  const countryoforigincodes = await Countryoforigincode.findById(
    body.countryOfOriginCode
  );
  const finaldestinationcountrys = await Finaldestinationcountry.findById(
    body.finalDestinationCountryCode
  );

  const transportcargocharacteristicstype = new Transportcargocharacteristicstype(
    {
      cargoTypeCode: {
        Id: cargotypecodes._id,
        Name: cargotypecodes.codeListVersion,
      },
      harmonizedSystemCode: {
        Id: harmonizedsystemcodes._id,
        Name: harmonizedsystemcodes.codeListVersion,
      },
      cargoTypeDescription: {
        Id: cargotypedescription._id,
        Name: cargotypedescription.codeListVersion,
      },
      countryOfOriginCode: {
        Id: countryoforigincodes._id,
        Name: countryoforigincodes.codeListVersion,
      },
      finalDestinationCountry: {
        Id: finaldestinationcountrys._id,
        Name: finaldestinationcountrys.codeListVersion,
      },
      totalGrossVolume: {
        Value: body.totalGrossVolume,
        Measurementtype: body.totalGrossVolumeUnits,
      },
      totalGrossWeight: {
        Value: body.totalGrossWeight,
        Measurementtype: body.totalGrossWeightUnits,
      },
      totalTransportNetWeight: {
        Value: body.totalTransportNetWeight,
        Measurementtype: body.totalTransportNetWeightUnits,
      },
      totalChargeableWeight: {
        Value: body.totalChargeableWeight,
        Measurementtype: body.totalChargeableWeightUnits,
      },
      declaredWeightForCustoms: {
        Value: body.declaredWeightForCustoms,
        Measurementtype: body.declaredWeightForCustomsUnits,
      },
      totalLoadingLength: {
        Value: body.totalLoadingLength,
        Measurementtype: body.totalLoadingLengthUnits,
      },
      associatedInvoiceAmount: {
        Value: body.totalGrossWeight,
        Measurementtype: body.totalGrossWeightUnits,
      },
      declaredValueForCustoms: {
        Value: body.associatedInvoiceAmount,
        Measurementtype: body.associatedInvoiceAmountUnits,
      },
      totalPackageQuantity: {
        Value: body.totalPackageQuantity,
        Measurementtype: body.totalPackageQuantityUnits,
      },
      totalItemQuantity: {
        Value: body.totalItemQuantity,
        Measurementtype: body.totalItemQuantityUnits,
      },
    }
  );
  return await transportcargocharacteristicstype;
}

async function savePackagetotaltype(body) {
  const Packagetotaltype = require("../models/Packagetotaltype");
  const Packagetypecode = require("../models/Packagetypecode");

  const packagetypecodes = await Packagetypecode.findById(body.packageTypeCode);

  const packagetotaltype = new Packagetotaltype({
    totalPackageQuantity: body.totalPackageQuantityPT,
    totalGrossVolume: {
      Value: body.totalGrossVolumePT,
      Measurementtype: body.totalGrossVolumePTUnits,
    },
    totalGrossWeight: {
      Value: body.totalGrossWeightPT,
      Measurementtype: body.totalGrossWeightPTUnits,
    },
    packageTypeCode: {
      Id: packagetypecodes._id,
      Name: packagetypecodes.codeListVersion,
    },
  });
  return await packagetotaltype;
}

async function saveLogisticlocationtype(body) {
  const Logisticlocationtype = require("../models/Logisticlocationtype");
  const Operatinghourstype = require("../models/Operatinghourstype");
  const Specialoperatinghourstype = require("../models/Specialoperatinghourstype");
  const Countrycode = require("../models/Countrycode");
  const Currencyofpartycode = require("../models/Currencyofpartycode");
  const Languageofthepartycode = require("../models/Languageofthepartycode");
  const Contacttype = require("../models/Contacttype");
  const Description200type = require("../models/Description200type");
  const Identifiertype = require("../models/Identifiertype");

  const locationspecificinstructions = await Description200type.findById(
    body.locationSpecificInstructionsCode
  );
  const additionallocationidentifications = await Identifiertype.findById(
    body.additionalLocationIdentificationCode
  );
  const countrycodes = await Countrycode.findById(body.countryCode);
  const currencyofpartycodes = await Currencyofpartycode.findById(
    body.currencyOfPartyCode
  );
  const languageofthepartycodes = await Languageofthepartycode.findById(
    body.languageOfthePartyCode
  );
  const contacttypes = await Contacttypecode.findById(body.contactTypeCode);

  const logisticlocationtype = new Logisticlocationtype({
    unLocationCode: body.unLocationCode,
    sublocationIdentification: body.sublocationIdentification,
    locationName: body.locationName,
    utcOffset: body.uTCOffset,
    locationSpecificInstructions: {
      Id: locationspecificinstructions._id,
      Name: locationspecificinstructions.codeListVersion,
    },
    additionalLocationIdentification: {
      Id: additionallocationidentifications._id,
      Name: additionallocationidentifications.identificationSchemeName,
    },
    contact: contacttypes._id,
    cityCode: body.cityName,
    countryCode: {
      Id: countrycodes._id,
      Name: countrycodes.codeListVersion,
    },
    currencyOfParty: {
      Id: currencyofpartycodes._id,
      Name: currencyofpartycodes.codeListVersion,
    },
    languageOfTheParty: {
      Id: languageofthepartycodes._id,
      Name: languageofthepartycodes.codeListVersion,
    },
    countyCode: body.countyCode,
    crossStreet: body.crossStreet,
    name: body.name,
    pOBoxNumber: body.postBoxNumber,
    postalCode: body.postalCode,
    provinceCode: body.provinceCode,
    state: body.state,
    streetAddressOne: body.streetAddressOne,
    streetAddressTwo: body.streetAddressTwo,
    streetAddressThree: body.streetAddressThree,
    latitude: body.latitude,
    longitude: body.longitude,
  });
  return await logisticlocationtype;
}

function getRandomNumber() {
  return Number(
    Math.floor(10000000000000 + Math.random() * 90000000000000)
      .toString()
      .substr(0, 13)
  );
}

module.exports = router;
