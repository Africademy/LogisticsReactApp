import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/deliveryinstructionss"

export function getDeliveryinstructionss() {
  return myhttp.get(apiEndPoint);
}

export function deleteDeliveryinstructions(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDeliveryinstructions(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDeliveryinstructions(deliveryinstructions) {
  if (deliveryinstructions._id) {
    const body = { ...deliveryinstructions };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + deliveryinstructions._id, body);
  }
  return myhttp.post(apiEndPoint, deliveryinstructions);
}

