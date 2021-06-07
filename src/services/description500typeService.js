import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/description500types"

export function getDescription500types() {
  return myhttp.get(apiEndPoint);
}

export function deleteDescription500type(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDescription500type(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDescription500type(description500type) {
  if (description500type._id) {
    const body = { ...description500type };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + description500type._id, body);
  }
  return myhttp.post(apiEndPoint, description500type);
}

