import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/consignmentidentificationtypes"

export function getConsignmentidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteConsignmentidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getConsignmentidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveConsignmentidentificationtype(consignmentidentificationtype) {
  if (consignmentidentificationtype._id) {
    const body = { ...consignmentidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + consignmentidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, consignmentidentificationtype);
}

