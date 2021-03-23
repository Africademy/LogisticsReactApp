import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/financialroutingnumbertypes"

export function getFinancialroutingnumbertypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteFinancialroutingnumbertype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getFinancialroutingnumbertype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveFinancialroutingnumbertype(financialroutingnumbertype) {
  if (financialroutingnumbertype._id) {
    const body = { ...financialroutingnumbertype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + financialroutingnumbertype._id, body);
  }
  return myhttp.post(apiEndPoint, financialroutingnumbertype);
}

