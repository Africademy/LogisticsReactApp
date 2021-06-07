import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/description80types"

export function getDescription80types() {
  return myhttp.get(apiEndPoint);
}

export function deleteDescription80type(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDescription80type(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDescription80type(description80type) {
  if (description80type._id) {
    const body = { ...description80type };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + description80type._id, body);
  }
  return myhttp.post(apiEndPoint, description80type);
}

