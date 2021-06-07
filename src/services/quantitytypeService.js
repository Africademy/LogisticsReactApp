import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/quantitytypes"

export function getQuantitytypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteQuantitytype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getQuantitytype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveQuantitytype(quantitytype) {
  if (quantitytype._id) {
    const body = { ...quantitytype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + quantitytype._id, body);
  }
  return myhttp.post(apiEndPoint, quantitytype);
}

