import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/scopes"

export function getScopes() {
  return myhttp.get(apiEndPoint);
}

export function deleteScope(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getScope(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveScope(scope) {
  if (scope._id) {
    const body = { ...scope };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + scope._id, body);
  }
  return myhttp.post(apiEndPoint, scope);
}

