import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dutyfeetaxregistrationtypes"

export function getDutyfeetaxregistrationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDutyfeetaxregistrationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDutyfeetaxregistrationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDutyfeetaxregistrationtype(dutyfeetaxregistrationtype) {
  if (dutyfeetaxregistrationtype._id) {
    const body = { ...dutyfeetaxregistrationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dutyfeetaxregistrationtype._id, body);
  }
  return myhttp.post(apiEndPoint, dutyfeetaxregistrationtype);
}

