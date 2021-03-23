import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/specialoperatinghourss"

export function getSpecialoperatinghourss() {
  return myhttp.get(apiEndPoint);
}

export function deleteSpecialoperatinghours(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getSpecialoperatinghours(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveSpecialoperatinghours(specialoperatinghours) {
  if (specialoperatinghours._id) {
    const body = { ...specialoperatinghours };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + specialoperatinghours._id, body);
  }
  return myhttp.post(apiEndPoint, specialoperatinghours);
}

