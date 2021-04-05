import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticservicesbuyers"

export function getLogisticservicesbuyers() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticservicesbuyer(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticservicesbuyer(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticservicesbuyer(logisticservicesbuyer) {
  if (logisticservicesbuyer._id) {
    const body = { ...logisticservicesbuyer };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticservicesbuyer._id, body);
  }
  return myhttp.post(apiEndPoint, logisticservicesbuyer);
}

