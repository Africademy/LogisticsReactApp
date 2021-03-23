import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/identifiers"

export function getIdentifiers() {
  return myhttp.get(apiEndPoint);
}

export function deleteIdentifier(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIdentifier(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIdentifier(identifier) {
  if (identifier._id) {
    const body = { ...identifier };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + identifier._id, body);
  }
  return myhttp.post(apiEndPoint, identifier);
}

