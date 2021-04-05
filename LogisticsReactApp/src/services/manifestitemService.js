import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/manifestitems"

export function getManifestitems() {
  return myhttp.get(apiEndPoint);
}

export function deleteManifestitem(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getManifestitem(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveManifestitem(manifestitem) {
  if (manifestitem._id) {
    const body = { ...manifestitem };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + manifestitem._id, body);
  }
  return myhttp.post(apiEndPoint, manifestitem);
}

