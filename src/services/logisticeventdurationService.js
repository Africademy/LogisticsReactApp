import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticeventdurations"

export function getLogisticeventdurations() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticeventduration(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticeventduration(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticeventduration(logisticeventduration) {
  if (logisticeventduration._id) {
    const body = { ...logisticeventduration };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticeventduration._id, body);
  }
  return myhttp.post(apiEndPoint, logisticeventduration);
}

