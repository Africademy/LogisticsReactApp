import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/timemeasurementtypes"

export function getTimemeasurementtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTimemeasurementtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTimemeasurementtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTimemeasurementtype(timemeasurementtype) {
  if (timemeasurementtype._id) {
    const body = { ...timemeasurementtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + timemeasurementtype._id, body);
  }
  return myhttp.post(apiEndPoint, timemeasurementtype);
}

