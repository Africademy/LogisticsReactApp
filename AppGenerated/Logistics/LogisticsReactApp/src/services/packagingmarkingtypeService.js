import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/packagingmarkingtypes"

export function getPackagingmarkingtypes() {
  return myhttp.get(apiEndPoint);
}

export function deletePackagingmarkingtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPackagingmarkingtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePackagingmarkingtype(packagingmarkingtype) {
  if (packagingmarkingtype._id) {
    const body = { ...packagingmarkingtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + packagingmarkingtype._id, body);
  }
  return myhttp.post(apiEndPoint, packagingmarkingtype);
}

