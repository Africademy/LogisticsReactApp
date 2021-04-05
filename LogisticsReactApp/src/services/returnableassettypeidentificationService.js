import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/returnableassettypeidentifications"

export function getReturnableassettypeidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteReturnableassettypeidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getReturnableassettypeidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveReturnableassettypeidentification(returnableassettypeidentification) {
  if (returnableassettypeidentification._id) {
    const body = { ...returnableassettypeidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + returnableassettypeidentification._id, body);
  }
  return myhttp.post(apiEndPoint, returnableassettypeidentification);
}

