import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticeventtypes"

export function getLogisticeventtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticeventtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticeventtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticeventtype(logisticeventtype) {
  if (logisticeventtype._id) {
    const body = { ...logisticeventtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticeventtype._id, body);
  }
  return myhttp.post(apiEndPoint, logisticeventtype);
}

