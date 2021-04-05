import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/legalregistrationtypes"

export function getLegalregistrationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLegalregistrationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLegalregistrationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLegalregistrationtype(legalregistrationtype) {
  if (legalregistrationtype._id) {
    const body = { ...legalregistrationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + legalregistrationtype._id, body);
  }
  return myhttp.post(apiEndPoint, legalregistrationtype);
}

