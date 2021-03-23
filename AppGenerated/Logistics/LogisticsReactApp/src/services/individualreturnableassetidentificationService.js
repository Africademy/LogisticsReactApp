import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/individualreturnableassetidentifications"

export function getIndividualreturnableassetidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteIndividualreturnableassetidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getIndividualreturnableassetidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveIndividualreturnableassetidentification(individualreturnableassetidentification) {
  if (individualreturnableassetidentification._id) {
    const body = { ...individualreturnableassetidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + individualreturnableassetidentification._id, body);
  }
  return myhttp.post(apiEndPoint, individualreturnableassetidentification);
}

