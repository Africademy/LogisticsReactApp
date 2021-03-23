import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/totalpackagequantitys"

export function getTotalpackagequantitys() {
  return myhttp.get(apiEndPoint);
}

export function deleteTotalpackagequantity(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTotalpackagequantity(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTotalpackagequantity(totalpackagequantity) {
  if (totalpackagequantity._id) {
    const body = { ...totalpackagequantity };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + totalpackagequantity._id, body);
  }
  return myhttp.post(apiEndPoint, totalpackagequantity);
}

