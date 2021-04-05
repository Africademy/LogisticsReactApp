import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/cargotypedescriptions"

export function getCargotypedescriptions() {
  return myhttp.get(apiEndPoint);
}

export function deleteCargotypedescription(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCargotypedescription(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCargotypedescription(cargotypedescription) {
  if (cargotypedescription._id) {
    const body = { ...cargotypedescription };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + cargotypedescription._id, body);
  }
  return myhttp.post(apiEndPoint, cargotypedescription);
}

