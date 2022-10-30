import React, { Component } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { FiSmartphone } from "react-icons/fi";
export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-bg">
        <div className="my-5 py-4">
          <div className="text-center">
            <h2>
              <b>CONTACT US</b>
            </h2>
            <div className="border-b my-4"></div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>
          <div className="container">
            <div className="row align-items-center d-flex">
              <div className="d-lg-flex d-md-flex d-sm-block d-xs-block">
                <div className="col-lg-6 justify-content-center">
                  <div className="d-flex pb-4 mx-5">
                    <CiLocationOn className="contact-icon mx-2" />
                    <p> A108 Adam Street New York, NY 535022</p>
                  </div>
                  <div className="d-flex py-4 mx-5">
                    <GoMail className="contact-icon mx-2" />
                    <p>info@example.com</p>
                  </div>
                  <div className="d-flex py-4 mx-5">
                    <FiSmartphone className="contact-icon mx-2" />
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
                <div className="col-md-6 my-4 justify-content-center">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-100 my-2 p-2"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-100 my-2 p-2"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-100 my-2 p-2"
                  />
                  <br />
                  <textarea
                    name="Message"
                    id=""
                    placeholder="Message"
                    cols="30"
                    rows="5"
                    className="w-100 my-2 p-2"
                  ></textarea>
                  <div className="text-center my-4">
                    <button className="contact-btn py-2 px-4 text-center">
                      SEND MESSAGE
                    </button>
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
