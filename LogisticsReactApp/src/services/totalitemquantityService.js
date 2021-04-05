import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/totalitemquantitys"

export function getTotalitemquantitys() {
  return myhttp.get(apiEndPoint);
}

export function deleteTotalitemquantity(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTotalitemquantity(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTotalitemquantity(totalitemquantity) {
  if (totalitemquantity._id) {
    const body = { ...totalitemquantity };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + totalitemquantity._id, body);
  }
  return myhttp.post(apiEndPoint, totalitemquantity);
}

