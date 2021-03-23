import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/operatinghourstypes"

export function getOperatinghourstypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteOperatinghourstype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getOperatinghourstype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveOperatinghourstype(operatinghourstype) {
  if (operatinghourstype._id) {
    const body = { ...operatinghourstype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + operatinghourstype._id, body);
  }
  return myhttp.post(apiEndPoint, operatinghourstype);
}

