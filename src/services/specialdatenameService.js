import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/specialdatenames"

export function getSpecialdatenames() {
  return myhttp.get(apiEndPoint);
}

export function deleteSpecialdatename(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getSpecialdatename(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveSpecialdatename(specialdatename) {
  if (specialdatename._id) {
    const body = { ...specialdatename };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + specialdatename._id, body);
  }
  return myhttp.post(apiEndPoint, specialdatename);
}

