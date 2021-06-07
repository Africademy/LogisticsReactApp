import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportequipmenttypecodes"

export function getTransportequipmenttypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportequipmenttypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportequipmenttypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportequipmenttypecode(transportequipmenttypecode) {
  if (transportequipmenttypecode._id) {
    const body = { ...transportequipmenttypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportequipmenttypecode._id, body);
  }
  return myhttp.post(apiEndPoint, transportequipmenttypecode);
}

