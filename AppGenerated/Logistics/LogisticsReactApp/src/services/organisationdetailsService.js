import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/organisationdetailss"

export function getOrganisationdetailss() {
  return myhttp.get(apiEndPoint);
}

export function deleteOrganisationdetails(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getOrganisationdetails(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveOrganisationdetails(organisationdetails) {
  if (organisationdetails._id) {
    const body = { ...organisationdetails };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + organisationdetails._id, body);
  }
  return myhttp.post(apiEndPoint, organisationdetails);
}

