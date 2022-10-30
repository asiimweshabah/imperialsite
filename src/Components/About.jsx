import React, { Component } from "react";
import About_img from "../Imperial Bootstrap Template Demo_files/about-img.jpg";
export default class About extends Component {
  render() {
    return (
      <section id="about" className="my-5">
        <div className="text-center">
          <h2>
            <b>ABOUT US</b>
          </h2>
          <div className="border-b my-4"></div>
          <p className="my-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="d-lg-flex d-md-flex d-sm-block d-xs-block">
              <div className="col-lg-6">
                <img src={About_img} alt="" className="img" />
              </div>
              <div className="col-md-6">
                <h3>We provide great services and ideas</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt molli.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
