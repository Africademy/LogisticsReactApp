import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dutyfeetaxdescriptions"

export function getDutyfeetaxdescriptions() {
  return myhttp.get(apiEndPoint);
}

export function deleteDutyfeetaxdescription(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDutyfeetaxdescription(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDutyfeetaxdescription(dutyfeetaxdescription) {
  if (dutyfeetaxdescription._id) {
    const body = { ...dutyfeetaxdescription };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dutyfeetaxdescription._id, body);
  }
  return myhttp.post(apiEndPoint, dutyfeetaxdescription);
}

