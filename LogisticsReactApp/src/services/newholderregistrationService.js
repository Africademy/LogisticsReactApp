import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/newholderregistrations"

export function getNewholderregistrations() {
  return myhttp.get(apiEndPoint);
}

export function deleteNewholderregistration(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getNewholderregistration(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveNewholderregistration(newholderregistration) {
  if (newholderregistration._id) {
    const body = { ...newholderregistration };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + newholderregistration._id, body);
  }
  return myhttp.post(apiEndPoint, newholderregistration);
}

