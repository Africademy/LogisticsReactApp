import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/financialaccounttypes"

export function getFinancialaccounttypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteFinancialaccounttype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getFinancialaccounttype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveFinancialaccounttype(financialaccounttype) {
  if (financialaccounttype._id) {
    const body = { ...financialaccounttype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + financialaccounttype._id, body);
  }
  return myhttp.post(apiEndPoint, financialaccounttype);
}

