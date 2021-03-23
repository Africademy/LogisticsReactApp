import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/totalgrossvolumes"

export function getTotalgrossvolumes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTotalgrossvolume(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTotalgrossvolume(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTotalgrossvolume(totalgrossvolume) {
  if (totalgrossvolume._id) {
    const body = { ...totalgrossvolume };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + totalgrossvolume._id, body);
  }
  return myhttp.post(apiEndPoint, totalgrossvolume);
}

