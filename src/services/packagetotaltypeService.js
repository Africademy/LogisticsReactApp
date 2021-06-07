import myhttp from "./httpService";
import { apiUrl } from "../CRUDAppConfigs.json";

const apiEndPoint = apiUrl + "/packagetotaltypes"

export function getPackagetotaltypes() {
  return myhttp.get(apiEndPoint);
}

export function deletePackagetotaltype(id) {
  return myhttp.delete(apiEndPoint + "/" + id);
}

export function getPackagetotaltype(id) {
  return myhttp.get(apiEndPoint + "/" + id);
}

export async function  savePackagetotaltype(packagetotaltype) {
  if (packagetotaltype._id) {
    const body =  packagetotaltype ;
    delete body._id;
    return myhttp.put(apiEndPoint + "/" + packagetotaltype._id, body).then(
      (res)=> console.log(res)
    ).catch(
      (err)=> console.log(err)
    );
  }
  return await myhttp.post(apiEndPoint, packagetotaltype);
}

// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });