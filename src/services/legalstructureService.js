import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/legalstructures"

export function getLegalstructures() {
  return myhttp.get(apiEndPoint);
}

export function deleteLegalstructure(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLegalstructure(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLegalstructure(legalstructure) {
  if (legalstructure._id) {
    const body = { ...legalstructure };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + legalstructure._id, body);
  }
  return myhttp.post(apiEndPoint, legalstructure);
}

