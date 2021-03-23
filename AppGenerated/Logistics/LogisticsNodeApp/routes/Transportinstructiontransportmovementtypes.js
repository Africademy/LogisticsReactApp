const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportinstructiontransportmovementtype = require("../models/Transportinstructiontransportmovementtype");
const Person= require("../models/Person");

router.get("/", verify, async (req, res) => {
  try {
    const Transportinstructiontransportmovementtypes = await Transportinstructiontransportmovementtype.find();
    res.json(Transportinstructiontransportmovementtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportinstructiontransportmovementtype = await Transportinstructiontransportmovementtype.findById(req.params.id);
    res.json({
        _id: transportinstructiontransportmovementtype._id,
        id: transportinstructiontransportmovementtype.id,
        sequenceNumber: transportinstructiontransportmovementtype.sequenceNumber,
        transportModeTypeCode: transportinstructiontransportmovementtype.transportModeTypeCode,
        routeID: transportinstructiontransportmovementtype.routeID,
        carrier: transportinstructiontransportmovementtype.carrier,
        transportStatusResponsibleParty: transportinstructiontransportmovementtype.transportStatusResponsibleParty,
        transportMeans: transportinstructiontransportmovementtype.transportMeans,
        plannedDeparture: transportinstructiontransportmovementtype.plannedDeparture,
        plannedArrival: transportinstructiontransportmovementtype.plannedArrival,
        plannedWaypoint: transportinstructiontransportmovementtype.plannedWaypoint,
        associatedPerson: transportinstructiontransportmovementtype.associatedPerson,
        routeIDId: transportinstructiontransportmovementtype.routeID.Id,
        plannedDepartureId: transportinstructiontransportmovementtype.plannedDeparture.Id,
        plannedArrivalId: transportinstructiontransportmovementtype.plannedArrival.Id,
        plannedWaypointId: transportinstructiontransportmovementtype.plannedWaypoint.Id,
        carrierId: transportinstructiontransportmovementtype.carrier.Id,
        transportStatusResponsiblePartyId: transportinstructiontransportmovementtype.transportStatusResponsibleParty.Id,
        transportMeansId: transportinstructiontransportmovementtype.transportMeans.Id,
        transportModeTypeCodeId: transportinstructiontransportmovementtype.transportModeTypeCode.Id,
        associatedPersonId: transportinstructiontransportmovementtype.associatedPerson.Id,
        createdAt: transportinstructiontransportmovementtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const routeids = await Identifiertype.findById(req.body.routeIDId);
    const planneddepartures = await Logisticeventtype.findById(req.body.plannedDepartureId);
    const plannedarrivals = await Logisticeventtype.findById(req.body.plannedArrivalId);
    const plannedwaypoints = await Logisticeventtype.findById(req.body.plannedWaypointId);
    const carriers = await Transactionalpartytype.findById(req.body.carrierId);
    const transportstatusresponsiblepartys = await Transactionalpartytype.findById(req.body.transportStatusResponsiblePartyId);
    const transportmeanss = await Transportmeanstype.findById(req.body.transportMeansId);
    const transportmodetypecodes = await Enumerationlibrary.findById(req.body.transportModeTypeCodeId);
    const associatedpersons = await Person.findById(req.body.associatedPersonId);
    const transportinstructiontransportmovementtype = new Transportinstructiontransportmovementtype ({
        id: req.body.id,
        sequenceNumber: req.body.sequenceNumber,
        transportModeTypeCode: req.body.transportModeTypeCode,
        routeID: req.body.routeID,
        carrier: req.body.carrier,
        transportStatusResponsibleParty: req.body.transportStatusResponsibleParty,
        transportMeans: req.body.transportMeans,
        plannedDeparture: req.body.plannedDeparture,
        plannedArrival: req.body.plannedArrival,
        plannedWaypoint: req.body.plannedWaypoint,
        associatedPerson: req.body.associatedPerson,
        routeID: [{
          Id: routeids._id,
          Name: routeids.id
        }],
        plannedDeparture: [{
          Id: planneddepartures._id,
          Name: planneddepartures.id
        }],
        plannedArrival: [{
          Id: plannedarrivals._id,
          Name: plannedarrivals.id
        }],
        plannedWaypoint: [{
          Id: plannedwaypoints._id,
          Name: plannedwaypoints.id
        }],
        carrier: [{
          Id: carriers._id,
          Name: carriers.id
        }],
        transportStatusResponsibleParty: [{
          Id: transportstatusresponsiblepartys._id,
          Name: transportstatusresponsiblepartys.id
        }],
        transportMeans: [{
          Id: transportmeanss._id,
          Name: transportmeanss.id
        }],
        transportModeTypeCode: [{
          Id: transportmodetypecodes._id,
          Name: transportmodetypecodes.id
        }],
        associatedPerson: [{
          Id: associatedpersons._id,
          Name: associatedpersons.id
        }],
    });
    const savedTransportinstructiontransportmovementtype = await transportinstructiontransportmovementtype.save();
    res.status(200).json(savedTransportinstructiontransportmovementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportinstructiontransportmovementtype = await Transportinstructiontransportmovementtype.remove({ _id: req.params.id });
    res.json(removedTransportinstructiontransportmovementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const routeid = await Identifiertype.findById(req.body.routeIDId);
    const planneddeparture = await Logisticeventtype.findById(req.body.plannedDepartureId);
    const carrier = await Transactionalpartytype.findById(req.body.carrierId);
    const transportmeans = await Transportmeanstype.findById(req.body.transportMeansId);
    const transportmodetypecode = await Enumerationlibrary.findById(req.body.transportModeTypeCodeId);
    const associatedperson = await Person.findById(req.body.associatedPersonId);
    const updatedTransportinstructiontransportmovementtype = await Transportinstructiontransportmovementtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             sequenceNumber: req.body.sequenceNumber,
             transportModeTypeCode: req.body.transportModeTypeCode,
             routeID: req.body.routeID,
             carrier: req.body.carrier,
             transportStatusResponsibleParty: req.body.transportStatusResponsibleParty,
             transportMeans: req.body.transportMeans,
             plannedDeparture: req.body.plannedDeparture,
             plannedArrival: req.body.plannedArrival,
             plannedWaypoint: req.body.plannedWaypoint,
             associatedPerson: req.body.associatedPerson,
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },
             associatedPerson: {
              Id: req.body.associatedperson.id,
              Name: req.body.associatedperson.id
             },

        }
      }
    );
    res.json(updatedTransportinstructiontransportmovementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;