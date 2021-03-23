import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transactionalpartytypes"

export function getTransactionalpartytypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransactionalpartytype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransactionalpartytype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransactionalpartytype(transactionalpartytype) {
  if (transactionalpartytype._id) {
    const body = { ...transactionalpartytype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transactionalpartytype._id, body);
  }
  return myhttp.post(apiEndPoint, transactionalpartytype);
}

