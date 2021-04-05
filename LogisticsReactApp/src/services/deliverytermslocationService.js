import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/deliverytermslocations"

export function getDeliverytermslocations() {
  return myhttp.get(apiEndPoint);
}

export function deleteDeliverytermslocation(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDeliverytermslocation(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDeliverytermslocation(deliverytermslocation) {
  if (deliverytermslocation._id) {
    const body = { ...deliverytermslocation };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + deliverytermslocation._id, body);
  }
  return myhttp.post(apiEndPoint, deliverytermslocation);
}

