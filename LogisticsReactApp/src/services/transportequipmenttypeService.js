import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportequipmenttypes"

export function getTransportequipmenttypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportequipmenttype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportequipmenttype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportequipmenttype(transportequipmenttype) {
  if (transportequipmenttype._id) {
    const body = { ...transportequipmenttype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportequipmenttype._id, body);
  }
  return myhttp.post(apiEndPoint, transportequipmenttype);
}

