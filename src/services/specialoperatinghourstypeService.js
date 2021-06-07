import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/specialoperatinghourstypes"

export function getSpecialoperatinghourstypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteSpecialoperatinghourstype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getSpecialoperatinghourstype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveSpecialoperatinghourstype(specialoperatinghourstype) {
  if (specialoperatinghourstype._id) {
    const body = { ...specialoperatinghourstype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + specialoperatinghourstype._id, body);
  }
  return myhttp.post(apiEndPoint, specialoperatinghourstype);
}

