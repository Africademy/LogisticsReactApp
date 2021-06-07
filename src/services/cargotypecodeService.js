import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/cargotypecodes"

export function getCargotypecodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteCargotypecode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getCargotypecode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveCargotypecode(cargotypecode) {
  if (cargotypecode._id) {
    const body = { ...cargotypecode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + cargotypecode._id, body);
  }
  return myhttp.post(apiEndPoint, cargotypecode);
}

// http://localhost:5000/api/transportcapacitybookings/