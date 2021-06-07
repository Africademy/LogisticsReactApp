import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/ecom_attributevaluepairlisttypes"

export function getEcom_attributevaluepairlisttypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteEcom_attributevaluepairlisttype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getEcom_attributevaluepairlisttype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveEcom_attributevaluepairlisttype(ecom_attributevaluepairlisttype) {
  if (ecom_attributevaluepairlisttype._id) {
    const body = { ...ecom_attributevaluepairlisttype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + ecom_attributevaluepairlisttype._id, body);
  }
  return myhttp.post(apiEndPoint, ecom_attributevaluepairlisttype);
}

