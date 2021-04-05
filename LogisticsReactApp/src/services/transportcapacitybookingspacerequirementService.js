import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportcapacitybookingspacerequirements"

export function getTransportcapacitybookingspacerequirements() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportcapacitybookingspacerequirement(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportcapacitybookingspacerequirement(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportcapacitybookingspacerequirement(transportcapacitybookingspacerequirement) {
  if (transportcapacitybookingspacerequirement._id) {
    const body = { ...transportcapacitybookingspacerequirement };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportcapacitybookingspacerequirement._id, body);
  }
  return myhttp.post(apiEndPoint, transportcapacitybookingspacerequirement);
}

