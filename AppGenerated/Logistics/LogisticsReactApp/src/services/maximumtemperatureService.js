import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/maximumtemperatures"

export function getMaximumtemperatures() {
  return myhttp.get(apiEndPoint);
}

export function deleteMaximumtemperature(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getMaximumtemperature(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveMaximumtemperature(maximumtemperature) {
  if (maximumtemperature._id) {
    const body = { ...maximumtemperature };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + maximumtemperature._id, body);
  }
  return myhttp.post(apiEndPoint, maximumtemperature);
}

