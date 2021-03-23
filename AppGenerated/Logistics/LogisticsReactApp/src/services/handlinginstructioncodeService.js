import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/handlinginstructioncodes"

export function getHandlinginstructioncodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteHandlinginstructioncode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getHandlinginstructioncode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveHandlinginstructioncode(handlinginstructioncode) {
  if (handlinginstructioncode._id) {
    const body = { ...handlinginstructioncode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + handlinginstructioncode._id, body);
  }
  return myhttp.post(apiEndPoint, handlinginstructioncode);
}

