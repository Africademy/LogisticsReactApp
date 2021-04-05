import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/descriptions"

export function getDescriptions() {
  return myhttp.get(apiEndPoint);
}

export function deleteDescription(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDescription(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDescription(description) {
  if (description._id) {
    const body = { ...description };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + description._id, body);
  }
  return myhttp.post(apiEndPoint, description);
}

