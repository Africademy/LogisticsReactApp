import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/financialroutingnumbertypecodes"

export function getFinancialroutingnumbertypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteFinancialroutingnumbertypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getFinancialroutingnumbertypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveFinancialroutingnumbertypecode(financialroutingnumbertypecode) {
  if (financialroutingnumbertypecode._id) {
    const body = { ...financialroutingnumbertypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + financialroutingnumbertypecode._id, body);
  }
  return myhttp.post(apiEndPoint, financialroutingnumbertypecode);
}

