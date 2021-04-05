import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/financialaccounts"

export function getFinancialaccounts() {
  return myhttp.get(apiEndPoint);
}

export function deleteFinancialaccount(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getFinancialaccount(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveFinancialaccount(financialaccount) {
  if (financialaccount._id) {
    const body = { ...financialaccount };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + financialaccount._id, body);
  }
  return myhttp.post(apiEndPoint, financialaccount);
}

