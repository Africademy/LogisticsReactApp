import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportmodecodes"

export function getTransportmodecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportmodecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportmodecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportmodecode(transportmodecode) {
  if (transportmodecode._id) {
    const body = { ...transportmodecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportmodecode._id, body);
  }
  return myhttp.post(apiEndPoint, transportmodecode);
}

