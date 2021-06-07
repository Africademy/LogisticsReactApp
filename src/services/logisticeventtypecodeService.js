import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticeventtypecodes"

export function getLogisticeventtypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticeventtypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticeventtypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticeventtypecode(logisticeventtypecode) {
  if (logisticeventtypecode._id) {
    const body = { ...logisticeventtypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticeventtypecode._id, body);
  }
  return myhttp.post(apiEndPoint, logisticeventtypecode);
}

