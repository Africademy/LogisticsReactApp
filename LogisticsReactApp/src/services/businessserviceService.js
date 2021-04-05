import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/businessservices"

export function getBusinessservices() {
  return myhttp.get(apiEndPoint);
}

export function deleteBusinessservice(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getBusinessservice(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveBusinessservice(businessservice) {
  if (businessservice._id) {
    const body = { ...businessservice };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + businessservice._id, body);
  }
  return myhttp.post(apiEndPoint, businessservice);
}

