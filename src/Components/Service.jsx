import React, { Component } from "react";
import { BsBagPlusFill } from "react-icons/bs";
import { RiTerminalBoxLine } from "react-icons/ri";
import { ImStatsBars2 } from "react-icons/im";
import { TbBorderOuter } from "react-icons/tb";
import { FaCameraRetro } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
// import Services_img from "../Imperial Bootstrap Template Demo_files/pexels-pixabay-267507.jpg";
export default class Services extends Component {
  render() {
    return (
      <section className="vh-50 service_img mt-5" id="services">
        <div className="text-center">
          {/* <div className="vh-50 bg-fixed">
            <img src={Services_img} alt="" className="service_img" />
          </div> */}
          <div className="align-items-center ">
            <h2>
              <b>OUR SERVICES</b>
            </h2>
            <div className="border-b my-4"></div>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium
            </p>
          </div>
          <div>
            <div className="row m-5  d-lg-flex d-md-flex d-sm-block d-xs-block">
              <div className="col d-flex ">
                <div className="">
                  <BsBagPlusFill className="services-icon"></BsBagPlusFill>
                </div>

                <div className="text-start">
                  <h4>LOREM IPSUM</h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>

              <div className="col d-flex">
                <div className="div">
                  <RiTerminalBoxLine className="services-icon" />
                </div>
                <div className="text-start">
                  <h4>DOLOR SITEMA</h4>
                  <p>
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>

              <div className="col d-flex">
                <div className="div">
                  <ImStatsBars2 className="services-icon" />
                </div>
                <div className="text-start">
                  <h4>SED UT PERSPICIATIS</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>

            <div className="row mx-5 d-lg-flex d-md-flex d-sm-block d-d-lg-flex d-md-flex d-xs-block">
              <div className="col d-flex ">
                <div className="div">
                  <FaCameraRetro className="services-icon" />
                </div>

                <div className="text-start">
                  <h4>MAGNI DOLORES</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>

              <div className="col d-flex">
                <div className="div">
                  <BsFillSunFill className="services-icon" />
                </div>
                <div className="text-start">
                  <h4>NEMO ENIM</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>

              <div className="col d-flex">
                <div className="div">
                  <TbBorderOuter className="services-icon" />
                </div>

                <div className="text-start">
                  <h4>EIUSMOD TEMPOR</h4>
                  <p>
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
