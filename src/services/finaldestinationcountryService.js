import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/finaldestinationcountrys"

export function getFinaldestinationcountrys() {
  return myhttp.get(apiEndPoint);
}

export function deleteFinaldestinationcountry(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getFinaldestinationcountry(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveFinaldestinationcountry(finaldestinationcountry) {
  if (finaldestinationcountry._id) {
    const body = { ...finaldestinationcountry };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + finaldestinationcountry._id, body);
  }
  return myhttp.post(apiEndPoint, finaldestinationcountry);
}

