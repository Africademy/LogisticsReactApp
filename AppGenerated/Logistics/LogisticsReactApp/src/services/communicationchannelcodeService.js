import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/communicationchannelcodes"

export function getCommunicationchannelcodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteCommunicationchannelcode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCommunicationchannelcode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCommunicationchannelcode(communicationchannelcode) {
  if (communicationchannelcode._id) {
    const body = { ...communicationchannelcode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + communicationchannelcode._id, body);
  }
  return myhttp.post(apiEndPoint, communicationchannelcode);
}

