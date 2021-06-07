import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/countryoforigincodes"

export function getCountryoforigincodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteCountryoforigincode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCountryoforigincode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCountryoforigincode(countryoforigincode) {
  if (countryoforigincode._id) {
    const body = { ...countryoforigincode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + countryoforigincode._id, body);
  }
  return myhttp.post(apiEndPoint, countryoforigincode);
}

