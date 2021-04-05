import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportservicecategorycodes"

export function getTransportservicecategorycodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportservicecategorycode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportservicecategorycode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportservicecategorycode(transportservicecategorycode) {
  if (transportservicecategorycode._id) {
    const body = { ...transportservicecategorycode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportservicecategorycode._id, body);
  }
  return myhttp.post(apiEndPoint, transportservicecategorycode);
}

