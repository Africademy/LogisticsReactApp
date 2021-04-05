import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportinstructiontransportequipmenttypes"

export function getTransportinstructiontransportequipmenttypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportinstructiontransportequipmenttype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportinstructiontransportequipmenttype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportinstructiontransportequipmenttype(transportinstructiontransportequipmenttype) {
  if (transportinstructiontransportequipmenttype._id) {
    const body = { ...transportinstructiontransportequipmenttype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportinstructiontransportequipmenttype._id, body);
  }
  return myhttp.post(apiEndPoint, transportinstructiontransportequipmenttype);
}

