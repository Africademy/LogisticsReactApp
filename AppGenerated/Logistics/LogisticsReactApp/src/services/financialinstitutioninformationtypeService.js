import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/financialinstitutioninformationtypes"

export function getFinancialinstitutioninformationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteFinancialinstitutioninformationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getFinancialinstitutioninformationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveFinancialinstitutioninformationtype(financialinstitutioninformationtype) {
  if (financialinstitutioninformationtype._id) {
    const body = { ...financialinstitutioninformationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + financialinstitutioninformationtype._id, body);
  }
  return myhttp.post(apiEndPoint, financialinstitutioninformationtype);
}

