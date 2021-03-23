import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/identitydocuments"

export function getIdentitydocuments() {
  return myhttp.get(apiEndPoint);
}

export function deleteIdentitydocument(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIdentitydocument(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIdentitydocument(identitydocument) {
  if (identitydocument._id) {
    const body = { ...identitydocument };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + identitydocument._id, body);
  }
  return myhttp.post(apiEndPoint, identitydocument);
}

