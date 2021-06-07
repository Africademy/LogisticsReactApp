import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/includedtransportmeanss"

export function getIncludedtransportmeanss() {
  return myhttp.get(apiEndPoint);
}

export function deleteIncludedtransportmeans(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIncludedtransportmeans(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIncludedtransportmeans(includedtransportmeans) {
  if (includedtransportmeans._id) {
    const body = { ...includedtransportmeans };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + includedtransportmeans._id, body);
  }
  return myhttp.post(apiEndPoint, includedtransportmeans);
}

