import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/datetimerangetypes"

export function getDatetimerangetypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDatetimerangetype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDatetimerangetype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDatetimerangetype(datetimerangetype) {
  if (datetimerangetype._id) {
    const body = { ...datetimerangetype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + datetimerangetype._id, body);
  }
  return myhttp.post(apiEndPoint, datetimerangetype);
}

