import React, { Component } from "react";

export default class Updates extends Component {
  render() {
    return (
      <section className="my-5 mx-4 text-center" id="updates">
        <div className="container text-center">
          <div className="row justify-content-centet d-md-block d-sm-block d-lg-flex">
            <div className="col-md-8 text-start ">
              <h4>Subscribe For Updates</h4>
              <p>
                Join our 1000+ subscribers and get access to the latest tools,
                freebies, product announcements and much more!
              </p>
            </div>
            <div className="col-md-4">
              <button className="btn-2 mx-4 py-2 px-4">SUBSCRIBE NOW</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
