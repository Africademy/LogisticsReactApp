import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/amounttypes"

export function getAmounttypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteAmounttype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAmounttype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAmounttype(amounttype) {
  if (amounttype._id) {
    const body = { ...amounttype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + amounttype._id, body);
  }
  return myhttp.post(apiEndPoint, amounttype);
}

