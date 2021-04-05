import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/measurementtypes"

export function getMeasurementtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteMeasurementtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getMeasurementtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveMeasurementtype(measurementtype) {
  if (measurementtype._id) {
    const body = { ...measurementtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + measurementtype._id, body);
  }
  return myhttp.post(apiEndPoint, measurementtype);
}

