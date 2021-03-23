import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/alternatedeliverytermscodes"

export function getAlternatedeliverytermscodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteAlternatedeliverytermscode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAlternatedeliverytermscode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAlternatedeliverytermscode(alternatedeliverytermscode) {
  if (alternatedeliverytermscode._id) {
    const body = { ...alternatedeliverytermscode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + alternatedeliverytermscode._id, body);
  }
  return myhttp.post(apiEndPoint, alternatedeliverytermscode);
}

