import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/deliverytermstypes"

export function getDeliverytermstypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDeliverytermstype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDeliverytermstype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDeliverytermstype(deliverytermstype) {
  if (deliverytermstype._id) {
    const body = { ...deliverytermstype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + deliverytermstype._id, body);
  }
  return myhttp.post(apiEndPoint, deliverytermstype);
}

