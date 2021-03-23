import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportequipmentweights"

export function getTransportequipmentweights() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportequipmentweight(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportequipmentweight(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportequipmentweight(transportequipmentweight) {
  if (transportequipmentweight._id) {
    const body = { ...transportequipmentweight };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportequipmentweight._id, body);
  }
  return myhttp.post(apiEndPoint, transportequipmentweight);
}

