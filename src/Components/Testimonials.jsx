import React, { Component } from "react";
import Client_1 from "../Imperial Bootstrap Template Demo_files/client-1.jpg";
import Client_2 from "../Imperial Bootstrap Template Demo_files/client-2.jpg";
import quato_1 from "../Imperial Bootstrap Template Demo_files/quote_sign_left.png";
import quato_2 from "../Imperial Bootstrap Template Demo_files/quote_sign_right.png";
// import Client_3 from "../Imperial Bootstrap Template Demo_files/client-2.jpg";
export default class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials" className="testimonials-bg py-5">
        <div className="text-center">
          <h2>
            <b>TESTIMONIALS</b>
          </h2>
          <div className="border-b my-4"></div>
          <p className="my-4">
            Erdo lide, nora porodo filece, salvam esse se, quod concedimus ses
            haec dicturum fuisse
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="profile text-center">
                <div>
                  <img src={Client_1} alt="" className="pic" />
                </div>
                <h4>
                  <span className="client">
                    <b>Saul Goodman</b>
                  </span>
                </h4>
                <span>Lawless Inc</span>
              </div>
            </div>
            <div className="col-md-9 mt-5">
              <div className="quote">
                <b>
                  <img src={quato_1} alt="" />
                </b>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <small>
                  <img src={quato_2} alt="" />
                </small>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-9 mt-4 ">
              <div className="quote">
                <b>
                  <img src={quato_1} alt="" />
                </b>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis architecto beatae.
                <small>
                  <img src={quato_2} alt="" />
                </small>
              </div>
            </div>
            <div className="col-md-3">
              <div className="pofile text-center">
                <div>
                  <img src={Client_2} alt="" className="pic" />
                </div>
                <h4>
                  <span className="client">
                    <b>Sara Wilsson</b>
                  </span>
                </h4>
                <span>Odeo Inc</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
