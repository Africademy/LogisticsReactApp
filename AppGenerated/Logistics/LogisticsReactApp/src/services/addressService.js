import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/addresss"

export function getAddresss() {
  return myhttp.get(apiEndPoint);
}

export function deleteAddress(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAddress(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAddress(address) {
  if (address._id) {
    const body = { ...address };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + address._id, body);
  }
  return myhttp.post(apiEndPoint, address);
}

