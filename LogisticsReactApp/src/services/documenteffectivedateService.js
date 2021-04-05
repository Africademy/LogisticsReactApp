import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/documenteffectivedates"

export function getDocumenteffectivedates() {
  return myhttp.get(apiEndPoint);
}

export function deleteDocumenteffectivedate(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getDocumenteffectivedate(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveDocumenteffectivedate(documenteffectivedate) {
  if (documenteffectivedate._id) {
    const body = { ...documenteffectivedate };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + documenteffectivedate._id, body);
  }
  return myhttp.post(apiEndPoint, documenteffectivedate);
}

