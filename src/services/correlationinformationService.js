import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/correlationinformations"

export function getCorrelationinformations() {
  return myhttp.get(apiEndPoint);
}

export function deleteCorrelationinformation(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCorrelationinformation(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCorrelationinformation(correlationinformation) {
  if (correlationinformation._id) {
    const body = { ...correlationinformation };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + correlationinformation._id, body);
  }
  return myhttp.post(apiEndPoint, correlationinformation);
}

