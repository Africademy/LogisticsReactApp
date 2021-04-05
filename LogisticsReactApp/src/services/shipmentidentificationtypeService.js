import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/shipmentidentificationtypes"

export function getShipmentidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteShipmentidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getShipmentidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveShipmentidentificationtype(shipmentidentificationtype) {
  if (shipmentidentificationtype._id) {
    const body = { ...shipmentidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + shipmentidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, shipmentidentificationtype);
}

