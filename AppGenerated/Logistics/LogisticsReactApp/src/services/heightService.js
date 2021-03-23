import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/heights"

export function getHeights() {
  return myhttp.get(apiEndPoint);
}

export function deleteHeight(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getHeight(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveHeight(height) {
  if (height._id) {
    const body = { ...height };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + height._id, body);
  }
  return myhttp.post(apiEndPoint, height);
}

