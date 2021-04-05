import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/communicationchanneltypes"

export function getCommunicationchanneltypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteCommunicationchanneltype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCommunicationchanneltype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCommunicationchanneltype(communicationchanneltype) {
  if (communicationchanneltype._id) {
    const body = { ...communicationchanneltype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + communicationchanneltype._id, body);
  }
  return myhttp.post(apiEndPoint, communicationchanneltype);
}

