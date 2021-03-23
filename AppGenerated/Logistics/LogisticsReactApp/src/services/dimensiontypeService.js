import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dimensiontypes"

export function getDimensiontypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDimensiontype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDimensiontype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDimensiontype(dimensiontype) {
  if (dimensiontype._id) {
    const body = { ...dimensiontype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dimensiontype._id, body);
  }
  return myhttp.post(apiEndPoint, dimensiontype);
}

