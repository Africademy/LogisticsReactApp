import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/identifiertypes"

export function getIdentifiertypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteIdentifiertype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIdentifiertype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIdentifiertype(identifiertype) {
  if (identifiertype._id) {
    const body = { ...identifiertype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + identifiertype._id, body);
  }
  return myhttp.post(apiEndPoint, identifiertype);
}

