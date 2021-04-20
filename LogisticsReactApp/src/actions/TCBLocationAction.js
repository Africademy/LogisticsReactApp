import { getCommunicationchannels } from "../services/communicationchannelService";
import { getContacttypecodes } from "../services/contacttypecodeService";
import { getCountrycodes } from "../services/countrycodeService";
import { getCurrencyofpartycodes } from "../services/currencyofpartycodeService";
import { getDescription200types } from "../services/description200typeService";
import { getDescription70types } from "../services/description70typeService";
import { getEntityidentificationtypes } from "../services/entityidentificationtypeService";
import { getIdentifiertypes } from "../services/identifiertypeService";
import { getLanguageofthepartycodes } from "../services/languageofthepartycodeService";







	export const AdditionalLocationIdentificationCodesAction = () => async (dispatch) =>{
    const { data: Identifiertypes } = await getIdentifiertypes();
    dispatch({
      type: "TCB_LOCATION_AdditionalLocationIdentificationCodes",
      payload: Identifiertypes,
    });
  }
  export const LocationSpecificInstructionsCodesAction  = () => async (dispatch) =>{
    const { data: transportServiceLevelCodes } = await getDescription200types();
    dispatch({
      type: "TCB_LOCATION_LocationSpecificInstructionsCodes",
      payload: transportServiceLevelCodes,
    });
  }
  export const CurrencyOfPartyCodesAction  = () => async (dispatch) =>{
    const { data: transportServiceLevelCodes } = await getCurrencyofpartycodes();
    dispatch({
      type: "TCB_LOCATION_CurrencyOfPartyCodes",
      payload: transportServiceLevelCodes,
    });
  }
  export const LanguageOfthePartyCodesAction  = () => async (dispatch) =>{
    const { data: transportServiceLevelCodes } = await getLanguageofthepartycodes();
    dispatch({
      type: "TCB_LOCATION_LanguageOfthePartyCodes",
      payload:transportServiceLevelCodes ,
    });
  }
  export const CountryCodesAction  = () => async (dispatch) =>{
    const { data: transportServiceLevelCodes } = await getCountrycodes();
    dispatch({
      type: "TCB_LOCATION_CountryCodes",
      payload: transportServiceLevelCodes,
    });
  }
  export const ContactTypeCodesAction  = () => async (dispatch) =>{
    const { data: transportServiceLevelCodes } = await getContacttypecodes();
    dispatch({
      type: "TCB_LOCATION_ContactTypeCodes",
      payload: transportServiceLevelCodes,
    });
  }
  export const ResposibilitiesCodesAction  = () => async (dispatch) =>{
    const { data: transportServiceLevelCodes } = await getDescription70types();
    dispatch({
      type: "TCB_LOCATION_ResposibilitiesCodes",
      payload: transportServiceLevelCodes,
    });
  }
  export const commmunicationChannelCodesAction  = () => async (dispatch) =>{
    const { data: transportServiceLevelCodes } = await getCommunicationchannels();
    dispatch({
      type: "TCB_LOCATION_commmunicationChannelCodes",
      payload: transportServiceLevelCodes,
    });
  }
  export const SublocationIdentificationCodesAction  = () => async (dispatch) =>{
    const { data: transportServiceLevelCodes } = await getEntityidentificationtypes();
    dispatch({
      type: "TCB_LOCATION_SublocationIdentificationCodes ",
      payload: transportServiceLevelCodes,
    });
  }
