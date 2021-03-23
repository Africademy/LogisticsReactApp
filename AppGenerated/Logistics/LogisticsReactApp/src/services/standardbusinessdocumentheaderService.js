import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/standardbusinessdocumentheaders"

export function getStandardbusinessdocumentheaders() {
  return myhttp.get(apiEndPoint);
}

export function deleteStandardbusinessdocumentheader(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getStandardbusinessdocumentheader(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveStandardbusinessdocumentheader(standardbusinessdocumentheader) {
  if (standardbusinessdocumentheader._id) {
    const body = { ...standardbusinessdocumentheader };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + standardbusinessdocumentheader._id, body);
  }
  return myhttp.post(apiEndPoint, standardbusinessdocumentheader);
}

