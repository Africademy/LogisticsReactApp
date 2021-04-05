import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/totalchargeableweights"

export function getTotalchargeableweights() {
  return myhttp.get(apiEndPoint);
}

export function deleteTotalchargeableweight(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTotalchargeableweight(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTotalchargeableweight(totalchargeableweight) {
  if (totalchargeableweight._id) {
    const body = { ...totalchargeableweight };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + totalchargeableweight._id, body);
  }
  return myhttp.post(apiEndPoint, totalchargeableweight);
}

