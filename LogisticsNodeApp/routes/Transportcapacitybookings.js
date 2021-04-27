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
// const Logisticeventdatetime = require("../models/Logisticeventdatetime");
const Logisticeventperiod = require("../models/Logisticeventperiod");
const Contacttypecode = require("../models/Contacttypecode");
const Contacttype = require("../models/Contacttype");
const Communicationchannel = require("../models/Communicationchannel");
const Description70type = require("../models/Description70type");
const Measurementtype = require("../models/Measurementtype");
const Amounttype = require("../models/Amounttype");

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
        // .populate("plannedPickUp.Logisticlocation.contact") // add in exec method
        .populate("plannedPickUp.LogisticEventPeriod")
        .populate("plannedDropOff.Logisticlocation")
        // .populate("plannedDropOff.Logisticlocation.contact")
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

          r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossVolume.Measurementtype = await getMeasurementType(
            r.transportCapacityBookingSpaceRequirements
              .Transportcargocharacteristicstypes.totalGrossVolume
              .Measurementtype
          );

          r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalGrossWeight.Measurementtype = await getMeasurementType(
            r.transportCapacityBookingSpaceRequirements
              .Transportcargocharacteristicstypes.totalGrossWeight
              .Measurementtype
          );
          r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalTransportNetWeight.Measurementtype = await getMeasurementType(
            r.transportCapacityBookingSpaceRequirements
              .Transportcargocharacteristicstypes.totalTransportNetWeight
              .Measurementtype
          );
          r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalChargeableWeight.Measurementtype = await getMeasurementType(
            r.transportCapacityBookingSpaceRequirements
              .Transportcargocharacteristicstypes.totalChargeableWeight
              .Measurementtype
          );
          r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalLoadingLength.Measurementtype = await getMeasurementType(
            r.transportCapacityBookingSpaceRequirements
              .Transportcargocharacteristicstypes.totalLoadingLength
              .Measurementtype
          );
          r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredWeightForCustoms.Measurementtype = await getMeasurementType(
            r.transportCapacityBookingSpaceRequirements
              .Transportcargocharacteristicstypes.declaredWeightForCustoms
              .Measurementtype
          );
          r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.associatedInvoiceAmount.Measurementtype = await getAmountType(
            r.transportCapacityBookingSpaceRequirements
              .Transportcargocharacteristicstypes.associatedInvoiceAmount
              .Measurementtype
          );
          r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.declaredValueForCustoms.Measurementtype = await getAmountType(
            r.transportCapacityBookingSpaceRequirements
              .Transportcargocharacteristicstypes.declaredValueForCustoms
              .Measurementtype
          );
          // r.transportCapacityBookingSpaceRequirements.Transportcargocharacteristicstypes.totalItemQuantity.Measurementtype = await getMeasurementType(
          //   r.transportCapacityBookingSpaceRequirements
          //     .Transportcargocharacteristicstypes.totalItemQuantity
          //     .Measurementtype
          // );
          // r.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossVolume.Measurementtype = await getMeasurementType(
          //   r.transportCapacityBookingSpaceRequirements
          //     .Transportcargocharacteristicstypes.totalGrossVolume
          //     .Measurementtype
          // );
          // r.transportCapacityBookingSpaceRequirements.Packagetotaltypes.totalGrossWeight.Measurementtype = await getMeasurementType(
          //   r.transportCapacityBookingSpaceRequirements
          //     .Transportcargocharacteristicstypes.totalGrossWeight
          //     .Measurementtype
          // );

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

async function getMeasurementType(id) {
  let data = await Measurementtype.findOne({
    _id: id,
  });
  return await data.codeListVersion;
}

