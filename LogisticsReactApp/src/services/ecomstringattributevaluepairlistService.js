import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/ecomstringattributevaluepairlists"

export function getEcomstringattributevaluepairlists() {
  return myhttp.get(apiEndPoint);
}

export function deleteEcomstringattributevaluepairlist(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getEcomstringattributevaluepairlist(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveEcomstringattributevaluepairlist(ecomstringattributevaluepairlist) {
  if (ecomstringattributevaluepairlist._id) {
    const body = { ...ecomstringattributevaluepairlist };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + ecomstringattributevaluepairlist._id, body);
  }
  return myhttp.post(apiEndPoint, ecomstringattributevaluepairlist);
}

