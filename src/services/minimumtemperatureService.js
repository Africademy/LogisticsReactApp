import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/minimumtemperatures"

export function getMinimumtemperatures() {
  return myhttp.get(apiEndPoint);
}

export function deleteMinimumtemperature(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getMinimumtemperature(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveMinimumtemperature(minimumtemperature) {
  if (minimumtemperature._id) {
    const body = { ...minimumtemperature };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + minimumtemperature._id, body);
  }
  return myhttp.post(apiEndPoint, minimumtemperature);
}

