const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Transportcapacitybookingtransportmovementtype = require("../models/Transportcapacitybookingtransportmovementtype");
const Logisticeventtype= require("../models/Logisticeventtype");

router.get("/", verify, async (req, res) => {
  try {
    const Transportcapacitybookingtransportmovementtypes = await Transportcapacitybookingtransportmovementtype.find();
    res.json(Transportcapacitybookingtransportmovementtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const transportcapacitybookingtransportmovementtype = await Transportcapacitybookingtransportmovementtype.findById(req.params.id);
    res.json({
        _id: transportcapacitybookingtransportmovementtype._id,
        id: transportcapacitybookingtransportmovementtype.id,
        transportModeCode: transportcapacitybookingtransportmovementtype.transportModeCode,
        routeID: transportcapacitybookingtransportmovementtype.routeID,
        plannedDeparture: transportcapacitybookingtransportmovementtype.plannedDeparture,
        plannedArrival: transportcapacitybookingtransportmovementtype.plannedArrival,
        plannedWaypoint: transportcapacitybookingtransportmovementtype.plannedWaypoint,
        carrier: transportcapacitybookingtransportmovementtype.carrier,
        routeIDId: transportcapacitybookingtransportmovementtype.routeID.Id,
        plannedDepartureId: transportcapacitybookingtransportmovementtype.plannedDeparture.Id,
        plannedArrivalId: transportcapacitybookingtransportmovementtype.plannedArrival.Id,
        plannedWaypointId: transportcapacitybookingtransportmovementtype.plannedWaypoint.Id,
        carrierId: transportcapacitybookingtransportmovementtype.carrier.Id,
        transportModeCodeId: transportcapacitybookingtransportmovementtype.transportModeCode.Id,
        createdAt: transportcapacitybookingtransportmovementtype.createdAt
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
    const transportmodecodes = await Enumerationlibrary.findById(req.body.transportModeCodeId);
    const transportcapacitybookingtransportmovementtype = new Transportcapacitybookingtransportmovementtype ({
        id: req.body.id,
        transportModeCode: req.body.transportModeCode,
        routeID: req.body.routeID,
        plannedDeparture: req.body.plannedDeparture,
        plannedArrival: req.body.plannedArrival,
        plannedWaypoint: req.body.plannedWaypoint,
        carrier: req.body.carrier,
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
        transportModeCode: [{
          Id: transportmodecodes._id,
          Name: transportmodecodes.id
        }],
    });
    const savedTransportcapacitybookingtransportmovementtype = await transportcapacitybookingtransportmovementtype.save();
    res.status(200).json(savedTransportcapacitybookingtransportmovementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedTransportcapacitybookingtransportmovementtype = await Transportcapacitybookingtransportmovementtype.remove({ _id: req.params.id });
    res.json(removedTransportcapacitybookingtransportmovementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const routeid = await Identifiertype.findById(req.body.routeIDId);
    const planneddeparture = await Logisticeventtype.findById(req.body.plannedDepartureId);
    const carrier = await Transactionalpartytype.findById(req.body.carrierId);
    const transportmodecode = await Enumerationlibrary.findById(req.body.transportModeCodeId);
    const updatedTransportcapacitybookingtransportmovementtype = await Transportcapacitybookingtransportmovementtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             transportModeCode: req.body.transportModeCode,
             routeID: req.body.routeID,
             plannedDeparture: req.body.plannedDeparture,
             plannedArrival: req.body.plannedArrival,
             plannedWaypoint: req.body.plannedWaypoint,
             carrier: req.body.carrier,
             transportModeCode: {
              Id: req.body.transportmodecode.id,
              Name: req.body.transportmodecode.id
             },
             transportModeCode: {
              Id: req.body.transportmodecode.id,
              Name: req.body.transportmodecode.id
             },
             transportModeCode: {
              Id: req.body.transportmodecode.id,
              Name: req.body.transportmodecode.id
             },
             transportModeCode: {
              Id: req.body.transportmodecode.id,
              Name: req.body.transportmodecode.id
             },
             transportModeCode: {
              Id: req.body.transportmodecode.id,
              Name: req.body.transportmodecode.id
             },
             transportModeCode: {
              Id: req.body.transportmodecode.id,
              Name: req.body.transportmodecode.id
             },

        }
      }
    );
    res.json(updatedTransportcapacitybookingtransportmovementtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;