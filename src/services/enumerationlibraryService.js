import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/enumerationlibrarys"

export function getEnumerationlibrarys() {
  return myhttp.get(apiEndPoint,(res)=> console.log(res,"res"));
}

export function deleteEnumerationlibrary(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getEnumerationlibrary(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveEnumerationlibrary(enumerationlibrary) {
  if (enumerationlibrary._id) {
    const body = { ...enumerationlibrary };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + enumerationlibrary._id, body);
  }
  return myhttp.post(apiEndPoint, enumerationlibrary);
}

