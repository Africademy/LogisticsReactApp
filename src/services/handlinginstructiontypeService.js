import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/handlinginstructiontypes"

export function getHandlinginstructiontypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteHandlinginstructiontype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getHandlinginstructiontype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveHandlinginstructiontype(handlinginstructiontype) {
  if (handlinginstructiontype._id) {
    const body = { ...handlinginstructiontype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + handlinginstructiontype._id, body);
  }
  return myhttp.post(apiEndPoint, handlinginstructiontype);
}

