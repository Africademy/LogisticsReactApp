import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/description1000types"

export function getDescription1000types() {
  return myhttp.get(apiEndPoint);
}

export function deleteDescription1000type(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDescription1000type(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDescription1000type(description1000type) {
  if (description1000type._id) {
    const body = { ...description1000type };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + description1000type._id, body);
  }
  return myhttp.post(apiEndPoint, description1000type);
}

