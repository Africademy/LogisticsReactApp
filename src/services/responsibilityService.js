import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/responsibilitys"

export function getResponsibilitys() {
  return myhttp.get(apiEndPoint);
}

export function deleteResponsibility(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getResponsibility(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveResponsibility(responsibility) {
  if (responsibility._id) {
    const body = { ...responsibility };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + responsibility._id, body);
  }
  return myhttp.post(apiEndPoint, responsibility);
}

