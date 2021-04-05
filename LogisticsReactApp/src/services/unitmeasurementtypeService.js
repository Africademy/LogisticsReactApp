import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/unitmeasurementtypes"

export function getUnitmeasurementtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteUnitmeasurementtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getUnitmeasurementtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveUnitmeasurementtype(unitmeasurementtype) {
  if (unitmeasurementtype._id) {
    const body = { ...unitmeasurementtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + unitmeasurementtype._id, body);
  }
  return myhttp.post(apiEndPoint, unitmeasurementtype);
}

