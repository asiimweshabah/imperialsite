import React, { Component } from "react";
import { BsLaptop } from "react-icons/bs";

import { FiSmartphone } from "react-icons/fi";
import Logo from "../Imperial Bootstrap Template Demo_files/logo.png";
export default class Navbar1 extends Component {
  render() {
    return (
      <nav className="Nav-bg fixed-top  navbar-expand-sm d-flex navbar-light">
        <div className="container-fluid d-flex py-2 mx-5">
          <div className="d-flex">
            <div className="col-3">
              <img src={Logo} alt="" className="logo" />
            </div>
            <div className="justify-content-center d-flex align-items-center">
              <BsLaptop className="text-white icon" />
              <FiSmartphone className="text-white icon" />
              <FiSmartphone className="text-white icon" />
            </div>
          </div>
          <div className="col-0 d-flex text-white text-center justify-content-center align-items-center">
            Imperial
          </div>
        </div>
      </nav>
    );
  }
}
