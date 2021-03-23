import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/printinginstructioncodes"

export function getPrintinginstructioncodes() {
  return myhttp.get(apiEndPoint);
}

export function deletePrintinginstructioncode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPrintinginstructioncode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePrintinginstructioncode(printinginstructioncode) {
  if (printinginstructioncode._id) {
    const body = { ...printinginstructioncode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + printinginstructioncode._id, body);
  }
  return myhttp.post(apiEndPoint, printinginstructioncode);
}

