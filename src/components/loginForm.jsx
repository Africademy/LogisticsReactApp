import React, { Component } from "react";
import Joi from "joi-browser";
import auth from "../services/authService";
import { Redirect, Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormText,
} from "@coreui/react";
class LoginForm extends Component {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  scheema = {
    email: Joi.string().required().email().min(5).max(255).label("email"),
    password: Joi.string().min(6).max(255).required().label("password"),
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.scheema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = (inputField) => {
    const { name, value } = inputField;
    const obj = { [name]: value };
    const scheema = { [name]: this.scheema[name] };
    const result = Joi.validate(obj, scheema);
    return result.error ? result.error.details[0].message : null;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors ? errors : {} });
    if (errors) return;
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  handleChange = (event) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(event.currentTarget);
    if (errorMessage) errors[event.currentTarget.name] = errorMessage;
    else delete errors[event.currentTarget.name];

    const data = { ...this.state.data };
    data[event.currentTarget.name] = event.currentTarget.value;

    this.setState({ data: data, errors: errors });
  };

  render() {
    if (auth.isUserLoggedIn()) return <Redirect to="/" />;

    return (
      <div>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="mb-3">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <i className="cil-user"></i>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          placeholder="Username/Email"
                          value={this.state.data["email"]}
                          onChange={this.handleChange}
                          name="email"
                          id="email"
                          type="text"
                          className="form-control"
                        />
                      </CInputGroup>
                      {this.state.errors["email"] && (
                        <CFormText className="help-block error">
                          {this.state.errors["email"]}
                        </CFormText>
                      )}
                    </div>

                    <div className="mb-4">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <i className="cil-lock-locked"></i>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          name="password"
                          id="password"
                          className="form-control"
                          value={this.state.data["password"]}
                          onChange={this.handleChange}
                        />
                      </CInputGroup>
                      {this.state.errors["password"] && (
                        <CFormText className="help-block error">
                          {this.state.errors["password"]}
                        </CFormText>
                      )}
                    </div>

                    <CRow>
                      <CCol xs="3">
                        <CButton color="success" type="submit" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="9" className="text-right pt-2">
                        {/* <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton> */}
                        <span className="px-0">
                          Don't have account?&nbsp;&nbsp;
                          <Link to="/register">Register Now!</Link>
                        </span>
                      </CCol>
                      {/* <CCol xs="12" className="text-center mt-3">
                        Don't have account?&nbsp;&nbsp;
                        <Link to="/register">Register Now!</Link>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
        {/* <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={this.state.data["email"]}
              onChange={this.handleChange}
              name="email"
              id="email"
              type="text"
              className="form-control"
            />
            {this.state.errors["email"] && (
              <div className="alert alert-danger">
                {this.state.errors["email"]}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.data["password"]}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
            {this.state.errors["password"] && (
              <div className="alert alert-danger">
                {this.state.errors["password"]}
              </div>
            )}
          </div>

          <button
            disabled={this.validate()}
            className="btn btn-primary custom-btn"
          >
            Login
          </button>
        </form> */}
      </div>
    );
  }
}

export default LoginForm;
