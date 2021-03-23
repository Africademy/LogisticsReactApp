import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ProfileForm from "./components/profileForm";
import PasswordResetForm from "./components/passwordResetForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import TransportCapacityBooking from "./components/TransportCapacityBooking"
import StartingPage from "./components/StartingPage";
import Additionalconsignmentidentificationtypes from "./components/additionalconsignmentidentificationtype/additionalconsignmentidentificationtypes";
import AdditionalconsignmentidentificationtypeForm from "./components/additionalconsignmentidentificationtype/additionalconsignmentidentificationtypeForm";
import AdditionalconsignmentidentificationtypeDetails from "./components/additionalconsignmentidentificationtype/additionalconsignmentidentificationtypeDetails";
import Additionalindividualassetidentifications from "./components/additionalindividualassetidentification/additionalindividualassetidentifications";
import AdditionalindividualassetidentificationForm from "./components/additionalindividualassetidentification/additionalindividualassetidentificationForm";
import AdditionalindividualassetidentificationDetails from "./components/additionalindividualassetidentification/additionalindividualassetidentificationDetails";
import Additionallocationidentifications from "./components/additionallocationidentification/additionallocationidentifications";
import AdditionallocationidentificationForm from "./components/additionallocationidentification/additionallocationidentificationForm";
import AdditionallocationidentificationDetails from "./components/additionallocationidentification/additionallocationidentificationDetails";
import Additionallogisticunitidentificationtypes from "./components/additionallogisticunitidentificationtype/additionallogisticunitidentificationtypes";
import AdditionallogisticunitidentificationtypeForm from "./components/additionallogisticunitidentificationtype/additionallogisticunitidentificationtypeForm";
import AdditionallogisticunitidentificationtypeDetails from "./components/additionallogisticunitidentificationtype/additionallogisticunitidentificationtypeDetails";
import Additionalpartyidentifications from "./components/additionalpartyidentification/additionalpartyidentifications";
import AdditionalpartyidentificationForm from "./components/additionalpartyidentification/additionalpartyidentificationForm";
import AdditionalpartyidentificationDetails from "./components/additionalpartyidentification/additionalpartyidentificationDetails";
import Additionalpartyidentificationtypes from "./components/additionalpartyidentificationtype/additionalpartyidentificationtypes";
import AdditionalpartyidentificationtypeForm from "./components/additionalpartyidentificationtype/additionalpartyidentificationtypeForm";
import AdditionalpartyidentificationtypeDetails from "./components/additionalpartyidentificationtype/additionalpartyidentificationtypeDetails";
import Additionalreturnableassetidentifications from "./components/additionalreturnableassetidentification/additionalreturnableassetidentifications";
import AdditionalreturnableassetidentificationForm from "./components/additionalreturnableassetidentification/additionalreturnableassetidentificationForm";
import AdditionalreturnableassetidentificationDetails from "./components/additionalreturnableassetidentification/additionalreturnableassetidentificationDetails";
import Additionalshipmentidentificationtypes from "./components/additionalshipmentidentificationtype/additionalshipmentidentificationtypes";
import AdditionalshipmentidentificationtypeForm from "./components/additionalshipmentidentificationtype/additionalshipmentidentificationtypeForm";
import AdditionalshipmentidentificationtypeDetails from "./components/additionalshipmentidentificationtype/additionalshipmentidentificationtypeDetails";
import Addresss from "./components/address/addresss";
import AddressForm from "./components/address/addressForm";
import AddressDetails from "./components/address/addressDetails";
import Afterhourscommunicationchannels from "./components/afterhourscommunicationchannel/afterhourscommunicationchannels";
import AfterhourscommunicationchannelForm from "./components/afterhourscommunicationchannel/afterhourscommunicationchannelForm";
import AfterhourscommunicationchannelDetails from "./components/afterhourscommunicationchannel/afterhourscommunicationchannelDetails";
import Alternatedeliverytermscodes from "./components/alternatedeliverytermscode/alternatedeliverytermscodes";
import AlternatedeliverytermscodeForm from "./components/alternatedeliverytermscode/alternatedeliverytermscodeForm";
import AlternatedeliverytermscodeDetails from "./components/alternatedeliverytermscode/alternatedeliverytermscodeDetails";
import Amounttypes from "./components/amounttype/amounttypes";
import AmounttypeForm from "./components/amounttype/amounttypeForm";
import AmounttypeDetails from "./components/amounttype/amounttypeDetails";
import Associatedinvoiceamounts from "./components/associatedinvoiceamount/associatedinvoiceamounts";
import AssociatedinvoiceamountForm from "./components/associatedinvoiceamount/associatedinvoiceamountForm";
import AssociatedinvoiceamountDetails from "./components/associatedinvoiceamount/associatedinvoiceamountDetails";
import Businessservices from "./components/businessservice/businessservices";
import BusinessserviceForm from "./components/businessservice/businessserviceForm";
import BusinessserviceDetails from "./components/businessservice/businessserviceDetails";
import Cargotypecodes from "./components/cargotypecode/cargotypecodes";
import CargotypecodeForm from "./components/cargotypecode/cargotypecodeForm";
import CargotypecodeDetails from "./components/cargotypecode/cargotypecodeDetails";
import Cargotypedescriptions from "./components/cargotypedescription/cargotypedescriptions";
import CargotypedescriptionForm from "./components/cargotypedescription/cargotypedescriptionForm";
import CargotypedescriptionDetails from "./components/cargotypedescription/cargotypedescriptionDetails";
import Carriers from "./components/carrier/carriers";
import CarrierForm from "./components/carrier/carrierForm";
import CarrierDetails from "./components/carrier/carrierDetails";
import Codetypes from "./components/codetype/codetypes";
import CodetypeForm from "./components/codetype/codetypeForm";
import CodetypeDetails from "./components/codetype/codetypeDetails";
import Communicationchannels from "./components/communicationchannel/communicationchannels";
import CommunicationchannelForm from "./components/communicationchannel/communicationchannelForm";
import CommunicationchannelDetails from "./components/communicationchannel/communicationchannelDetails";
import Communicationchannelcodes from "./components/communicationchannelcode/communicationchannelcodes";
import CommunicationchannelcodeForm from "./components/communicationchannelcode/communicationchannelcodeForm";
import CommunicationchannelcodeDetails from "./components/communicationchannelcode/communicationchannelcodeDetails";
import Communicationchanneltypes from "./components/communicationchanneltype/communicationchanneltypes";
import CommunicationchanneltypeForm from "./components/communicationchanneltype/communicationchanneltypeForm";
import CommunicationchanneltypeDetails from "./components/communicationchanneltype/communicationchanneltypeDetails";
import Consignmentidentificationtypes from "./components/consignmentidentificationtype/consignmentidentificationtypes";
import ConsignmentidentificationtypeForm from "./components/consignmentidentificationtype/consignmentidentificationtypeForm";
import ConsignmentidentificationtypeDetails from "./components/consignmentidentificationtype/consignmentidentificationtypeDetails";
import Contactinformations from "./components/contactinformation/contactinformations";
import ContactinformationForm from "./components/contactinformation/contactinformationForm";
import ContactinformationDetails from "./components/contactinformation/contactinformationDetails";
import Contacttypes from "./components/contacttype/contacttypes";
import ContacttypeForm from "./components/contacttype/contacttypeForm";
import ContacttypeDetails from "./components/contacttype/contacttypeDetails";
import Contacttypecodes from "./components/contacttypecode/contacttypecodes";
import ContacttypecodeForm from "./components/contacttypecode/contacttypecodeForm";
import ContacttypecodeDetails from "./components/contacttypecode/contacttypecodeDetails";
import Contentowners from "./components/contentowner/contentowners";
import ContentownerForm from "./components/contentowner/contentownerForm";
import ContentownerDetails from "./components/contentowner/contentownerDetails";
import Correlationinformations from "./components/correlationinformation/correlationinformations";
import CorrelationinformationForm from "./components/correlationinformation/correlationinformationForm";
import CorrelationinformationDetails from "./components/correlationinformation/correlationinformationDetails";
import Countrycodes from "./components/countrycode/countrycodes";
import CountrycodeForm from "./components/countrycode/countrycodeForm";
import CountrycodeDetails from "./components/countrycode/countrycodeDetails";
import Countryoforigincodes from "./components/countryoforigincode/countryoforigincodes";
import CountryoforigincodeForm from "./components/countryoforigincode/countryoforigincodeForm";
import CountryoforigincodeDetails from "./components/countryoforigincode/countryoforigincodeDetails";
import Currencyofpartycodes from "./components/currencyofpartycode/currencyofpartycodes";
import CurrencyofpartycodeForm from "./components/currencyofpartycode/currencyofpartycodeForm";
import CurrencyofpartycodeDetails from "./components/currencyofpartycode/currencyofpartycodeDetails";
import Currentholderregistrations from "./components/currentholderregistration/currentholderregistrations";
import CurrentholderregistrationForm from "./components/currentholderregistration/currentholderregistrationForm";
import CurrentholderregistrationDetails from "./components/currentholderregistration/currentholderregistrationDetails";
import Dangerousgoodsattributetypes from "./components/dangerousgoodsattributetype/dangerousgoodsattributetypes";
import DangerousgoodsattributetypeForm from "./components/dangerousgoodsattributetype/dangerousgoodsattributetypeForm";
import DangerousgoodsattributetypeDetails from "./components/dangerousgoodsattributetype/dangerousgoodsattributetypeDetails";
import Dangerousgoodsinformationtypes from "./components/dangerousgoodsinformationtype/dangerousgoodsinformationtypes";
import DangerousgoodsinformationtypeForm from "./components/dangerousgoodsinformationtype/dangerousgoodsinformationtypeForm";
import DangerousgoodsinformationtypeDetails from "./components/dangerousgoodsinformationtype/dangerousgoodsinformationtypeDetails";
import Dangerousgoodsregulationinformationtypes from "./components/dangerousgoodsregulationinformationtype/dangerousgoodsregulationinformationtypes";
import DangerousgoodsregulationinformationtypeForm from "./components/dangerousgoodsregulationinformationtype/dangerousgoodsregulationinformationtypeForm";
import DangerousgoodsregulationinformationtypeDetails from "./components/dangerousgoodsregulationinformationtype/dangerousgoodsregulationinformationtypeDetails";
import Dateoptionaltimetypes from "./components/dateoptionaltimetype/dateoptionaltimetypes";
import DateoptionaltimetypeForm from "./components/dateoptionaltimetype/dateoptionaltimetypeForm";
import DateoptionaltimetypeDetails from "./components/dateoptionaltimetype/dateoptionaltimetypeDetails";
import Datetimerangetypes from "./components/datetimerangetype/datetimerangetypes";
import DatetimerangetypeForm from "./components/datetimerangetype/datetimerangetypeForm";
import DatetimerangetypeDetails from "./components/datetimerangetype/datetimerangetypeDetails";
import Declaredvalueforcustomss from "./components/declaredvalueforcustoms/declaredvalueforcustomss";
import DeclaredvalueforcustomsForm from "./components/declaredvalueforcustoms/declaredvalueforcustomsForm";
import DeclaredvalueforcustomsDetails from "./components/declaredvalueforcustoms/declaredvalueforcustomsDetails";
import Declaredweightforcustomss from "./components/declaredweightforcustoms/declaredweightforcustomss";
import DeclaredweightforcustomsForm from "./components/declaredweightforcustoms/declaredweightforcustomsForm";
import DeclaredweightforcustomsDetails from "./components/declaredweightforcustoms/declaredweightforcustomsDetails";
import Deliveryinstructionss from "./components/deliveryinstructions/deliveryinstructionss";
import DeliveryinstructionsForm from "./components/deliveryinstructions/deliveryinstructionsForm";
import DeliveryinstructionsDetails from "./components/deliveryinstructions/deliveryinstructionsDetails";
import Deliverytermslocations from "./components/deliverytermslocation/deliverytermslocations";
import DeliverytermslocationForm from "./components/deliverytermslocation/deliverytermslocationForm";
import DeliverytermslocationDetails from "./components/deliverytermslocation/deliverytermslocationDetails";
import Deliverytermstypes from "./components/deliverytermstype/deliverytermstypes";
import DeliverytermstypeForm from "./components/deliverytermstype/deliverytermstypeForm";
import DeliverytermstypeDetails from "./components/deliverytermstype/deliverytermstypeDetails";
import Depths from "./components/depth/depths";
import DepthForm from "./components/depth/depthForm";
import DepthDetails from "./components/depth/depthDetails";
import Descriptions from "./components/description/descriptions";
import DescriptionForm from "./components/description/descriptionForm";
import DescriptionDetails from "./components/description/descriptionDetails";
import Description1000types from "./components/description1000type/description1000types";
import Description1000typeForm from "./components/description1000type/description1000typeForm";
import Description1000typeDetails from "./components/description1000type/description1000typeDetails";
import Description200types from "./components/description200type/description200types";
import Description200typeForm from "./components/description200type/description200typeForm";
import Description200typeDetails from "./components/description200type/description200typeDetails";
import Description500types from "./components/description500type/description500types";
import Description500typeForm from "./components/description500type/description500typeForm";
import Description500typeDetails from "./components/description500type/description500typeDetails";
import Description70types from "./components/description70type/description70types";
import Description70typeForm from "./components/description70type/description70typeForm";
import Description70typeDetails from "./components/description70type/description70typeDetails";
import Description80types from "./components/description80type/description80types";
import Description80typeForm from "./components/description80type/description80typeForm";
import Description80typeDetails from "./components/description80type/description80typeDetails";
import Dimensiontypes from "./components/dimensiontype/dimensiontypes";
import DimensiontypeForm from "./components/dimensiontype/dimensiontypeForm";
import DimensiontypeDetails from "./components/dimensiontype/dimensiontypeDetails";
import Documenteffectivedates from "./components/documenteffectivedate/documenteffectivedates";
import DocumenteffectivedateForm from "./components/documenteffectivedate/documenteffectivedateForm";
import DocumenteffectivedateDetails from "./components/documenteffectivedate/documenteffectivedateDetails";
import Documentidentifications from "./components/documentidentification/documentidentifications";
import DocumentidentificationForm from "./components/documentidentification/documentidentificationForm";
import DocumentidentificationDetails from "./components/documentidentification/documentidentificationDetails";
import Documentreferencetypes from "./components/documentreferencetype/documentreferencetypes";
import DocumentreferencetypeForm from "./components/documentreferencetype/documentreferencetypeForm";
import DocumentreferencetypeDetails from "./components/documentreferencetype/documentreferencetypeDetails";
import Dropoffpartys from "./components/dropoffparty/dropoffpartys";
import DropoffpartyForm from "./components/dropoffparty/dropoffpartyForm";
import DropoffpartyDetails from "./components/dropoffparty/dropoffpartyDetails";
import Dutyfeetaxdescriptions from "./components/dutyfeetaxdescription/dutyfeetaxdescriptions";
import DutyfeetaxdescriptionForm from "./components/dutyfeetaxdescription/dutyfeetaxdescriptionForm";
import DutyfeetaxdescriptionDetails from "./components/dutyfeetaxdescription/dutyfeetaxdescriptionDetails";
import Dutyfeetaxregistrations from "./components/dutyfeetaxregistration/dutyfeetaxregistrations";
import DutyfeetaxregistrationForm from "./components/dutyfeetaxregistration/dutyfeetaxregistrationForm";
import DutyfeetaxregistrationDetails from "./components/dutyfeetaxregistration/dutyfeetaxregistrationDetails";
import Dutyfeetaxregistrationids from "./components/dutyfeetaxregistrationid/dutyfeetaxregistrationids";
import DutyfeetaxregistrationidForm from "./components/dutyfeetaxregistrationid/dutyfeetaxregistrationidForm";
import DutyfeetaxregistrationidDetails from "./components/dutyfeetaxregistrationid/dutyfeetaxregistrationidDetails";
import Dutyfeetaxregistrationtypes from "./components/dutyfeetaxregistrationtype/dutyfeetaxregistrationtypes";
import DutyfeetaxregistrationtypeForm from "./components/dutyfeetaxregistrationtype/dutyfeetaxregistrationtypeForm";
import DutyfeetaxregistrationtypeDetails from "./components/dutyfeetaxregistrationtype/dutyfeetaxregistrationtypeDetails";
import Dutyfeetaxtypecodes from "./components/dutyfeetaxtypecode/dutyfeetaxtypecodes";
import DutyfeetaxtypecodeForm from "./components/dutyfeetaxtypecode/dutyfeetaxtypecodeForm";
import DutyfeetaxtypecodeDetails from "./components/dutyfeetaxtypecode/dutyfeetaxtypecodeDetails";
import Ecom_attributevaluepairlisttypes from "./components/ecom_attributevaluepairlisttype/ecom_attributevaluepairlisttypes";
import Ecom_attributevaluepairlisttypeForm from "./components/ecom_attributevaluepairlisttype/ecom_attributevaluepairlisttypeForm";
import Ecom_attributevaluepairlisttypeDetails from "./components/ecom_attributevaluepairlisttype/ecom_attributevaluepairlisttypeDetails";
import Ecomstringattributevaluepairlists from "./components/ecomstringattributevaluepairlist/ecomstringattributevaluepairlists";
import EcomstringattributevaluepairlistForm from "./components/ecomstringattributevaluepairlist/ecomstringattributevaluepairlistForm";
import EcomstringattributevaluepairlistDetails from "./components/ecomstringattributevaluepairlist/ecomstringattributevaluepairlistDetails";
import Entityidentificationtypes from "./components/entityidentificationtype/entityidentificationtypes";
import EntityidentificationtypeForm from "./components/entityidentificationtype/entityidentificationtypeForm";
import EntityidentificationtypeDetails from "./components/entityidentificationtype/entityidentificationtypeDetails";
import Enumerationlibrarys from "./components/enumerationlibrary/enumerationlibrarys";
import EnumerationlibraryForm from "./components/enumerationlibrary/enumerationlibraryForm";
import EnumerationlibraryDetails from "./components/enumerationlibrary/enumerationlibraryDetails";
import Finaldestinationcountrys from "./components/finaldestinationcountry/finaldestinationcountrys";
import FinaldestinationcountryForm from "./components/finaldestinationcountry/finaldestinationcountryForm";
import FinaldestinationcountryDetails from "./components/finaldestinationcountry/finaldestinationcountryDetails";
import Financialaccounts from "./components/financialaccount/financialaccounts";
import FinancialaccountForm from "./components/financialaccount/financialaccountForm";
import FinancialaccountDetails from "./components/financialaccount/financialaccountDetails";
import Financialaccountnumbertypecodes from "./components/financialaccountnumbertypecode/financialaccountnumbertypecodes";
import FinancialaccountnumbertypecodeForm from "./components/financialaccountnumbertypecode/financialaccountnumbertypecodeForm";
import FinancialaccountnumbertypecodeDetails from "./components/financialaccountnumbertypecode/financialaccountnumbertypecodeDetails";
import Financialaccounttypes from "./components/financialaccounttype/financialaccounttypes";
import FinancialaccounttypeForm from "./components/financialaccounttype/financialaccounttypeForm";
import FinancialaccounttypeDetails from "./components/financialaccounttype/financialaccounttypeDetails";
import Financialinstitutioninformationtypes from "./components/financialinstitutioninformationtype/financialinstitutioninformationtypes";
import FinancialinstitutioninformationtypeForm from "./components/financialinstitutioninformationtype/financialinstitutioninformationtypeForm";
import FinancialinstitutioninformationtypeDetails from "./components/financialinstitutioninformationtype/financialinstitutioninformationtypeDetails";
import Financialroutingnumbers from "./components/financialroutingnumber/financialroutingnumbers";
import FinancialroutingnumberForm from "./components/financialroutingnumber/financialroutingnumberForm";
import FinancialroutingnumberDetails from "./components/financialroutingnumber/financialroutingnumberDetails";
import Financialroutingnumbertypes from "./components/financialroutingnumbertype/financialroutingnumbertypes";
import FinancialroutingnumbertypeForm from "./components/financialroutingnumbertype/financialroutingnumbertypeForm";
import FinancialroutingnumbertypeDetails from "./components/financialroutingnumbertype/financialroutingnumbertypeDetails";
import Financialroutingnumbertypecodes from "./components/financialroutingnumbertypecode/financialroutingnumbertypecodes";
import FinancialroutingnumbertypecodeForm from "./components/financialroutingnumbertypecode/financialroutingnumbertypecodeForm";
import FinancialroutingnumbertypecodeDetails from "./components/financialroutingnumbertypecode/financialroutingnumbertypecodeDetails";
import Geographicalcoordinatess from "./components/geographicalcoordinates/geographicalcoordinatess";
import GeographicalcoordinatesForm from "./components/geographicalcoordinates/geographicalcoordinatesForm";
import GeographicalcoordinatesDetails from "./components/geographicalcoordinates/geographicalcoordinatesDetails";
import Handlinginstructioncodes from "./components/handlinginstructioncode/handlinginstructioncodes";
import HandlinginstructioncodeForm from "./components/handlinginstructioncode/handlinginstructioncodeForm";
import HandlinginstructioncodeDetails from "./components/handlinginstructioncode/handlinginstructioncodeDetails";
import Handlinginstructiontexts from "./components/handlinginstructiontext/handlinginstructiontexts";
import HandlinginstructiontextForm from "./components/handlinginstructiontext/handlinginstructiontextForm";
import HandlinginstructiontextDetails from "./components/handlinginstructiontext/handlinginstructiontextDetails";
import Handlinginstructiontypes from "./components/handlinginstructiontype/handlinginstructiontypes";
import HandlinginstructiontypeForm from "./components/handlinginstructiontype/handlinginstructiontypeForm";
import HandlinginstructiontypeDetails from "./components/handlinginstructiontype/handlinginstructiontypeDetails";
import Harmonizedsystemcodes from "./components/harmonizedsystemcode/harmonizedsystemcodes";
import HarmonizedsystemcodeForm from "./components/harmonizedsystemcode/harmonizedsystemcodeForm";
import HarmonizedsystemcodeDetails from "./components/harmonizedsystemcode/harmonizedsystemcodeDetails";
import Heights from "./components/height/heights";
import HeightForm from "./components/height/heightForm";
import HeightDetails from "./components/height/heightDetails";
import Identifiers from "./components/identifier/identifiers";
import IdentifierForm from "./components/identifier/identifierForm";
import IdentifierDetails from "./components/identifier/identifierDetails";
import Identifiertypes from "./components/identifiertype/identifiertypes";
import IdentifiertypeForm from "./components/identifiertype/identifiertypeForm";
import IdentifiertypeDetails from "./components/identifiertype/identifiertypeDetails";
import Identitydocuments from "./components/identitydocument/identitydocuments";
import IdentitydocumentForm from "./components/identitydocument/identitydocumentForm";
import IdentitydocumentDetails from "./components/identitydocument/identitydocumentDetails";
import Identitydocumenttypes from "./components/identitydocumenttype/identitydocumenttypes";
import IdentitydocumenttypeForm from "./components/identitydocumenttype/identitydocumenttypeForm";
import IdentitydocumenttypeDetails from "./components/identitydocumenttype/identitydocumenttypeDetails";
import Includedtransportequipments from "./components/includedtransportequipment/includedtransportequipments";
import IncludedtransportequipmentForm from "./components/includedtransportequipment/includedtransportequipmentForm";
import IncludedtransportequipmentDetails from "./components/includedtransportequipment/includedtransportequipmentDetails";
import Includedtransportmeanss from "./components/includedtransportmeans/includedtransportmeanss";
import IncludedtransportmeansForm from "./components/includedtransportmeans/includedtransportmeansForm";
import IncludedtransportmeansDetails from "./components/includedtransportmeans/includedtransportmeansDetails";
import Incotermscodes from "./components/incotermscode/incotermscodes";
import IncotermscodeForm from "./components/incotermscode/incotermscodeForm";
import IncotermscodeDetails from "./components/incotermscode/incotermscodeDetails";
import Individualassetidentifications from "./components/individualassetidentification/individualassetidentifications";
import IndividualassetidentificationForm from "./components/individualassetidentification/individualassetidentificationForm";
import IndividualassetidentificationDetails from "./components/individualassetidentification/individualassetidentificationDetails";
import Individualreturnableassetidentifications from "./components/individualreturnableassetidentification/individualreturnableassetidentifications";
import IndividualreturnableassetidentificationForm from "./components/individualreturnableassetidentification/individualreturnableassetidentificationForm";
import IndividualreturnableassetidentificationDetails from "./components/individualreturnableassetidentification/individualreturnableassetidentificationDetails";
import Issuedcapitals from "./components/issuedcapital/issuedcapitals";
import IssuedcapitalForm from "./components/issuedcapital/issuedcapitalForm";
import IssuedcapitalDetails from "./components/issuedcapital/issuedcapitalDetails";
import Languageofthepartycodes from "./components/languageofthepartycode/languageofthepartycodes";
import LanguageofthepartycodeForm from "./components/languageofthepartycode/languageofthepartycodeForm";
import LanguageofthepartycodeDetails from "./components/languageofthepartycode/languageofthepartycodeDetails";
import Legalregistrations from "./components/legalregistration/legalregistrations";
import LegalregistrationForm from "./components/legalregistration/legalregistrationForm";
import LegalregistrationDetails from "./components/legalregistration/legalregistrationDetails";
import Legalregistrationtypes from "./components/legalregistrationtype/legalregistrationtypes";
import LegalregistrationtypeForm from "./components/legalregistrationtype/legalregistrationtypeForm";
import LegalregistrationtypeDetails from "./components/legalregistrationtype/legalregistrationtypeDetails";
import Legalstructures from "./components/legalstructure/legalstructures";
import LegalstructureForm from "./components/legalstructure/legalstructureForm";
import LegalstructureDetails from "./components/legalstructure/legalstructureDetails";
import Locationspecificinstructionss from "./components/locationspecificinstructions/locationspecificinstructionss";
import LocationspecificinstructionsForm from "./components/locationspecificinstructions/locationspecificinstructionsForm";
import LocationspecificinstructionsDetails from "./components/locationspecificinstructions/locationspecificinstructionsDetails";
import Logisticeventdatetimes from "./components/logisticeventdatetime/logisticeventdatetimes";
import LogisticeventdatetimeForm from "./components/logisticeventdatetime/logisticeventdatetimeForm";
import LogisticeventdatetimeDetails from "./components/logisticeventdatetime/logisticeventdatetimeDetails";
import Logisticeventdurations from "./components/logisticeventduration/logisticeventdurations";
import LogisticeventdurationForm from "./components/logisticeventduration/logisticeventdurationForm";
import LogisticeventdurationDetails from "./components/logisticeventduration/logisticeventdurationDetails";
import Logisticeventperiods from "./components/logisticeventperiod/logisticeventperiods";
import LogisticeventperiodForm from "./components/logisticeventperiod/logisticeventperiodForm";
import LogisticeventperiodDetails from "./components/logisticeventperiod/logisticeventperiodDetails";
import Logisticeventtypes from "./components/logisticeventtype/logisticeventtypes";
import LogisticeventtypeForm from "./components/logisticeventtype/logisticeventtypeForm";
import LogisticeventtypeDetails from "./components/logisticeventtype/logisticeventtypeDetails";
import Logisticeventtypecodes from "./components/logisticeventtypecode/logisticeventtypecodes";
import LogisticeventtypecodeForm from "./components/logisticeventtypecode/logisticeventtypecodeForm";
import LogisticeventtypecodeDetails from "./components/logisticeventtypecode/logisticeventtypecodeDetails";
import Logisticlocations from "./components/logisticlocation/logisticlocations";
import LogisticlocationForm from "./components/logisticlocation/logisticlocationForm";
import LogisticlocationDetails from "./components/logisticlocation/logisticlocationDetails";
import Logisticlocationtypes from "./components/logisticlocationtype/logisticlocationtypes";
import LogisticlocationtypeForm from "./components/logisticlocationtype/logisticlocationtypeForm";
import LogisticlocationtypeDetails from "./components/logisticlocationtype/logisticlocationtypeDetails";
import Logisticservicesbuyers from "./components/logisticservicesbuyer/logisticservicesbuyers";
import LogisticservicesbuyerForm from "./components/logisticservicesbuyer/logisticservicesbuyerForm";
import LogisticservicesbuyerDetails from "./components/logisticservicesbuyer/logisticservicesbuyerDetails";
import Logisticservicessellers from "./components/logisticservicesseller/logisticservicessellers";
import LogisticservicessellerForm from "./components/logisticservicesseller/logisticservicessellerForm";
import LogisticservicessellerDetails from "./components/logisticservicesseller/logisticservicessellerDetails";
import Logisticservicetypes from "./components/logisticservicetype/logisticservicetypes";
import LogisticservicetypeForm from "./components/logisticservicetype/logisticservicetypeForm";
import LogisticservicetypeDetails from "./components/logisticservicetype/logisticservicetypeDetails";
import Logisticunitidentificationtypes from "./components/logisticunitidentificationtype/logisticunitidentificationtypes";
import LogisticunitidentificationtypeForm from "./components/logisticunitidentificationtype/logisticunitidentificationtypeForm";
import LogisticunitidentificationtypeDetails from "./components/logisticunitidentificationtype/logisticunitidentificationtypeDetails";
import Logisticunittypes from "./components/logisticunittype/logisticunittypes";
import LogisticunittypeForm from "./components/logisticunittype/logisticunittypeForm";
import LogisticunittypeDetails from "./components/logisticunittype/logisticunittypeDetails";
import Manifests from "./components/manifest/manifests";
import ManifestForm from "./components/manifest/manifestForm";
import ManifestDetails from "./components/manifest/manifestDetails";
import Manifestitems from "./components/manifestitem/manifestitems";
import ManifestitemForm from "./components/manifestitem/manifestitemForm";
import ManifestitemDetails from "./components/manifestitem/manifestitemDetails";
import Maximumtemperatures from "./components/maximumtemperature/maximumtemperatures";
import MaximumtemperatureForm from "./components/maximumtemperature/maximumtemperatureForm";
import MaximumtemperatureDetails from "./components/maximumtemperature/maximumtemperatureDetails";
import Measurementtypes from "./components/measurementtype/measurementtypes";
import MeasurementtypeForm from "./components/measurementtype/measurementtypeForm";
import MeasurementtypeDetails from "./components/measurementtype/measurementtypeDetails";
import Minimumtemperatures from "./components/minimumtemperature/minimumtemperatures";
import MinimumtemperatureForm from "./components/minimumtemperature/minimumtemperatureForm";
import MinimumtemperatureDetails from "./components/minimumtemperature/minimumtemperatureDetails";
import Multidescription70types from "./components/multidescription70type/multidescription70types";
import Multidescription70typeForm from "./components/multidescription70type/multidescription70typeForm";
import Multidescription70typeDetails from "./components/multidescription70type/multidescription70typeDetails";
import Nationalitys from "./components/nationality/nationalitys";
import NationalityForm from "./components/nationality/nationalityForm";
import NationalityDetails from "./components/nationality/nationalityDetails";
import Newholderregistrations from "./components/newholderregistration/newholderregistrations";
import NewholderregistrationForm from "./components/newholderregistration/newholderregistrationForm";
import NewholderregistrationDetails from "./components/newholderregistration/newholderregistrationDetails";
import Officialaddresss from "./components/officialaddress/officialaddresss";
import OfficialaddressForm from "./components/officialaddress/officialaddressForm";
import OfficialaddressDetails from "./components/officialaddress/officialaddressDetails";
import Operatinghourstypes from "./components/operatinghourstype/operatinghourstypes";
import OperatinghourstypeForm from "./components/operatinghourstype/operatinghourstypeForm";
import OperatinghourstypeDetails from "./components/operatinghourstype/operatinghourstypeDetails";
import Organisationdetailss from "./components/organisationdetails/organisationdetailss";
import OrganisationdetailsForm from "./components/organisationdetails/organisationdetailsForm";
import OrganisationdetailsDetails from "./components/organisationdetails/organisationdetailsDetails";
import Organisationtypes from "./components/organisationtype/organisationtypes";
import OrganisationtypeForm from "./components/organisationtype/organisationtypeForm";
import OrganisationtypeDetails from "./components/organisationtype/organisationtypeDetails";
import Packagetotals from "./components/packagetotal/packagetotals";
import PackagetotalForm from "./components/packagetotal/packagetotalForm";
import PackagetotalDetails from "./components/packagetotal/packagetotalDetails";
import Packagetotaltypes from "./components/packagetotaltype/packagetotaltypes";
import PackagetotaltypeForm from "./components/packagetotaltype/packagetotaltypeForm";
import PackagetotaltypeDetails from "./components/packagetotaltype/packagetotaltypeDetails";
import Packagetypecodes from "./components/packagetypecode/packagetypecodes";
import PackagetypecodeForm from "./components/packagetypecode/packagetypecodeForm";
import PackagetypecodeDetails from "./components/packagetypecode/packagetypecodeDetails";
import Packagingconditioncodes from "./components/packagingconditioncode/packagingconditioncodes";
import PackagingconditioncodeForm from "./components/packagingconditioncode/packagingconditioncodeForm";
import PackagingconditioncodeDetails from "./components/packagingconditioncode/packagingconditioncodeDetails";
import Packagingmarkingtypes from "./components/packagingmarkingtype/packagingmarkingtypes";
import PackagingmarkingtypeForm from "./components/packagingmarkingtype/packagingmarkingtypeForm";
import PackagingmarkingtypeDetails from "./components/packagingmarkingtype/packagingmarkingtypeDetails";
import Partyidentificationtypes from "./components/partyidentificationtype/partyidentificationtypes";
import PartyidentificationtypeForm from "./components/partyidentificationtype/partyidentificationtypeForm";
import PartyidentificationtypeDetails from "./components/partyidentificationtype/partyidentificationtypeDetails";
import Passengercategorycodes from "./components/passengercategorycode/passengercategorycodes";
import PassengercategorycodeForm from "./components/passengercategorycode/passengercategorycodeForm";
import PassengercategorycodeDetails from "./components/passengercategorycode/passengercategorycodeDetails";
import Passengerinformationtypes from "./components/passengerinformationtype/passengerinformationtypes";
import PassengerinformationtypeForm from "./components/passengerinformationtype/passengerinformationtypeForm";
import PassengerinformationtypeDetails from "./components/passengerinformationtype/passengerinformationtypeDetails";
import Passengertariffgroups from "./components/passengertariffgroup/passengertariffgroups";
import PassengertariffgroupForm from "./components/passengertariffgroup/passengertariffgroupForm";
import PassengertariffgroupDetails from "./components/passengertariffgroup/passengertariffgroupDetails";
import Persons from "./components/person/persons";
import PersonForm from "./components/person/personForm";
import PersonDetails from "./components/person/personDetails";
import Pickuppartys from "./components/pickupparty/pickuppartys";
import PickuppartyForm from "./components/pickupparty/pickuppartyForm";
import PickuppartyDetails from "./components/pickupparty/pickuppartyDetails";
import Printinginstructioncodes from "./components/printinginstructioncode/printinginstructioncodes";
import PrintinginstructioncodeForm from "./components/printinginstructioncode/printinginstructioncodeForm";
import PrintinginstructioncodeDetails from "./components/printinginstructioncode/printinginstructioncodeDetails";
import Quantitytypes from "./components/quantitytype/quantitytypes";
import QuantitytypeForm from "./components/quantitytype/quantitytypeForm";
import QuantitytypeDetails from "./components/quantitytype/quantitytypeDetails";
import Regularoperatinghourss from "./components/regularoperatinghours/regularoperatinghourss";
import RegularoperatinghoursForm from "./components/regularoperatinghours/regularoperatinghoursForm";
import RegularoperatinghoursDetails from "./components/regularoperatinghours/regularoperatinghoursDetails";
import Responsibilitys from "./components/responsibility/responsibilitys";
import ResponsibilityForm from "./components/responsibility/responsibilityForm";
import ResponsibilityDetails from "./components/responsibility/responsibilityDetails";
import Returnableassetidentifications from "./components/returnableassetidentification/returnableassetidentifications";
import ReturnableassetidentificationForm from "./components/returnableassetidentification/returnableassetidentificationForm";
import ReturnableassetidentificationDetails from "./components/returnableassetidentification/returnableassetidentificationDetails";
import Returnableassettypeidentifications from "./components/returnableassettypeidentification/returnableassettypeidentifications";
import ReturnableassettypeidentificationForm from "./components/returnableassettypeidentification/returnableassettypeidentificationForm";
import ReturnableassettypeidentificationDetails from "./components/returnableassettypeidentification/returnableassettypeidentificationDetails";
import Returnablepackagings from "./components/returnablepackaging/returnablepackagings";
import ReturnablepackagingForm from "./components/returnablepackaging/returnablepackagingForm";
import ReturnablepackagingDetails from "./components/returnablepackaging/returnablepackagingDetails";
import Returnablepackagingtypes from "./components/returnablepackagingtype/returnablepackagingtypes";
import ReturnablepackagingtypeForm from "./components/returnablepackagingtype/returnablepackagingtypeForm";
import ReturnablepackagingtypeDetails from "./components/returnablepackagingtype/returnablepackagingtypeDetails";
import Routeids from "./components/routeid/routeids";
import RouteidForm from "./components/routeid/routeidForm";
import RouteidDetails from "./components/routeid/routeidDetails";
import Scopes from "./components/scope/scopes";
import ScopeForm from "./components/scope/scopeForm";
import ScopeDetails from "./components/scope/scopeDetails";
import Servicetransactions from "./components/servicetransaction/servicetransactions";
import ServicetransactionForm from "./components/servicetransaction/servicetransactionForm";
import ServicetransactionDetails from "./components/servicetransaction/servicetransactionDetails";
import Shipmentidentificationtypes from "./components/shipmentidentificationtype/shipmentidentificationtypes";
import ShipmentidentificationtypeForm from "./components/shipmentidentificationtype/shipmentidentificationtypeForm";
import ShipmentidentificationtypeDetails from "./components/shipmentidentificationtype/shipmentidentificationtypeDetails";
import Specialdatenames from "./components/specialdatename/specialdatenames";
import SpecialdatenameForm from "./components/specialdatename/specialdatenameForm";
import SpecialdatenameDetails from "./components/specialdatename/specialdatenameDetails";
import Specialoperatinghourss from "./components/specialoperatinghours/specialoperatinghourss";
import SpecialoperatinghoursForm from "./components/specialoperatinghours/specialoperatinghoursForm";
import SpecialoperatinghoursDetails from "./components/specialoperatinghours/specialoperatinghoursDetails";
import Specialoperatinghourstypes from "./components/specialoperatinghourstype/specialoperatinghourstypes";
import SpecialoperatinghourstypeForm from "./components/specialoperatinghourstype/specialoperatinghourstypeForm";
import SpecialoperatinghourstypeDetails from "./components/specialoperatinghourstype/specialoperatinghourstypeDetails";
import Standardbusinessdocumentheaders from "./components/standardbusinessdocumentheader/standardbusinessdocumentheaders";
import StandardbusinessdocumentheaderForm from "./components/standardbusinessdocumentheader/standardbusinessdocumentheaderForm";
import StandardbusinessdocumentheaderDetails from "./components/standardbusinessdocumentheader/standardbusinessdocumentheaderDetails";
import Temperaturerangetypes from "./components/temperaturerangetype/temperaturerangetypes";
import TemperaturerangetypeForm from "./components/temperaturerangetype/temperaturerangetypeForm";
import TemperaturerangetypeDetails from "./components/temperaturerangetype/temperaturerangetypeDetails";
import Timemeasurementtypes from "./components/timemeasurementtype/timemeasurementtypes";
import TimemeasurementtypeForm from "./components/timemeasurementtype/timemeasurementtypeForm";
import TimemeasurementtypeDetails from "./components/timemeasurementtype/timemeasurementtypeDetails";
import Totalchargeableweights from "./components/totalchargeableweight/totalchargeableweights";
import TotalchargeableweightForm from "./components/totalchargeableweight/totalchargeableweightForm";
import TotalchargeableweightDetails from "./components/totalchargeableweight/totalchargeableweightDetails";
import Totalgrossvolumes from "./components/totalgrossvolume/totalgrossvolumes";
import TotalgrossvolumeForm from "./components/totalgrossvolume/totalgrossvolumeForm";
import TotalgrossvolumeDetails from "./components/totalgrossvolume/totalgrossvolumeDetails";
import Totalgrossweights from "./components/totalgrossweight/totalgrossweights";
import TotalgrossweightForm from "./components/totalgrossweight/totalgrossweightForm";
import TotalgrossweightDetails from "./components/totalgrossweight/totalgrossweightDetails";
import Totalitemquantitys from "./components/totalitemquantity/totalitemquantitys";
import TotalitemquantityForm from "./components/totalitemquantity/totalitemquantityForm";
import TotalitemquantityDetails from "./components/totalitemquantity/totalitemquantityDetails";
import Totalloadinglengths from "./components/totalloadinglength/totalloadinglengths";
import TotalloadinglengthForm from "./components/totalloadinglength/totalloadinglengthForm";
import TotalloadinglengthDetails from "./components/totalloadinglength/totalloadinglengthDetails";
import Totalpackagequantitys from "./components/totalpackagequantity/totalpackagequantitys";
import TotalpackagequantityForm from "./components/totalpackagequantity/totalpackagequantityForm";
import TotalpackagequantityDetails from "./components/totalpackagequantity/totalpackagequantityDetails";
import Totaltransportnetweights from "./components/totaltransportnetweight/totaltransportnetweights";
import TotaltransportnetweightForm from "./components/totaltransportnetweight/totaltransportnetweightForm";
import TotaltransportnetweightDetails from "./components/totaltransportnetweight/totaltransportnetweightDetails";
import Transactionalpartytypes from "./components/transactionalpartytype/transactionalpartytypes";
import TransactionalpartytypeForm from "./components/transactionalpartytype/transactionalpartytypeForm";
import TransactionalpartytypeDetails from "./components/transactionalpartytype/transactionalpartytypeDetails";
import Transportcapacitybookings from "./components/transportcapacitybooking/transportcapacitybookings";
import TransportcapacitybookingForm from "./components/transportcapacitybooking/transportcapacitybookingForm";
import TransportcapacitybookingDetails from "./components/transportcapacitybooking/transportcapacitybookingDetails";
import Transportcapacitybookingidentifications from "./components/transportcapacitybookingidentification/transportcapacitybookingidentifications";
import TransportcapacitybookingidentificationForm from "./components/transportcapacitybookingidentification/transportcapacitybookingidentificationForm";
import TransportcapacitybookingidentificationDetails from "./components/transportcapacitybookingidentification/transportcapacitybookingidentificationDetails";
import Transportcapacitybookingresponses from "./components/transportcapacitybookingresponse/transportcapacitybookingresponses";
import TransportcapacitybookingresponseForm from "./components/transportcapacitybookingresponse/transportcapacitybookingresponseForm";
import TransportcapacitybookingresponseDetails from "./components/transportcapacitybookingresponse/transportcapacitybookingresponseDetails";
import Transportcapacitybookingresponseidentifications from "./components/transportcapacitybookingresponseidentification/transportcapacitybookingresponseidentifications";
import TransportcapacitybookingresponseidentificationForm from "./components/transportcapacitybookingresponseidentification/transportcapacitybookingresponseidentificationForm";
import TransportcapacitybookingresponseidentificationDetails from "./components/transportcapacitybookingresponseidentification/transportcapacitybookingresponseidentificationDetails";
import Transportcapacitybookingspacerequirements from "./components/transportcapacitybookingspacerequirement/transportcapacitybookingspacerequirements";
import TransportcapacitybookingspacerequirementForm from "./components/transportcapacitybookingspacerequirement/transportcapacitybookingspacerequirementForm";
import TransportcapacitybookingspacerequirementDetails from "./components/transportcapacitybookingspacerequirement/transportcapacitybookingspacerequirementDetails";
import Transportcapacitybookingtransportmovementtypes from "./components/transportcapacitybookingtransportmovementtype/transportcapacitybookingtransportmovementtypes";
import TransportcapacitybookingtransportmovementtypeForm from "./components/transportcapacitybookingtransportmovementtype/transportcapacitybookingtransportmovementtypeForm";
import TransportcapacitybookingtransportmovementtypeDetails from "./components/transportcapacitybookingtransportmovementtype/transportcapacitybookingtransportmovementtypeDetails";
import Transportcargocharacteristicstypes from "./components/transportcargocharacteristicstype/transportcargocharacteristicstypes";
import TransportcargocharacteristicstypeForm from "./components/transportcargocharacteristicstype/transportcargocharacteristicstypeForm";
import TransportcargocharacteristicstypeDetails from "./components/transportcargocharacteristicstype/transportcargocharacteristicstypeDetails";
import Transportequipmenttypes from "./components/transportequipmenttype/transportequipmenttypes";
import TransportequipmenttypeForm from "./components/transportequipmenttype/transportequipmenttypeForm";
import TransportequipmenttypeDetails from "./components/transportequipmenttype/transportequipmenttypeDetails";
import Transportequipmenttypecodes from "./components/transportequipmenttypecode/transportequipmenttypecodes";
import TransportequipmenttypecodeForm from "./components/transportequipmenttypecode/transportequipmenttypecodeForm";
import TransportequipmenttypecodeDetails from "./components/transportequipmenttypecode/transportequipmenttypecodeDetails";
import Transportequipmentweights from "./components/transportequipmentweight/transportequipmentweights";
import TransportequipmentweightForm from "./components/transportequipmentweight/transportequipmentweightForm";
import TransportequipmentweightDetails from "./components/transportequipmentweight/transportequipmentweightDetails";
import Transportinstructionconsignmentitemtypes from "./components/transportinstructionconsignmentitemtype/transportinstructionconsignmentitemtypes";
import TransportinstructionconsignmentitemtypeForm from "./components/transportinstructionconsignmentitemtype/transportinstructionconsignmentitemtypeForm";
import TransportinstructionconsignmentitemtypeDetails from "./components/transportinstructionconsignmentitemtype/transportinstructionconsignmentitemtypeDetails";
import Transportinstructiontermstypes from "./components/transportinstructiontermstype/transportinstructiontermstypes";
import TransportinstructiontermstypeForm from "./components/transportinstructiontermstype/transportinstructiontermstypeForm";
import TransportinstructiontermstypeDetails from "./components/transportinstructiontermstype/transportinstructiontermstypeDetails";
import Transportinstructiontransportequipmenttypes from "./components/transportinstructiontransportequipmenttype/transportinstructiontransportequipmenttypes";
import TransportinstructiontransportequipmenttypeForm from "./components/transportinstructiontransportequipmenttype/transportinstructiontransportequipmenttypeForm";
import TransportinstructiontransportequipmenttypeDetails from "./components/transportinstructiontransportequipmenttype/transportinstructiontransportequipmenttypeDetails";
import Transportinstructiontransportmovementtypes from "./components/transportinstructiontransportmovementtype/transportinstructiontransportmovementtypes";
import TransportinstructiontransportmovementtypeForm from "./components/transportinstructiontransportmovementtype/transportinstructiontransportmovementtypeForm";
import TransportinstructiontransportmovementtypeDetails from "./components/transportinstructiontransportmovementtype/transportinstructiontransportmovementtypeDetails";
import Transportmeansids from "./components/transportmeansid/transportmeansids";
import TransportmeansidForm from "./components/transportmeansid/transportmeansidForm";
import TransportmeansidDetails from "./components/transportmeansid/transportmeansidDetails";
import Transportmeanstypes from "./components/transportmeanstype/transportmeanstypes";
import TransportmeanstypeForm from "./components/transportmeanstype/transportmeanstypeForm";
import TransportmeanstypeDetails from "./components/transportmeanstype/transportmeanstypeDetails";
import Transportmodecodes from "./components/transportmodecode/transportmodecodes";
import TransportmodecodeForm from "./components/transportmodecode/transportmodecodeForm";
import TransportmodecodeDetails from "./components/transportmodecode/transportmodecodeDetails";
import Transportreferences from "./components/transportreference/transportreferences";
import TransportreferenceForm from "./components/transportreference/transportreferenceForm";
import TransportreferenceDetails from "./components/transportreference/transportreferenceDetails";
import Transportreferencetypes from "./components/transportreferencetype/transportreferencetypes";
import TransportreferencetypeForm from "./components/transportreferencetype/transportreferencetypeForm";
import TransportreferencetypeDetails from "./components/transportreferencetype/transportreferencetypeDetails";
import Transportreferencetypecodes from "./components/transportreferencetypecode/transportreferencetypecodes";
import TransportreferencetypecodeForm from "./components/transportreferencetypecode/transportreferencetypecodeForm";
import TransportreferencetypecodeDetails from "./components/transportreferencetypecode/transportreferencetypecodeDetails";
import Transportsealtypes from "./components/transportsealtype/transportsealtypes";
import TransportsealtypeForm from "./components/transportsealtype/transportsealtypeForm";
import TransportsealtypeDetails from "./components/transportsealtype/transportsealtypeDetails";
import Transportservicecategorycodes from "./components/transportservicecategorycode/transportservicecategorycodes";
import TransportservicecategorycodeForm from "./components/transportservicecategorycode/transportservicecategorycodeForm";
import TransportservicecategorycodeDetails from "./components/transportservicecategorycode/transportservicecategorycodeDetails";
import Transportserviceconditiontypecodes from "./components/transportserviceconditiontypecode/transportserviceconditiontypecodes";
import TransportserviceconditiontypecodeForm from "./components/transportserviceconditiontypecode/transportserviceconditiontypecodeForm";
import TransportserviceconditiontypecodeDetails from "./components/transportserviceconditiontypecode/transportserviceconditiontypecodeDetails";
import Transportservicelevelcodes from "./components/transportservicelevelcode/transportservicelevelcodes";
import TransportservicelevelcodeForm from "./components/transportservicelevelcode/transportservicelevelcodeForm";
import TransportservicelevelcodeDetails from "./components/transportservicelevelcode/transportservicelevelcodeDetails";
import Unitmeasurementtypes from "./components/unitmeasurementtype/unitmeasurementtypes";
import UnitmeasurementtypeForm from "./components/unitmeasurementtype/unitmeasurementtypeForm";
import UnitmeasurementtypeDetails from "./components/unitmeasurementtype/unitmeasurementtypeDetails";
import Unlocationcodes from "./components/unlocationcode/unlocationcodes";
import UnlocationcodeForm from "./components/unlocationcode/unlocationcodeForm";
import UnlocationcodeDetails from "./components/unlocationcode/unlocationcodeDetails";
import Widths from "./components/width/widths";
import WidthForm from "./components/width/widthForm";
import WidthDetails from "./components/width/widthDetails";

