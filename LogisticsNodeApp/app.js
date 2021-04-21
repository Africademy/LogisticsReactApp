const express = require("express");
const mongoose = require("mongoose");
const createService = require("./services/sampleRecord");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config.js");
const path = require("path");

const authRoute = require("./routes/auth");
const AdditionalconsignmentidentificationtypesRoute = require("./routes/Additionalconsignmentidentificationtypes");
const AdditionalindividualassetidentificationsRoute = require("./routes/Additionalindividualassetidentifications");
const AdditionallocationidentificationsRoute = require("./routes/Additionallocationidentifications");
const AdditionallogisticunitidentificationtypesRoute = require("./routes/Additionallogisticunitidentificationtypes");
const AdditionalpartyidentificationsRoute = require("./routes/Additionalpartyidentifications");
const AdditionalpartyidentificationtypesRoute = require("./routes/Additionalpartyidentificationtypes");
const AdditionalreturnableassetidentificationsRoute = require("./routes/Additionalreturnableassetidentifications");
const AdditionalshipmentidentificationtypesRoute = require("./routes/Additionalshipmentidentificationtypes");
const AddresssRoute = require("./routes/Addresss");
const AfterhourscommunicationchannelsRoute = require("./routes/Afterhourscommunicationchannels");
const AlternatedeliverytermscodesRoute = require("./routes/Alternatedeliverytermscodes");
const AmounttypesRoute = require("./routes/Amounttypes");
const AssociatedinvoiceamountsRoute = require("./routes/Associatedinvoiceamounts");
const BusinessservicesRoute = require("./routes/Businessservices");
const CargotypecodesRoute = require("./routes/Cargotypecodes");
const CargotypedescriptionsRoute = require("./routes/Cargotypedescriptions");
const CarriersRoute = require("./routes/Carriers");
const CodetypesRoute = require("./routes/Codetypes");
const CommunicationchannelsRoute = require("./routes/Communicationchannels");
const CommunicationchannelcodesRoute = require("./routes/Communicationchannelcodes");
const CommunicationchanneltypesRoute = require("./routes/Communicationchanneltypes");
const ConsignmentidentificationtypesRoute = require("./routes/Consignmentidentificationtypes");
const ContactinformationsRoute = require("./routes/Contactinformations");
const ContacttypesRoute = require("./routes/Contacttypes");
const ContacttypecodesRoute = require("./routes/Contacttypecodes");
const ContentownersRoute = require("./routes/Contentowners");
const CorrelationinformationsRoute = require("./routes/Correlationinformations");
const CountrycodesRoute = require("./routes/Countrycodes");
const CountryoforigincodesRoute = require("./routes/Countryoforigincodes");
const CurrencyofpartycodesRoute = require("./routes/Currencyofpartycodes");
const CurrentholderregistrationsRoute = require("./routes/Currentholderregistrations");
const DangerousgoodsattributetypesRoute = require("./routes/Dangerousgoodsattributetypes");
const DangerousgoodsinformationtypesRoute = require("./routes/Dangerousgoodsinformationtypes");
const DangerousgoodsregulationinformationtypesRoute = require("./routes/Dangerousgoodsregulationinformationtypes");
const DateoptionaltimetypesRoute = require("./routes/Dateoptionaltimetypes");
const DatetimerangetypesRoute = require("./routes/Datetimerangetypes");
const DeclaredvalueforcustomssRoute = require("./routes/Declaredvalueforcustomss");
const DeclaredweightforcustomssRoute = require("./routes/Declaredweightforcustomss");
const DeliveryinstructionssRoute = require("./routes/Deliveryinstructionss");
const DeliverytermslocationsRoute = require("./routes/Deliverytermslocations");
const DeliverytermstypesRoute = require("./routes/Deliverytermstypes");
const DepthsRoute = require("./routes/Depths");
const DescriptionsRoute = require("./routes/Descriptions");
const Description1000typesRoute = require("./routes/Description1000types");
const Description200typesRoute = require("./routes/Description200types");
const Description500typesRoute = require("./routes/Description500types");
const Description70typesRoute = require("./routes/Description70types");
const Description80typesRoute = require("./routes/Description80types");
const DimensiontypesRoute = require("./routes/Dimensiontypes");
const DocumenteffectivedatesRoute = require("./routes/Documenteffectivedates");
const DocumentidentificationsRoute = require("./routes/Documentidentifications");
const DocumentreferencetypesRoute = require("./routes/Documentreferencetypes");
const DropoffpartysRoute = require("./routes/Dropoffpartys");
const DutyfeetaxdescriptionsRoute = require("./routes/Dutyfeetaxdescriptions");
const DutyfeetaxregistrationsRoute = require("./routes/Dutyfeetaxregistrations");
const DutyfeetaxregistrationidsRoute = require("./routes/Dutyfeetaxregistrationids");
const DutyfeetaxregistrationtypesRoute = require("./routes/Dutyfeetaxregistrationtypes");
const DutyfeetaxtypecodesRoute = require("./routes/Dutyfeetaxtypecodes");
const Ecom_attributevaluepairlisttypesRoute = require("./routes/Ecom_attributevaluepairlisttypes");
const EcomstringattributevaluepairlistsRoute = require("./routes/Ecomstringattributevaluepairlists");
const EntityidentificationtypesRoute = require("./routes/Entityidentificationtypes");
const EnumerationlibrarysRoute = require("./routes/Enumerationlibrarys");
const FinaldestinationcountrysRoute = require("./routes/Finaldestinationcountrys");
const FinancialaccountsRoute = require("./routes/Financialaccounts");
const FinancialaccountnumbertypecodesRoute = require("./routes/Financialaccountnumbertypecodes");
const FinancialaccounttypesRoute = require("./routes/Financialaccounttypes");
const FinancialinstitutioninformationtypesRoute = require("./routes/Financialinstitutioninformationtypes");
const FinancialroutingnumbersRoute = require("./routes/Financialroutingnumbers");
const FinancialroutingnumbertypesRoute = require("./routes/Financialroutingnumbertypes");
const FinancialroutingnumbertypecodesRoute = require("./routes/Financialroutingnumbertypecodes");
const GeographicalcoordinatessRoute = require("./routes/Geographicalcoordinatess");
const HandlinginstructioncodesRoute = require("./routes/Handlinginstructioncodes");
const HandlinginstructiontextsRoute = require("./routes/Handlinginstructiontexts");
const HandlinginstructiontypesRoute = require("./routes/Handlinginstructiontypes");
const HarmonizedsystemcodesRoute = require("./routes/Harmonizedsystemcodes");
const HeightsRoute = require("./routes/Heights");
const IdentifiersRoute = require("./routes/Identifiers");
const IdentifiertypesRoute = require("./routes/Identifiertypes");
const IdentitydocumentsRoute = require("./routes/Identitydocuments");
const IdentitydocumenttypesRoute = require("./routes/Identitydocumenttypes");
const IncludedtransportequipmentsRoute = require("./routes/Includedtransportequipments");
const IncludedtransportmeanssRoute = require("./routes/Includedtransportmeanss");
const IncotermscodesRoute = require("./routes/Incotermscodes");
const IndividualassetidentificationsRoute = require("./routes/Individualassetidentifications");
const IndividualreturnableassetidentificationsRoute = require("./routes/Individualreturnableassetidentifications");
const IssuedcapitalsRoute = require("./routes/Issuedcapitals");
const LanguageofthepartycodesRoute = require("./routes/Languageofthepartycodes");
const LegalregistrationsRoute = require("./routes/Legalregistrations");
const LegalregistrationtypesRoute = require("./routes/Legalregistrationtypes");
const LegalstructuresRoute = require("./routes/Legalstructures");
const LocationspecificinstructionssRoute = require("./routes/Locationspecificinstructionss");
const LogisticeventdatetimesRoute = require("./routes/Logisticeventdatetimes");
const LogisticeventdurationsRoute = require("./routes/Logisticeventdurations");
const LogisticeventperiodsRoute = require("./routes/Logisticeventperiods");
const LogisticeventtypesRoute = require("./routes/Logisticeventtypes");
const LogisticeventtypecodesRoute = require("./routes/Logisticeventtypecodes");
const LogisticlocationsRoute = require("./routes/Logisticlocations");
const LogisticlocationtypesRoute = require("./routes/Logisticlocationtypes");
const LogisticservicesbuyersRoute = require("./routes/Logisticservicesbuyers");
const LogisticservicessellersRoute = require("./routes/Logisticservicessellers");
const LogisticservicetypesRoute = require("./routes/Logisticservicetypes");
const LogisticunitidentificationtypesRoute = require("./routes/Logisticunitidentificationtypes");
const LogisticunittypesRoute = require("./routes/Logisticunittypes");
const ManifestsRoute = require("./routes/Manifests");
const ManifestitemsRoute = require("./routes/Manifestitems");
const MaximumtemperaturesRoute = require("./routes/Maximumtemperatures");
const MeasurementtypesRoute = require("./routes/Measurementtypes");
const MinimumtemperaturesRoute = require("./routes/Minimumtemperatures");
const Multidescription70typesRoute = require("./routes/Multidescription70types");
const NationalitysRoute = require("./routes/Nationalitys");
const NewholderregistrationsRoute = require("./routes/Newholderregistrations");
const OfficialaddresssRoute = require("./routes/Officialaddresss");
const OperatinghourstypesRoute = require("./routes/Operatinghourstypes");
const OrganisationdetailssRoute = require("./routes/Organisationdetailss");
const OrganisationtypesRoute = require("./routes/Organisationtypes");
const PackagetotalsRoute = require("./routes/Packagetotals");
const PackagetotaltypesRoute = require("./routes/Packagetotaltypes");
const PackagetypecodesRoute = require("./routes/Packagetypecodes");
const PackagingconditioncodesRoute = require("./routes/Packagingconditioncodes");
const PackagingmarkingtypesRoute = require("./routes/Packagingmarkingtypes");
const PartyidentificationtypesRoute = require("./routes/Partyidentificationtypes");
const PassengercategorycodesRoute = require("./routes/Passengercategorycodes");
const PassengerinformationtypesRoute = require("./routes/Passengerinformationtypes");
const PassengertariffgroupsRoute = require("./routes/Passengertariffgroups");
const PersonsRoute = require("./routes/Persons");
const PickuppartysRoute = require("./routes/Pickuppartys");
const PrintinginstructioncodesRoute = require("./routes/Printinginstructioncodes");
const QuantitytypesRoute = require("./routes/Quantitytypes");
const RegularoperatinghourssRoute = require("./routes/Regularoperatinghourss");
const ResponsibilitysRoute = require("./routes/Responsibilitys");
const ReturnableassetidentificationsRoute = require("./routes/Returnableassetidentifications");
const ReturnableassettypeidentificationsRoute = require("./routes/Returnableassettypeidentifications");
const ReturnablepackagingsRoute = require("./routes/Returnablepackagings");
const ReturnablepackagingtypesRoute = require("./routes/Returnablepackagingtypes");
const RouteidsRoute = require("./routes/Routeids");
const ScopesRoute = require("./routes/Scopes");
const ServicetransactionsRoute = require("./routes/Servicetransactions");
const ShipmentidentificationtypesRoute = require("./routes/Shipmentidentificationtypes");
const SpecialdatenamesRoute = require("./routes/Specialdatenames");
const SpecialoperatinghourssRoute = require("./routes/Specialoperatinghourss");
const SpecialoperatinghourstypesRoute = require("./routes/Specialoperatinghourstypes");
const StandardbusinessdocumentheadersRoute = require("./routes/Standardbusinessdocumentheaders");
const TemperaturerangetypesRoute = require("./routes/Temperaturerangetypes");
const TimemeasurementtypesRoute = require("./routes/Timemeasurementtypes");
const TotalchargeableweightsRoute = require("./routes/Totalchargeableweights");
const TotalgrossvolumesRoute = require("./routes/Totalgrossvolumes");
const TotalgrossweightsRoute = require("./routes/Totalgrossweights");
const TotalitemquantitysRoute = require("./routes/Totalitemquantitys");
const TotalloadinglengthsRoute = require("./routes/Totalloadinglengths");
const TotalpackagequantitysRoute = require("./routes/Totalpackagequantitys");
const TotaltransportnetweightsRoute = require("./routes/Totaltransportnetweights");
const TransactionalpartytypesRoute = require("./routes/Transactionalpartytypes");
const TransportcapacitybookingsRoute = require("./routes/Transportcapacitybookings");
const TransportcapacitybookingidentificationsRoute = require("./routes/Transportcapacitybookingidentifications");
const TransportcapacitybookingresponsesRoute = require("./routes/Transportcapacitybookingresponses");
const TransportcapacitybookingresponseidentificationsRoute = require("./routes/Transportcapacitybookingresponseidentifications");
const TransportcapacitybookingspacerequirementsRoute = require("./routes/Transportcapacitybookingspacerequirements");
const TransportcapacitybookingtransportmovementtypesRoute = require("./routes/Transportcapacitybookingtransportmovementtypes");
const TransportcargocharacteristicstypesRoute = require("./routes/Transportcargocharacteristicstypes");
const TransportequipmenttypesRoute = require("./routes/Transportequipmenttypes");
const TransportequipmenttypecodesRoute = require("./routes/Transportequipmenttypecodes");
const TransportequipmentweightsRoute = require("./routes/Transportequipmentweights");
const TransportinstructionconsignmentitemtypesRoute = require("./routes/Transportinstructionconsignmentitemtypes");
const TransportinstructiontermstypesRoute = require("./routes/Transportinstructiontermstypes");
const TransportinstructiontransportequipmenttypesRoute = require("./routes/Transportinstructiontransportequipmenttypes");
const TransportinstructiontransportmovementtypesRoute = require("./routes/Transportinstructiontransportmovementtypes");
const TransportmeansidsRoute = require("./routes/Transportmeansids");
const TransportmeanstypesRoute = require("./routes/Transportmeanstypes");
const TransportmodecodesRoute = require("./routes/Transportmodecodes");
const TransportreferencesRoute = require("./routes/Transportreferences");
const TransportreferencetypesRoute = require("./routes/Transportreferencetypes");
const TransportreferencetypecodesRoute = require("./routes/Transportreferencetypecodes");
const TransportsealtypesRoute = require("./routes/Transportsealtypes");
const TransportservicecategorycodesRoute = require("./routes/Transportservicecategorycodes");
const TransportserviceconditiontypecodesRoute = require("./routes/Transportserviceconditiontypecodes");
const TransportservicelevelcodesRoute = require("./routes/Transportservicelevelcodes");
const UnitmeasurementtypesRoute = require("./routes/Unitmeasurementtypes");
const UnlocationcodesRoute = require("./routes/Unlocationcodes");
const WidthsRoute = require("./routes/Widths");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

