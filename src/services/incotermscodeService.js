import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/incotermscodes"

export function getIncotermscodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteIncotermscode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIncotermscode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIncotermscode(incotermscode) {
  if (incotermscode._id) {
    const body = { ...incotermscode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + incotermscode._id, body);
  }
  return myhttp.post(apiEndPoint, incotermscode);
}

