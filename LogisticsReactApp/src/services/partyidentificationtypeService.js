import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/partyidentificationtypes"

export function getPartyidentificationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deletePartyidentificationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPartyidentificationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePartyidentificationtype(partyidentificationtype) {
  if (partyidentificationtype._id) {
    const body = { ...partyidentificationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + partyidentificationtype._id, body);
  }
  return myhttp.post(apiEndPoint, partyidentificationtype);
}

