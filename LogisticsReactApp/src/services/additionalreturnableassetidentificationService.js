import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/additionalreturnableassetidentifications"

export function getAdditionalreturnableassetidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteAdditionalreturnableassetidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAdditionalreturnableassetidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAdditionalreturnableassetidentification(additionalreturnableassetidentification) {
  if (additionalreturnableassetidentification._id) {
    const body = { ...additionalreturnableassetidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + additionalreturnableassetidentification._id, body);
  }
  return myhttp.post(apiEndPoint, additionalreturnableassetidentification);
}

