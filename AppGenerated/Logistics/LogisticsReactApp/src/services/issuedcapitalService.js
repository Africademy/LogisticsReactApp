import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/issuedcapitals"

export function getIssuedcapitals() {
  return myhttp.get(apiEndPoint);
}

export function deleteIssuedcapital(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIssuedcapital(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIssuedcapital(issuedcapital) {
  if (issuedcapital._id) {
    const body = { ...issuedcapital };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + issuedcapital._id, body);
  }
  return myhttp.post(apiEndPoint, issuedcapital);
}

