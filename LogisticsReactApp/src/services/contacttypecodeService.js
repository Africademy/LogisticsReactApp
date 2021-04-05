import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/contacttypecodes"

export function getContacttypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteContacttypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getContacttypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveContacttypecode(contacttypecode) {
  if (contacttypecode._id) {
    const body = { ...contacttypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + contacttypecode._id, body);
  }
  return myhttp.post(apiEndPoint, contacttypecode);
}

