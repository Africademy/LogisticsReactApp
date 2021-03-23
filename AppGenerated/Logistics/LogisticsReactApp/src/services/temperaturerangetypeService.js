import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/temperaturerangetypes"

export function getTemperaturerangetypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTemperaturerangetype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTemperaturerangetype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTemperaturerangetype(temperaturerangetype) {
  if (temperaturerangetype._id) {
    const body = { ...temperaturerangetype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + temperaturerangetype._id, body);
  }
  return myhttp.post(apiEndPoint, temperaturerangetype);
}

