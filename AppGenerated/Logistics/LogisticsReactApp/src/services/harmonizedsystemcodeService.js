import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/harmonizedsystemcodes"

export function getHarmonizedsystemcodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteHarmonizedsystemcode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getHarmonizedsystemcode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveHarmonizedsystemcode(harmonizedsystemcode) {
  if (harmonizedsystemcode._id) {
    const body = { ...harmonizedsystemcode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + harmonizedsystemcode._id, body);
  }
  return myhttp.post(apiEndPoint, harmonizedsystemcode);
}

