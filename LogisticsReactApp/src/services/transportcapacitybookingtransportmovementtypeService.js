import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportcapacitybookingtransportmovementtypes"

export function getTransportcapacitybookingtransportmovementtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportcapacitybookingtransportmovementtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportcapacitybookingtransportmovementtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportcapacitybookingtransportmovementtype(transportcapacitybookingtransportmovementtype) {
  if (transportcapacitybookingtransportmovementtype._id) {
    const body = { ...transportcapacitybookingtransportmovementtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportcapacitybookingtransportmovementtype._id, body);
  }
  return myhttp.post(apiEndPoint, transportcapacitybookingtransportmovementtype);
}

