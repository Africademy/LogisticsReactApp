import { getAmounttypes } from "../services/amounttypeService";
import { getCargotypecodes } from "../services/cargotypecodeService";
import { getCargotypedescriptions } from "../services/cargotypedescriptionService";
import { getCountryoforigincodes } from "../services/countryoforigincodeService";
import { getFinaldestinationcountrys } from "../services/finaldestinationcountryService";
import { getHarmonizedsystemcodes } from "../services/harmonizedsystemcodeService";
import { getMeasurementtypes } from "../services/measurementtypeService";
import { getPackagetypecodes } from "../services/packagetypecodeService";
import { getQuantitytypes } from "../services/quantitytypeService";
import { getTotalpackagequantitys } from "../services/totalpackagequantityService";



export const CargoTypeCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getCargotypecodes();
  dispatch({
    type: "CARGO_CargoTypeCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const HarmonizedSystemCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getHarmonizedsystemcodes();
  dispatch({
    type: "CARGO_HarmonizedSystemCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const CargoTypeDescriptionCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getCargotypedescriptions();
  dispatch({
    type: "CARGO_CargoTypeDescriptionCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const CountryOfOriginCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getCountryoforigincodes();
  dispatch({
    type: "CARGO_CountryOfOriginCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const FinalDestinationCountryCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getFinaldestinationcountrys();
  dispatch({
    type: "CARGO_FinalDestinationCountryCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const measurementtypesCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getMeasurementtypes();
  dispatch({
    type: "CARGO_measurementtypesCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const amounttypesCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getAmounttypes();
  dispatch({
    type: "CARGO_amounttypesCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const quantitytypesCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getQuantitytypes();
  dispatch({
    type: "CARGO_quantitytypesCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const PackageTypeCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getPackagetypecodes();
  dispatch({
    type: "CARGO_PackageTypeCodesAction",
    payload: transportServiceLevelCodes,
  });
}
export const TotalpackagequantitysCodesAction = () => async (dispatch) => {
  const { data: transportServiceLevelCodes } = await getTotalpackagequantitys();
  dispatch({
    type: "CARGO_TotalpackagequantitysCodesAction",
    payload: transportServiceLevelCodes,
  });
}