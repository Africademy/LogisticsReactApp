import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/additionalshipmentidentificationtypes"

export function getAdditionalshipmentidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteAdditionalshipmentidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAdditionalshipmentidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAdditionalshipmentidentificationtype(additionalshipmentidentificationtype) {
  if (additionalshipmentidentificationtype._id) {
    const body = { ...additionalshipmentidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + additionalshipmentidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, additionalshipmentidentificationtype);
}

