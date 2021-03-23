import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticlocations"

export function getLogisticlocations() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticlocation(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticlocation(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticlocation(logisticlocation) {
  if (logisticlocation._id) {
    const body = { ...logisticlocation };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticlocation._id, body);
  }
  return myhttp.post(apiEndPoint, logisticlocation);
}

