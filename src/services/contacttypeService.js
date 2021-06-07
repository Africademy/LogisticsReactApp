import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/contacttypes"

export function getContacttypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteContacttype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getContacttype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveContacttype(contacttype) {
  if (contacttype._id) {
    const body = { ...contacttype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + contacttype._id, body);
  }
  return myhttp.post(apiEndPoint, contacttype);
}

