import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/entityidentificationtypes"

export function getEntityidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteEntityidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getEntityidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveEntityidentificationtype(entityidentificationtype) {
  if (entityidentificationtype._id) {
    const body = { ...entityidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + entityidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, entityidentificationtype);
}