async function getAmountType(id) {
  let data = await Amounttype.findOne({
    _id: id,
  });
  return await data.codeListVersion;
}

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

    const savedPlannedPickUplogisticlocationtypes = await saveLogisticlocationtype(
      PickUpLocationData,
      res
    );
    // const savedPlannedPickUplogisticlocationtypes = await plannedPickUplogisticlocationtypes.save();
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

    const savedPlannedDropOfflogisticlocationtypes = await saveLogisticlocationtype(
      DropOffLocation,
      res
    );
    // const savedPlannedDropOfflogisticlocationtypes = await plannedDropOfflogisticlocationtypes.save();

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
  const session = await Transportcapacitybooking.startSession();
  session.startTransaction();
  const id = req.params.id;

  try {
    var resData = {};
    const tcb = await Transportcapacitybooking.findById(req.params.id);

    resData[
      "removedTransportcargocharacteristicstypes"
    ] = await Transportcapacitybookingspacerequirement.deleteOne(
      {
        _id:
          tcb.transportCapacityBookingSpaceRequirements
            .Transportcargocharacteristicstypes._id,
      },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );

    // working
    resData["removedPackagetotaltypes"] = await Packagetotaltype.deleteOne(
      {
        _id:
          tcb.transportCapacityBookingSpaceRequirements.Packagetotaltypes._id,
      },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );

    const plannedPickUpLogisticlocation = await Logisticlocationtype.findById(
      tcb.plannedPickUp.Logisticlocation
    );

    resData[
      "removedPlannedPickUpLogisticlocationContact"
    ] = await Contacttype.deleteOne(
      { _id: plannedPickUpLogisticlocation.contact },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );

    resData[
      "removedPlannedPickUpLogisticlocation"
    ] = await Logisticlocationtype.deleteOne(
      { _id: plannedPickUpLogisticlocation._id },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );

    resData[
      "removedPlannedPickUpLogisticEventPeriod"
    ] = await Logisticeventperiod.deleteOne(
      { _id: tcb.plannedPickUp.LogisticEventPeriod },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );

    const plannedDropOffLogisticlocation = await Logisticlocationtype.findById(
      tcb.plannedDropOff.Logisticlocation
    );

    resData[
      "removedPlannedDropOffLogisticlocationContact"
    ] = await Contacttype.deleteOne(
      { _id: plannedDropOffLogisticlocation.contact },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );

    resData[
      "removedPlannedDropOffLogisticlocation"
    ] = await Logisticlocationtype.deleteOne(
      { _id: plannedDropOffLogisticlocation._id },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );

    // working
    resData[
      "removedPlannedDropOffLogisticEventPeriod"
    ] = await Logisticeventperiod.deleteOne(
      { _id: tcb.plannedDropOff.LogisticEventPeriod },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );

    // working
    resData[
      "removedTransportcapacitybooking"
    ] = await Transportcapacitybooking.deleteOne(
      {
        _id: id,
      },
      function (err, doc) {
        sendError(err, doc, res);
      }
    );
    console.log(resData);
    resData = deleteResponseFormat(resData);
    console.log(resData);
    await session.abortTransaction();
    session.endSession();

    res.json(resData);
  } catch (ex) {
    res.status(400).json({
      message: ex.message,
    });
  }
});

function deleteResponseFormat(data) {
  if (data && typeof data === "object") {
    for (const k in data) {
      const status = data[k].deletedCount > 0 && data[k].n > 0 ? true : false;
      const msg =
        data[k].deletedCount > 0 && data[k].n > 0 ? "success" : "failed";
      for (const l in data[k]) delete data[k][l];
      data[k]["status"] = status;
      data[k]["message"] = msg;
    }
  }
  return data;
}

