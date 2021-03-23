import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dutyfeetaxregistrations"

export function getDutyfeetaxregistrations() {
  return myhttp.get(apiEndPoint);
}

export function deleteDutyfeetaxregistration(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDutyfeetaxregistration(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDutyfeetaxregistration(dutyfeetaxregistration) {
  if (dutyfeetaxregistration._id) {
    const body = { ...dutyfeetaxregistration };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dutyfeetaxregistration._id, body);
  }
  return myhttp.post(apiEndPoint, dutyfeetaxregistration);
}

