import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticeventdatetimes"

export function getLogisticeventdatetimes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticeventdatetime(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticeventdatetime(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticeventdatetime(logisticeventdatetime) {
  if (logisticeventdatetime._id) {
    const body = { ...logisticeventdatetime };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticeventdatetime._id, body);
  }
  return myhttp.post(apiEndPoint, logisticeventdatetime);
}

