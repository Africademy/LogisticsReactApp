import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportmeansids"

export function getTransportmeansids() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportmeansid(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportmeansid(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportmeansid(transportmeansid) {
  if (transportmeansid._id) {
    const body = { ...transportmeansid };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportmeansid._id, body);
  }
  return myhttp.post(apiEndPoint, transportmeansid);
}

