import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/identitydocumenttypes"

export function getIdentitydocumenttypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteIdentitydocumenttype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIdentitydocumenttype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIdentitydocumenttype(identitydocumenttype) {
  if (identitydocumenttype._id) {
    const body = { ...identitydocumenttype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + identitydocumenttype._id, body);
  }
  return myhttp.post(apiEndPoint, identitydocumenttype);
}

