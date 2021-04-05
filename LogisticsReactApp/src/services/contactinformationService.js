import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/contactinformations"

export function getContactinformations() {
  return myhttp.get(apiEndPoint);
}

export function deleteContactinformation(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getContactinformation(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveContactinformation(contactinformation) {
  if (contactinformation._id) {
    const body = { ...contactinformation };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + contactinformation._id, body);
  }
  return myhttp.post(apiEndPoint, contactinformation);
}

