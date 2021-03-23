import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dateoptionaltimetypes"

export function getDateoptionaltimetypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDateoptionaltimetype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDateoptionaltimetype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDateoptionaltimetype(dateoptionaltimetype) {
  if (dateoptionaltimetype._id) {
    const body = { ...dateoptionaltimetype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dateoptionaltimetype._id, body);
  }
  return myhttp.post(apiEndPoint, dateoptionaltimetype);
}

