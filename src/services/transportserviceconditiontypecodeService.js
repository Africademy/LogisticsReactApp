import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportserviceconditiontypecodes"

export function getTransportserviceconditiontypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportserviceconditiontypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportserviceconditiontypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportserviceconditiontypecode(transportserviceconditiontypecode) {
  if (transportserviceconditiontypecode._id) {
    const body = { ...transportserviceconditiontypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportserviceconditiontypecode._id, body);
  }
  return myhttp.post(apiEndPoint, transportserviceconditiontypecode);
}

