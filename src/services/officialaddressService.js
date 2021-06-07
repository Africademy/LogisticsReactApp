import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/officialaddresss"

export function getOfficialaddresss() {
  return myhttp.get(apiEndPoint);
}

export function deleteOfficialaddress(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getOfficialaddress(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveOfficialaddress(officialaddress) {
  if (officialaddress._id) {
    const body = { ...officialaddress };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + officialaddress._id, body);
  }
  return myhttp.post(apiEndPoint, officialaddress);
}

