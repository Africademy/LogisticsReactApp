import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/passengercategorycodes"

export function getPassengercategorycodes() {
  return myhttp.get(apiEndPoint);
}

export function deletePassengercategorycode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPassengercategorycode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePassengercategorycode(passengercategorycode) {
  if (passengercategorycode._id) {
    const body = { ...passengercategorycode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + passengercategorycode._id, body);
  }
  return myhttp.post(apiEndPoint, passengercategorycode);
}

