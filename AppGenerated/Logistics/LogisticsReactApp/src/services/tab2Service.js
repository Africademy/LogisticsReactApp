import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/tab2s"

export function getTab2s() {
  return myhttp.get(apiEndPoint);
}

export function deleteTab2(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTab2(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTab2(tab2) {
  if (tab2._id) {
    const body = { ...tab2 };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + tab2._id, body);
  }
  return myhttp.post(apiEndPoint, tab2);
}

