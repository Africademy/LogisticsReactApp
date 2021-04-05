import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/returnablepackagings"

export function getReturnablepackagings() {
  return myhttp.get(apiEndPoint);
}

export function deleteReturnablepackaging(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getReturnablepackaging(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveReturnablepackaging(returnablepackaging) {
  if (returnablepackaging._id) {
    const body = { ...returnablepackaging };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + returnablepackaging._id, body);
  }
  return myhttp.post(apiEndPoint, returnablepackaging);
}

