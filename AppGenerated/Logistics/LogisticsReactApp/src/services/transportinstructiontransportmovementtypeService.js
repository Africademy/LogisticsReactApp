import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportinstructiontransportmovementtypes"

export function getTransportinstructiontransportmovementtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportinstructiontransportmovementtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportinstructiontransportmovementtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportinstructiontransportmovementtype(transportinstructiontransportmovementtype) {
  if (transportinstructiontransportmovementtype._id) {
    const body = { ...transportinstructiontransportmovementtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportinstructiontransportmovementtype._id, body);
  }
  return myhttp.post(apiEndPoint, transportinstructiontransportmovementtype);
}

