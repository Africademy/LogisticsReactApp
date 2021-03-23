import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/associatedinvoiceamounts"

export function getAssociatedinvoiceamounts() {
  return myhttp.get(apiEndPoint);
}

export function deleteAssociatedinvoiceamount(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getAssociatedinvoiceamount(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveAssociatedinvoiceamount(associatedinvoiceamount) {
  if (associatedinvoiceamount._id) {
    const body = { ...associatedinvoiceamount };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + associatedinvoiceamount._id, body);
  }
  return myhttp.post(apiEndPoint, associatedinvoiceamount);
}

