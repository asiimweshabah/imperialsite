import React, { Component } from "react";
import Team_1 from "../Imperial Bootstrap Template Demo_files/team-1.jpg";
import Team_2 from "../Imperial Bootstrap Template Demo_files/team-2.jpg";
import Team_3 from "../Imperial Bootstrap Template Demo_files/team-3.jpg";
import Team_4 from "../Imperial Bootstrap Template Demo_files/team-4.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default class Team extends Component {
  render() {
    return (
      <section id="about" className="my-5">
        <div className="text-center">
          <h2>
            <b>OUR TEAM</b>
          </h2>
          <div className="border-b my-4"></div>
          <p className="my-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="member text-center">
                <div>
                  <img src={Team_1} alt="" className="team-pics" />
                </div>
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div className="social mt-3">
                  <FaTwitter className="team-icons " />
                  <FaFacebook className="mx-2 team-icons " />
                  <FaInstagram className="team-icons " />
                  <FaLinkedin className="mx-2 team-icons " />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="member text-center">
                <div>
                  <img src={Team_2} alt="" className="team-pics" />
                </div>
                <h4>Sarah Jhinson</h4>
                <span>Product Manager</span>
                <div className="social mt-3">
                  <FaTwitter className="team-icons " />
                  <FaFacebook className="mx-2 team-icons " />
                  <FaInstagram className="team-icons " />
                  <FaLinkedin className="mx-2 team-icons " />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="member text-center">
                <div>
                  <img src={Team_3} alt="" className="team-pics" />
                </div>
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div className="social mt-3">
                  <FaTwitter className="team-icons " />
                  <FaFacebook className="mx-2 team-icons " />
                  <FaInstagram className="team-icons " />
                  <FaLinkedin className="mx-2 team-icons " />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="member text-center">
                <div>
                  <img src={Team_4} alt="" className="team-pics" />
                </div>
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <div className="social mt-3">
                  <FaTwitter className="team-icons " />
                  <FaFacebook className="mx-2 team-icons " />
                  <FaInstagram className="team-icons " />
                  <FaLinkedin className="mx-2 team-icons " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
