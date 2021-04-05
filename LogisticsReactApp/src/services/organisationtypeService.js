import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/organisationtypes"

export function getOrganisationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteOrganisationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getOrganisationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveOrganisationtype(organisationtype) {
  if (organisationtype._id) {
    const body = { ...organisationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + organisationtype._id, body);
  }
  return myhttp.post(apiEndPoint, organisationtype);
}