//Your API ENDPOINTS
app.use("/api/user", authRoute);
app.use(
  "/api/additionalconsignmentidentificationtypes",
  AdditionalconsignmentidentificationtypesRoute
);
app.use(
  "/api/additionalindividualassetidentifications",
  AdditionalindividualassetidentificationsRoute
);
app.use(
  "/api/additionallocationidentifications",
  AdditionallocationidentificationsRoute
);
app.use(
  "/api/additionallogisticunitidentificationtypes",
  AdditionallogisticunitidentificationtypesRoute
);
app.use(
  "/api/additionalpartyidentifications",
  AdditionalpartyidentificationsRoute
);
app.use(
  "/api/additionalpartyidentificationtypes",
  AdditionalpartyidentificationtypesRoute
);
app.use(
  "/api/additionalreturnableassetidentifications",
  AdditionalreturnableassetidentificationsRoute
);
app.use(
  "/api/additionalshipmentidentificationtypes",
  AdditionalshipmentidentificationtypesRoute
);
app.use("/api/addresss", AddresssRoute);
app.use(
  "/api/afterhourscommunicationchannels",
  AfterhourscommunicationchannelsRoute
);
app.use("/api/alternatedeliverytermscodes", AlternatedeliverytermscodesRoute);
app.use("/api/amounttypes", AmounttypesRoute);
app.use("/api/associatedinvoiceamounts", AssociatedinvoiceamountsRoute);
app.use("/api/businessservices", BusinessservicesRoute);
app.use("/api/cargotypecodes", CargotypecodesRoute);
app.use("/api/cargotypedescriptions", CargotypedescriptionsRoute);
app.use("/api/carriers", CarriersRoute);
app.use("/api/codetypes", CodetypesRoute);
app.use("/api/communicationchannels", CommunicationchannelsRoute);
app.use("/api/communicationchannelcodes", CommunicationchannelcodesRoute);
app.use("/api/communicationchanneltypes", CommunicationchanneltypesRoute);
app.use(
  "/api/consignmentidentificationtypes",
  ConsignmentidentificationtypesRoute
);
app.use("/api/contactinformations", ContactinformationsRoute);
app.use("/api/contacttypes", ContacttypesRoute);
app.use("/api/contacttypecodes", ContacttypecodesRoute);
app.use("/api/contentowners", ContentownersRoute);
app.use("/api/correlationinformations", CorrelationinformationsRoute);
app.use("/api/countrycodes", CountrycodesRoute);
app.use("/api/countryoforigincodes", CountryoforigincodesRoute);
app.use("/api/currencyofpartycodes", CurrencyofpartycodesRoute);
app.use("/api/currentholderregistrations", CurrentholderregistrationsRoute);
app.use("/api/dangerousgoodsattributetypes", DangerousgoodsattributetypesRoute);
app.use(
  "/api/dangerousgoodsinformationtypes",
  DangerousgoodsinformationtypesRoute
);
app.use(
  "/api/dangerousgoodsregulationinformationtypes",
  DangerousgoodsregulationinformationtypesRoute
);
app.use("/api/dateoptionaltimetypes", DateoptionaltimetypesRoute);
app.use("/api/datetimerangetypes", DatetimerangetypesRoute);
app.use("/api/declaredvalueforcustomss", DeclaredvalueforcustomssRoute);
app.use("/api/declaredweightforcustomss", DeclaredweightforcustomssRoute);
app.use("/api/deliveryinstructionss", DeliveryinstructionssRoute);
app.use("/api/deliverytermslocations", DeliverytermslocationsRoute);
app.use("/api/deliverytermstypes", DeliverytermstypesRoute);
app.use("/api/depths", DepthsRoute);
app.use("/api/descriptions", DescriptionsRoute);
app.use("/api/description1000types", Description1000typesRoute);
app.use("/api/description200types", Description200typesRoute);
app.use("/api/description500types", Description500typesRoute);
app.use("/api/description70types", Description70typesRoute);
app.use("/api/description80types", Description80typesRoute);
app.use("/api/dimensiontypes", DimensiontypesRoute);
app.use("/api/documenteffectivedates", DocumenteffectivedatesRoute);
app.use("/api/documentidentifications", DocumentidentificationsRoute);
app.use("/api/documentreferencetypes", DocumentreferencetypesRoute);
app.use("/api/dropoffpartys", DropoffpartysRoute);
app.use("/api/dutyfeetaxdescriptions", DutyfeetaxdescriptionsRoute);
app.use("/api/dutyfeetaxregistrations", DutyfeetaxregistrationsRoute);
app.use("/api/dutyfeetaxregistrationids", DutyfeetaxregistrationidsRoute);
app.use("/api/dutyfeetaxregistrationtypes", DutyfeetaxregistrationtypesRoute);
app.use("/api/dutyfeetaxtypecodes", DutyfeetaxtypecodesRoute);
app.use(
  "/api/ecom_attributevaluepairlisttypes",
  Ecom_attributevaluepairlisttypesRoute
);
app.use(
  "/api/ecomstringattributevaluepairlists",
  EcomstringattributevaluepairlistsRoute
);
app.use("/api/entityidentificationtypes", EntityidentificationtypesRoute);
app.use("/api/enumerationlibrarys", EnumerationlibrarysRoute);
app.use("/api/finaldestinationcountrys", FinaldestinationcountrysRoute);
app.use("/api/financialaccounts", FinancialaccountsRoute);
app.use(
  "/api/financialaccountnumbertypecodes",
  FinancialaccountnumbertypecodesRoute
);
app.use("/api/financialaccounttypes", FinancialaccounttypesRoute);
app.use(
  "/api/financialinstitutioninformationtypes",
  FinancialinstitutioninformationtypesRoute
);
app.use("/api/financialroutingnumbers", FinancialroutingnumbersRoute);
app.use("/api/financialroutingnumbertypes", FinancialroutingnumbertypesRoute);
app.use(
  "/api/financialroutingnumbertypecodes",
  FinancialroutingnumbertypecodesRoute
);
app.use("/api/geographicalcoordinatess", GeographicalcoordinatessRoute);
app.use("/api/handlinginstructioncodes", HandlinginstructioncodesRoute);
app.use("/api/handlinginstructiontexts", HandlinginstructiontextsRoute);
app.use("/api/handlinginstructiontypes", HandlinginstructiontypesRoute);
app.use("/api/harmonizedsystemcodes", HarmonizedsystemcodesRoute);
app.use("/api/heights", HeightsRoute);
app.use("/api/identifiers", IdentifiersRoute);
app.use("/api/identifiertypes", IdentifiertypesRoute);
app.use("/api/identitydocuments", IdentitydocumentsRoute);
app.use("/api/identitydocumenttypes", IdentitydocumenttypesRoute);
app.use("/api/includedtransportequipments", IncludedtransportequipmentsRoute);
app.use("/api/includedtransportmeanss", IncludedtransportmeanssRoute);
app.use("/api/incotermscodes", IncotermscodesRoute);
app.use(
  "/api/individualassetidentifications",
  IndividualassetidentificationsRoute
);
app.use(
  "/api/individualreturnableassetidentifications",
  IndividualreturnableassetidentificationsRoute
);
app.use("/api/issuedcapitals", IssuedcapitalsRoute);
app.use("/api/languageofthepartycodes", LanguageofthepartycodesRoute);
app.use("/api/legalregistrations", LegalregistrationsRoute);
app.use("/api/legalregistrationtypes", LegalregistrationtypesRoute);
app.use("/api/legalstructures", LegalstructuresRoute);
app.use(
  "/api/locationspecificinstructionss",
  LocationspecificinstructionssRoute
);
app.use("/api/logisticeventdatetimes", LogisticeventdatetimesRoute);
app.use("/api/logisticeventdurations", LogisticeventdurationsRoute);
app.use("/api/logisticeventperiods", LogisticeventperiodsRoute);
app.use("/api/logisticeventtypes", LogisticeventtypesRoute);
app.use("/api/logisticeventtypecodes", LogisticeventtypecodesRoute);
app.use("/api/logisticlocations", LogisticlocationsRoute);
app.use("/api/logisticlocationtypes", LogisticlocationtypesRoute);
app.use("/api/logisticservicesbuyers", LogisticservicesbuyersRoute);
app.use("/api/logisticservicessellers", LogisticservicessellersRoute);
app.use("/api/logisticservicetypes", LogisticservicetypesRoute);
app.use(
  "/api/logisticunitidentificationtypes",
  LogisticunitidentificationtypesRoute
);
app.use("/api/logisticunittypes", LogisticunittypesRoute);
app.use("/api/manifests", ManifestsRoute);
app.use("/api/manifestitems", ManifestitemsRoute);
app.use("/api/maximumtemperatures", MaximumtemperaturesRoute);
app.use("/api/measurementtypes", MeasurementtypesRoute);
app.use("/api/minimumtemperatures", MinimumtemperaturesRoute);
app.use("/api/multidescription70types", Multidescription70typesRoute);
app.use("/api/nationalitys", NationalitysRoute);
app.use("/api/newholderregistrations", NewholderregistrationsRoute);
app.use("/api/officialaddresss", OfficialaddresssRoute);
app.use("/api/operatinghourstypes", OperatinghourstypesRoute);
app.use("/api/organisationdetailss", OrganisationdetailssRoute);
app.use("/api/organisationtypes", OrganisationtypesRoute);
app.use("/api/packagetotals", PackagetotalsRoute);
app.use("/api/packagetotaltypes", PackagetotaltypesRoute);
app.use("/api/packagetypecodes", PackagetypecodesRoute);
app.use("/api/packagingconditioncodes", PackagingconditioncodesRoute);
app.use("/api/packagingmarkingtypes", PackagingmarkingtypesRoute);
app.use("/api/partyidentificationtypes", PartyidentificationtypesRoute);
app.use("/api/passengercategorycodes", PassengercategorycodesRoute);
app.use("/api/passengerinformationtypes", PassengerinformationtypesRoute);
app.use("/api/passengertariffgroups", PassengertariffgroupsRoute);
app.use("/api/persons", PersonsRoute);
app.use("/api/pickuppartys", PickuppartysRoute);
app.use("/api/printinginstructioncodes", PrintinginstructioncodesRoute);
app.use("/api/quantitytypes", QuantitytypesRoute);
app.use("/api/regularoperatinghourss", RegularoperatinghourssRoute);
app.use("/api/responsibilitys", ResponsibilitysRoute);
app.use(
  "/api/returnableassetidentifications",
  ReturnableassetidentificationsRoute
);
app.use(
  "/api/returnableassettypeidentifications",
  ReturnableassettypeidentificationsRoute
);
app.use("/api/returnablepackagings", ReturnablepackagingsRoute);
app.use("/api/returnablepackagingtypes", ReturnablepackagingtypesRoute);
app.use("/api/routeids", RouteidsRoute);
app.use("/api/scopes", ScopesRoute);
app.use("/api/servicetransactions", ServicetransactionsRoute);
app.use("/api/shipmentidentificationtypes", ShipmentidentificationtypesRoute);
app.use("/api/specialdatenames", SpecialdatenamesRoute);
app.use("/api/specialoperatinghourss", SpecialoperatinghourssRoute);
app.use("/api/specialoperatinghourstypes", SpecialoperatinghourstypesRoute);
app.use(
  "/api/standardbusinessdocumentheaders",
  StandardbusinessdocumentheadersRoute
);
app.use("/api/temperaturerangetypes", TemperaturerangetypesRoute);
app.use("/api/timemeasurementtypes", TimemeasurementtypesRoute);
app.use("/api/totalchargeableweights", TotalchargeableweightsRoute);
app.use("/api/totalgrossvolumes", TotalgrossvolumesRoute);
app.use("/api/totalgrossweights", TotalgrossweightsRoute);
app.use("/api/totalitemquantitys", TotalitemquantitysRoute);
app.use("/api/totalloadinglengths", TotalloadinglengthsRoute);
app.use("/api/totalpackagequantitys", TotalpackagequantitysRoute);
app.use("/api/totaltransportnetweights", TotaltransportnetweightsRoute);
app.use("/api/transactionalpartytypes", TransactionalpartytypesRoute);
app.use("/api/transportcapacitybookings", TransportcapacitybookingsRoute);
app.use(
  "/api/transportcapacitybookingidentifications",
  TransportcapacitybookingidentificationsRoute
);
app.use(
  "/api/transportcapacitybookingresponses",
  TransportcapacitybookingresponsesRoute
);
app.use(
  "/api/transportcapacitybookingresponseidentifications",
  TransportcapacitybookingresponseidentificationsRoute
);
app.use(
  "/api/transportcapacitybookingspacerequirements",
  TransportcapacitybookingspacerequirementsRoute
);
app.use(
  "/api/transportcapacitybookingtransportmovementtypes",
  TransportcapacitybookingtransportmovementtypesRoute
);
app.use(
  "/api/transportcargocharacteristicstypes",
  TransportcargocharacteristicstypesRoute
);
app.use("/api/transportequipmenttypes", TransportequipmenttypesRoute);
app.use("/api/transportequipmenttypecodes", TransportequipmenttypecodesRoute);
app.use("/api/transportequipmentweights", TransportequipmentweightsRoute);
app.use(
  "/api/transportinstructionconsignmentitemtypes",
  TransportinstructionconsignmentitemtypesRoute
);
app.use(
  "/api/transportinstructiontermstypes",
  TransportinstructiontermstypesRoute
);
app.use(
  "/api/transportinstructiontransportequipmenttypes",
  TransportinstructiontransportequipmenttypesRoute
);
app.use(
  "/api/transportinstructiontransportmovementtypes",
  TransportinstructiontransportmovementtypesRoute
);
app.use("/api/transportmeansids", TransportmeansidsRoute);
app.use("/api/transportmeanstypes", TransportmeanstypesRoute);
app.use("/api/transportmodecodes", TransportmodecodesRoute);
app.use("/api/transportreferences", TransportreferencesRoute);
app.use("/api/transportreferencetypes", TransportreferencetypesRoute);
app.use("/api/transportreferencetypecodes", TransportreferencetypecodesRoute);
app.use("/api/transportsealtypes", TransportsealtypesRoute);
app.use(
  "/api/transportservicecategorycodes",
  TransportservicecategorycodesRoute
);
app.use(
  "/api/transportserviceconditiontypecodes",
  TransportserviceconditiontypecodesRoute
);
app.use("/api/transportservicelevelcodes", TransportservicelevelcodesRoute);
app.use("/api/unitmeasurementtypes", UnitmeasurementtypesRoute);
app.use("/api/unlocationcodes", UnlocationcodesRoute);
app.use("/api/widths", WidthsRoute);

//YOUR DATABASE WITH A SAMPLE RECORD
mongoose
  .connect(config.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    mongoose.set("useFindAndModify", false);
    console.log("Connected to your MongoDB.");
  })
  .catch((err) => {
    console.log("Failed to connected to DB Error: " + err.message);
  });

let createServiceObj = null;
createServiceObj = createService.getInstance();
createServiceObj.createSampleUser();
app.listen(5000, () => console.log("listening on port 5000"));
