import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportcapacitybookingidentifications"

export function getTransportcapacitybookingidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportcapacitybookingidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportcapacitybookingidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportcapacitybookingidentification(transportcapacitybookingidentification) {
  if (transportcapacitybookingidentification._id) {
    const body = { ...transportcapacitybookingidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportcapacitybookingidentification._id, body);
  }
  return myhttp.post(apiEndPoint, transportcapacitybookingidentification);
}

