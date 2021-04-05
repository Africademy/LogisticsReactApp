import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportservicelevelcodes"

export function getTransportservicelevelcodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportservicelevelcode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportservicelevelcode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportservicelevelcode(transportservicelevelcode) {
  if (transportservicelevelcode._id) {
    const body = { ...transportservicelevelcode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportservicelevelcode._id, body);
  }
  return myhttp.post(apiEndPoint, transportservicelevelcode);
}

