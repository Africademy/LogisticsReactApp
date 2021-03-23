import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/widths"

export function getWidths() {
  return myhttp.get(apiEndPoint);
}

export function deleteWidth(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getWidth(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveWidth(width) {
  if (width._id) {
    const body = { ...width };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + width._id, body);
  }
  return myhttp.post(apiEndPoint, width);
}

