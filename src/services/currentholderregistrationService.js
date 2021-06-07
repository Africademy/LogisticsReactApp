import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/currentholderregistrations"

export function getCurrentholderregistrations() {
  return myhttp.get(apiEndPoint);
}

export function deleteCurrentholderregistration(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCurrentholderregistration(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCurrentholderregistration(currentholderregistration) {
  if (currentholderregistration._id) {
    const body = { ...currentholderregistration };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + currentholderregistration._id, body);
  }
  return myhttp.post(apiEndPoint, currentholderregistration);
}

