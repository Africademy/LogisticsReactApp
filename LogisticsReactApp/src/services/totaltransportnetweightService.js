import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/totaltransportnetweights"

export function getTotaltransportnetweights() {
  return myhttp.get(apiEndPoint);
}

export function deleteTotaltransportnetweight(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTotaltransportnetweight(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTotaltransportnetweight(totaltransportnetweight) {
  if (totaltransportnetweight._id) {
    const body = { ...totaltransportnetweight };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + totaltransportnetweight._id, body);
  }
  return myhttp.post(apiEndPoint, totaltransportnetweight);
}

