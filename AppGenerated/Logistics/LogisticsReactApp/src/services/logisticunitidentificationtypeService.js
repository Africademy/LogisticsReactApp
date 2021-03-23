import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticunitidentificationtypes"

export function getLogisticunitidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticunitidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticunitidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticunitidentificationtype(logisticunitidentificationtype) {
  if (logisticunitidentificationtype._id) {
    const body = { ...logisticunitidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticunitidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, logisticunitidentificationtype);
}

