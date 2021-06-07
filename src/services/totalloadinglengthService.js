import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/totalloadinglengths"

export function getTotalloadinglengths() {
  return myhttp.get(apiEndPoint);
}

export function deleteTotalloadinglength(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTotalloadinglength(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTotalloadinglength(totalloadinglength) {
  if (totalloadinglength._id) {
    const body = { ...totalloadinglength };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + totalloadinglength._id, body);
  }
  return myhttp.post(apiEndPoint, totalloadinglength);
}

