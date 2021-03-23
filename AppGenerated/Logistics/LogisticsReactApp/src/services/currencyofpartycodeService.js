import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/currencyofpartycodes"

export function getCurrencyofpartycodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteCurrencyofpartycode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCurrencyofpartycode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCurrencyofpartycode(currencyofpartycode) {
  if (currencyofpartycode._id) {
    const body = { ...currencyofpartycode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + currencyofpartycode._id, body);
  }
  return myhttp.post(apiEndPoint, currencyofpartycode);
}

