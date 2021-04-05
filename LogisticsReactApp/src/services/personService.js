import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/persons"

export function getPersons() {
  return myhttp.get(apiEndPoint);
}

export function deletePerson(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPerson(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function savePerson(person) {
  if (person._id) {
    const body = { ...person };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + person._id, body);
  }
  return myhttp.post(apiEndPoint, person);
}