function sendError(err, doc, res, callback) {
  if (err) return res.send(err);
  if (callback) return callback(doc);
  return doc;
}

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

    const transportservicecategorycodes = await Transportservicecategorycode.findById(
      ServiceDetailsData.servicecategoryCode
    );
    const transportserviceconditiontypecodes = await Transportserviceconditiontypecode.findById(
      ServiceDetailsData.serviceConditionTypeCode
    );
    const transportservicelevelcodes = await Transportservicelevelcode.findById(
      ServiceDetailsData.serviceLevelCode
    );

    const transportcargocharacteristicstypes = await saveTransportcargocharacteristicstype(
      SpaceRequirements,
      res
    );

    const packagetotaltypes = await savePackagetotaltype(
      SpaceRequirements,
      res
    );

    const plannedPickUplogisticlocationtypes = await savePlannedPickupLogisticlocationtype(
      PickUpLocationData,
      res
    );

    const plannedPickUplogisticeventperiods = await Logisticeventperiod.findByIdAndUpdate(
      PickUpTime.id,
      {
        $set: {
          beginDate: PickUpTime.pickupStartDate,
          beginTime: PickUpTime.pickupStartTime,
          endDate: PickUpTime.pickupEndDate,
          endTime: PickUpTime.pickupEndTime,
        },
      }
    );

    const plannedDropOfflogisticlocationtypes = await saveLogisticlocationtype(
      DropOffLocation,
      res
    );

    const plannedDropOfflogisticeventperiods = await Logisticeventperiod.findByIdAndUpdate(
      DropOffTime.id,
      {
        $set: {
          beginDate: DropOffTime.dropOffStartDate,
          beginTime: DropOffTime.dropOffStartTime,
          endDate: DropOffTime.dropOffEndDate,
          endTime: DropOffTime.dropOffEndTime,
        },
      }
    );

    const updatedTransportcapacitybooking = await Transportcapacitybooking.findByIdAndUpdate(
      id,
      {
        $set: {
          transportCapacityBookingSpaceRequirements: {
            Transportcargocharacteristicstypes:
              transportcargocharacteristicstypes._id,
            Packagetotaltypes: packagetotaltypes._id,
          },
          plannedPickUp: {
            Logisticlocation: plannedPickUplogisticlocationtypes._id,
            LogisticEventPeriod: plannedPickUplogisticeventperiods._id,
          },
          plannedDropOff: {
            Logisticlocation: plannedDropOfflogisticlocationtypes._id,
            LogisticEventPeriod: plannedDropOfflogisticeventperiods._id,
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
        },
      }
    );

    await session.commitTransaction();
    session.endSession();
    res.status(200).json(updatedTransportcapacitybooking);
  } catch (ex) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({
      message: ex.message,
    });
  }
});

