import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticlocationtypes"

export function getLogisticlocationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticlocationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticlocationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticlocationtype(logisticlocationtype) {
  if (logisticlocationtype._id) {
    const body = { ...logisticlocationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticlocationtype._id, body);
  }
  return myhttp.post(apiEndPoint, logisticlocationtype);
}

