import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/additionalconsignmentidentificationtypes"

export function getAdditionalconsignmentidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteAdditionalconsignmentidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAdditionalconsignmentidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAdditionalconsignmentidentificationtype(additionalconsignmentidentificationtype) {
  if (additionalconsignmentidentificationtype._id) {
    const body = { ...additionalconsignmentidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + additionalconsignmentidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, additionalconsignmentidentificationtype);
}

