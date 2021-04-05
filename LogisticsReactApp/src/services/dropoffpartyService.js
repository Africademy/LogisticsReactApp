import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dropoffpartys"

export function getDropoffpartys() {
  return myhttp.get(apiEndPoint);
}

export function deleteDropoffparty(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDropoffparty(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDropoffparty(dropoffparty) {
  if (dropoffparty._id) {
    const body = { ...dropoffparty };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dropoffparty._id, body);
  }
  return myhttp.post(apiEndPoint, dropoffparty);
}

