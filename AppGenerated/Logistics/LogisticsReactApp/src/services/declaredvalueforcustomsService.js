import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/declaredvalueforcustomss"

export function getDeclaredvalueforcustomss() {
  return myhttp.get(apiEndPoint);
}

export function deleteDeclaredvalueforcustoms(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDeclaredvalueforcustoms(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDeclaredvalueforcustoms(declaredvalueforcustoms) {
  if (declaredvalueforcustoms._id) {
    const body = { ...declaredvalueforcustoms };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + declaredvalueforcustoms._id, body);
  }
  return myhttp.post(apiEndPoint, declaredvalueforcustoms);
}

