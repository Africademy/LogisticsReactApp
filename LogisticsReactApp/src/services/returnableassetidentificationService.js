import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/returnableassetidentifications"

export function getReturnableassetidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteReturnableassetidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getReturnableassetidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveReturnableassetidentification(returnableassetidentification) {
  if (returnableassetidentification._id) {
    const body = { ...returnableassetidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + returnableassetidentification._id, body);
  }
  return myhttp.post(apiEndPoint, returnableassetidentification);
}

