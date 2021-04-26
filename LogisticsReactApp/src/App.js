/* eslint-disable import/first */
import React, { Component, useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ProfileForm from "./components/profileForm";
import PasswordResetForm from "./components/passwordResetForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import TransportCapacityBooking from "./components/TransportCapacityBooking"
import StartingPage from "./components/StartingPage";


const AdditionalconsignmentidentificationtypeForm = React.lazy(()=>import( "./components/additionalconsignmentidentificationtype/additionalconsignmentidentificationtypeForm"));
const AdditionalconsignmentidentificationtypeDetails = React.lazy(()=>import( "./components/additionalconsignmentidentificationtype/additionalconsignmentidentificationtypeDetails"));
const Additionalindividualassetidentifications = React.lazy(()=>import( "./components/additionalindividualassetidentification/additionalindividualassetidentifications"));
const AdditionalindividualassetidentificationForm = React.lazy(()=>import( "./components/additionalindividualassetidentification/additionalindividualassetidentificationForm"));
const AdditionalindividualassetidentificationDetails = React.lazy(()=>import( "./components/additionalindividualassetidentification/additionalindividualassetidentificationDetails"));
const Additionallocationidentifications = React.lazy(()=>import( "./components/additionallocationidentification/additionallocationidentifications"));
const AdditionallocationidentificationForm = React.lazy(()=>import( "./components/additionallocationidentification/additionallocationidentificationForm"));
const AdditionallocationidentificationDetails = React.lazy(()=>import( "./components/additionallocationidentification/additionallocationidentificationDetails"));
const Additionallogisticunitidentificationtypes = React.lazy(()=>import( "./components/additionallogisticunitidentificationtype/additionallogisticunitidentificationtypes"));
const AdditionallogisticunitidentificationtypeForm = React.lazy(()=>import( "./components/additionallogisticunitidentificationtype/additionallogisticunitidentificationtypeForm"));
const AdditionallogisticunitidentificationtypeDetails = React.lazy(()=>import( "./components/additionallogisticunitidentificationtype/additionallogisticunitidentificationtypeDetails"));
const Additionalpartyidentifications = React.lazy(()=>import( "./components/additionalpartyidentification/additionalpartyidentifications"));
const AdditionalpartyidentificationForm = React.lazy(()=>import( "./components/additionalpartyidentification/additionalpartyidentificationForm"));
const AdditionalpartyidentificationDetails = React.lazy(()=>import( "./components/additionalpartyidentification/additionalpartyidentificationDetails"));
const Additionalpartyidentificationtypes = React.lazy(()=>import( "./components/additionalpartyidentificationtype/additionalpartyidentificationtypes"));
const AdditionalpartyidentificationtypeForm = React.lazy(()=>import( "./components/additionalpartyidentificationtype/additionalpartyidentificationtypeForm"));
const AdditionalpartyidentificationtypeDetails = React.lazy(()=>import( "./components/additionalpartyidentificationtype/additionalpartyidentificationtypeDetails"));
const Additionalreturnableassetidentifications = React.lazy(()=>import( "./components/additionalreturnableassetidentification/additionalreturnableassetidentifications"));
const AdditionalreturnableassetidentificationForm = React.lazy(()=>import( "./components/additionalreturnableassetidentification/additionalreturnableassetidentificationForm"));
const AdditionalreturnableassetidentificationDetails = React.lazy(()=>import( "./components/additionalreturnableassetidentification/additionalreturnableassetidentificationDetails"));
const Additionalshipmentidentificationtypes = React.lazy(()=>import( "./components/additionalshipmentidentificationtype/additionalshipmentidentificationtypes"));
const AdditionalshipmentidentificationtypeForm = React.lazy(()=>import( "./components/additionalshipmentidentificationtype/additionalshipmentidentificationtypeForm"));
const AdditionalshipmentidentificationtypeDetails = React.lazy(()=>import( "./components/additionalshipmentidentificationtype/additionalshipmentidentificationtypeDetails"));
const Addresss = React.lazy(()=>import( "./components/address/addresss"));
const AddressForm = React.lazy(()=>import( "./components/address/addressForm"));
const AddressDetails = React.lazy(()=>import( "./components/address/addressDetails"));
const Afterhourscommunicationchannels = React.lazy(()=>import( "./components/afterhourscommunicationchannel/afterhourscommunicationchannels"));
const AfterhourscommunicationchannelForm = React.lazy(()=>import( "./components/afterhourscommunicationchannel/afterhourscommunicationchannelForm"));
const AfterhourscommunicationchannelDetails = React.lazy(()=>import( "./components/afterhourscommunicationchannel/afterhourscommunicationchannelDetails"));
const Alternatedeliverytermscodes = React.lazy(()=>import( "./components/alternatedeliverytermscode/alternatedeliverytermscodes"));
const AlternatedeliverytermscodeForm = React.lazy(()=>import( "./components/alternatedeliverytermscode/alternatedeliverytermscodeForm"));
const AlternatedeliverytermscodeDetails = React.lazy(()=>import( "./components/alternatedeliverytermscode/alternatedeliverytermscodeDetails"));
const Amounttypes = React.lazy(()=>import( "./components/amounttype/amounttypes"));
const AmounttypeForm = React.lazy(()=>import( "./components/amounttype/amounttypeForm"));
const AmounttypeDetails = React.lazy(()=>import( "./components/amounttype/amounttypeDetails"));
const Associatedinvoiceamounts = React.lazy(()=>import( "./components/associatedinvoiceamount/associatedinvoiceamounts"));
const AssociatedinvoiceamountForm = React.lazy(()=>import( "./components/associatedinvoiceamount/associatedinvoiceamountForm"));
const AssociatedinvoiceamountDetails = React.lazy(()=>import( "./components/associatedinvoiceamount/associatedinvoiceamountDetails"));



const Businessservices = React.lazy(()=>import( "./components/businessservice/businessservices"));
const BusinessserviceForm = React.lazy(()=>import( "./components/businessservice/businessserviceForm"));
const BusinessserviceDetails = React.lazy(()=>import( "./components/businessservice/businessserviceDetails"));
const Cargotypecodes = React.lazy(()=>import( "./components/cargotypecode/cargotypecodes"));
const CargotypecodeForm = React.lazy(()=>import( "./components/cargotypecode/cargotypecodeForm"));
const CargotypecodeDetails = React.lazy(()=>import( "./components/cargotypecode/cargotypecodeDetails"));
const Cargotypedescriptions = React.lazy(()=>import( "./components/cargotypedescription/cargotypedescriptions"));
const CargotypedescriptionForm = React.lazy(()=>import( "./components/cargotypedescription/cargotypedescriptionForm"));
const CargotypedescriptionDetails = React.lazy(()=>import( "./components/cargotypedescription/cargotypedescriptionDetails"));
const Carriers = React.lazy(()=>import( "./components/carrier/carriers"));
const CarrierForm = React.lazy(()=>import( "./components/carrier/carrierForm"));
const CarrierDetails = React.lazy(()=>import( "./components/carrier/carrierDetails"));
const Codetypes = React.lazy(()=>import( "./components/codetype/codetypes"));
const CodetypeForm = React.lazy(()=>import( "./components/codetype/codetypeForm"));
const CodetypeDetails = React.lazy(()=>import( "./components/codetype/codetypeDetails"));
const Communicationchannels = React.lazy(()=>import( "./components/communicationchannel/communicationchannels"));
const CommunicationchannelForm = React.lazy(()=>import( "./components/communicationchannel/communicationchannelForm"));
const CommunicationchannelDetails = React.lazy(()=>import( "./components/communicationchannel/communicationchannelDetails"));
const Communicationchannelcodes = React.lazy(()=>import( "./components/communicationchannelcode/communicationchannelcodes"));
const CommunicationchannelcodeForm = React.lazy(()=>import( "./components/communicationchannelcode/communicationchannelcodeForm"));
const CommunicationchannelcodeDetails = React.lazy(()=>import( "./components/communicationchannelcode/communicationchannelcodeDetails"));
const Communicationchanneltypes = React.lazy(()=>import( "./components/communicationchanneltype/communicationchanneltypes"));
const CommunicationchanneltypeForm = React.lazy(()=>import( "./components/communicationchanneltype/communicationchanneltypeForm"));
const CommunicationchanneltypeDetails = React.lazy(()=>import( "./components/communicationchanneltype/communicationchanneltypeDetails"));
const Consignmentidentificationtypes = React.lazy(()=>import( "./components/consignmentidentificationtype/consignmentidentificationtypes"));
const ConsignmentidentificationtypeForm = React.lazy(()=>import( "./components/consignmentidentificationtype/consignmentidentificationtypeForm"));
const ConsignmentidentificationtypeDetails = React.lazy(()=>import( "./components/consignmentidentificationtype/consignmentidentificationtypeDetails"));
const Contactinformations = React.lazy(()=>import( "./components/contactinformation/contactinformations"));
const ContactinformationForm = React.lazy(()=>import( "./components/contactinformation/contactinformationForm"));
const ContactinformationDetails = React.lazy(()=>import( "./components/contactinformation/contactinformationDetails"));
const Contacttypes = React.lazy(()=>import( "./components/contacttype/contacttypes"));
const ContacttypeForm = React.lazy(()=>import( "./components/contacttype/contacttypeForm"));
const ContacttypeDetails = React.lazy(()=>import( "./components/contacttype/contacttypeDetails"));
const Contacttypecodes = React.lazy(()=>import( "./components/contacttypecode/contacttypecodes"));
const ContacttypecodeForm = React.lazy(()=>import( "./components/contacttypecode/contacttypecodeForm"));
const ContacttypecodeDetails = React.lazy(()=>import( "./components/contacttypecode/contacttypecodeDetails"));
const Contentowners = React.lazy(()=>import( "./components/contentowner/contentowners"));
const ContentownerForm = React.lazy(()=>import( "./components/contentowner/contentownerForm"));
const ContentownerDetails = React.lazy(()=>import( "./components/contentowner/contentownerDetails"));
const Correlationinformations = React.lazy(()=>import( "./components/correlationinformation/correlationinformations"));
const CorrelationinformationForm = React.lazy(()=>import( "./components/correlationinformation/correlationinformationForm"));
const CorrelationinformationDetails = React.lazy(()=>import( "./components/correlationinformation/correlationinformationDetails"));
const Countrycodes = React.lazy(()=>import( "./components/countrycode/countrycodes"));
const CountrycodeForm = React.lazy(()=>import( "./components/countrycode/countrycodeForm"));
const CountrycodeDetails = React.lazy(()=>import( "./components/countrycode/countrycodeDetails"));
const Countryoforigincodes = React.lazy(()=>import( "./components/countryoforigincode/countryoforigincodes"));
const CountryoforigincodeForm = React.lazy(()=>import( "./components/countryoforigincode/countryoforigincodeForm"));
const CountryoforigincodeDetails = React.lazy(()=>import( "./components/countryoforigincode/countryoforigincodeDetails"));
const Currencyofpartycodes = React.lazy(()=>import( "./components/currencyofpartycode/currencyofpartycodes"));
const CurrencyofpartycodeForm = React.lazy(()=>import( "./components/currencyofpartycode/currencyofpartycodeForm"));
const CurrencyofpartycodeDetails = React.lazy(()=>import( "./components/currencyofpartycode/currencyofpartycodeDetails"));
const Currentholderregistrations = React.lazy(()=>import( "./components/currentholderregistration/currentholderregistrations"));
const CurrentholderregistrationForm = React.lazy(()=>import( "./components/currentholderregistration/currentholderregistrationForm"));
const CurrentholderregistrationDetails = React.lazy(()=>import( "./components/currentholderregistration/currentholderregistrationDetails"));





const Dangerousgoodsattributetypes = React.lazy(()=>import( "./components/dangerousgoodsattributetype/dangerousgoodsattributetypes"));
const DangerousgoodsattributetypeForm = React.lazy(()=>import( "./components/dangerousgoodsattributetype/dangerousgoodsattributetypeForm"));
const DangerousgoodsattributetypeDetails = React.lazy(()=>import( "./components/dangerousgoodsattributetype/dangerousgoodsattributetypeDetails"));
const Dangerousgoodsinformationtypes = React.lazy(()=>import( "./components/dangerousgoodsinformationtype/dangerousgoodsinformationtypes"));
const DangerousgoodsinformationtypeForm = React.lazy(()=>import( "./components/dangerousgoodsinformationtype/dangerousgoodsinformationtypeForm"));
const DangerousgoodsinformationtypeDetails = React.lazy(()=>import( "./components/dangerousgoodsinformationtype/dangerousgoodsinformationtypeDetails"));
const Dangerousgoodsregulationinformationtypes = React.lazy(()=>import( "./components/dangerousgoodsregulationinformationtype/dangerousgoodsregulationinformationtypes"));
const DangerousgoodsregulationinformationtypeForm = React.lazy(()=>import( "./components/dangerousgoodsregulationinformationtype/dangerousgoodsregulationinformationtypeForm"));
const DangerousgoodsregulationinformationtypeDetails = React.lazy(()=>import( "./components/dangerousgoodsregulationinformationtype/dangerousgoodsregulationinformationtypeDetails"));
const Dateoptionaltimetypes = React.lazy(()=>import( "./components/dateoptionaltimetype/dateoptionaltimetypes"));
const DateoptionaltimetypeForm = React.lazy(()=>import( "./components/dateoptionaltimetype/dateoptionaltimetypeForm"));
const DateoptionaltimetypeDetails = React.lazy(()=>import( "./components/dateoptionaltimetype/dateoptionaltimetypeDetails"));
const Datetimerangetypes = React.lazy(()=>import( "./components/datetimerangetype/datetimerangetypes"));
const DatetimerangetypeForm = React.lazy(()=>import( "./components/datetimerangetype/datetimerangetypeForm"));
const DatetimerangetypeDetails = React.lazy(()=>import( "./components/datetimerangetype/datetimerangetypeDetails"));
const Declaredvalueforcustomss = React.lazy(()=>import( "./components/declaredvalueforcustoms/declaredvalueforcustomss"));
const DeclaredvalueforcustomsForm = React.lazy(()=>import( "./components/declaredvalueforcustoms/declaredvalueforcustomsForm"));
const DeclaredvalueforcustomsDetails = React.lazy(()=>import( "./components/declaredvalueforcustoms/declaredvalueforcustomsDetails"));
const Declaredweightforcustomss = React.lazy(()=>import( "./components/declaredweightforcustoms/declaredweightforcustomss"));
const DeclaredweightforcustomsForm = React.lazy(()=>import( "./components/declaredweightforcustoms/declaredweightforcustomsForm"));
const DeclaredweightforcustomsDetails = React.lazy(()=>import( "./components/declaredweightforcustoms/declaredweightforcustomsDetails"));
const Deliveryinstructionss = React.lazy(()=>import( "./components/deliveryinstructions/deliveryinstructionss"));
const DeliveryinstructionsForm = React.lazy(()=>import( "./components/deliveryinstructions/deliveryinstructionsForm"));
const DeliveryinstructionsDetails = React.lazy(()=>import( "./components/deliveryinstructions/deliveryinstructionsDetails"));
const Deliverytermslocations = React.lazy(()=>import( "./components/deliverytermslocation/deliverytermslocations"));
const DeliverytermslocationForm = React.lazy(()=>import( "./components/deliverytermslocation/deliverytermslocationForm"));
const DeliverytermslocationDetails = React.lazy(()=>import( "./components/deliverytermslocation/deliverytermslocationDetails"));
const Deliverytermstypes = React.lazy(()=>import( "./components/deliverytermstype/deliverytermstypes"));
const DeliverytermstypeForm = React.lazy(()=>import( "./components/deliverytermstype/deliverytermstypeForm"));
const DeliverytermstypeDetails = React.lazy(()=>import( "./components/deliverytermstype/deliverytermstypeDetails"));
const Depths = React.lazy(()=>import( "./components/depth/depths"));
const DepthForm = React.lazy(()=>import( "./components/depth/depthForm"));
const DepthDetails = React.lazy(()=>import( "./components/depth/depthDetails"));
const Descriptions = React.lazy(()=>import( "./components/description/descriptions"));
const DescriptionForm = React.lazy(()=>import( "./components/description/descriptionForm"));
const DescriptionDetails = React.lazy(()=>import( "./components/description/descriptionDetails"));
const Description1000types = React.lazy(()=>import( "./components/description1000type/description1000types"));
const Description1000typeForm = React.lazy(()=>import( "./components/description1000type/description1000typeForm"));
const Description1000typeDetails = React.lazy(()=>import( "./components/description1000type/description1000typeDetails"));
const Description200types = React.lazy(()=>import( "./components/description200type/description200types"));
const Description200typeForm = React.lazy(()=>import( "./components/description200type/description200typeForm"));
const Description200typeDetails = React.lazy(()=>import( "./components/description200type/description200typeDetails"));
const Description500types = React.lazy(()=>import( "./components/description500type/description500types"));
const Description500typeForm = React.lazy(()=>import( "./components/description500type/description500typeForm"));
const Description500typeDetails = React.lazy(()=>import( "./components/description500type/description500typeDetails"));
const Description70types = React.lazy(()=>import( "./components/description70type/description70types"));
const Description70typeForm = React.lazy(()=>import( "./components/description70type/description70typeForm"));
const Description70typeDetails = React.lazy(()=>import( "./components/description70type/description70typeDetails"));
const Description80types = React.lazy(()=>import( "./components/description80type/description80types"));
const Description80typeForm = React.lazy(()=>import( "./components/description80type/description80typeForm"));
const Description80typeDetails = React.lazy(()=>import( "./components/description80type/description80typeDetails"));
const Dimensiontypes = React.lazy(()=>import( "./components/dimensiontype/dimensiontypes"));
const DimensiontypeForm = React.lazy(()=>import( "./components/dimensiontype/dimensiontypeForm"));
const DimensiontypeDetails = React.lazy(()=>import( "./components/dimensiontype/dimensiontypeDetails"));
const Documenteffectivedates = React.lazy(()=>import( "./components/documenteffectivedate/documenteffectivedates"));
const DocumenteffectivedateForm = React.lazy(()=>import( "./components/documenteffectivedate/documenteffectivedateForm"));
const DocumenteffectivedateDetails = React.lazy(()=>import( "./components/documenteffectivedate/documenteffectivedateDetails"));
const Documentidentifications = React.lazy(()=>import( "./components/documentidentification/documentidentifications"));
const DocumentidentificationForm = React.lazy(()=>import( "./components/documentidentification/documentidentificationForm"));
const DocumentidentificationDetails = React.lazy(()=>import( "./components/documentidentification/documentidentificationDetails"));
const Documentreferencetypes = React.lazy(()=>import( "./components/documentreferencetype/documentreferencetypes"));
const DocumentreferencetypeForm = React.lazy(()=>import( "./components/documentreferencetype/documentreferencetypeForm"));
const DocumentreferencetypeDetails = React.lazy(()=>import( "./components/documentreferencetype/documentreferencetypeDetails"));
const Dropoffpartys = React.lazy(()=>import( "./components/dropoffparty/dropoffpartys"));
const DropoffpartyForm = React.lazy(()=>import( "./components/dropoffparty/dropoffpartyForm"));
const DropoffpartyDetails = React.lazy(()=>import( "./components/dropoffparty/dropoffpartyDetails"));
const Dutyfeetaxdescriptions = React.lazy(()=>import( "./components/dutyfeetaxdescription/dutyfeetaxdescriptions"));
const DutyfeetaxdescriptionForm = React.lazy(()=>import( "./components/dutyfeetaxdescription/dutyfeetaxdescriptionForm"));
const DutyfeetaxdescriptionDetails = React.lazy(()=>import( "./components/dutyfeetaxdescription/dutyfeetaxdescriptionDetails"));
const Dutyfeetaxregistrations = React.lazy(()=>import( "./components/dutyfeetaxregistration/dutyfeetaxregistrations"));
const DutyfeetaxregistrationForm = React.lazy(()=>import( "./components/dutyfeetaxregistration/dutyfeetaxregistrationForm"));
const DutyfeetaxregistrationDetails = React.lazy(()=>import( "./components/dutyfeetaxregistration/dutyfeetaxregistrationDetails"));
const Dutyfeetaxregistrationids = React.lazy(()=>import( "./components/dutyfeetaxregistrationid/dutyfeetaxregistrationids"));
const DutyfeetaxregistrationidForm = React.lazy(()=>import( "./components/dutyfeetaxregistrationid/dutyfeetaxregistrationidForm"));
const DutyfeetaxregistrationidDetails = React.lazy(()=>import( "./components/dutyfeetaxregistrationid/dutyfeetaxregistrationidDetails"));
const Dutyfeetaxregistrationtypes = React.lazy(()=>import( "./components/dutyfeetaxregistrationtype/dutyfeetaxregistrationtypes"));
const DutyfeetaxregistrationtypeForm = React.lazy(()=>import( "./components/dutyfeetaxregistrationtype/dutyfeetaxregistrationtypeForm"));
const DutyfeetaxregistrationtypeDetails = React.lazy(()=>import( "./components/dutyfeetaxregistrationtype/dutyfeetaxregistrationtypeDetails"));
const Dutyfeetaxtypecodes = React.lazy(()=>import( "./components/dutyfeetaxtypecode/dutyfeetaxtypecodes"));
const DutyfeetaxtypecodeForm = React.lazy(()=>import( "./components/dutyfeetaxtypecode/dutyfeetaxtypecodeForm"));
const DutyfeetaxtypecodeDetails = React.lazy(()=>import( "./components/dutyfeetaxtypecode/dutyfeetaxtypecodeDetails"));
const Ecom_attributevaluepairlisttypes = React.lazy(()=>import( "./components/ecom_attributevaluepairlisttype/ecom_attributevaluepairlisttypes"));
const Ecom_attributevaluepairlisttypeForm = React.lazy(()=>import( "./components/ecom_attributevaluepairlisttype/ecom_attributevaluepairlisttypeForm"));
const Ecom_attributevaluepairlisttypeDetails = React.lazy(()=>import( "./components/ecom_attributevaluepairlisttype/ecom_attributevaluepairlisttypeDetails"));
const Ecomstringattributevaluepairlists = React.lazy(()=>import( "./components/ecomstringattributevaluepairlist/ecomstringattributevaluepairlists"));
const EcomstringattributevaluepairlistForm = React.lazy(()=>import( "./components/ecomstringattributevaluepairlist/ecomstringattributevaluepairlistForm"));
const EcomstringattributevaluepairlistDetails = React.lazy(()=>import( "./components/ecomstringattributevaluepairlist/ecomstringattributevaluepairlistDetails"));
const Entityidentificationtypes = React.lazy(()=>import( "./components/entityidentificationtype/entityidentificationtypes"));
const EntityidentificationtypeForm = React.lazy(()=>import( "./components/entityidentificationtype/entityidentificationtypeForm"));
const EntityidentificationtypeDetails = React.lazy(()=>import( "./components/entityidentificationtype/entityidentificationtypeDetails"));
const Enumerationlibrarys = React.lazy(()=>import( "./components/enumerationlibrary/enumerationlibrarys"));
const EnumerationlibraryForm = React.lazy(()=>import( "./components/enumerationlibrary/enumerationlibraryForm"));
const EnumerationlibraryDetails = React.lazy(()=>import( "./components/enumerationlibrary/enumerationlibraryDetails"));
const Finaldestinationcountrys = React.lazy(()=>import( "./components/finaldestinationcountry/finaldestinationcountrys"));
const FinaldestinationcountryForm = React.lazy(()=>import( "./components/finaldestinationcountry/finaldestinationcountryForm"));
const FinaldestinationcountryDetails = React.lazy(()=>import( "./components/finaldestinationcountry/finaldestinationcountryDetails"));
const Financialaccounts = React.lazy(()=>import( "./components/financialaccount/financialaccounts"));
const FinancialaccountForm = React.lazy(()=>import( "./components/financialaccount/financialaccountForm"));
const FinancialaccountDetails = React.lazy(()=>import( "./components/financialaccount/financialaccountDetails"));
const Financialaccountnumbertypecodes = React.lazy(()=>import( "./components/financialaccountnumbertypecode/financialaccountnumbertypecodes"));
const FinancialaccountnumbertypecodeForm = React.lazy(()=>import( "./components/financialaccountnumbertypecode/financialaccountnumbertypecodeForm"));
const FinancialaccountnumbertypecodeDetails = React.lazy(()=>import( "./components/financialaccountnumbertypecode/financialaccountnumbertypecodeDetails"));
const Financialaccounttypes = React.lazy(()=>import( "./components/financialaccounttype/financialaccounttypes"));
const FinancialaccounttypeForm = React.lazy(()=>import( "./components/financialaccounttype/financialaccounttypeForm"));
const FinancialaccounttypeDetails = React.lazy(()=>import( "./components/financialaccounttype/financialaccounttypeDetails"));
const Financialinstitutioninformationtypes = React.lazy(()=>import( "./components/financialinstitutioninformationtype/financialinstitutioninformationtypes"));
const FinancialinstitutioninformationtypeForm = React.lazy(()=>import( "./components/financialinstitutioninformationtype/financialinstitutioninformationtypeForm"));
const FinancialinstitutioninformationtypeDetails = React.lazy(()=>import( "./components/financialinstitutioninformationtype/financialinstitutioninformationtypeDetails"));
const Financialroutingnumbers = React.lazy(()=>import( "./components/financialroutingnumber/financialroutingnumbers"));
const FinancialroutingnumberForm = React.lazy(()=>import( "./components/financialroutingnumber/financialroutingnumberForm"));
const FinancialroutingnumberDetails = React.lazy(()=>import( "./components/financialroutingnumber/financialroutingnumberDetails"));
const Financialroutingnumbertypes = React.lazy(()=>import( "./components/financialroutingnumbertype/financialroutingnumbertypes"));
const FinancialroutingnumbertypeForm = React.lazy(()=>import( "./components/financialroutingnumbertype/financialroutingnumbertypeForm"));
const FinancialroutingnumbertypeDetails = React.lazy(()=>import( "./components/financialroutingnumbertype/financialroutingnumbertypeDetails"));
const Financialroutingnumbertypecodes = React.lazy(()=>import( "./components/financialroutingnumbertypecode/financialroutingnumbertypecodes"));
const FinancialroutingnumbertypecodeForm = React.lazy(()=>import( "./components/financialroutingnumbertypecode/financialroutingnumbertypecodeForm"));
const FinancialroutingnumbertypecodeDetails = React.lazy(()=>import( "./components/financialroutingnumbertypecode/financialroutingnumbertypecodeDetails"));
const Geographicalcoordinatess = React.lazy(()=>import( "./components/geographicalcoordinates/geographicalcoordinatess"));
const GeographicalcoordinatesForm = React.lazy(()=>import( "./components/geographicalcoordinates/geographicalcoordinatesForm"));
const GeographicalcoordinatesDetails = React.lazy(()=>import( "./components/geographicalcoordinates/geographicalcoordinatesDetails"));
const Handlinginstructioncodes = React.lazy(()=>import( "./components/handlinginstructioncode/handlinginstructioncodes"));
const HandlinginstructioncodeForm = React.lazy(()=>import( "./components/handlinginstructioncode/handlinginstructioncodeForm"));
const HandlinginstructioncodeDetails = React.lazy(()=>import( "./components/handlinginstructioncode/handlinginstructioncodeDetails"));
const Handlinginstructiontexts = React.lazy(()=>import( "./components/handlinginstructiontext/handlinginstructiontexts"));
const HandlinginstructiontextForm = React.lazy(()=>import( "./components/handlinginstructiontext/handlinginstructiontextForm"));
const HandlinginstructiontextDetails = React.lazy(()=>import( "./components/handlinginstructiontext/handlinginstructiontextDetails"));
const Handlinginstructiontypes = React.lazy(()=>import( "./components/handlinginstructiontype/handlinginstructiontypes"));
const HandlinginstructiontypeForm = React.lazy(()=>import( "./components/handlinginstructiontype/handlinginstructiontypeForm"));
const HandlinginstructiontypeDetails = React.lazy(()=>import( "./components/handlinginstructiontype/handlinginstructiontypeDetails"));
const Harmonizedsystemcodes = React.lazy(()=>import( "./components/harmonizedsystemcode/harmonizedsystemcodes"));
const HarmonizedsystemcodeForm = React.lazy(()=>import( "./components/harmonizedsystemcode/harmonizedsystemcodeForm"));
const HarmonizedsystemcodeDetails = React.lazy(()=>import( "./components/harmonizedsystemcode/harmonizedsystemcodeDetails"));
const Heights = React.lazy(()=>import( "./components/height/heights"));
const HeightForm = React.lazy(()=>import( "./components/height/heightForm"));
const HeightDetails = React.lazy(()=>import( "./components/height/heightDetails"));
const Identifiers = React.lazy(()=>import( "./components/identifier/identifiers"));
const IdentifierForm = React.lazy(()=>import( "./components/identifier/identifierForm"));
const IdentifierDetails = React.lazy(()=>import( "./components/identifier/identifierDetails"));
const Identifiertypes = React.lazy(()=>import( "./components/identifiertype/identifiertypes"));
const IdentifiertypeForm = React.lazy(()=>import( "./components/identifiertype/identifiertypeForm"));
const IdentifiertypeDetails = React.lazy(()=>import( "./components/identifiertype/identifiertypeDetails"));
const Identitydocuments = React.lazy(()=>import( "./components/identitydocument/identitydocuments"));
const IdentitydocumentForm = React.lazy(()=>import( "./components/identitydocument/identitydocumentForm"));
const IdentitydocumentDetails = React.lazy(()=>import( "./components/identitydocument/identitydocumentDetails"));
const Identitydocumenttypes = React.lazy(()=>import( "./components/identitydocumenttype/identitydocumenttypes"));
const IdentitydocumenttypeForm = React.lazy(()=>import( "./components/identitydocumenttype/identitydocumenttypeForm"));
const IdentitydocumenttypeDetails = React.lazy(()=>import( "./components/identitydocumenttype/identitydocumenttypeDetails"));
const Includedtransportequipments = React.lazy(()=>import( "./components/includedtransportequipment/includedtransportequipments"));
const IncludedtransportequipmentForm = React.lazy(()=>import( "./components/includedtransportequipment/includedtransportequipmentForm"));
const IncludedtransportequipmentDetails = React.lazy(()=>import( "./components/includedtransportequipment/includedtransportequipmentDetails"));
const Includedtransportmeanss = React.lazy(()=>import( "./components/includedtransportmeans/includedtransportmeanss"));
const IncludedtransportmeansForm = React.lazy(()=>import( "./components/includedtransportmeans/includedtransportmeansForm"));
const IncludedtransportmeansDetails = React.lazy(()=>import( "./components/includedtransportmeans/includedtransportmeansDetails"));
const Incotermscodes = React.lazy(()=>import( "./components/incotermscode/incotermscodes"));
const IncotermscodeForm = React.lazy(()=>import( "./components/incotermscode/incotermscodeForm"));
const IncotermscodeDetails = React.lazy(()=>import( "./components/incotermscode/incotermscodeDetails"));
const Individualassetidentifications = React.lazy(()=>import( "./components/individualassetidentification/individualassetidentifications"));
const IndividualassetidentificationForm = React.lazy(()=>import( "./components/individualassetidentification/individualassetidentificationForm"));
const IndividualassetidentificationDetails = React.lazy(()=>import( "./components/individualassetidentification/individualassetidentificationDetails"));
const Individualreturnableassetidentifications = React.lazy(()=>import( "./components/individualreturnableassetidentification/individualreturnableassetidentifications"));
const IndividualreturnableassetidentificationForm = React.lazy(()=>import( "./components/individualreturnableassetidentification/individualreturnableassetidentificationForm"));
const IndividualreturnableassetidentificationDetails = React.lazy(()=>import( "./components/individualreturnableassetidentification/individualreturnableassetidentificationDetails"));
const Issuedcapitals = React.lazy(()=>import( "./components/issuedcapital/issuedcapitals"));
const IssuedcapitalForm = React.lazy(()=>import( "./components/issuedcapital/issuedcapitalForm"));
const IssuedcapitalDetails = React.lazy(()=>import( "./components/issuedcapital/issuedcapitalDetails"));
const Languageofthepartycodes = React.lazy(()=>import( "./components/languageofthepartycode/languageofthepartycodes"));
const LanguageofthepartycodeForm = React.lazy(()=>import( "./components/languageofthepartycode/languageofthepartycodeForm"));
const LanguageofthepartycodeDetails = React.lazy(()=>import( "./components/languageofthepartycode/languageofthepartycodeDetails"));
const Legalregistrations = React.lazy(()=>import( "./components/legalregistration/legalregistrations"));
const LegalregistrationForm = React.lazy(()=>import( "./components/legalregistration/legalregistrationForm"));
const LegalregistrationDetails = React.lazy(()=>import( "./components/legalregistration/legalregistrationDetails"));
const Legalregistrationtypes = React.lazy(()=>import( "./components/legalregistrationtype/legalregistrationtypes"));
const LegalregistrationtypeForm = React.lazy(()=>import( "./components/legalregistrationtype/legalregistrationtypeForm"));
const LegalregistrationtypeDetails = React.lazy(()=>import( "./components/legalregistrationtype/legalregistrationtypeDetails"));
const Legalstructures = React.lazy(()=>import( "./components/legalstructure/legalstructures"));
const LegalstructureForm = React.lazy(()=>import( "./components/legalstructure/legalstructureForm"));
const LegalstructureDetails = React.lazy(()=>import( "./components/legalstructure/legalstructureDetails"));
const Locationspecificinstructionss = React.lazy(()=>import( "./components/locationspecificinstructions/locationspecificinstructionss"));
const LocationspecificinstructionsForm = React.lazy(()=>import( "./components/locationspecificinstructions/locationspecificinstructionsForm"));
const LocationspecificinstructionsDetails = React.lazy(()=>import( "./components/locationspecificinstructions/locationspecificinstructionsDetails"));
const Logisticeventdatetimes = React.lazy(()=>import( "./components/logisticeventdatetime/logisticeventdatetimes"));
const LogisticeventdatetimeForm = React.lazy(()=>import( "./components/logisticeventdatetime/logisticeventdatetimeForm"));
const LogisticeventdatetimeDetails = React.lazy(()=>import( "./components/logisticeventdatetime/logisticeventdatetimeDetails"));
const Logisticeventdurations = React.lazy(()=>import( "./components/logisticeventduration/logisticeventdurations"));
const LogisticeventdurationForm = React.lazy(()=>import( "./components/logisticeventduration/logisticeventdurationForm"));
const LogisticeventdurationDetails = React.lazy(()=>import( "./components/logisticeventduration/logisticeventdurationDetails"));
const Logisticeventperiods = React.lazy(()=>import( "./components/logisticeventperiod/logisticeventperiods"));
const LogisticeventperiodForm = React.lazy(()=>import( "./components/logisticeventperiod/logisticeventperiodForm"));
const LogisticeventperiodDetails = React.lazy(()=>import( "./components/logisticeventperiod/logisticeventperiodDetails"));
const Logisticeventtypes = React.lazy(()=>import( "./components/logisticeventtype/logisticeventtypes"));
const LogisticeventtypeForm = React.lazy(()=>import( "./components/logisticeventtype/logisticeventtypeForm"));
const LogisticeventtypeDetails = React.lazy(()=>import( "./components/logisticeventtype/logisticeventtypeDetails"));
const Logisticeventtypecodes = React.lazy(()=>import( "./components/logisticeventtypecode/logisticeventtypecodes"));
const LogisticeventtypecodeForm = React.lazy(()=>import( "./components/logisticeventtypecode/logisticeventtypecodeForm"));
const LogisticeventtypecodeDetails = React.lazy(()=>import( "./components/logisticeventtypecode/logisticeventtypecodeDetails"));
const Logisticlocations = React.lazy(()=>import( "./components/logisticlocation/logisticlocations"));
const LogisticlocationForm = React.lazy(()=>import( "./components/logisticlocation/logisticlocationForm"));
const LogisticlocationDetails = React.lazy(()=>import( "./components/logisticlocation/logisticlocationDetails"));
const Logisticlocationtypes = React.lazy(()=>import( "./components/logisticlocationtype/logisticlocationtypes"));
const LogisticlocationtypeForm = React.lazy(()=>import( "./components/logisticlocationtype/logisticlocationtypeForm"));
const LogisticlocationtypeDetails = React.lazy(()=>import( "./components/logisticlocationtype/logisticlocationtypeDetails"));
const Logisticservicesbuyers = React.lazy(()=>import( "./components/logisticservicesbuyer/logisticservicesbuyers"));
const LogisticservicesbuyerForm = React.lazy(()=>import( "./components/logisticservicesbuyer/logisticservicesbuyerForm"));
const LogisticservicesbuyerDetails = React.lazy(()=>import( "./components/logisticservicesbuyer/logisticservicesbuyerDetails"));
const Logisticservicessellers = React.lazy(()=>import( "./components/logisticservicesseller/logisticservicessellers"));
const LogisticservicessellerForm = React.lazy(()=>import( "./components/logisticservicesseller/logisticservicessellerForm"));
const LogisticservicessellerDetails = React.lazy(()=>import( "./components/logisticservicesseller/logisticservicessellerDetails"));
const Logisticservicetypes = React.lazy(()=>import( "./components/logisticservicetype/logisticservicetypes"));
const LogisticservicetypeForm = React.lazy(()=>import( "./components/logisticservicetype/logisticservicetypeForm"));
const LogisticservicetypeDetails = React.lazy(()=>import( "./components/logisticservicetype/logisticservicetypeDetails"));
const Logisticunitidentificationtypes = React.lazy(()=>import( "./components/logisticunitidentificationtype/logisticunitidentificationtypes"));
const LogisticunitidentificationtypeForm = React.lazy(()=>import( "./components/logisticunitidentificationtype/logisticunitidentificationtypeForm"));
const LogisticunitidentificationtypeDetails = React.lazy(()=>import( "./components/logisticunitidentificationtype/logisticunitidentificationtypeDetails"));
const Logisticunittypes = React.lazy(()=>import( "./components/logisticunittype/logisticunittypes"));
const LogisticunittypeForm = React.lazy(()=>import( "./components/logisticunittype/logisticunittypeForm"));
const LogisticunittypeDetails = React.lazy(()=>import( "./components/logisticunittype/logisticunittypeDetails"));
const Manifests = React.lazy(()=>import( "./components/manifest/manifests"));
const ManifestForm = React.lazy(()=>import( "./components/manifest/manifestForm"));
const ManifestDetails = React.lazy(()=>import( "./components/manifest/manifestDetails"));
const Manifestitems = React.lazy(()=>import( "./components/manifestitem/manifestitems"));
const ManifestitemForm = React.lazy(()=>import( "./components/manifestitem/manifestitemForm"));
const ManifestitemDetails = React.lazy(()=>import( "./components/manifestitem/manifestitemDetails"));
const Maximumtemperatures = React.lazy(()=>import( "./components/maximumtemperature/maximumtemperatures"));
const MaximumtemperatureForm = React.lazy(()=>import( "./components/maximumtemperature/maximumtemperatureForm"));
const MaximumtemperatureDetails = React.lazy(()=>import( "./components/maximumtemperature/maximumtemperatureDetails"));
const Measurementtypes = React.lazy(()=>import( "./components/measurementtype/measurementtypes"));
const MeasurementtypeForm = React.lazy(()=>import( "./components/measurementtype/measurementtypeForm"));
const MeasurementtypeDetails = React.lazy(()=>import( "./components/measurementtype/measurementtypeDetails"));
const Minimumtemperatures = React.lazy(()=>import( "./components/minimumtemperature/minimumtemperatures"));
const MinimumtemperatureForm = React.lazy(()=>import( "./components/minimumtemperature/minimumtemperatureForm"));
const MinimumtemperatureDetails = React.lazy(()=>import( "./components/minimumtemperature/minimumtemperatureDetails"));
const Multidescription70types = React.lazy(()=>import( "./components/multidescription70type/multidescription70types"));
const Multidescription70typeForm = React.lazy(()=>import( "./components/multidescription70type/multidescription70typeForm"));
const Multidescription70typeDetails = React.lazy(()=>import( "./components/multidescription70type/multidescription70typeDetails"));
const Nationalitys = React.lazy(()=>import( "./components/nationality/nationalitys"));
const NationalityForm = React.lazy(()=>import( "./components/nationality/nationalityForm"));
const NationalityDetails = React.lazy(()=>import( "./components/nationality/nationalityDetails"));
const Newholderregistrations = React.lazy(()=>import( "./components/newholderregistration/newholderregistrations"));
const NewholderregistrationForm = React.lazy(()=>import( "./components/newholderregistration/newholderregistrationForm"));
const NewholderregistrationDetails = React.lazy(()=>import( "./components/newholderregistration/newholderregistrationDetails"));
const Officialaddresss = React.lazy(()=>import( "./components/officialaddress/officialaddresss"));
const OfficialaddressForm = React.lazy(()=>import( "./components/officialaddress/officialaddressForm"));
const OfficialaddressDetails = React.lazy(()=>import( "./components/officialaddress/officialaddressDetails"));
const Operatinghourstypes = React.lazy(()=>import( "./components/operatinghourstype/operatinghourstypes"));
const OperatinghourstypeForm = React.lazy(()=>import( "./components/operatinghourstype/operatinghourstypeForm"));
const OperatinghourstypeDetails = React.lazy(()=>import( "./components/operatinghourstype/operatinghourstypeDetails"));
const Organisationdetailss = React.lazy(()=>import( "./components/organisationdetails/organisationdetailss"));
const OrganisationdetailsForm = React.lazy(()=>import( "./components/organisationdetails/organisationdetailsForm"));
const OrganisationdetailsDetails = React.lazy(()=>import( "./components/organisationdetails/organisationdetailsDetails"));
const Organisationtypes = React.lazy(()=>import( "./components/organisationtype/organisationtypes"));
const OrganisationtypeForm = React.lazy(()=>import( "./components/organisationtype/organisationtypeForm"));
const OrganisationtypeDetails = React.lazy(()=>import( "./components/organisationtype/organisationtypeDetails"));



const xyz = React.lazy(()=>import('./'))


const Packagetotals = React.lazy(()=>import( "./components/packagetotal/packagetotals"));
const PackagetotalForm = React.lazy(()=>import( "./components/packagetotal/packagetotalForm"));
const PackagetotalDetails = React.lazy(()=>import( "./components/packagetotal/packagetotalDetails"));
const Packagetotaltypes = React.lazy(()=>import( "./components/packagetotaltype/packagetotaltypes"));
const PackagetotaltypeForm = React.lazy(()=>import( "./components/packagetotaltype/packagetotaltypeForm"));
const PackagetotaltypeDetails = React.lazy(()=>import( "./components/packagetotaltype/packagetotaltypeDetails"));
const Packagetypecodes = React.lazy(()=>import( "./components/packagetypecode/packagetypecodes"));
const PackagetypecodeForm = React.lazy(()=>import( "./components/packagetypecode/packagetypecodeForm"));
const PackagetypecodeDetails = React.lazy(()=>import( "./components/packagetypecode/packagetypecodeDetails"));
const Packagingconditioncodes = React.lazy(()=>import( "./components/packagingconditioncode/packagingconditioncodes"));
const PackagingconditioncodeForm = React.lazy(()=>import( "./components/packagingconditioncode/packagingconditioncodeForm"));
const PackagingconditioncodeDetails = React.lazy(()=>import( "./components/packagingconditioncode/packagingconditioncodeDetails"));
const Packagingmarkingtypes = React.lazy(()=>import( "./components/packagingmarkingtype/packagingmarkingtypes"));
const PackagingmarkingtypeForm = React.lazy(()=>import( "./components/packagingmarkingtype/packagingmarkingtypeForm"));
const PackagingmarkingtypeDetails = React.lazy(()=>import( "./components/packagingmarkingtype/packagingmarkingtypeDetails"));
const Partyidentificationtypes = React.lazy(()=>import( "./components/partyidentificationtype/partyidentificationtypes"));
const PartyidentificationtypeForm = React.lazy(()=>import( "./components/partyidentificationtype/partyidentificationtypeForm"));
const PartyidentificationtypeDetails = React.lazy(()=>import( "./components/partyidentificationtype/partyidentificationtypeDetails"));
const Passengercategorycodes = React.lazy(()=>import( "./components/passengercategorycode/passengercategorycodes"));
const PassengercategorycodeForm = React.lazy(()=>import( "./components/passengercategorycode/passengercategorycodeForm"));
const PassengercategorycodeDetails = React.lazy(()=>import( "./components/passengercategorycode/passengercategorycodeDetails"));
const Passengerinformationtypes = React.lazy(()=>import( "./components/passengerinformationtype/passengerinformationtypes"));
const PassengerinformationtypeForm = React.lazy(()=>import( "./components/passengerinformationtype/passengerinformationtypeForm"));
const PassengerinformationtypeDetails = React.lazy(()=>import( "./components/passengerinformationtype/passengerinformationtypeDetails"));
const Passengertariffgroups = React.lazy(()=>import( "./components/passengertariffgroup/passengertariffgroups"));
const PassengertariffgroupForm = React.lazy(()=>import( "./components/passengertariffgroup/passengertariffgroupForm"));
const PassengertariffgroupDetails = React.lazy(()=>import( "./components/passengertariffgroup/passengertariffgroupDetails"));
const Persons = React.lazy(()=>import( "./components/person/persons"));
const PersonForm = React.lazy(()=>import( "./components/person/personForm"));
const PersonDetails = React.lazy(()=>import( "./components/person/personDetails"));
const Pickuppartys = React.lazy(()=>import( "./components/pickupparty/pickuppartys"));
const PickuppartyForm = React.lazy(()=>import( "./components/pickupparty/pickuppartyForm"));
const PickuppartyDetails = React.lazy(()=>import( "./components/pickupparty/pickuppartyDetails"));
const Printinginstructioncodes = React.lazy(()=>import( "./components/printinginstructioncode/printinginstructioncodes"));
const PrintinginstructioncodeForm = React.lazy(()=>import( "./components/printinginstructioncode/printinginstructioncodeForm"));
const PrintinginstructioncodeDetails = React.lazy(()=>import( "./components/printinginstructioncode/printinginstructioncodeDetails"));
const Quantitytypes = React.lazy(()=>import( "./components/quantitytype/quantitytypes"));
const QuantitytypeForm = React.lazy(()=>import( "./components/quantitytype/quantitytypeForm"));
const QuantitytypeDetails = React.lazy(()=>import( "./components/quantitytype/quantitytypeDetails"));
const Regularoperatinghourss = React.lazy(()=>import( "./components/regularoperatinghours/regularoperatinghourss"));
const RegularoperatinghoursForm = React.lazy(()=>import( "./components/regularoperatinghours/regularoperatinghoursForm"));
const RegularoperatinghoursDetails = React.lazy(()=>import( "./components/regularoperatinghours/regularoperatinghoursDetails"));
const Responsibilitys = React.lazy(()=>import( "./components/responsibility/responsibilitys"));
const ResponsibilityForm = React.lazy(()=>import( "./components/responsibility/responsibilityForm"));
const ResponsibilityDetails = React.lazy(()=>import( "./components/responsibility/responsibilityDetails"));
const Returnableassetidentifications = React.lazy(()=>import( "./components/returnableassetidentification/returnableassetidentifications"));
const ReturnableassetidentificationForm = React.lazy(()=>import( "./components/returnableassetidentification/returnableassetidentificationForm"));
const ReturnableassetidentificationDetails = React.lazy(()=>import( "./components/returnableassetidentification/returnableassetidentificationDetails"));
const Returnableassettypeidentifications = React.lazy(()=>import( "./components/returnableassettypeidentification/returnableassettypeidentifications"));
const ReturnableassettypeidentificationForm = React.lazy(()=>import( "./components/returnableassettypeidentification/returnableassettypeidentificationForm"));
const ReturnableassettypeidentificationDetails = React.lazy(()=>import( "./components/returnableassettypeidentification/returnableassettypeidentificationDetails"));
const Returnablepackagings = React.lazy(()=>import( "./components/returnablepackaging/returnablepackagings"));
const ReturnablepackagingForm = React.lazy(()=>import( "./components/returnablepackaging/returnablepackagingForm"));
const ReturnablepackagingDetails = React.lazy(()=>import( "./components/returnablepackaging/returnablepackagingDetails"));
const Returnablepackagingtypes = React.lazy(()=>import( "./components/returnablepackagingtype/returnablepackagingtypes"));
const ReturnablepackagingtypeForm = React.lazy(()=>import( "./components/returnablepackagingtype/returnablepackagingtypeForm"));
const ReturnablepackagingtypeDetails = React.lazy(()=>import( "./components/returnablepackagingtype/returnablepackagingtypeDetails"));
const Routeids = React.lazy(()=>import( "./components/routeid/routeids"));
const RouteidForm = React.lazy(()=>import( "./components/routeid/routeidForm"));
const RouteidDetails = React.lazy(()=>import( "./components/routeid/routeidDetails"));
const Scopes = React.lazy(()=>import( "./components/scope/scopes"));
const ScopeForm = React.lazy(()=>import( "./components/scope/scopeForm"));
const ScopeDetails = React.lazy(()=>import( "./components/scope/scopeDetails"));
const Servicetransactions = React.lazy(()=>import( "./components/servicetransaction/servicetransactions"));
const ServicetransactionForm = React.lazy(()=>import( "./components/servicetransaction/servicetransactionForm"));
const ServicetransactionDetails = React.lazy(()=>import( "./components/servicetransaction/servicetransactionDetails"));
const Shipmentidentificationtypes = React.lazy(()=>import( "./components/shipmentidentificationtype/shipmentidentificationtypes"));
const ShipmentidentificationtypeForm = React.lazy(()=>import( "./components/shipmentidentificationtype/shipmentidentificationtypeForm"));
const ShipmentidentificationtypeDetails = React.lazy(()=>import( "./components/shipmentidentificationtype/shipmentidentificationtypeDetails"));
const Specialdatenames = React.lazy(()=>import( "./components/specialdatename/specialdatenames"));
const SpecialdatenameForm = React.lazy(()=>import( "./components/specialdatename/specialdatenameForm"));
const SpecialdatenameDetails = React.lazy(()=>import( "./components/specialdatename/specialdatenameDetails"));
const Specialoperatinghourss = React.lazy(()=>import( "./components/specialoperatinghours/specialoperatinghourss"));
const SpecialoperatinghoursForm = React.lazy(()=>import( "./components/specialoperatinghours/specialoperatinghoursForm"));
const SpecialoperatinghoursDetails = React.lazy(()=>import( "./components/specialoperatinghours/specialoperatinghoursDetails"));
const Specialoperatinghourstypes = React.lazy(()=>import( "./components/specialoperatinghourstype/specialoperatinghourstypes"));
const SpecialoperatinghourstypeForm = React.lazy(()=>import( "./components/specialoperatinghourstype/specialoperatinghourstypeForm"));
const SpecialoperatinghourstypeDetails = React.lazy(()=>import( "./components/specialoperatinghourstype/specialoperatinghourstypeDetails"));
const Standardbusinessdocumentheaders = React.lazy(()=>import( "./components/standardbusinessdocumentheader/standardbusinessdocumentheaders"));
const StandardbusinessdocumentheaderForm = React.lazy(()=>import( "./components/standardbusinessdocumentheader/standardbusinessdocumentheaderForm"));
const StandardbusinessdocumentheaderDetails = React.lazy(()=>import( "./components/standardbusinessdocumentheader/standardbusinessdocumentheaderDetails"));
const Temperaturerangetypes = React.lazy(()=>import( "./components/temperaturerangetype/temperaturerangetypes"));
const TemperaturerangetypeForm = React.lazy(()=>import( "./components/temperaturerangetype/temperaturerangetypeForm"));
const TemperaturerangetypeDetails = React.lazy(()=>import( "./components/temperaturerangetype/temperaturerangetypeDetails"));
const Timemeasurementtypes = React.lazy(()=>import( "./components/timemeasurementtype/timemeasurementtypes"));
const TimemeasurementtypeForm = React.lazy(()=>import( "./components/timemeasurementtype/timemeasurementtypeForm"));
const TimemeasurementtypeDetails = React.lazy(()=>import( "./components/timemeasurementtype/timemeasurementtypeDetails"));
const Totalchargeableweights = React.lazy(()=>import( "./components/totalchargeableweight/totalchargeableweights"));
const TotalchargeableweightForm = React.lazy(()=>import( "./components/totalchargeableweight/totalchargeableweightForm"));
const TotalchargeableweightDetails = React.lazy(()=>import( "./components/totalchargeableweight/totalchargeableweightDetails"));
const Totalgrossvolumes = React.lazy(()=>import( "./components/totalgrossvolume/totalgrossvolumes"));
const TotalgrossvolumeForm = React.lazy(()=>import( "./components/totalgrossvolume/totalgrossvolumeForm"));
const TotalgrossvolumeDetails = React.lazy(()=>import( "./components/totalgrossvolume/totalgrossvolumeDetails"));
const Totalgrossweights = React.lazy(()=>import( "./components/totalgrossweight/totalgrossweights"));
const TotalgrossweightForm = React.lazy(()=>import( "./components/totalgrossweight/totalgrossweightForm"));
const TotalgrossweightDetails = React.lazy(()=>import( "./components/totalgrossweight/totalgrossweightDetails"));
const Totalitemquantitys = React.lazy(()=>import( "./components/totalitemquantity/totalitemquantitys"));
const TotalitemquantityForm = React.lazy(()=>import( "./components/totalitemquantity/totalitemquantityForm"));
const TotalitemquantityDetails = React.lazy(()=>import( "./components/totalitemquantity/totalitemquantityDetails"));
const Totalloadinglengths = React.lazy(()=>import( "./components/totalloadinglength/totalloadinglengths"));
const TotalloadinglengthForm = React.lazy(()=>import( "./components/totalloadinglength/totalloadinglengthForm"));
const TotalloadinglengthDetails = React.lazy(()=>import( "./components/totalloadinglength/totalloadinglengthDetails"));
const Totalpackagequantitys = React.lazy(()=>import( "./components/totalpackagequantity/totalpackagequantitys"));
const TotalpackagequantityForm = React.lazy(()=>import( "./components/totalpackagequantity/totalpackagequantityForm"));
const TotalpackagequantityDetails = React.lazy(()=>import( "./components/totalpackagequantity/totalpackagequantityDetails"));
const Totaltransportnetweights = React.lazy(()=>import( "./components/totaltransportnetweight/totaltransportnetweights"));
const TotaltransportnetweightForm = React.lazy(()=>import( "./components/totaltransportnetweight/totaltransportnetweightForm"));
const TotaltransportnetweightDetails = React.lazy(()=>import( "./components/totaltransportnetweight/totaltransportnetweightDetails"));
const Transactionalpartytypes = React.lazy(()=>import( "./components/transactionalpartytype/transactionalpartytypes"));
const TransactionalpartytypeForm = React.lazy(()=>import( "./components/transactionalpartytype/transactionalpartytypeForm"));
const TransactionalpartytypeDetails = React.lazy(()=>import( "./components/transactionalpartytype/transactionalpartytypeDetails"));
const Transportcapacitybookings = React.lazy(()=>import( "./components/transportcapacitybooking/transportcapacitybookings"));
const TransportcapacitybookingForm = React.lazy(()=>import( "./components/transportcapacitybooking/transportcapacitybookingForm"));
const TransportcapacitybookingDetails = React.lazy(()=>import( "./components/transportcapacitybooking/transportcapacitybookingDetails"));
const Transportcapacitybookingidentifications = React.lazy(()=>import( "./components/transportcapacitybookingidentification/transportcapacitybookingidentifications"));
const TransportcapacitybookingidentificationForm = React.lazy(()=>import( "./components/transportcapacitybookingidentification/transportcapacitybookingidentificationForm"));
const TransportcapacitybookingidentificationDetails = React.lazy(()=>import( "./components/transportcapacitybookingidentification/transportcapacitybookingidentificationDetails"));
const Transportcapacitybookingresponses = React.lazy(()=>import( "./components/transportcapacitybookingresponse/transportcapacitybookingresponses"));
const TransportcapacitybookingresponseForm = React.lazy(()=>import( "./components/transportcapacitybookingresponse/transportcapacitybookingresponseForm"));
const TransportcapacitybookingresponseDetails = React.lazy(()=>import( "./components/transportcapacitybookingresponse/transportcapacitybookingresponseDetails"));
const Transportcapacitybookingresponseidentifications = React.lazy(()=>import( "./components/transportcapacitybookingresponseidentification/transportcapacitybookingresponseidentifications"));
const TransportcapacitybookingresponseidentificationForm = React.lazy(()=>import( "./components/transportcapacitybookingresponseidentification/transportcapacitybookingresponseidentificationForm"));
const TransportcapacitybookingresponseidentificationDetails = React.lazy(()=>import( "./components/transportcapacitybookingresponseidentification/transportcapacitybookingresponseidentificationDetails"));
const Transportcapacitybookingspacerequirements = React.lazy(()=>import( "./components/transportcapacitybookingspacerequirement/transportcapacitybookingspacerequirements"));
const TransportcapacitybookingspacerequirementForm = React.lazy(()=>import( "./components/transportcapacitybookingspacerequirement/transportcapacitybookingspacerequirementForm"));
const TransportcapacitybookingspacerequirementDetails = React.lazy(()=>import( "./components/transportcapacitybookingspacerequirement/transportcapacitybookingspacerequirementDetails"));
const Transportcapacitybookingtransportmovementtypes = React.lazy(()=>import( "./components/transportcapacitybookingtransportmovementtype/transportcapacitybookingtransportmovementtypes"));
const TransportcapacitybookingtransportmovementtypeForm = React.lazy(()=>import( "./components/transportcapacitybookingtransportmovementtype/transportcapacitybookingtransportmovementtypeForm"));
const TransportcapacitybookingtransportmovementtypeDetails = React.lazy(()=>import( "./components/transportcapacitybookingtransportmovementtype/transportcapacitybookingtransportmovementtypeDetails"));
const Transportcargocharacteristicstypes = React.lazy(()=>import( "./components/transportcargocharacteristicstype/transportcargocharacteristicstypes"));
const TransportcargocharacteristicstypeForm = React.lazy(()=>import( "./components/transportcargocharacteristicstype/transportcargocharacteristicstypeForm"));
const TransportcargocharacteristicstypeDetails = React.lazy(()=>import( "./components/transportcargocharacteristicstype/transportcargocharacteristicstypeDetails"));
const Transportequipmenttypes = React.lazy(()=>import( "./components/transportequipmenttype/transportequipmenttypes"));
const TransportequipmenttypeForm = React.lazy(()=>import( "./components/transportequipmenttype/transportequipmenttypeForm"));
const TransportequipmenttypeDetails = React.lazy(()=>import( "./components/transportequipmenttype/transportequipmenttypeDetails"));
const Transportequipmenttypecodes = React.lazy(()=>import( "./components/transportequipmenttypecode/transportequipmenttypecodes"));
const TransportequipmenttypecodeForm = React.lazy(()=>import( "./components/transportequipmenttypecode/transportequipmenttypecodeForm"));
const TransportequipmenttypecodeDetails = React.lazy(()=>import( "./components/transportequipmenttypecode/transportequipmenttypecodeDetails"));
const Transportequipmentweights = React.lazy(()=>import( "./components/transportequipmentweight/transportequipmentweights"));
const TransportequipmentweightForm = React.lazy(()=>import( "./components/transportequipmentweight/transportequipmentweightForm"));
const TransportequipmentweightDetails = React.lazy(()=>import( "./components/transportequipmentweight/transportequipmentweightDetails"));
const Transportinstructionconsignmentitemtypes = React.lazy(()=>import( "./components/transportinstructionconsignmentitemtype/transportinstructionconsignmentitemtypes"));
const TransportinstructionconsignmentitemtypeForm = React.lazy(()=>import( "./components/transportinstructionconsignmentitemtype/transportinstructionconsignmentitemtypeForm"));
const TransportinstructionconsignmentitemtypeDetails = React.lazy(()=>import( "./components/transportinstructionconsignmentitemtype/transportinstructionconsignmentitemtypeDetails"));
const Transportinstructiontermstypes = React.lazy(()=>import( "./components/transportinstructiontermstype/transportinstructiontermstypes"));
const TransportinstructiontermstypeForm = React.lazy(()=>import( "./components/transportinstructiontermstype/transportinstructiontermstypeForm"));
const TransportinstructiontermstypeDetails = React.lazy(()=>import( "./components/transportinstructiontermstype/transportinstructiontermstypeDetails"));
const Transportinstructiontransportequipmenttypes = React.lazy(()=>import( "./components/transportinstructiontransportequipmenttype/transportinstructiontransportequipmenttypes"));
const TransportinstructiontransportequipmenttypeForm = React.lazy(()=>import( "./components/transportinstructiontransportequipmenttype/transportinstructiontransportequipmenttypeForm"));
const TransportinstructiontransportequipmenttypeDetails = React.lazy(()=>import( "./components/transportinstructiontransportequipmenttype/transportinstructiontransportequipmenttypeDetails"));
const Transportinstructiontransportmovementtypes = React.lazy(()=>import( "./components/transportinstructiontransportmovementtype/transportinstructiontransportmovementtypes"));
const TransportinstructiontransportmovementtypeForm = React.lazy(()=>import( "./components/transportinstructiontransportmovementtype/transportinstructiontransportmovementtypeForm"));
const TransportinstructiontransportmovementtypeDetails = React.lazy(()=>import( "./components/transportinstructiontransportmovementtype/transportinstructiontransportmovementtypeDetails"));
const Transportmeansids = React.lazy(()=>import( "./components/transportmeansid/transportmeansids"));
const TransportmeansidForm = React.lazy(()=>import( "./components/transportmeansid/transportmeansidForm"));
const TransportmeansidDetails = React.lazy(()=>import( "./components/transportmeansid/transportmeansidDetails"));
const Transportmeanstypes = React.lazy(()=>import( "./components/transportmeanstype/transportmeanstypes"));
const TransportmeanstypeForm = React.lazy(()=>import( "./components/transportmeanstype/transportmeanstypeForm"));
const TransportmeanstypeDetails = React.lazy(()=>import( "./components/transportmeanstype/transportmeanstypeDetails"));
const Transportmodecodes = React.lazy(()=>import( "./components/transportmodecode/transportmodecodes"));
const TransportmodecodeForm = React.lazy(()=>import( "./components/transportmodecode/transportmodecodeForm"));
const TransportmodecodeDetails = React.lazy(()=>import( "./components/transportmodecode/transportmodecodeDetails"));
const Transportreferences = React.lazy(()=>import( "./components/transportreference/transportreferences"));
const TransportreferenceForm = React.lazy(()=>import( "./components/transportreference/transportreferenceForm"));
const TransportreferenceDetails = React.lazy(()=>import( "./components/transportreference/transportreferenceDetails"));
const Transportreferencetypes = React.lazy(()=>import( "./components/transportreferencetype/transportreferencetypes"));
const TransportreferencetypeForm = React.lazy(()=>import( "./components/transportreferencetype/transportreferencetypeForm"));
const TransportreferencetypeDetails = React.lazy(()=>import( "./components/transportreferencetype/transportreferencetypeDetails"));
const Transportreferencetypecodes = React.lazy(()=>import( "./components/transportreferencetypecode/transportreferencetypecodes"));
const TransportreferencetypecodeForm = React.lazy(()=>import( "./components/transportreferencetypecode/transportreferencetypecodeForm"));
const TransportreferencetypecodeDetails = React.lazy(()=>import( "./components/transportreferencetypecode/transportreferencetypecodeDetails"));
const Transportsealtypes = React.lazy(()=>import( "./components/transportsealtype/transportsealtypes"));
const TransportsealtypeForm = React.lazy(()=>import( "./components/transportsealtype/transportsealtypeForm"));
const TransportsealtypeDetails = React.lazy(()=>import( "./components/transportsealtype/transportsealtypeDetails"));
const Transportservicecategorycodes = React.lazy(()=>import( "./components/transportservicecategorycode/transportservicecategorycodes"));
const TransportservicecategorycodeForm = React.lazy(()=>import( "./components/transportservicecategorycode/transportservicecategorycodeForm"));
const TransportservicecategorycodeDetails = React.lazy(()=>import( "./components/transportservicecategorycode/transportservicecategorycodeDetails"));
const Transportserviceconditiontypecodes = React.lazy(()=>import( "./components/transportserviceconditiontypecode/transportserviceconditiontypecodes"));
const TransportserviceconditiontypecodeForm = React.lazy(()=>import( "./components/transportserviceconditiontypecode/transportserviceconditiontypecodeForm"));
const TransportserviceconditiontypecodeDetails = React.lazy(()=>import( "./components/transportserviceconditiontypecode/transportserviceconditiontypecodeDetails"));
const Transportservicelevelcodes = React.lazy(()=>import( "./components/transportservicelevelcode/transportservicelevelcodes"));
const TransportservicelevelcodeForm = React.lazy(()=>import( "./components/transportservicelevelcode/transportservicelevelcodeForm"));
const TransportservicelevelcodeDetails = React.lazy(()=>import( "./components/transportservicelevelcode/transportservicelevelcodeDetails"));
const Unitmeasurementtypes = React.lazy(()=>import( "./components/unitmeasurementtype/unitmeasurementtypes"));
const UnitmeasurementtypeForm = React.lazy(()=>import( "./components/unitmeasurementtype/unitmeasurementtypeForm"));
const UnitmeasurementtypeDetails = React.lazy(()=>import( "./components/unitmeasurementtype/unitmeasurementtypeDetails"));
const Unlocationcodes = React.lazy(()=>import( "./components/unlocationcode/unlocationcodes"));
const UnlocationcodeForm = React.lazy(()=>import( "./components/unlocationcode/unlocationcodeForm"));
const UnlocationcodeDetails = React.lazy(()=>import( "./components/unlocationcode/unlocationcodeDetails"));
const Widths = React.lazy(()=>import( "./components/width/widths"));
const WidthForm = React.lazy(()=>import( "./components/width/widthForm"));
const WidthDetails = React.lazy(()=>import( "./components/width/widthDetails"));


const  TransportcapacitybookingEdit  = React.lazy(()=> import("./components/transportcapacitybooking/TransportcapacitybookingEdit"));
const  TransportcapacitybookingView =React.lazy(()=> import("./components/transportcapacitybooking/TransportcapacitybookingView"));
import {useDispatch} from 'react-redux'



import { transportServiceCategoryCodesAction, transportServiceConditionTypeCodesAction, transportServiceLevelCodesAction } from "./actions/ServiceDetailActions";
import {
  AdditionalLocationIdentificationCodesAction,
  LocationSpecificInstructionsCodesAction,
  CurrencyOfPartyCodesAction,
  LanguageOfthePartyCodesAction,
  CountryCodesAction,
  ContactTypeCodesAction,
  ResposibilitiesCodesAction,
  commmunicationChannelCodesAction,
  SublocationIdentificationCodesAction

} from "./actions/TCBLocationAction"
import { amounttypesCodesAction, CargoTypeCodesAction, CargoTypeDescriptionCodesAction, CountryOfOriginCodesAction, FinalDestinationCountryCodesAction, HarmonizedSystemCodesAction, measurementtypesCodesAction, PackageTypeCodesAction, quantitytypesCodesAction, TotalpackagequantitysCodesAction } from "./actions/CargoTcbAction";
// class App extends Component
const Additionalconsignmentidentificationtypes = React.lazy(()=> import("./components/additionalconsignmentidentificationtype/additionalconsignmentidentificationtypes"))


function App () {

  const [state,setState] = useState({})
  const dispatch = useDispatch()

  useEffect(()=>{
    getCurrentUser()
    // dispatch(transportServiceCategoryCodesAction())
    // dispatch(transportServiceConditionTypeCodesAction())
    // dispatch(transportServiceLevelCodesAction())
    // dispatch(AdditionalLocationIdentificationCodesAction())
    // dispatch(LocationSpecificInstructionsCodesAction())
    // dispatch(CurrencyOfPartyCodesAction())
    // dispatch(LanguageOfthePartyCodesAction())
    // dispatch(CountryCodesAction())
    // dispatch(ContactTypeCodesAction())
    // dispatch(ResposibilitiesCodesAction())
    // dispatch(commmunicationChannelCodesAction())
    // dispatch(SublocationIdentificationCodesAction())
    //cargo
    // dispatch(CargoTypeCodesAction())
    // dispatch(HarmonizedSystemCodesAction())
    // dispatch(CargoTypeDescriptionCodesAction())
    // dispatch(CountryOfOriginCodesAction())
    // dispatch(FinalDestinationCountryCodesAction())
    // dispatch(measurementtypesCodesAction())
    // dispatch(amounttypesCodesAction())
    // dispatch(quantitytypesCodesAction())
    // dispatch(PackageTypeCodesAction())
    // dispatch(TotalpackagequantitysCodesAction())

    console.log("Appp runs the actions")

  },[])

  // state = {};
  //we wanted to show currently loggedin userName to the Navbar so we get user set in state and passed to Navbar component
  // componentDidMount() {
  //   this.getCurrentUser();
  // }

   const getCurrentUser = async () => {
    try {
      const {data:user} = await auth.getCurrentUser();
      // this.setState({ user });
      setState({user})
    }
    catch (ex) {
      console.log(ex.message);
    }
  };

 
    console.log(state,"current user data")
    return (
      
        <div className="AppComponent">
        <div className="navBarcomponet">
           {/* this.state.user */}
          <Navbar user={state.user} />
        </div>
         <div className="mainComponent">
         <main role="main" className="container-fluid">
           <React.Suspense fallback={<p>...Loading</p>}>
             <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/startingpage" component={StartingPage} />     
            <Route path="/transportcapacitybooking"
            render={props => {
            if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
            return <TransportCapacityBooking {...props} />;}}
             />
            {/* following is a protected route only loggedIn user can access it */}
            <Route
                path="/home"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return < Home {...props} />;
                }}
            />
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

            {/* <Route
                path="/transportcapacitybookings/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingForm {...props} />;
                }}
            /> */}

            <Route
                path="/transportcapacitybookings/newui"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingForm {...props} />;
                }}
            />

            <Route
                path="/viewTransportcapacitybooking/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingView {...props} />;
                }}
            />
            {/* //new One  */}
             <Route
                path="/EditTransportcapacitybooking/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <TransportcapacitybookingEdit {...props} />;
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
                  return <ProfileForm {...props} user={state.user} />;
                   {/* this.state.user */}
                }}
            />
            <Route
                path="/updatePassword/:id"
                render={props => {
                  if (!auth.isUserLoggedIn()) return <Redirect to="/login" />;
                  return <PasswordResetForm {...props} user={state.user} />;
                   {/* this.state.user */}
                }}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />

            <Redirect to="/not-found" />
          </Switch>
          </React.Suspense>
        </main>
        {/* <div className="footer footer-copyright text-center p-3" >© Aritha
          <a href="https://aritha.org"></a>
        </div> */}

         </div>
         </div>
    
    );
  
}

export default App;
