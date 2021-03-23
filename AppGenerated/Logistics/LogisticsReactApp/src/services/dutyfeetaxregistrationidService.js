import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dutyfeetaxregistrationids"

export function getDutyfeetaxregistrationids() {
  return myhttp.get(apiEndPoint);
}

export function deleteDutyfeetaxregistrationid(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDutyfeetaxregistrationid(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDutyfeetaxregistrationid(dutyfeetaxregistrationid) {
  if (dutyfeetaxregistrationid._id) {
    const body = { ...dutyfeetaxregistrationid };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dutyfeetaxregistrationid._id, body);
  }
  return myhttp.post(apiEndPoint, dutyfeetaxregistrationid);
}

