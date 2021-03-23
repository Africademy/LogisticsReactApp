import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/nationalitys"

export function getNationalitys() {
  return myhttp.get(apiEndPoint);
}

export function deleteNationality(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getNationality(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveNationality(nationality) {
  if (nationality._id) {
    const body = { ...nationality };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + nationality._id, body);
  }
  return myhttp.post(apiEndPoint, nationality);
}

