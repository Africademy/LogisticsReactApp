import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dangerousgoodsregulationinformationtypes"

export function getDangerousgoodsregulationinformationtypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDangerousgoodsregulationinformationtype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDangerousgoodsregulationinformationtype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDangerousgoodsregulationinformationtype(dangerousgoodsregulationinformationtype) {
  if (dangerousgoodsregulationinformationtype._id) {
    const body = { ...dangerousgoodsregulationinformationtype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dangerousgoodsregulationinformationtype._id, body);
  }
  return myhttp.post(apiEndPoint, dangerousgoodsregulationinformationtype);
}

