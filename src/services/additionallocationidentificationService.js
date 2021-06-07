import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/additionallocationidentifications"

export function getAdditionallocationidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteAdditionallocationidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAdditionallocationidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAdditionallocationidentification(additionallocationidentification) {
  if (additionallocationidentification._id) {
    const body = { ...additionallocationidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + additionallocationidentification._id, body);
  }
  return myhttp.post(apiEndPoint, additionallocationidentification);
}

