import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dangerousgoodsinformationtypes"

export function getDangerousgoodsinformationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDangerousgoodsinformationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDangerousgoodsinformationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDangerousgoodsinformationtype(dangerousgoodsinformationtype) {
  if (dangerousgoodsinformationtype._id) {
    const body = { ...dangerousgoodsinformationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dangerousgoodsinformationtype._id, body);
  }
  return myhttp.post(apiEndPoint, dangerousgoodsinformationtype);
}

