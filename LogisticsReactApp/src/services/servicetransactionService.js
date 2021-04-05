import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/servicetransactions"

export function getServicetransactions() {
  return myhttp.get(apiEndPoint);
}

export function deleteServicetransaction(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getServicetransaction(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveServicetransaction(servicetransaction) {
  if (servicetransaction._id) {
    const body = { ...servicetransaction };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + servicetransaction._id, body);
  }
  return myhttp.post(apiEndPoint, servicetransaction);
}

