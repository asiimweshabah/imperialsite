import React, { Component } from "react";
import log from "../Imperial Bootstrap Template Demo_files/logo(1).png";

import Typed from "react-typed";
export default class Home extends Component {
  render() {
    return (
      <section id="home" className="home vh-100">
        <div className="aligns-items-center justify-content-center text-center vertical">
          <div className="fade-in log">
            <div className="hero-Logo ">
              <img src={log} alt="" className="justify-content-center" />

              <div className="text-white text-center justify-content-center my-4">
                <h1 className="my-4">Welcome to Imperial studios</h1>

                <h3>
                  <Typed
                    strings={[
                      "We create functional websites",

                      "We create beautiful graphics",

                      "We create working mobile",
                    ]}
                    typeSpeed={80}
                    loop
                  />
                </h3>
              </div>
            </div>
            <div className="justify-content-center mt-5">
              <a href="home">
                <button className="btn-1 py-2 px-4">GET STARTED</button>
              </a>
              <a href="services">
                <button className="btn-2 mx-4 py-2 px-4">OUR SERVICES</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
