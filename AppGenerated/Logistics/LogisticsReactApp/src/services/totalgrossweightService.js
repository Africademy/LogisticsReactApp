import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/totalgrossweights"

export function getTotalgrossweights() {
  return myhttp.get(apiEndPoint);
}

export function deleteTotalgrossweight(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTotalgrossweight(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTotalgrossweight(totalgrossweight) {
  if (totalgrossweight._id) {
    const body = { ...totalgrossweight };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + totalgrossweight._id, body);
  }
  return myhttp.post(apiEndPoint, totalgrossweight);
}

