import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/includedtransportequipments"

export function getIncludedtransportequipments() {
  return myhttp.get(apiEndPoint);
}

export function deleteIncludedtransportequipment(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIncludedtransportequipment(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIncludedtransportequipment(includedtransportequipment) {
  if (includedtransportequipment._id) {
    const body = { ...includedtransportequipment };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + includedtransportequipment._id, body);
  }
  return myhttp.post(apiEndPoint, includedtransportequipment);
}

