import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportinstructionconsignmentitemtypes"

export function getTransportinstructionconsignmentitemtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportinstructionconsignmentitemtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportinstructionconsignmentitemtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportinstructionconsignmentitemtype(transportinstructionconsignmentitemtype) {
  if (transportinstructionconsignmentitemtype._id) {
    const body = { ...transportinstructionconsignmentitemtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportinstructionconsignmentitemtype._id, body);
  }
  return myhttp.post(apiEndPoint, transportinstructionconsignmentitemtype);
}

