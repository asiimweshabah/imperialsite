import React, { Component } from "react";
import Image_1 from "../Imperial Bootstrap Template Demo_files/portfolio-1.jpg";
import Image_2 from "../Imperial Bootstrap Template Demo_files/portfolio-2.jpg";
import Image_3 from "../Imperial Bootstrap Template Demo_files/portfolio-3.jpg";
import Image_4 from "../Imperial Bootstrap Template Demo_files/portfolio-4.jpg";
import Image_5 from "../Imperial Bootstrap Template Demo_files/portfolio-5.jpg";
import Image_6 from "../Imperial Bootstrap Template Demo_files/portfolio-6.jpg";
import Image_7 from "../Imperial Bootstrap Template Demo_files/portfolio-7.jpg";
import Image_8 from "../Imperial Bootstrap Template Demo_files/portfolio-8.jpg";
import Image_9 from "../Imperial Bootstrap Template Demo_files/portfolio-9.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { CiLink } from "react-icons/ci";
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="my-5 py-4 mx-3">
          <div className="text-center">
            <h2 className="">
              <b>PORTFOLIO</b>
            </h2>
            <div className="border-b my-4"></div>
            <p className="my-4">
              Si stante, hoc natura videlicet vult, salvam esse se, quod
              concedimus ses haec dicturum fuisse
            </p>
          </div>
          <div className="container">
            <div className="my-5 justify-content-center">
              <nav aria-label="Page navigation">
                <ul className="justify-content-center pagination">
                  <li data-filter="filter-web" className="filter-active">
                    ALL
                  </li>
                  <li data-filter="filter-web" className="filter-active">
                    APP
                  </li>
                  <li data-filter="filter-web" className="filter-active">
                    CARD
                  </li>
                  <li data-filter="filter-web" className="filter-active">
                    WEB
                  </li>
                </ul>
              </nav>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src={Image_1} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>App 1</h6>
                    <p>App</p>
                  </div>
                  <div className="m-3 ">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Image_2} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>Web 1</h6>
                    <p>Web</p>
                  </div>
                  <div className="m-3">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Image_3} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>Card 1</h6>
                    <p>Card</p>
                  </div>
                  <div className="m-3">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src={Image_4} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>App 2</h6>
                    <p>App</p>
                  </div>
                  <div className="m-3">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Image_5} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>Web 2</h6>
                    <p>Web</p>
                  </div>
                  <div className="m-3">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Image_6} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>Card 2</h6>
                    <p>Card</p>
                  </div>
                  <div className="m-3">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <img src={Image_7} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>App 3</h6>
                    <p>App</p>
                  </div>
                  <div className="m-3">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Image_8} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>Web 3</h6>
                    <p>Web</p>
                  </div>
                  <div className="m-3">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <img src={Image_9} alt="" className="w-100" />
                <div className="port justify-content-between d-flex">
                  <div className="portofilio-inf mx-3">
                    <h6>Card 3</h6>
                    <p>Card</p>
                  </div>
                  <div className="m-3">
                    <AiOutlinePlus className="port-icon" />
                    <CiLink className="port-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
