import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportmeanstypes"

export function getTransportmeanstypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportmeanstype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportmeanstype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportmeanstype(transportmeanstype) {
  if (transportmeanstype._id) {
    const body = { ...transportmeanstype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportmeanstype._id, body);
  }
  return myhttp.post(apiEndPoint, transportmeanstype);
}

