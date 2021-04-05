import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/financialaccountnumbertypecodes"

export function getFinancialaccountnumbertypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteFinancialaccountnumbertypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getFinancialaccountnumbertypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveFinancialaccountnumbertypecode(financialaccountnumbertypecode) {
  if (financialaccountnumbertypecode._id) {
    const body = { ...financialaccountnumbertypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + financialaccountnumbertypecode._id, body);
  }
  return myhttp.post(apiEndPoint, financialaccountnumbertypecode);
}

