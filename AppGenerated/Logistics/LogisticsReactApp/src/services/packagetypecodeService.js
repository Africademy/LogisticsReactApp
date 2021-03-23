import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/packagetypecodes"

export function getPackagetypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deletePackagetypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPackagetypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePackagetypecode(packagetypecode) {
  if (packagetypecode._id) {
    const body = { ...packagetypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + packagetypecode._id, body);
  }
  return myhttp.post(apiEndPoint, packagetypecode);
}

