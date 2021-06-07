const initialState = {
	ServiceDetailsData: "",
	PickUpLocationData: "",
	PickUpTime: "",
	DropOffLocation: "",
	DropOffTime: "",
	SpaceRequirements: "",

	transportServiceCategoryCodes: [],
	transportServiceConditionTypeCodes: [],
	transportServiceLevelCodes: [],

	AdditionalLocationIdentificationCodes: [],
	LocationSpecificInstructionsCodes: [],
	CurrencyOfPartyCodes: [],
	LanguageOfthePartyCodes: [],
	CountryCodes: [],
	ContactTypeCodes: [],
	ResposibilitiesCodes: [],
	commmunicationChannelCodes: [],
	SublocationIdentificationCodes: [],

	CargoTypeCodes: [],
	HarmonizedSystemCodes: [],
	CargoTypeDescriptionCodes: [],
	CountryOfOriginCodes: [],
	FinalDestinationCountryCodes: [],
	measurementtypesCodes: [],
	amounttypesCodes: [],
	quantitytypesCodes: [],
	PackageTypeCodes: [],
	TotalpackagequantitysCodes: [],
};
console.log(initialState, "reduc state 000");
const TCBReducer = (state = initialState, action) => {
	switch (action.type) {

    // Cargo
    case "CARGO_CargoTypeCodesAction":
			return {
				...state,
				CargoTypeCodes: action.payload,
			};
      case "CARGO_HarmonizedSystemCodesAction":
			return {
				...state,
				HarmonizedSystemCodes: action.payload,
			};
      case "CARGO_CargoTypeDescriptionCodesAction":
        return {
          ...state,
          CargoTypeDescriptionCodes: action.payload,
        };
        case "CARGO_CountryOfOriginCodesAction":
          return {
            ...state,
            CountryOfOriginCodes: action.payload,
          };  
          case "CARGO_FinalDestinationCountryCodesAction":
          return {
            ...state,
            FinalDestinationCountryCodes: action.payload,
          };  
          case "CARGO_measurementtypesCodesAction":
            return {
              ...state,
              measurementtypesCodes: action.payload,
            };  
            case "CARGO_amounttypesCodesAction":
            return {
              ...state,
              amounttypesCodes: action.payload,
            };  
            case "CARGO_quantitytypesCodesAction":
            return {
              ...state,
              quantitytypesCodes: action.payload,
            };  
            case "CARGO_PackageTypeCodesAction":
              return {
                ...state,
                PackageTypeCodes: action.payload,
              };
              case "CARGO_TotalpackagequantitysCodesAction":
                return {
                  ...state,
                  TotalpackagequantitysCodes: action.payload,
                }; 
      
      



		// Locations Tcb
		case "TCB_LOCATION_AdditionalLocationIdentificationCodes":
			return {
				...state,
				AdditionalLocationIdentificationCodes: action.payload,
			};
		case "TCB_LOCATION_LocationSpecificInstructionsCodes":
			return { ...state, LocationSpecificInstructionsCodes: action.payload };
		case "TCB_LOCATION_CurrencyOfPartyCodes":
			return { ...state, CurrencyOfPartyCodes: action.payload };
		case "TCB_LOCATION_LanguageOfthePartyCodes":
			return { ...state, LanguageOfthePartyCodes: action.payload };
		case "TCB_LOCATION_CountryCodes":
			return { ...state, CountryCodes: action.payload };
		case "TCB_LOCATION_ContactTypeCodes":
			return { ...state, ContactTypeCodes: action.payload };
		case "TCB_LOCATION_ResposibilitiesCodes":
			return { ...state, ResposibilitiesCodes: action.payload };
		case "TCB_LOCATION_commmunicationChannelCodes":
			return { ...state, commmunicationChannelCodes: action.payload };
		case "TCB_LOCATION_SublocationIdentificationCodes":
			return { ...state, SublocationIdentificationCodes: action.payload };

		//Oreder SERVICE_DETAILS

		case "SERVICE_DETAILS_CategoryCodes":
			return { ...state, transportServiceCategoryCodes: action.payload };
		case "SERVICE_DETAILS_ConditionTypeCodes":
			return { ...state, transportServiceConditionTypeCodes: action.payload };
		case "SERVICE_DETAILS_LevelCodes":
			return { ...state, transportServiceLevelCodes: action.payload };

		//   normal services

		case "SERVICE_DETAILS":
			return { ...state, ServiceDetailsData: action.payload };
		case "PICKUP_LOCATION":
			return { ...state, PickUpLocationData: action.payload };
		case "PICKUP_TIME":
			return { ...state, PickUpTime: action.payload };
		case "DROPOFF_LOCATION":
			return { ...state, DropOffLocation: action.payload };
		case "DROPOFF_TIME":
			return { ...state, DropOffTime: action.payload };
		case "SPACE_REQUIREMENTS":
			return { ...state, SpaceRequirements: action.payload };

		default:
			return state;
	}
};
export default TCBReducer;
