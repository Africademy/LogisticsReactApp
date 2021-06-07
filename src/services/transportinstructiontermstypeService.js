import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportinstructiontermstypes"

export function getTransportinstructiontermstypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportinstructiontermstype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportinstructiontermstype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportinstructiontermstype(transportinstructiontermstype) {
  if (transportinstructiontermstype._id) {
    const body = { ...transportinstructiontermstype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportinstructiontermstype._id, body);
  }
  return myhttp.post(apiEndPoint, transportinstructiontermstype);
}

