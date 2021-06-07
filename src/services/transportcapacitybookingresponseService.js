import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportcapacitybookingresponses"

export function getTransportcapacitybookingresponses() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportcapacitybookingresponse(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportcapacitybookingresponse(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportcapacitybookingresponse(transportcapacitybookingresponse) {
  if (transportcapacitybookingresponse._id) {
    const body = { ...transportcapacitybookingresponse };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportcapacitybookingresponse._id, body);
  }
  return myhttp.post(apiEndPoint, transportcapacitybookingresponse);
}

