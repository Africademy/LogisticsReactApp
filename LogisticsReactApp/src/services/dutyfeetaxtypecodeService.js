import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dutyfeetaxtypecodes"

export function getDutyfeetaxtypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDutyfeetaxtypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDutyfeetaxtypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDutyfeetaxtypecode(dutyfeetaxtypecode) {
  if (dutyfeetaxtypecode._id) {
    const body = { ...dutyfeetaxtypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dutyfeetaxtypecode._id, body);
  }
  return myhttp.post(apiEndPoint, dutyfeetaxtypecode);
}

