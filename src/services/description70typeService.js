import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/description70types"

export function getDescription70types() {
  return myhttp.get(apiEndPoint);
}

export function deleteDescription70type(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDescription70type(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDescription70type(description70type) {
  if (description70type._id) {
    const body = { ...description70type };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + description70type._id, body);
  }
  return myhttp.post(apiEndPoint, description70type);
}

