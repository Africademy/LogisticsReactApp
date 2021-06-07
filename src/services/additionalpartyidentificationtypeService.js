import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/additionalpartyidentificationtypes"

export function getAdditionalpartyidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteAdditionalpartyidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAdditionalpartyidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAdditionalpartyidentificationtype(additionalpartyidentificationtype) {
  if (additionalpartyidentificationtype._id) {
    const body = { ...additionalpartyidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + additionalpartyidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, additionalpartyidentificationtype);
}

