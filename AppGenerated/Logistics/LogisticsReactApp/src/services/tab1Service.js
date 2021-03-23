import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/tab1s"

export function getTab1s() {
  return myhttp.get(apiEndPoint);
}

export function deleteTab1(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTab1(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTab1(tab1) {
  if (tab1._id) {
    const body = { ...tab1 };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + tab1._id, body);
  }
  return myhttp.post(apiEndPoint, tab1);
}

