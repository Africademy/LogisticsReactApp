import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/individualassetidentifications"

export function getIndividualassetidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteIndividualassetidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIndividualassetidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIndividualassetidentification(individualassetidentification) {
  if (individualassetidentification._id) {
    const body = { ...individualassetidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + individualassetidentification._id, body);
  }
  return myhttp.post(apiEndPoint, individualassetidentification);
}

