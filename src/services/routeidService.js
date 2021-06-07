import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/routeids"

export function getRouteids() {
  return myhttp.get(apiEndPoint);
}

export function deleteRouteid(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getRouteid(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveRouteid(routeid) {
  if (routeid._id) {
    const body = { ...routeid };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + routeid._id, body);
  }
  return myhttp.post(apiEndPoint, routeid);
}

