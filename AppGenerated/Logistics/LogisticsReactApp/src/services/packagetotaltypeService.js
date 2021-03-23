import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/packagetotaltypes"

export function getPackagetotaltypes() {
  return myhttp.get(apiEndPoint);
}

export function deletePackagetotaltype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPackagetotaltype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePackagetotaltype(packagetotaltype) {
  if (packagetotaltype._id) {
    const body = { ...packagetotaltype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + packagetotaltype._id, body);
  }
  return myhttp.post(apiEndPoint, packagetotaltype);
}

