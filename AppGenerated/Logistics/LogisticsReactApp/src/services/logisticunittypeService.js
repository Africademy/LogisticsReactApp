import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticunittypes"

export function getLogisticunittypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticunittype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticunittype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticunittype(logisticunittype) {
  if (logisticunittype._id) {
    const body = { ...logisticunittype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticunittype._id, body);
  }
  return myhttp.post(apiEndPoint, logisticunittype);
}

