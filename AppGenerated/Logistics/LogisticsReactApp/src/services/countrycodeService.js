import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/countrycodes"

export function getCountrycodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteCountrycode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCountrycode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCountrycode(countrycode) {
  if (countrycode._id) {
    const body = { ...countrycode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + countrycode._id, body);
  }
  return myhttp.post(apiEndPoint, countrycode);
}

