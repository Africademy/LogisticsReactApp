
const initialState = {

      ServiceDetailsData: '',
      PickUpLocationData:'',
      PickUpTime:'',
      DropOffLocation:'',
      DropOffTime:'',
      SpaceRequirements:''

    
}
 const TCBReducer = ( state =initialState,action) => {
   
  switch (action.type) {
    case "SERVICE_DETAILS":
      return { ...state,
        ServiceDetailsData: action.payload 
      };
      case "PICKUP_LOCATION":
      return { ...state,
        PickUpLocationData: action.payload 
      };
      case "PICKUP_TIME":
      return { ...state,
        PickUpTime: action.payload 
      };
      case "DROPOFF_LOCATION":
      return { ...state,
        DropOffLocation: action.payload 
      };
      case "DROPOFF_TIME":
      return { ...state,
        DropOffTime: action.payload 
      };
      case "SPACE_REQUIREMENTS":
      return { ...state,
        SpaceRequirements: action.payload 
      };
    
    default:
      return state;
  }
};
export default TCBReducer