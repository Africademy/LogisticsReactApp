import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportcargocharacteristicstypes"

export function getTransportcargocharacteristicstypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportcargocharacteristicstype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportcargocharacteristicstype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportcargocharacteristicstype(transportcargocharacteristicstype) {
  if (transportcargocharacteristicstype._id) {
    const body = { ...transportcargocharacteristicstype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportcargocharacteristicstype._id, body);
  }
  return myhttp.post(apiEndPoint, transportcargocharacteristicstype);
}

