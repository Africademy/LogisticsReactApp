import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/transportcapacitybookingresponseidentifications"

export function getTransportcapacitybookingresponseidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteTransportcapacitybookingresponseidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getTransportcapacitybookingresponseidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveTransportcapacitybookingresponseidentification(transportcapacitybookingresponseidentification) {
  if (transportcapacitybookingresponseidentification._id) {
    const body = { ...transportcapacitybookingresponseidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + transportcapacitybookingresponseidentification._id, body);
  }
  return myhttp.post(apiEndPoint, transportcapacitybookingresponseidentification);
}

