import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/passengertariffgroups"

export function getPassengertariffgroups() {
  return myhttp.get(apiEndPoint);
}

export function deletePassengertariffgroup(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPassengertariffgroup(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePassengertariffgroup(passengertariffgroup) {
  if (passengertariffgroup._id) {
    const body = { ...passengertariffgroup };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + passengertariffgroup._id, body);
  }
  return myhttp.post(apiEndPoint, passengertariffgroup);
}

