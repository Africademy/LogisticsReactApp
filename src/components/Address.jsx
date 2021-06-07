import React, { Component } from 'react'
import { getCountrycodes} from "../../src/services/countrycodeService"
import Select from 'react-select';
import Joi from "joi-browser";
import { saveAddress, getAddress } from "../services/addressService";

export class Address extends Component {
    constructor(props) {
        super(props);
        this.populateCountryCode = this.populateCountryCode.bind(this);
    } state = {
        data: { id: "", city: "", cityCode: "", countyCode: "", crossStreet: "", name: "", pOBoxNumber: "", postalCode: "", provinceCode: "", state: "", streetAddressOne: "", streetAddressTwo: "", streetAddressThree: "", },
        errors: {}
    };

    scheema = {
        _id: Joi.string(),

        id: Joi.number()
            .required()
            .label("id"),

        city: Joi.string()
            .allow('').allow(null)
            .label("city"),

        cityCode: Joi.string()
            .allow('').allow(null)
            .label("cityCode"),

        countyCode: Joi.string()
            .allow('').allow(null)
            .label("countyCode").min(1).max(80),

        crossStreet: Joi.string()
            .allow('').allow(null)
            .label("crossStreet").min(1).max(200),

        name: Joi.string()
            .allow('').allow(null)
            .label("name").min(1).max(200),

        pOBoxNumber: Joi.string()
            .allow('').allow(null)
            .label("pOBoxNumber").min(1).max(80),

        postalCode: Joi.string()
            .allow('').allow(null)
            .label("postalCode").min(1).max(80),

        provinceCode: Joi.string()
            .allow('').allow(null)
            .label("provinceCode").min(1).max(80),

        state: Joi.string()
            .allow('').allow(null)
            .label("state").min(1).max(80),
              

        streetAddressOne: Joi.string()
            .allow('').allow(null)
            .label("streetAddressOne").min(1).max(200),

        streetAddressTwo: Joi.string()
            .allow('').allow(null)
            .label("streetAddressTwo").min(1).max(200),

        streetAddressThree: Joi.string()
            .allow('').allow(null)
            .label("streetAddressThree").min(1).max(200),

        createdAt: Joi.date()
            .label("createAt")
    };

    async populateForm() {
        try {
            const addressId = this.props.match.params.id;
            if (addressId !== "new") {
                const { data } = await getAddress(addressId);
                this.setState({ data });
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404) {
                this.props.history.replace("/not-found");
            }
        }
    }

    async componentDidMount() {
        await this.populateForm();
        await this.populateCountryCode();
    }

    async populateCountryCode() {
        const { data: countryCode } = await getCountrycodes();
        this.setState({ countryCode: countryCode });
    }

    validate = () => {
        const result = Joi.validate(this.state.data, this.scheema, {
            abortEarly: false
        });
        if (!result.error) return null;
        const errors = {};
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    validateProperty = inputField => {
        const { name, value } = inputField;
        const obj = { [name]: value };
        const scheema = { [name]: this.scheema[name] };
        const result = Joi.validate(obj, scheema);
        return result.error ? result.error.details[0].message : null;
    };

    handleChange = event => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(event.currentTarget);
        if (errorMessage) errors[event.currentTarget.name] = errorMessage;
        else delete errors[event.currentTarget.name];

        const data = { ...this.state.data };
        data[event.currentTarget.name] = event.currentTarget.value;

        this.setState({ data: data, errors: errors });
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors ? errors : {} });
        if (errors) return;
        await saveAddress(this.state.data);
        this.props.history.push("/addresss");
    };

    render() {
        return (
            <div className="my-3">
                <div class="form-group">
                    <label for="city">City:</label>
                    <input type="string" class="form-control" id="city" />
                </div>
                <div class="form-group">
                    <label for="countrycode">Country:</label>
                    <Select class="form-control dropdown-toggle" id="countrycode" data-toggle="dropdown"/>
                </div>
                <div class="form-group">
                    <label for="county">County:</label>
                    <input type="string" class="form-control" id="county" />
                </div>
                <div class="form-group">
                    <label for="crossStreet">Cross Street:</label>
                    <input type="string" class="form-control" id="crossStreet" />
                </div>
                <div class="form-group">
                    <label for="currencyOfPartyCode">Currency Of Party:</label>
                    <Select class="form-control dropdown-toggle" id="currencyOfPartyCode" data-toggle="dropdown"></Select>
                </div>
                <div class="form-group">
                    <label for="languageOfThePartyCode">Language Of the Party:</label>
                    <Select class="form-control dropdown-toggle" id="languageOfThePartyCode" data-toggle="dropdown"></Select>
                </div>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="string" class="form-control" id="name" />
                </div>
                <div class="form-group">
                    <label for="pOBoxNumber">Post Box Number:</label>
                    <input type="string" class="form-control" id="pOBoxNumber" />
                </div>
                <div class="form-group">
                    <label for="postalCode">Postal Code:</label>
                    <input type="string" class="form-control" id="postalCode" />
                </div>
                <div class="form-group">
                    <label for="provinceCode"> Province:</label>
                    <input type="string" class="form-control" id="provinceCode" />
                </div>
                <div class="form-group">
                    <label for="state"> State:</label>
                    <input type="string" class="form-control" id="state" />
                </div>
                <div class="form-group">
                    <label for="streetAddressOne"> Street Address One:</label>
                    <input type="string" class="form-control" id="streetAddressOne" />
                </div>
                <div class="form-group">
                    <label for="streetAddressTwo"> Street Address Two:</label>
                    <input type="string" class="form-control" id="streetAddressTwo" />
                </div>
                <div class="form-group">
                    <label for="streetAddressThree"> Street Address Three:</label>
                    <input type="string" class="form-control" id="streetAddressThree" />
                </div>
                <div class="card my-3" id="card-109">
                    <div class="card-header">
                        <a class="collapsed card-link" data-toggle="collapse" data-parent="#card-109" href="#card-element-109">Geographical Coordinates:</a>
                    </div>
                    <div id="card-element-109" class="collapse">
                        <div class="card-body">
                            <form role="form" class="form-inline">
                                <div class="form-group">
                                    <label for="latitude"> Latitude:</label>
                                    <input type="string" class="form-control" id="latitude" />
                                </div>
                                <div class="form-group">
                                    <label for="longitude"> Longitude:</label>
                                    <input type="string" class="form-control" id="longitude" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Address
