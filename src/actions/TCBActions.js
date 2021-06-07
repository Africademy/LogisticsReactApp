
// 1. Order details ---  instred --- Service Details
// 2. PickUp Location -- search field remove  normal like secttion
// 3. Pick Up Time -- only Time Band
// 4. DropOff Location 
// 5. DropOff Time  -- only time band
// 6. Space Requirements


export const ServiceDetailsAction = (data) => async (dispatch) => {
  dispatch({
    type: "SERVICE_DETAILS",
    payload: data,
  });
};

export const PickUpLocationAction = (data) => async (dispatch) => {
  dispatch({
    type: "PICKUP_LOCATION",
    payload: data,
  });
};

export const PickUpTimeAction = (data) => async (dispatch) => {
  dispatch({
    type: "PICKUP_TIME",
    payload: data,
  });
};

export const DropOffLocationAction = (data) => async (dispatch) => {
  dispatch({
    type: "DROPOFF_LOCATION",
    payload: data,
  });
};

export const DropOffTimeAction = (data) => async (dispatch) => {
  dispatch({
    type: "DROPOFF_TIME",
    payload: data,
  });
};

export const SpaceRequirementsAction = (data) => async (dispatch) => {
  dispatch({
    type: "SPACE_REQUIREMENTS",
    payload: data,
  });
};

