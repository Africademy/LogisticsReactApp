import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/Logo.png";

const Navbar = ({ user }) => {
  return (
    <nav
      style={{ marginBottom: 10 }}
      className="navbar navbar-expand-lg navbar-light bg-light  custom-navbar"
    >
      <Link className="navbar-brand custom-navbar-brand" to="/home">
        <img
          className="logo mr-2 img-responsive rounded"
          src={logo}
          width="50"
          height="30"
          alt="Logo"
        />
        CargoFlo
      </Link>

      <button
        className="navbar-toggler  custom-navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {user && (
            <li className="nav-item active">
              {/* <NavLink className="nav-link custom-nav-link" to="/sampleComponent">
              sampleComponent
            </NavLink> */}
            </li>
          )}
        </ul>
        {!user && (
          <React.Fragment>
            <span className="nav-item">
              <NavLink className="nav-link custom-nav-link" to="/login">
                Login
              </NavLink>
            </span>
            <span className="nav-item">
              <NavLink className="nav-link custom-nav-link" to="/register">
                Register
              </NavLink>
            </span>
          </React.Fragment>
        )}

        {user && (
          <div className="dropdown-container">
            <a
              href="#"
              className="nav-link custom-nav-link dropdown-toggle text-white"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Actions
            </a>
            <div
              className="dropdown-menu  nav-dropdown"
              aria-labelledby="navbarDropdown"
            >
              <span className="nav-item dropdown-item">
                <NavLink
                  className="nav-link custom-nav-link text-capitalize"
                  style={{ padding: "initial" }}
                  to="/profile"
                >
                  {user.name}
                </NavLink>
              </span>
              <span className="nav-item dropdown-item">
                <NavLink
                  className="nav-link custom-nav-link"
                  style={{ padding: "initial" }}
                  to={`/updatePassword/${user._id}`}
                >
                  Change Password
                </NavLink>
              </span>
              <div className="dropdown-divider"></div>
              <span className="nav-item dropdown-item">
                <NavLink
                  className="nav-link custom-nav-link"
                  style={{ padding: "initial" }}
                  to="/logout"
                >
                  Logout
                </NavLink>
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
