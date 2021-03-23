import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/manifests"

export function getManifests() {
  return myhttp.get(apiEndPoint);
}

export function deleteManifest(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getManifest(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveManifest(manifest) {
  if (manifest._id) {
    const body = { ...manifest };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + manifest._id, body);
  }
  return myhttp.post(apiEndPoint, manifest);
}