async function saveTransportcargocharacteristicstype(body, res) {
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

  const transportcargocharacteristicstypeData = {
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
      Value: body.associatedInvoiceAmount,
      Measurementtype: body.associatedInvoiceAmountUnits,
    },
    declaredValueForCustoms: {
      Value: body.declaredValueForCustoms,
      Measurementtype: body.declaredValueForCustomsUnits,
    },
    totalPackageQuantity: {
      Value: body.totalPackageQuantity,
      Measurementtype: body.totalPackageQuantityUnits,
    },
    totalItemQuantity: {
      Value: body.totalItemQuantity,
      Measurementtype: body.totalItemQuantityUnits,
    },
  };

  var transportcargocharacteristicstype;

  try {
    if (!body.transportcargocharacteristicstypeId) {
      transportcargocharacteristicstype = new Transportcargocharacteristicstype(
        transportcargocharacteristicstypeData
      );
    } else {
      transportcargocharacteristicstype = await Transportcargocharacteristicstype.findByIdAndUpdate(
        body.transportcargocharacteristicstypeId,
        {
          $set: transportcargocharacteristicstypeData,
        }
      );
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

  return await transportcargocharacteristicstype;
}

async function savePackagetotaltype(body, res) {
  const Packagetotaltype = require("../models/Packagetotaltype");
  const Packagetypecode = require("../models/Packagetypecode");

  const packagetypecodes = await Packagetypecode.findById(body.packageTypeCode);

  const packagetotalData = {
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
  };

  var packagetotaltype;

  try {
    if (!body.packagetotaltypeId) {
      packagetotaltype = new Packagetotaltype(packagetotalData);
    } else {
      packagetotaltype = await Packagetotaltype.findByIdAndUpdate(
        body.packagetotaltypeId,
        {
          $set: packagetotalData,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
  return await packagetotaltype;
}

async function savePlannedPickupLogisticlocationtype(body, res) {
  const Logisticlocationtype = require("../models/Logisticlocationtype");
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

  var savedContacttype;
  try {
    const communicationchannels = await Communicationchannel.findById(
      body.communicationChannelCode
    );
    const responsibilitys = await Description70type.findById(
      body.responsibility
    );
    const contacttypecodes = await Contacttypecode.findById(
      body.contactTypeCode
    );

    const contactTypeData = {
      personName: body.personName,
      departmentName: body.departmentName,
      jobTitle: body.jobTitle,
      communicationChannelName: body.communicationChannelName,
      communicationValue: body.communicationValue,
      communicationChannelCode: {
        Id: communicationchannels._id,
        Name: communicationchannels.communicationChannelName,
      },
      responsibility: {
        Id: responsibilitys._id,
        Name: responsibilitys.codeListVersion,
      },
      contactTypeCode: {
        Id: contacttypecodes._id,
        Name: contacttypecodes.codeListVersion,
      },
    };

    if (!body.contactId) {
      savedContacttype = new Contacttype(contactTypeData);
      await savedContacttype.save();
    } else {
      savedContacttype = await Contacttype.findByIdAndUpdate(body.contactId, {
        $set: contactTypeData,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }

  const locationTypeData = {
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
    contact: savedContacttype._id,
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
  };

  var logisticlocationtype = null;

  try {
    if (!body.logisticLocationId) {
      logisticlocationtype = new Logisticlocationtype(locationTypeData);
      await logisticlocationtype.save();
    } else {
      logisticlocationtype = await Logisticlocationtype.findByIdAndUpdate(
        body.logisticLocationId,
        {
          $set: locationTypeData,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }

  return await logisticlocationtype;
}

async function saveLogisticlocationtype(body, res) {
  const Logisticlocationtype = require("../models/Logisticlocationtype");
  // const Operatinghourstype = require("../models/Operatinghourstype");
  // const Specialoperatinghourstype = require("../models/Specialoperatinghourstype");
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

  var savedContacttype;
  try {
    const communicationchannels = await Communicationchannel.findById(
      body.communicationChannelCode
    );
    const responsibilitys = await Description70type.findById(
      body.responsibility
    );
    const contacttypecodes = await Contacttypecode.findById(
      body.contactTypeCode
    );

    const contactTypeData = {
      personName: body.personName,
      departmentName: body.departmentName,
      jobTitle: body.jobTitle,
      communicationChannelName: body.communicationChannelName,
      communicationValue: body.communicationValue,
      communicationChannelCode: {
        Id: communicationchannels._id,
        Name: communicationchannels.communicationChannelName,
      },
      responsibility: {
        Id: responsibilitys._id,
        Name: responsibilitys.codeListVersion,
      },
      contactTypeCode: {
        Id: contacttypecodes._id,
        Name: contacttypecodes.codeListVersion,
      },
    };

    if (!body.contactId) {
      savedContacttype = new Contacttype(contactTypeData);
      await savedContacttype.save();
    } else {
      savedContacttype = await Contacttype.findByIdAndUpdate(body.contactId, {
        $set: contactTypeData,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }

  const locationTypeData = {
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
    contact: savedContacttype._id,
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
  };

  var logisticlocationtype = null;

  try {
    if (!body.logisticLocationId) {
      logisticlocationtype = new Logisticlocationtype(locationTypeData);
      await logisticlocationtype.save();
    } else {
      logisticlocationtype = await Logisticlocationtype.findByIdAndUpdate(
        body.logisticLocationId,
        {
          $set: locationTypeData,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }

  return await logisticlocationtype;
}

const getRandomNumber = () => {
  return +Math.floor(10000000000000 + Math.random() * 987654321000)
    .toString()
    .substr(0, 13);
};

module.exports = router;
