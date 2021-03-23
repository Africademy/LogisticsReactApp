import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/financialroutingnumbers"

export function getFinancialroutingnumbers() {
  return myhttp.get(apiEndPoint);
}

export function deleteFinancialroutingnumber(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getFinancialroutingnumber(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveFinancialroutingnumber(financialroutingnumber) {
  if (financialroutingnumber._id) {
    const body = { ...financialroutingnumber };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + financialroutingnumber._id, body);
  }
  return myhttp.post(apiEndPoint, financialroutingnumber);
}

