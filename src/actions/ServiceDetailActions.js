import { getTransportservicecategorycodes } from "../services/transportservicecategorycodeService";
import { getTransportserviceconditiontypecodes } from "../services/transportserviceconditiontypecodeService";
import { getTransportservicelevelcodes } from "../services/transportservicelevelcodeService";




export const transportServiceCategoryCodesAction = () => async (dispatch) => {
  const {
    data: transportServiceCategoryCodes,
  } = await getTransportservicecategorycodes();

  dispatch({
    type: "SERVICE_DETAILS_CategoryCodes",
    payload: transportServiceCategoryCodes,
  });
};





export const transportServiceConditionTypeCodesAction = () => async (dispatch) => {
  const {
    data: transportServiceConditionTypeCodes,
  } = await getTransportserviceconditiontypecodes();

  dispatch({
    type: "SERVICE_DETAILS_ConditionTypeCodes",
    payload: transportServiceConditionTypeCodes,
  });
};

export const transportServiceLevelCodesAction = () => async (dispatch) => {
  const {
    data: transportServiceLevelCodes,
  } = await getTransportservicelevelcodes();
  dispatch({
    type: "SERVICE_DETAILS_LevelCodes",
    payload: transportServiceLevelCodes,
  });
};