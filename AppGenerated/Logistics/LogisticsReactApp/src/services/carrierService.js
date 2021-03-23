import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/carriers"

export function getCarriers() {
  return myhttp.get(apiEndPoint);
}

export function deleteCarrier(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCarrier(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCarrier(carrier) {
  if (carrier._id) {
    const body = { ...carrier };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + carrier._id, body);
  }
  return myhttp.post(apiEndPoint, carrier);
}

