import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/dangerousgoodsattributetypes"

export function getDangerousgoodsattributetypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDangerousgoodsattributetype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDangerousgoodsattributetype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDangerousgoodsattributetype(dangerousgoodsattributetype) {
  if (dangerousgoodsattributetype._id) {
    const body = { ...dangerousgoodsattributetype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + dangerousgoodsattributetype._id, body);
  }
  return myhttp.post(apiEndPoint, dangerousgoodsattributetype);
}

