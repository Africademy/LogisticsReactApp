import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/packagetotals"

export function getPackagetotals() {
  return myhttp.get(apiEndPoint);
}

export function deletePackagetotal(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPackagetotal(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePackagetotal(packagetotal) {
  if (packagetotal._id) {
    const body = { ...packagetotal };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + packagetotal._id, body);
  }
  return myhttp.post(apiEndPoint, packagetotal);
}

