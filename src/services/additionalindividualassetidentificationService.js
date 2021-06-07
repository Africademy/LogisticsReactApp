import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/additionalindividualassetidentifications"

export function getAdditionalindividualassetidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteAdditionalindividualassetidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAdditionalindividualassetidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAdditionalindividualassetidentification(additionalindividualassetidentification) {
  if (additionalindividualassetidentification._id) {
    const body = { ...additionalindividualassetidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + additionalindividualassetidentification._id, body);
  }
  return myhttp.post(apiEndPoint, additionalindividualassetidentification);
}

