
const initialState = {

      ServiceDetailsData: '',
      PickUpLocationData:'',
      PickUpTime:'',
      DropOffLocation:'',
      DropOffTime:'',
      SpaceRequirements:'',

      transportServiceCategoryCodes:'',
      transportServiceConditionTypeCodes:'',
      transportServiceLevelCodes:'',

      
      AdditionalLocationIdentificationCodes:'',
      LocationSpecificInstructionsCodes:'',
      CurrencyOfPartyCodes:'',
      LanguageOfthePartyCodes:'',
      CountryCodes:'',
      ContactTypeCodes:'',
      ResposibilitiesCodes:'',
      commmunicationChannelCodes:'',
      SublocationIdentificationCodes:''



    
}
console.log(initialState,"reduc state 000")
 const TCBReducer = ( state =initialState,action) => {
   
  switch (action.type) {

    // Lovations Tcb
    case "TCB_LOCATION_AdditionalLocationIdentificationCodes":
      return { ...state,
        AdditionalLocationIdentificationCodes: action.payload 
      };
      case "TCB_LOCATION_LocationSpecificInstructionsCodes":
      return { ...state,
        LocationSpecificInstructionsCodes: action.payload 
      };
      case "TCB_LOCATION_CurrencyOfPartyCodes":
        return { ...state,
          CurrencyOfPartyCodes : action.payload 
        };
        case "TCB_LOCATION_LanguageOfthePartyCodes":
          return { ...state,
            LanguageOfthePartyCodes : action.payload 
          };
          case "TCB_LOCATION_CountryCodes":
            return { ...state,
              CountryCodes : action.payload 
            };
            case "TCB_LOCATION_ContactTypeCodes":
              return { ...state,
                ContactTypeCodes : action.payload 
              };
              case "TCB_LOCATION_ResposibilitiesCodes":
                return { ...state,
                  ResposibilitiesCodes: action.payload 
                };
                case "TCB_LOCATION_commmunicationChannelCodes":
                return { ...state,
                  commmunicationChannelCodes : action.payload 
                };
                case "TCB_LOCATION_SublocationIdentificationCodes":
                return { ...state,
                  SublocationIdentificationCodes : action.payload 
                };







    //Oreder SERVICE_DETAILS

    case "SERVICE_DETAILS_CategoryCodes":
      return { ...state,
        transportServiceCategoryCodes: action.payload 
      };
      case "SERVICE_DETAILS_ConditionTypeCodes":
        return { ...state,
          transportServiceConditionTypeCodes: action.payload 
        };
        case "SERVICE_DETAILS_LevelCodes":
          return { ...state,
            transportServiceLevelCodes: action.payload 
          };

//   normal services


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