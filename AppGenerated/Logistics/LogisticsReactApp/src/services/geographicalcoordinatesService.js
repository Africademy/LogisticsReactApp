import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/geographicalcoordinatess"

export function getGeographicalcoordinatess() {
  return myhttp.get(apiEndPoint);
}

export function deleteGeographicalcoordinates(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getGeographicalcoordinates(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveGeographicalcoordinates(geographicalcoordinates) {
  if (geographicalcoordinates._id) {
    const body = { ...geographicalcoordinates };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + geographicalcoordinates._id, body);
  }
  return myhttp.post(apiEndPoint, geographicalcoordinates);
}

