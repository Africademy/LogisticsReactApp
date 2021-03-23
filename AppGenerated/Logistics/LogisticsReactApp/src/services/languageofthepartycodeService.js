import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/languageofthepartycodes"

export function getLanguageofthepartycodes() {
  return myhttp.get(apiEndPoint);
}

export function deleteLanguageofthepartycode(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getLanguageofthepartycode(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export function saveLanguageofthepartycode(languageofthepartycode) {
  if (languageofthepartycode._id) {
    const body = { ...languageofthepartycode };
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + languageofthepartycode._id, body);
  }
  return myhttp.post(apiEndPoint, languageofthepartycode);
}

