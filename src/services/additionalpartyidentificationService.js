import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/additionalpartyidentifications"

export function getAdditionalpartyidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteAdditionalpartyidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAdditionalpartyidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAdditionalpartyidentification(additionalpartyidentification) {
  if (additionalpartyidentification._id) {
    const body = { ...additionalpartyidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + additionalpartyidentification._id, body);
  }
  return myhttp.post(apiEndPoint, additionalpartyidentification);
}

