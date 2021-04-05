import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportreferencetypecodes"

export function getTransportreferencetypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportreferencetypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportreferencetypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportreferencetypecode(transportreferencetypecode) {
  if (transportreferencetypecode._id) {
    const body = { ...transportreferencetypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportreferencetypecode._id, body);
  }
  return myhttp.post(apiEndPoint, transportreferencetypecode);
}

