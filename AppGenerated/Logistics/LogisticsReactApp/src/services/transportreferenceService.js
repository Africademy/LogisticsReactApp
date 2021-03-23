import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportreferences"

export function getTransportreferences() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportreference(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportreference(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportreference(transportreference) {
  if (transportreference._id) {
    const body = { ...transportreference };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportreference._id, body);
  }
  return myhttp.post(apiEndPoint, transportreference);
}

