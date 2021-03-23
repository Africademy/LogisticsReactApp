import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/packagingconditioncodes"

export function getPackagingconditioncodes() {
  return myhttp.get(apiEndPoint);
}

export function deletePackagingconditioncode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPackagingconditioncode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePackagingconditioncode(packagingconditioncode) {
  if (packagingconditioncode._id) {
    const body = { ...packagingconditioncode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + packagingconditioncode._id, body);
  }
  return myhttp.post(apiEndPoint, packagingconditioncode);
}

