import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportreferencetypes"

export function getTransportreferencetypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportreferencetype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportreferencetype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportreferencetype(transportreferencetype) {
  if (transportreferencetype._id) {
    const body = { ...transportreferencetype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportreferencetype._id, body);
  }
  return myhttp.post(apiEndPoint, transportreferencetype);
}

