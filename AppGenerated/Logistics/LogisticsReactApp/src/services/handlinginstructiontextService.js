import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/handlinginstructiontexts"

export function getHandlinginstructiontexts() {
  return myhttp.get(apiEndPoint);
}

export function deleteHandlinginstructiontext(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getHandlinginstructiontext(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveHandlinginstructiontext(handlinginstructiontext) {
  if (handlinginstructiontext._id) {
    const body = { ...handlinginstructiontext };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + handlinginstructiontext._id, body);
  }
  return myhttp.post(apiEndPoint, handlinginstructiontext);
}

