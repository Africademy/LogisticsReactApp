import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/documentidentifications"

export function getDocumentidentifications() {
  return myhttp.get(apiEndPoint);
}

export function deleteDocumentidentification(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDocumentidentification(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDocumentidentification(documentidentification) {
  if (documentidentification._id) {
    const body = { ...documentidentification };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + documentidentification._id, body);
  }
  return myhttp.post(apiEndPoint, documentidentification);
}

