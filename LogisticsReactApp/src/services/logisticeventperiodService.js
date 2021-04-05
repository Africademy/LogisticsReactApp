import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/logisticeventperiods"

export function getLogisticeventperiods() {
  return myhttp.get(apiEndPoint);
}

export function deleteLogisticeventperiod(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLogisticeventperiod(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLogisticeventperiod(logisticeventperiod) {
  if (logisticeventperiod._id) {
    const body = { ...logisticeventperiod };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + logisticeventperiod._id, body);
  }
  return myhttp.post(apiEndPoint, logisticeventperiod);
}

