import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/afterhourscommunicationchannels"

export function getAfterhourscommunicationchannels() {
  return myhttp.get(apiEndPoint);
}

export function deleteAfterhourscommunicationchannel(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAfterhourscommunicationchannel(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAfterhourscommunicationchannel(afterhourscommunicationchannel) {
  if (afterhourscommunicationchannel._id) {
    const body = { ...afterhourscommunicationchannel };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + afterhourscommunicationchannel._id, body);
  }
  return myhttp.post(apiEndPoint, afterhourscommunicationchannel);
}

