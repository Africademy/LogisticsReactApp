import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/declaredweightforcustomss"

export function getDeclaredweightforcustomss() {
  return myhttp.get(apiEndPoint);
}

export function deleteDeclaredweightforcustoms(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDeclaredweightforcustoms(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDeclaredweightforcustoms(declaredweightforcustoms) {
  if (declaredweightforcustoms._id) {
    const body = { ...declaredweightforcustoms };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + declaredweightforcustoms._id, body);
  }
  return myhttp.post(apiEndPoint, declaredweightforcustoms);
}

