import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/contentowners"

export function getContentowners() {
  return myhttp.get(apiEndPoint);
}

export function deleteContentowner(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getContentowner(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveContentowner(contentowner) {
  if (contentowner._id) {
    const body = { ...contentowner };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + contentowner._id, body);
  }
  return myhttp.post(apiEndPoint, contentowner);
}

