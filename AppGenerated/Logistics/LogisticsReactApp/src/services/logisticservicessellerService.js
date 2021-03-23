import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticservicessellers"

export function getLogisticservicessellers() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticservicesseller(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticservicesseller(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticservicesseller(logisticservicesseller) {
  if (logisticservicesseller._id) {
    const body = { ...logisticservicesseller };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticservicesseller._id, body);
  }
  return myhttp.post(apiEndPoint, logisticservicesseller);
}

