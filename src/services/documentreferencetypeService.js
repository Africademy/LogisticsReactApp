import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/documentreferencetypes"

export function getDocumentreferencetypes() {
  return myhttp.get(apiEndPoint);
}

export function deleteDocumentreferencetype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDocumentreferencetype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDocumentreferencetype(documentreferencetype) {
  if (documentreferencetype._id) {
    const body = { ...documentreferencetype };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + documentreferencetype._id, body);
  }
  return myhttp.post(apiEndPoint, documentreferencetype);
}

