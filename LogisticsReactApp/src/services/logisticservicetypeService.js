import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticservicetypes"

export function getLogisticservicetypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticservicetype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticservicetype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticservicetype(logisticservicetype) {
  if (logisticservicetype._id) {
    const body = { ...logisticservicetype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticservicetype._id, body);
  }
  return myhttp.post(apiEndPoint, logisticservicetype);
}

