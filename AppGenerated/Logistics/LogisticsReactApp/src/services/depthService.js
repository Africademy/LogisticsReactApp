import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/depths"

export function getDepths() {
  return myhttp.get(apiEndPoint);
}

export function deleteDepth(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDepth(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDepth(depth) {
  if (depth._id) {
    const body = { ...depth };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + depth._id, body);
  }
  return myhttp.post(apiEndPoint, depth);
}

