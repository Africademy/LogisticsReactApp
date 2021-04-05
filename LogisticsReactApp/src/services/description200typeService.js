import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/description200types"

export function getDescription200types() {
  return myhttp.get(apiEndPoint);
}

export function deleteDescription200type(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDescription200type(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDescription200type(description200type) {
  if (description200type._id) {
    const body = { ...description200type };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + description200type._id, body);
  }
  return myhttp.post(apiEndPoint, description200type);
}

