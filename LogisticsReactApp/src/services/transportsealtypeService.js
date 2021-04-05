import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportsealtypes"

export function getTransportsealtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportsealtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportsealtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportsealtype(transportsealtype) {
  if (transportsealtype._id) {
    const body = { ...transportsealtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportsealtype._id, body);
  }
  return myhttp.post(apiEndPoint, transportsealtype);
}

