import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/pickuppartys"

export function getPickuppartys() {
  return myhttp.get(apiEndPoint);
}

export function deletePickupparty(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPickupparty(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePickupparty(pickupparty) {
  if (pickupparty._id) {
    const body = { ...pickupparty };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + pickupparty._id, body);
  }
  return myhttp.post(apiEndPoint, pickupparty);
}

