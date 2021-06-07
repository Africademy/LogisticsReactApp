import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/locationspecificinstructionss"

export function getLocationspecificinstructionss() {
  return myhttp.get(apiEndPoint);
}

export function deleteLocationspecificinstructions(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLocationspecificinstructions(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLocationspecificinstructions(locationspecificinstructions) {
  if (locationspecificinstructions._id) {
    const body = { ...locationspecificinstructions };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + locationspecificinstructions._id, body);
  }
  return myhttp.post(apiEndPoint, locationspecificinstructions);
}

