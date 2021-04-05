import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/codetypes"

export function getCodetypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteCodetype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCodetype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCodetype(codetype) {
  if (codetype._id) {
    const body = { ...codetype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + codetype._id, body);
  }
  return myhttp.post(apiEndPoint, codetype);
}