class App extends Component {

  state = {};
  //we wanted to show currently loggedin userName to the Navbar so we get user set in state and passed to Navbar component
  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = async () => {
    try {
      const {data:user} = await auth.getCurrentUser();
      this.setState({ user });
    }
    catch (ex) {
      console.log(ex.message);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <main role="main" className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/startingpage" component={StartingPage} />     
            <Route path="/transportcapacitybooking" component={TransportCapacityBooking} />
            {/* following is a protected route only loggedIn user can access it */}
            <Route
                path="/additionalconsignmentidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalconsignmentidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewAdditionalconsignmentidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalconsignmentidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/additionalconsignmentidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Additionalconsignmentidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/additionalindividualassetidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalindividualassetidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewAdditionalindividualassetidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalindividualassetidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/additionalindividualassetidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Additionalindividualassetidentifications {...props} />;
                }}
            />

            <Route
                path="/additionallocationidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionallocationidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewAdditionallocationidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionallocationidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/additionallocationidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Additionallocationidentifications {...props} />;
                }}
            />

            <Route
                path="/additionallogisticunitidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionallogisticunitidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewAdditionallogisticunitidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionallogisticunitidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/additionallogisticunitidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Additionallogisticunitidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/additionalpartyidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalpartyidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewAdditionalpartyidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalpartyidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/additionalpartyidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Additionalpartyidentifications {...props} />;
                }}
            />

            <Route
                path="/additionalpartyidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalpartyidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewAdditionalpartyidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalpartyidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/additionalpartyidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Additionalpartyidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/additionalreturnableassetidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalreturnableassetidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewAdditionalreturnableassetidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalreturnableassetidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/additionalreturnableassetidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Additionalreturnableassetidentifications {...props} />;
                }}
            />

            <Route
                path="/additionalshipmentidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalshipmentidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewAdditionalshipmentidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AdditionalshipmentidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/additionalshipmentidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Additionalshipmentidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/addresss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AddressForm {...props} />;
                }}
            />
            <Route
                path="/viewAddress/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AddressDetails {...props} />;
                }}
            />
            <Route
                path="/addresss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Addresss {...props} />;
                }}
            />

            <Route
                path="/afterhourscommunicationchannels/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AfterhourscommunicationchannelForm {...props} />;
                }}
            />
            <Route
                path="/viewAfterhourscommunicationchannel/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AfterhourscommunicationchannelDetails {...props} />;
                }}
            />
            <Route
                path="/afterhourscommunicationchannels"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Afterhourscommunicationchannels {...props} />;
                }}
            />

            <Route
                path="/alternatedeliverytermscodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AlternatedeliverytermscodeForm {...props} />;
                }}
            />
            <Route
                path="/viewAlternatedeliverytermscode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AlternatedeliverytermscodeDetails {...props} />;
                }}
            />
            <Route
                path="/alternatedeliverytermscodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Alternatedeliverytermscodes {...props} />;
                }}
            />

            <Route
                path="/amounttypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AmounttypeForm {...props} />;
                }}
            />
            <Route
                path="/viewAmounttype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AmounttypeDetails {...props} />;
                }}
            />
            <Route
                path="/amounttypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Amounttypes {...props} />;
                }}
            />

            <Route
                path="/associatedinvoiceamounts/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AssociatedinvoiceamountForm {...props} />;
                }}
            />
            <Route
                path="/viewAssociatedinvoiceamount/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <AssociatedinvoiceamountDetails {...props} />;
                }}
            />
            <Route
                path="/associatedinvoiceamounts"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Associatedinvoiceamounts {...props} />;
                }}
            />

            <Route
                path="/businessservices/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <BusinessserviceForm {...props} />;
                }}
            />
            <Route
                path="/viewBusinessservice/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <BusinessserviceDetails {...props} />;
                }}
            />
            <Route
                path="/businessservices"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Businessservices {...props} />;
                }}
            />

            <Route
                path="/cargotypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CargotypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewCargotypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CargotypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/cargotypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Cargotypecodes {...props} />;
                }}
            />

            <Route
                path="/cargotypedescriptions/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CargotypedescriptionForm {...props} />;
                }}
            />
            <Route
                path="/viewCargotypedescription/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CargotypedescriptionDetails {...props} />;
                }}
            />
            <Route
                path="/cargotypedescriptions"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Cargotypedescriptions {...props} />;
                }}
            />

            <Route
                path="/carriers/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CarrierForm {...props} />;
                }}
            />
            <Route
                path="/viewCarrier/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CarrierDetails {...props} />;
                }}
            />
            <Route
                path="/carriers"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Carriers {...props} />;
                }}
            />

            <Route
                path="/codetypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CodetypeForm {...props} />;
                }}
            />
            <Route
                path="/viewCodetype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CodetypeDetails {...props} />;
                }}
            />
            <Route
                path="/codetypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Codetypes {...props} />;
                }}
            />

            <Route
                path="/communicationchannels/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CommunicationchannelForm {...props} />;
                }}
            />
            <Route
                path="/viewCommunicationchannel/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CommunicationchannelDetails {...props} />;
                }}
            />
            <Route
                path="/communicationchannels"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Communicationchannels {...props} />;
                }}
            />

            <Route
                path="/communicationchannelcodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CommunicationchannelcodeForm {...props} />;
                }}
            />
            <Route
                path="/viewCommunicationchannelcode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CommunicationchannelcodeDetails {...props} />;
                }}
            />
            <Route
                path="/communicationchannelcodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Communicationchannelcodes {...props} />;
                }}
            />

            <Route
                path="/communicationchanneltypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CommunicationchanneltypeForm {...props} />;
                }}
            />
            <Route
                path="/viewCommunicationchanneltype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CommunicationchanneltypeDetails {...props} />;
                }}
            />
            <Route
                path="/communicationchanneltypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Communicationchanneltypes {...props} />;
                }}
            />

            <Route
                path="/consignmentidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ConsignmentidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewConsignmentidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ConsignmentidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/consignmentidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Consignmentidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/contactinformations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ContactinformationForm {...props} />;
                }}
            />
            <Route
                path="/viewContactinformation/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ContactinformationDetails {...props} />;
                }}
            />
            <Route
                path="/contactinformations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Contactinformations {...props} />;
                }}
            />

            <Route
                path="/contacttypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ContacttypeForm {...props} />;
                }}
            />
            <Route
                path="/viewContacttype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ContacttypeDetails {...props} />;
                }}
            />
            <Route
                path="/contacttypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Contacttypes {...props} />;
                }}
            />

            <Route
                path="/contacttypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ContacttypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewContacttypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ContacttypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/contacttypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Contacttypecodes {...props} />;
                }}
            />

            <Route
                path="/contentowners/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ContentownerForm {...props} />;
                }}
            />
            <Route
                path="/viewContentowner/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ContentownerDetails {...props} />;
                }}
            />
            <Route
                path="/contentowners"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Contentowners {...props} />;
                }}
            />

            <Route
                path="/correlationinformations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CorrelationinformationForm {...props} />;
                }}
            />
            <Route
                path="/viewCorrelationinformation/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CorrelationinformationDetails {...props} />;
                }}
            />
            <Route
                path="/correlationinformations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Correlationinformations {...props} />;
                }}
            />

            <Route
                path="/countrycodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CountrycodeForm {...props} />;
                }}
            />
            <Route
                path="/viewCountrycode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CountrycodeDetails {...props} />;
                }}
            />
            <Route
                path="/countrycodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Countrycodes {...props} />;
                }}
            />

            <Route
                path="/countryoforigincodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CountryoforigincodeForm {...props} />;
                }}
            />
            <Route
                path="/viewCountryoforigincode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CountryoforigincodeDetails {...props} />;
                }}
            />
            <Route
                path="/countryoforigincodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Countryoforigincodes {...props} />;
                }}
            />

            <Route
                path="/currencyofpartycodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CurrencyofpartycodeForm {...props} />;
                }}
            />
            <Route
                path="/viewCurrencyofpartycode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CurrencyofpartycodeDetails {...props} />;
                }}
            />
            <Route
                path="/currencyofpartycodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Currencyofpartycodes {...props} />;
                }}
            />

            <Route
                path="/currentholderregistrations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CurrentholderregistrationForm {...props} />;
                }}
            />
            <Route
                path="/viewCurrentholderregistration/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <CurrentholderregistrationDetails {...props} />;
                }}
            />
            <Route
                path="/currentholderregistrations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Currentholderregistrations {...props} />;
                }}
            />

            <Route
                path="/dangerousgoodsattributetypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DangerousgoodsattributetypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDangerousgoodsattributetype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DangerousgoodsattributetypeDetails {...props} />;
                }}
            />
            <Route
                path="/dangerousgoodsattributetypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dangerousgoodsattributetypes {...props} />;
                }}
            />

            <Route
                path="/dangerousgoodsinformationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DangerousgoodsinformationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDangerousgoodsinformationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DangerousgoodsinformationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/dangerousgoodsinformationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dangerousgoodsinformationtypes {...props} />;
                }}
            />

            <Route
                path="/dangerousgoodsregulationinformationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DangerousgoodsregulationinformationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDangerousgoodsregulationinformationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DangerousgoodsregulationinformationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/dangerousgoodsregulationinformationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dangerousgoodsregulationinformationtypes {...props} />;
                }}
            />

            <Route
                path="/dateoptionaltimetypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DateoptionaltimetypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDateoptionaltimetype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DateoptionaltimetypeDetails {...props} />;
                }}
            />
            <Route
                path="/dateoptionaltimetypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dateoptionaltimetypes {...props} />;
                }}
            />

            <Route
                path="/datetimerangetypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DatetimerangetypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDatetimerangetype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DatetimerangetypeDetails {...props} />;
                }}
            />
            <Route
                path="/datetimerangetypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Datetimerangetypes {...props} />;
                }}
            />

            <Route
                path="/declaredvalueforcustomss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeclaredvalueforcustomsForm {...props} />;
                }}
            />
            <Route
                path="/viewDeclaredvalueforcustoms/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeclaredvalueforcustomsDetails {...props} />;
                }}
            />
            <Route
                path="/declaredvalueforcustomss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Declaredvalueforcustomss {...props} />;
                }}
            />

            <Route
                path="/declaredweightforcustomss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeclaredweightforcustomsForm {...props} />;
                }}
            />
            <Route
                path="/viewDeclaredweightforcustoms/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeclaredweightforcustomsDetails {...props} />;
                }}
            />
            <Route
                path="/declaredweightforcustomss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Declaredweightforcustomss {...props} />;
                }}
            />

            <Route
                path="/deliveryinstructionss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeliveryinstructionsForm {...props} />;
                }}
            />
            <Route
                path="/viewDeliveryinstructions/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeliveryinstructionsDetails {...props} />;
                }}
            />
            <Route
                path="/deliveryinstructionss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Deliveryinstructionss {...props} />;
                }}
            />

            <Route
                path="/deliverytermslocations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeliverytermslocationForm {...props} />;
                }}
            />
            <Route
                path="/viewDeliverytermslocation/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeliverytermslocationDetails {...props} />;
                }}
            />
            <Route
                path="/deliverytermslocations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Deliverytermslocations {...props} />;
                }}
            />

            <Route
                path="/deliverytermstypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeliverytermstypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDeliverytermstype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DeliverytermstypeDetails {...props} />;
                }}
            />
            <Route
                path="/deliverytermstypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Deliverytermstypes {...props} />;
                }}
            />

            <Route
                path="/depths/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DepthForm {...props} />;
                }}
            />
            <Route
                path="/viewDepth/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DepthDetails {...props} />;
                }}
            />
            <Route
                path="/depths"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Depths {...props} />;
                }}
            />

            <Route
                path="/descriptions/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DescriptionForm {...props} />;
                }}
            />
            <Route
                path="/viewDescription/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DescriptionDetails {...props} />;
                }}
            />
            <Route
                path="/descriptions"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Descriptions {...props} />;
                }}
            />

            <Route
                path="/description1000types/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description1000typeForm {...props} />;
                }}
            />
            <Route
                path="/viewDescription1000type/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description1000typeDetails {...props} />;
                }}
            />
            <Route
                path="/description1000types"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description1000types {...props} />;
                }}
            />

            <Route
                path="/description200types/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description200typeForm {...props} />;
                }}
            />
            <Route
                path="/viewDescription200type/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description200typeDetails {...props} />;
                }}
            />
            <Route
                path="/description200types"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description200types {...props} />;
                }}
            />

            <Route
                path="/description500types/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description500typeForm {...props} />;
                }}
            />
            <Route
                path="/viewDescription500type/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description500typeDetails {...props} />;
                }}
            />
            <Route
                path="/description500types"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description500types {...props} />;
                }}
            />

            <Route
                path="/description70types/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description70typeForm {...props} />;
                }}
            />
            <Route
                path="/viewDescription70type/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description70typeDetails {...props} />;
                }}
            />
            <Route
                path="/description70types"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description70types {...props} />;
                }}
            />

            <Route
                path="/description80types/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description80typeForm {...props} />;
                }}
            />
            <Route
                path="/viewDescription80type/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description80typeDetails {...props} />;
                }}
            />
            <Route
                path="/description80types"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Description80types {...props} />;
                }}
            />

            <Route
                path="/dimensiontypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DimensiontypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDimensiontype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DimensiontypeDetails {...props} />;
                }}
            />
            <Route
                path="/dimensiontypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dimensiontypes {...props} />;
                }}
            />

            <Route
                path="/documenteffectivedates/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DocumenteffectivedateForm {...props} />;
                }}
            />
            <Route
                path="/viewDocumenteffectivedate/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DocumenteffectivedateDetails {...props} />;
                }}
            />
            <Route
                path="/documenteffectivedates"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Documenteffectivedates {...props} />;
                }}
            />

            <Route
                path="/documentidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DocumentidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewDocumentidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DocumentidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/documentidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Documentidentifications {...props} />;
                }}
            />

            <Route
                path="/documentreferencetypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DocumentreferencetypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDocumentreferencetype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DocumentreferencetypeDetails {...props} />;
                }}
            />
            <Route
                path="/documentreferencetypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Documentreferencetypes {...props} />;
                }}
            />

            <Route
                path="/dropoffpartys/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DropoffpartyForm {...props} />;
                }}
            />
            <Route
                path="/viewDropoffparty/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DropoffpartyDetails {...props} />;
                }}
            />
            <Route
                path="/dropoffpartys"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dropoffpartys {...props} />;
                }}
            />

            <Route
                path="/dutyfeetaxdescriptions/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxdescriptionForm {...props} />;
                }}
            />
            <Route
                path="/viewDutyfeetaxdescription/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxdescriptionDetails {...props} />;
                }}
            />
            <Route
                path="/dutyfeetaxdescriptions"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dutyfeetaxdescriptions {...props} />;
                }}
            />

            <Route
                path="/dutyfeetaxregistrations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxregistrationForm {...props} />;
                }}
            />
            <Route
                path="/viewDutyfeetaxregistration/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxregistrationDetails {...props} />;
                }}
            />
            <Route
                path="/dutyfeetaxregistrations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dutyfeetaxregistrations {...props} />;
                }}
            />

            <Route
                path="/dutyfeetaxregistrationids/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxregistrationidForm {...props} />;
                }}
            />
            <Route
                path="/viewDutyfeetaxregistrationid/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxregistrationidDetails {...props} />;
                }}
            />
            <Route
                path="/dutyfeetaxregistrationids"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dutyfeetaxregistrationids {...props} />;
                }}
            />

            <Route
                path="/dutyfeetaxregistrationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxregistrationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewDutyfeetaxregistrationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxregistrationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/dutyfeetaxregistrationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dutyfeetaxregistrationtypes {...props} />;
                }}
            />

            <Route
                path="/dutyfeetaxtypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxtypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewDutyfeetaxtypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <DutyfeetaxtypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/dutyfeetaxtypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Dutyfeetaxtypecodes {...props} />;
                }}
            />

            <Route
                path="/ecom_attributevaluepairlisttypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Ecom_attributevaluepairlisttypeForm {...props} />;
                }}
            />
            <Route
                path="/viewEcom_attributevaluepairlisttype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Ecom_attributevaluepairlisttypeDetails {...props} />;
                }}
            />
            <Route
                path="/ecom_attributevaluepairlisttypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Ecom_attributevaluepairlisttypes {...props} />;
                }}
            />

            <Route
                path="/ecomstringattributevaluepairlists/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <EcomstringattributevaluepairlistForm {...props} />;
                }}
            />
            <Route
                path="/viewEcomstringattributevaluepairlist/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <EcomstringattributevaluepairlistDetails {...props} />;
                }}
            />
            <Route
                path="/ecomstringattributevaluepairlists"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Ecomstringattributevaluepairlists {...props} />;
                }}
            />

            <Route
                path="/entityidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <EntityidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewEntityidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <EntityidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/entityidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Entityidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/enumerationlibrarys/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <EnumerationlibraryForm {...props} />;
                }}
            />
            <Route
                path="/viewEnumerationlibrary/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <EnumerationlibraryDetails {...props} />;
                }}
            />
            <Route
                path="/enumerationlibrarys"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Enumerationlibrarys {...props} />;
                }}
            />

            <Route
                path="/finaldestinationcountrys/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinaldestinationcountryForm {...props} />;
                }}
            />
            <Route
                path="/viewFinaldestinationcountry/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinaldestinationcountryDetails {...props} />;
                }}
            />
            <Route
                path="/finaldestinationcountrys"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Finaldestinationcountrys {...props} />;
                }}
            />

            <Route
                path="/financialaccounts/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialaccountForm {...props} />;
                }}
            />
            <Route
                path="/viewFinancialaccount/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialaccountDetails {...props} />;
                }}
            />
            <Route
                path="/financialaccounts"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Financialaccounts {...props} />;
                }}
            />

            <Route
                path="/financialaccountnumbertypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialaccountnumbertypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewFinancialaccountnumbertypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialaccountnumbertypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/financialaccountnumbertypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Financialaccountnumbertypecodes {...props} />;
                }}
            />

            <Route
                path="/financialaccounttypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialaccounttypeForm {...props} />;
                }}
            />
            <Route
                path="/viewFinancialaccounttype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialaccounttypeDetails {...props} />;
                }}
            />
            <Route
                path="/financialaccounttypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Financialaccounttypes {...props} />;
                }}
            />

            <Route
                path="/financialinstitutioninformationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialinstitutioninformationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewFinancialinstitutioninformationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialinstitutioninformationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/financialinstitutioninformationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Financialinstitutioninformationtypes {...props} />;
                }}
            />

            <Route
                path="/financialroutingnumbers/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialroutingnumberForm {...props} />;
                }}
            />
            <Route
                path="/viewFinancialroutingnumber/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialroutingnumberDetails {...props} />;
                }}
            />
            <Route
                path="/financialroutingnumbers"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Financialroutingnumbers {...props} />;
                }}
            />

            <Route
                path="/financialroutingnumbertypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialroutingnumbertypeForm {...props} />;
                }}
            />
            <Route
                path="/viewFinancialroutingnumbertype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialroutingnumbertypeDetails {...props} />;
                }}
            />
            <Route
                path="/financialroutingnumbertypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Financialroutingnumbertypes {...props} />;
                }}
            />

            <Route
                path="/financialroutingnumbertypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialroutingnumbertypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewFinancialroutingnumbertypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <FinancialroutingnumbertypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/financialroutingnumbertypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Financialroutingnumbertypecodes {...props} />;
                }}
            />

            <Route
                path="/geographicalcoordinatess/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <GeographicalcoordinatesForm {...props} />;
                }}
            />
            <Route
                path="/viewGeographicalcoordinates/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <GeographicalcoordinatesDetails {...props} />;
                }}
            />
            <Route
                path="/geographicalcoordinatess"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Geographicalcoordinatess {...props} />;
                }}
            />

            <Route
                path="/handlinginstructioncodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HandlinginstructioncodeForm {...props} />;
                }}
            />
            <Route
                path="/viewHandlinginstructioncode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HandlinginstructioncodeDetails {...props} />;
                }}
            />
            <Route
                path="/handlinginstructioncodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Handlinginstructioncodes {...props} />;
                }}
            />

            <Route
                path="/handlinginstructiontexts/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HandlinginstructiontextForm {...props} />;
                }}
            />
            <Route
                path="/viewHandlinginstructiontext/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HandlinginstructiontextDetails {...props} />;
                }}
            />
            <Route
                path="/handlinginstructiontexts"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Handlinginstructiontexts {...props} />;
                }}
            />

            <Route
                path="/handlinginstructiontypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HandlinginstructiontypeForm {...props} />;
                }}
            />
            <Route
                path="/viewHandlinginstructiontype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HandlinginstructiontypeDetails {...props} />;
                }}
            />
            <Route
                path="/handlinginstructiontypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Handlinginstructiontypes {...props} />;
                }}
            />

            <Route
                path="/harmonizedsystemcodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HarmonizedsystemcodeForm {...props} />;
                }}
            />
            <Route
                path="/viewHarmonizedsystemcode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HarmonizedsystemcodeDetails {...props} />;
                }}
            />
            <Route
                path="/harmonizedsystemcodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Harmonizedsystemcodes {...props} />;
                }}
            />

            <Route
                path="/heights/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HeightForm {...props} />;
                }}
            />
            <Route
                path="/viewHeight/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <HeightDetails {...props} />;
                }}
            />
            <Route
                path="/heights"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Heights {...props} />;
                }}
            />

            <Route
                path="/identifiers/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IdentifierForm {...props} />;
                }}
            />
            <Route
                path="/viewIdentifier/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IdentifierDetails {...props} />;
                }}
            />
            <Route
                path="/identifiers"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Identifiers {...props} />;
                }}
            />

            <Route
                path="/identifiertypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IdentifiertypeForm {...props} />;
                }}
            />
            <Route
                path="/viewIdentifiertype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IdentifiertypeDetails {...props} />;
                }}
            />
            <Route
                path="/identifiertypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Identifiertypes {...props} />;
                }}
            />

            <Route
                path="/identitydocuments/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IdentitydocumentForm {...props} />;
                }}
            />
            <Route
                path="/viewIdentitydocument/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IdentitydocumentDetails {...props} />;
                }}
            />
            <Route
                path="/identitydocuments"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Identitydocuments {...props} />;
                }}
            />

            <Route
                path="/identitydocumenttypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IdentitydocumenttypeForm {...props} />;
                }}
            />
            <Route
                path="/viewIdentitydocumenttype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IdentitydocumenttypeDetails {...props} />;
                }}
            />
            <Route
                path="/identitydocumenttypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Identitydocumenttypes {...props} />;
                }}
            />

            <Route
                path="/includedtransportequipments/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IncludedtransportequipmentForm {...props} />;
                }}
            />
            <Route
                path="/viewIncludedtransportequipment/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IncludedtransportequipmentDetails {...props} />;
                }}
            />
            <Route
                path="/includedtransportequipments"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Includedtransportequipments {...props} />;
                }}
            />

            <Route
                path="/includedtransportmeanss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IncludedtransportmeansForm {...props} />;
                }}
            />
            <Route
                path="/viewIncludedtransportmeans/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IncludedtransportmeansDetails {...props} />;
                }}
            />
            <Route
                path="/includedtransportmeanss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Includedtransportmeanss {...props} />;
                }}
            />

            <Route
                path="/incotermscodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IncotermscodeForm {...props} />;
                }}
            />
            <Route
                path="/viewIncotermscode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IncotermscodeDetails {...props} />;
                }}
            />
            <Route
                path="/incotermscodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Incotermscodes {...props} />;
                }}
            />

            <Route
                path="/individualassetidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IndividualassetidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewIndividualassetidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IndividualassetidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/individualassetidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Individualassetidentifications {...props} />;
                }}
            />

            <Route
                path="/individualreturnableassetidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IndividualreturnableassetidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewIndividualreturnableassetidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IndividualreturnableassetidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/individualreturnableassetidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Individualreturnableassetidentifications {...props} />;
                }}
            />

            <Route
                path="/issuedcapitals/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IssuedcapitalForm {...props} />;
                }}
            />
            <Route
                path="/viewIssuedcapital/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <IssuedcapitalDetails {...props} />;
                }}
            />
            <Route
                path="/issuedcapitals"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Issuedcapitals {...props} />;
                }}
            />

            <Route
                path="/languageofthepartycodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LanguageofthepartycodeForm {...props} />;
                }}
            />
            <Route
                path="/viewLanguageofthepartycode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LanguageofthepartycodeDetails {...props} />;
                }}
            />
            <Route
                path="/languageofthepartycodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Languageofthepartycodes {...props} />;
                }}
            />

            <Route
                path="/legalregistrations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LegalregistrationForm {...props} />;
                }}
            />
            <Route
                path="/viewLegalregistration/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LegalregistrationDetails {...props} />;
                }}
            />
            <Route
                path="/legalregistrations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Legalregistrations {...props} />;
                }}
            />

            <Route
                path="/legalregistrationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LegalregistrationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewLegalregistrationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LegalregistrationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/legalregistrationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Legalregistrationtypes {...props} />;
                }}
            />

            <Route
                path="/legalstructures/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LegalstructureForm {...props} />;
                }}
            />
            <Route
                path="/viewLegalstructure/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LegalstructureDetails {...props} />;
                }}
            />
            <Route
                path="/legalstructures"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Legalstructures {...props} />;
                }}
            />

            <Route
                path="/locationspecificinstructionss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LocationspecificinstructionsForm {...props} />;
                }}
            />
            <Route
                path="/viewLocationspecificinstructions/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LocationspecificinstructionsDetails {...props} />;
                }}
            />
            <Route
                path="/locationspecificinstructionss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Locationspecificinstructionss {...props} />;
                }}
            />

            <Route
                path="/logisticeventdatetimes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventdatetimeForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticeventdatetime/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventdatetimeDetails {...props} />;
                }}
            />
            <Route
                path="/logisticeventdatetimes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticeventdatetimes {...props} />;
                }}
            />

            <Route
                path="/logisticeventdurations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventdurationForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticeventduration/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventdurationDetails {...props} />;
                }}
            />
            <Route
                path="/logisticeventdurations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticeventdurations {...props} />;
                }}
            />

            <Route
                path="/logisticeventperiods/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventperiodForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticeventperiod/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventperiodDetails {...props} />;
                }}
            />
            <Route
                path="/logisticeventperiods"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticeventperiods {...props} />;
                }}
            />

            <Route
                path="/logisticeventtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticeventtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventtypeDetails {...props} />;
                }}
            />
            <Route
                path="/logisticeventtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticeventtypes {...props} />;
                }}
            />

            <Route
                path="/logisticeventtypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventtypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticeventtypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticeventtypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/logisticeventtypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticeventtypecodes {...props} />;
                }}
            />

            <Route
                path="/logisticlocations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticlocationForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticlocation/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticlocationDetails {...props} />;
                }}
            />
            <Route
                path="/logisticlocations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticlocations {...props} />;
                }}
            />

            <Route
                path="/logisticlocationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticlocationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticlocationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticlocationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/logisticlocationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticlocationtypes {...props} />;
                }}
            />

            <Route
                path="/logisticservicesbuyers/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticservicesbuyerForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticservicesbuyer/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticservicesbuyerDetails {...props} />;
                }}
            />
            <Route
                path="/logisticservicesbuyers"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticservicesbuyers {...props} />;
                }}
            />

            <Route
                path="/logisticservicessellers/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticservicessellerForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticservicesseller/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticservicessellerDetails {...props} />;
                }}
            />
            <Route
                path="/logisticservicessellers"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticservicessellers {...props} />;
                }}
            />

            <Route
                path="/logisticservicetypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticservicetypeForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticservicetype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticservicetypeDetails {...props} />;
                }}
            />
            <Route
                path="/logisticservicetypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticservicetypes {...props} />;
                }}
            />

            <Route
                path="/logisticunitidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticunitidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticunitidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticunitidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/logisticunitidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticunitidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/logisticunittypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticunittypeForm {...props} />;
                }}
            />
            <Route
                path="/viewLogisticunittype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <LogisticunittypeDetails {...props} />;
                }}
            />
            <Route
                path="/logisticunittypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Logisticunittypes {...props} />;
                }}
            />

            <Route
                path="/manifests/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ManifestForm {...props} />;
                }}
            />
            <Route
                path="/viewManifest/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ManifestDetails {...props} />;
                }}
            />
            <Route
                path="/manifests"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Manifests {...props} />;
                }}
            />

            <Route
                path="/manifestitems/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ManifestitemForm {...props} />;
                }}
            />
            <Route
                path="/viewManifestitem/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ManifestitemDetails {...props} />;
                }}
            />
            <Route
                path="/manifestitems"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Manifestitems {...props} />;
                }}
            />

            <Route
                path="/maximumtemperatures/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <MaximumtemperatureForm {...props} />;
                }}
            />
            <Route
                path="/viewMaximumtemperature/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <MaximumtemperatureDetails {...props} />;
                }}
            />
            <Route
                path="/maximumtemperatures"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Maximumtemperatures {...props} />;
                }}
            />

            <Route
                path="/measurementtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <MeasurementtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewMeasurementtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <MeasurementtypeDetails {...props} />;
                }}
            />
            <Route
                path="/measurementtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Measurementtypes {...props} />;
                }}
            />

            <Route
                path="/minimumtemperatures/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <MinimumtemperatureForm {...props} />;
                }}
            />
            <Route
                path="/viewMinimumtemperature/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <MinimumtemperatureDetails {...props} />;
                }}
            />
            <Route
                path="/minimumtemperatures"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Minimumtemperatures {...props} />;
                }}
            />

            <Route
                path="/multidescription70types/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Multidescription70typeForm {...props} />;
                }}
            />
            <Route
                path="/viewMultidescription70type/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Multidescription70typeDetails {...props} />;
                }}
            />
            <Route
                path="/multidescription70types"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Multidescription70types {...props} />;
                }}
            />

            <Route
                path="/nationalitys/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <NationalityForm {...props} />;
                }}
            />
            <Route
                path="/viewNationality/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <NationalityDetails {...props} />;
                }}
            />
            <Route
                path="/nationalitys"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Nationalitys {...props} />;
                }}
            />

            <Route
                path="/newholderregistrations/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <NewholderregistrationForm {...props} />;
                }}
            />
            <Route
                path="/viewNewholderregistration/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <NewholderregistrationDetails {...props} />;
                }}
            />
            <Route
                path="/newholderregistrations"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Newholderregistrations {...props} />;
                }}
            />

            <Route
                path="/officialaddresss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <OfficialaddressForm {...props} />;
                }}
            />
            <Route
                path="/viewOfficialaddress/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <OfficialaddressDetails {...props} />;
                }}
            />
            <Route
                path="/officialaddresss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Officialaddresss {...props} />;
                }}
            />

            <Route
                path="/operatinghourstypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <OperatinghourstypeForm {...props} />;
                }}
            />
            <Route
                path="/viewOperatinghourstype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <OperatinghourstypeDetails {...props} />;
                }}
            />
            <Route
                path="/operatinghourstypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Operatinghourstypes {...props} />;
                }}
            />

            <Route
                path="/organisationdetailss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <OrganisationdetailsForm {...props} />;
                }}
            />
            <Route
                path="/viewOrganisationdetails/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <OrganisationdetailsDetails {...props} />;
                }}
            />
            <Route
                path="/organisationdetailss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Organisationdetailss {...props} />;
                }}
            />

            <Route
                path="/organisationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <OrganisationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewOrganisationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <OrganisationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/organisationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Organisationtypes {...props} />;
                }}
            />

            <Route
                path="/packagetotals/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagetotalForm {...props} />;
                }}
            />
            <Route
                path="/viewPackagetotal/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagetotalDetails {...props} />;
                }}
            />
            <Route
                path="/packagetotals"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Packagetotals {...props} />;
                }}
            />

            <Route
                path="/packagetotaltypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagetotaltypeForm {...props} />;
                }}
            />
            <Route
                path="/viewPackagetotaltype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagetotaltypeDetails {...props} />;
                }}
            />
            <Route
                path="/packagetotaltypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Packagetotaltypes {...props} />;
                }}
            />

            <Route
                path="/packagetypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagetypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewPackagetypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagetypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/packagetypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Packagetypecodes {...props} />;
                }}
            />

            <Route
                path="/packagingconditioncodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagingconditioncodeForm {...props} />;
                }}
            />
            <Route
                path="/viewPackagingconditioncode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagingconditioncodeDetails {...props} />;
                }}
            />
            <Route
                path="/packagingconditioncodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Packagingconditioncodes {...props} />;
                }}
            />

            <Route
                path="/packagingmarkingtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagingmarkingtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewPackagingmarkingtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PackagingmarkingtypeDetails {...props} />;
                }}
            />
            <Route
                path="/packagingmarkingtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Packagingmarkingtypes {...props} />;
                }}
            />

            <Route
                path="/partyidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PartyidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewPartyidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PartyidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/partyidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Partyidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/passengercategorycodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PassengercategorycodeForm {...props} />;
                }}
            />
            <Route
                path="/viewPassengercategorycode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PassengercategorycodeDetails {...props} />;
                }}
            />
            <Route
                path="/passengercategorycodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Passengercategorycodes {...props} />;
                }}
            />

            <Route
                path="/passengerinformationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PassengerinformationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewPassengerinformationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PassengerinformationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/passengerinformationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Passengerinformationtypes {...props} />;
                }}
            />

            <Route
                path="/passengertariffgroups/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PassengertariffgroupForm {...props} />;
                }}
            />
            <Route
                path="/viewPassengertariffgroup/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PassengertariffgroupDetails {...props} />;
                }}
            />
            <Route
                path="/passengertariffgroups"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Passengertariffgroups {...props} />;
                }}
            />

            <Route
                path="/persons/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PersonForm {...props} />;
                }}
            />
            <Route
                path="/viewPerson/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PersonDetails {...props} />;
                }}
            />
            <Route
                path="/persons"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Persons {...props} />;
                }}
            />

            <Route
                path="/pickuppartys/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PickuppartyForm {...props} />;
                }}
            />
            <Route
                path="/viewPickupparty/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PickuppartyDetails {...props} />;
                }}
            />
            <Route
                path="/pickuppartys"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Pickuppartys {...props} />;
                }}
            />

            <Route
                path="/printinginstructioncodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PrintinginstructioncodeForm {...props} />;
                }}
            />
            <Route
                path="/viewPrintinginstructioncode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PrintinginstructioncodeDetails {...props} />;
                }}
            />
            <Route
                path="/printinginstructioncodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Printinginstructioncodes {...props} />;
                }}
            />

            <Route
                path="/quantitytypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <QuantitytypeForm {...props} />;
                }}
            />
            <Route
                path="/viewQuantitytype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <QuantitytypeDetails {...props} />;
                }}
            />
            <Route
                path="/quantitytypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Quantitytypes {...props} />;
                }}
            />

            <Route
                path="/regularoperatinghourss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <RegularoperatinghoursForm {...props} />;
                }}
            />
            <Route
                path="/viewRegularoperatinghours/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <RegularoperatinghoursDetails {...props} />;
                }}
            />
            <Route
                path="/regularoperatinghourss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Regularoperatinghourss {...props} />;
                }}
            />

            <Route
                path="/responsibilitys/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ResponsibilityForm {...props} />;
                }}
            />
            <Route
                path="/viewResponsibility/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ResponsibilityDetails {...props} />;
                }}
            />
            <Route
                path="/responsibilitys"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Responsibilitys {...props} />;
                }}
            />

            <Route
                path="/returnableassetidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ReturnableassetidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewReturnableassetidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ReturnableassetidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/returnableassetidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Returnableassetidentifications {...props} />;
                }}
            />

            <Route
                path="/returnableassettypeidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ReturnableassettypeidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewReturnableassettypeidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ReturnableassettypeidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/returnableassettypeidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Returnableassettypeidentifications {...props} />;
                }}
            />

            <Route
                path="/returnablepackagings/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ReturnablepackagingForm {...props} />;
                }}
            />
            <Route
                path="/viewReturnablepackaging/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ReturnablepackagingDetails {...props} />;
                }}
            />
            <Route
                path="/returnablepackagings"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Returnablepackagings {...props} />;
                }}
            />

            <Route
                path="/returnablepackagingtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ReturnablepackagingtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewReturnablepackagingtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ReturnablepackagingtypeDetails {...props} />;
                }}
            />
            <Route
                path="/returnablepackagingtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Returnablepackagingtypes {...props} />;
                }}
            />

            <Route
                path="/routeids/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <RouteidForm {...props} />;
                }}
            />
            <Route
                path="/viewRouteid/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <RouteidDetails {...props} />;
                }}
            />
            <Route
                path="/routeids"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Routeids {...props} />;
                }}
            />

            <Route
                path="/scopes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ScopeForm {...props} />;
                }}
            />
            <Route
                path="/viewScope/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ScopeDetails {...props} />;
                }}
            />
            <Route
                path="/scopes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Scopes {...props} />;
                }}
            />

            <Route
                path="/servicetransactions/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ServicetransactionForm {...props} />;
                }}
            />
            <Route
                path="/viewServicetransaction/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ServicetransactionDetails {...props} />;
                }}
            />
            <Route
                path="/servicetransactions"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Servicetransactions {...props} />;
                }}
            />

            <Route
                path="/shipmentidentificationtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ShipmentidentificationtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewShipmentidentificationtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ShipmentidentificationtypeDetails {...props} />;
                }}
            />
            <Route
                path="/shipmentidentificationtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Shipmentidentificationtypes {...props} />;
                }}
            />

            <Route
                path="/specialdatenames/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <SpecialdatenameForm {...props} />;
                }}
            />
            <Route
                path="/viewSpecialdatename/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <SpecialdatenameDetails {...props} />;
                }}
            />
            <Route
                path="/specialdatenames"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Specialdatenames {...props} />;
                }}
            />

            <Route
                path="/specialoperatinghourss/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <SpecialoperatinghoursForm {...props} />;
                }}
            />
            <Route
                path="/viewSpecialoperatinghours/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <SpecialoperatinghoursDetails {...props} />;
                }}
            />
            <Route
                path="/specialoperatinghourss"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Specialoperatinghourss {...props} />;
                }}
            />

            <Route
                path="/specialoperatinghourstypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <SpecialoperatinghourstypeForm {...props} />;
                }}
            />
            <Route
                path="/viewSpecialoperatinghourstype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <SpecialoperatinghourstypeDetails {...props} />;
                }}
            />
            <Route
                path="/specialoperatinghourstypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Specialoperatinghourstypes {...props} />;
                }}
            />

            <Route
                path="/standardbusinessdocumentheaders/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <StandardbusinessdocumentheaderForm {...props} />;
                }}
            />
            <Route
                path="/viewStandardbusinessdocumentheader/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <StandardbusinessdocumentheaderDetails {...props} />;
                }}
            />
            <Route
                path="/standardbusinessdocumentheaders"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Standardbusinessdocumentheaders {...props} />;
                }}
            />

            <Route
                path="/temperaturerangetypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TemperaturerangetypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTemperaturerangetype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TemperaturerangetypeDetails {...props} />;
                }}
            />
            <Route
                path="/temperaturerangetypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Temperaturerangetypes {...props} />;
                }}
            />

            <Route
                path="/timemeasurementtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TimemeasurementtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTimemeasurementtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TimemeasurementtypeDetails {...props} />;
                }}
            />
            <Route
                path="/timemeasurementtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Timemeasurementtypes {...props} />;
                }}
            />

            <Route
                path="/totalchargeableweights/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalchargeableweightForm {...props} />;
                }}
            />
            <Route
                path="/viewTotalchargeableweight/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalchargeableweightDetails {...props} />;
                }}
            />
            <Route
                path="/totalchargeableweights"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Totalchargeableweights {...props} />;
                }}
            />

            <Route
                path="/totalgrossvolumes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalgrossvolumeForm {...props} />;
                }}
            />
            <Route
                path="/viewTotalgrossvolume/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalgrossvolumeDetails {...props} />;
                }}
            />
            <Route
                path="/totalgrossvolumes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Totalgrossvolumes {...props} />;
                }}
            />

            <Route
                path="/totalgrossweights/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalgrossweightForm {...props} />;
                }}
            />
            <Route
                path="/viewTotalgrossweight/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalgrossweightDetails {...props} />;
                }}
            />
            <Route
                path="/totalgrossweights"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Totalgrossweights {...props} />;
                }}
            />

            <Route
                path="/totalitemquantitys/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalitemquantityForm {...props} />;
                }}
            />
            <Route
                path="/viewTotalitemquantity/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalitemquantityDetails {...props} />;
                }}
            />
            <Route
                path="/totalitemquantitys"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Totalitemquantitys {...props} />;
                }}
            />

            <Route
                path="/totalloadinglengths/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalloadinglengthForm {...props} />;
                }}
            />
            <Route
                path="/viewTotalloadinglength/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalloadinglengthDetails {...props} />;
                }}
            />
            <Route
                path="/totalloadinglengths"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Totalloadinglengths {...props} />;
                }}
            />

            <Route
                path="/totalpackagequantitys/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalpackagequantityForm {...props} />;
                }}
            />
            <Route
                path="/viewTotalpackagequantity/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotalpackagequantityDetails {...props} />;
                }}
            />
            <Route
                path="/totalpackagequantitys"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Totalpackagequantitys {...props} />;
                }}
            />

            <Route
                path="/totaltransportnetweights/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotaltransportnetweightForm {...props} />;
                }}
            />
            <Route
                path="/viewTotaltransportnetweight/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TotaltransportnetweightDetails {...props} />;
                }}
            />
            <Route
                path="/totaltransportnetweights"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Totaltransportnetweights {...props} />;
                }}
            />

            <Route
                path="/transactionalpartytypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransactionalpartytypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransactionalpartytype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransactionalpartytypeDetails {...props} />;
                }}
            />
            <Route
                path="/transactionalpartytypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transactionalpartytypes {...props} />;
                }}
            />

            <Route
                path="/transportcapacitybookings/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportcapacitybooking/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingDetails {...props} />;
                }}
            />
            <Route
                path="/transportcapacitybookings"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportcapacitybookings {...props} />;
                }}
            />

            <Route
                path="/transportcapacitybookingidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportcapacitybookingidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/transportcapacitybookingidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportcapacitybookingidentifications {...props} />;
                }}
            />

            <Route
                path="/transportcapacitybookingresponses/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingresponseForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportcapacitybookingresponse/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingresponseDetails {...props} />;
                }}
            />
            <Route
                path="/transportcapacitybookingresponses"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportcapacitybookingresponses {...props} />;
                }}
            />

            <Route
                path="/transportcapacitybookingresponseidentifications/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingresponseidentificationForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportcapacitybookingresponseidentification/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingresponseidentificationDetails {...props} />;
                }}
            />
            <Route
                path="/transportcapacitybookingresponseidentifications"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportcapacitybookingresponseidentifications {...props} />;
                }}
            />

            <Route
                path="/transportcapacitybookingspacerequirements/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingspacerequirementForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportcapacitybookingspacerequirement/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingspacerequirementDetails {...props} />;
                }}
            />
            <Route
                path="/transportcapacitybookingspacerequirements"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportcapacitybookingspacerequirements {...props} />;
                }}
            />

            <Route
                path="/transportcapacitybookingtransportmovementtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingtransportmovementtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportcapacitybookingtransportmovementtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingtransportmovementtypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportcapacitybookingtransportmovementtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportcapacitybookingtransportmovementtypes {...props} />;
                }}
            />

            <Route
                path="/transportcargocharacteristicstypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcargocharacteristicstypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportcargocharacteristicstype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcargocharacteristicstypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportcargocharacteristicstypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportcargocharacteristicstypes {...props} />;
                }}
            />

            <Route
                path="/transportequipmenttypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportequipmenttypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportequipmenttype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportequipmenttypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportequipmenttypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportequipmenttypes {...props} />;
                }}
            />

            <Route
                path="/transportequipmenttypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportequipmenttypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportequipmenttypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportequipmenttypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/transportequipmenttypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportequipmenttypecodes {...props} />;
                }}
            />

            <Route
                path="/transportequipmentweights/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportequipmentweightForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportequipmentweight/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportequipmentweightDetails {...props} />;
                }}
            />
            <Route
                path="/transportequipmentweights"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportequipmentweights {...props} />;
                }}
            />

            <Route
                path="/transportinstructionconsignmentitemtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportinstructionconsignmentitemtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportinstructionconsignmentitemtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportinstructionconsignmentitemtypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportinstructionconsignmentitemtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportinstructionconsignmentitemtypes {...props} />;
                }}
            />

            <Route
                path="/transportinstructiontermstypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportinstructiontermstypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportinstructiontermstype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportinstructiontermstypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportinstructiontermstypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportinstructiontermstypes {...props} />;
                }}
            />

            <Route
                path="/transportinstructiontransportequipmenttypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportinstructiontransportequipmenttypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportinstructiontransportequipmenttype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportinstructiontransportequipmenttypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportinstructiontransportequipmenttypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportinstructiontransportequipmenttypes {...props} />;
                }}
            />

            <Route
                path="/transportinstructiontransportmovementtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportinstructiontransportmovementtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportinstructiontransportmovementtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportinstructiontransportmovementtypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportinstructiontransportmovementtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportinstructiontransportmovementtypes {...props} />;
                }}
            />

            <Route
                path="/transportmeansids/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportmeansidForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportmeansid/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportmeansidDetails {...props} />;
                }}
            />
            <Route
                path="/transportmeansids"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportmeansids {...props} />;
                }}
            />

            <Route
                path="/transportmeanstypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportmeanstypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportmeanstype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportmeanstypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportmeanstypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportmeanstypes {...props} />;
                }}
            />

            <Route
                path="/transportmodecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportmodecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportmodecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportmodecodeDetails {...props} />;
                }}
            />
            <Route
                path="/transportmodecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportmodecodes {...props} />;
                }}
            />

            <Route
                path="/transportreferences/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportreferenceForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportreference/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportreferenceDetails {...props} />;
                }}
            />
            <Route
                path="/transportreferences"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportreferences {...props} />;
                }}
            />

            <Route
                path="/transportreferencetypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportreferencetypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportreferencetype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportreferencetypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportreferencetypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportreferencetypes {...props} />;
                }}
            />

            <Route
                path="/transportreferencetypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportreferencetypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportreferencetypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportreferencetypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/transportreferencetypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportreferencetypecodes {...props} />;
                }}
            />

            <Route
                path="/transportsealtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportsealtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportsealtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportsealtypeDetails {...props} />;
                }}
            />
            <Route
                path="/transportsealtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportsealtypes {...props} />;
                }}
            />

            <Route
                path="/transportservicecategorycodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportservicecategorycodeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportservicecategorycode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportservicecategorycodeDetails {...props} />;
                }}
            />
            <Route
                path="/transportservicecategorycodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportservicecategorycodes {...props} />;
                }}
            />

            <Route
                path="/transportserviceconditiontypecodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportserviceconditiontypecodeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportserviceconditiontypecode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportserviceconditiontypecodeDetails {...props} />;
                }}
            />
            <Route
                path="/transportserviceconditiontypecodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportserviceconditiontypecodes {...props} />;
                }}
            />

            <Route
                path="/transportservicelevelcodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportservicelevelcodeForm {...props} />;
                }}
            />
            <Route
                path="/viewTransportservicelevelcode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportservicelevelcodeDetails {...props} />;
                }}
            />
            <Route
                path="/transportservicelevelcodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Transportservicelevelcodes {...props} />;
                }}
            />

            <Route
                path="/unitmeasurementtypes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <UnitmeasurementtypeForm {...props} />;
                }}
            />
            <Route
                path="/viewUnitmeasurementtype/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <UnitmeasurementtypeDetails {...props} />;
                }}
            />
            <Route
                path="/unitmeasurementtypes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Unitmeasurementtypes {...props} />;
                }}
            />

            <Route
                path="/unlocationcodes/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <UnlocationcodeForm {...props} />;
                }}
            />
            <Route
                path="/viewUnlocationcode/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <UnlocationcodeDetails {...props} />;
                }}
            />
            <Route
                path="/unlocationcodes"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Unlocationcodes {...props} />;
                }}
            />

            <Route
                path="/widths/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <WidthForm {...props} />;
                }}
            />
            <Route
                path="/viewWidth/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <WidthDetails {...props} />;
                }}
            />
            <Route
                path="/widths"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <Widths {...props} />;
                }}
            />

            <Route
                path="/profile"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <ProfileForm {...props} user={this.state.user} />;
                }}
            />
            <Route
                path="/updatePassword/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PasswordResetForm {...props} user={this.state.user} />;
                }}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/additionalconsignmentidentificationtypes" />

            <Redirect to="/not-found" />
          </Switch>
        </main>
        <div className="footer footer-copyright text-center p-3" >© Aritha
          <a href="https://aritha.org"></a>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
