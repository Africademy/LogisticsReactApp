import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/regularoperatinghourss"

export function getRegularoperatinghourss() {
  return myhttp.get(apiEndPoint);
}

export function deleteRegularoperatinghours(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getRegularoperatinghours(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveRegularoperatinghours(regularoperatinghours) {
  if (regularoperatinghours._id) {
    const body = { ...regularoperatinghours };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + regularoperatinghours._id, body);
  }
  return myhttp.post(apiEndPoint, regularoperatinghours);
}

