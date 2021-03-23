import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/passengerinformationtypes"

export function getPassengerinformationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deletePassengerinformationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPassengerinformationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePassengerinformationtype(passengerinformationtype) {
  if (passengerinformationtype._id) {
    const body = { ...passengerinformationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + passengerinformationtype._id, body);
  }
  return myhttp.post(apiEndPoint, passengerinformationtype);
}

