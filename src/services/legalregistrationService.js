import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/legalregistrations"

export function getLegalregistrations() {
  return myhttp.get(apiEndPoint);
}

export function deleteLegalregistration(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLegalregistration(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLegalregistration(legalregistration) {
  if (legalregistration._id) {
    const body = { ...legalregistration };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + legalregistration._id, body);
  }
  return myhttp.post(apiEndPoint, legalregistration);
}

