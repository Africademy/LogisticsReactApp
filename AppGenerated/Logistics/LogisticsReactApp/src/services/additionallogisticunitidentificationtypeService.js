import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/additionallogisticunitidentificationtypes"

export function getAdditionallogisticunitidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteAdditionallogisticunitidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAdditionallogisticunitidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAdditionallogisticunitidentificationtype(additionallogisticunitidentificationtype) {
  if (additionallogisticunitidentificationtype._id) {
    const body = { ...additionallogisticunitidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + additionallogisticunitidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, additionallogisticunitidentificationtype);
}

