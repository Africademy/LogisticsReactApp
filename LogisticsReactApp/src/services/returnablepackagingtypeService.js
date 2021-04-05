import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/returnablepackagingtypes"

export function getReturnablepackagingtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteReturnablepackagingtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getReturnablepackagingtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveReturnablepackagingtype(returnablepackagingtype) {
  if (returnablepackagingtype._id) {
    const body = { ...returnablepackagingtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + returnablepackagingtype._id, body);
  }
  return myhttp.post(apiEndPoint, returnablepackagingtype);
}

