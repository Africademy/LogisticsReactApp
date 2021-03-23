import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/multidescription70types"

export function getMultidescription70types() {
  return myhttp.get(apiEndPoint);
}

export function deleteMultidescription70type(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getMultidescription70type(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveMultidescription70type(multidescription70type) {
  if (multidescription70type._id) {
    const body = { ...multidescription70type };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + multidescription70type._id, body);
  }
  return myhttp.post(apiEndPoint, multidescription70type);
}

