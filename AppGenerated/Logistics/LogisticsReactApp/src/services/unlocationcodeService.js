import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/unlocationcodes"

export function getUnlocationcodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteUnlocationcode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getUnlocationcode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveUnlocationcode(unlocationcode) {
  if (unlocationcode._id) {
    const body = { ...unlocationcode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + unlocationcode._id, body);
  }
  return myhttp.post(apiEndPoint, unlocationcode);
}

