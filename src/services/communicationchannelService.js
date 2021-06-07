import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/communicationchannels"

export function getCommunicationchannels() {
  return myhttp.get(apiEndPoint);
}

export function deleteCommunicationchannel(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCommunicationchannel(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCommunicationchannel(communicationchannel) {
  if (communicationchannel._id) {
    const body = { ...communicationchannel };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + communicationchannel._id, body);
  }
  return myhttp.post(apiEndPoint, communicationchannel);
}

