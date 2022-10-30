import React, { Component } from "react";
import logo_1 from "../Imperial Bootstrap Template Demo_files/logo(1).png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default class Navbar2 extends Component {
  render() {
    return (
      <>
        <Navbar
          className="Nav1-bg navbar-expand-sm text-white py-3"
          expand="lg"
        >
          <Container>
            <Navbar.Brand>
              <img src={logo_1} alt="" className="logo_1 " />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end">
                <Nav.Link className="text-white " href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="#about">
                  About
                </Nav.Link>
                <Nav.Link className="text-white" href="#services">
                  Service
                </Nav.Link>
                <Nav.Link className="text-white" href="#portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link className="text-white" href="#testimonials">
                  Testimonial
                </Nav.Link>
                <Nav.Link className="text-white" href="#team">
                  Team
                </Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="basic-nav-dropdown"
                  className="text-white color-white"
                >
                  <NavDropdown.Item href="#action/3.1">
                    DropDown
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    DropDown
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    DropDown
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    DropDown
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="text-white" href="#contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      // <nav className="Nav1-bg navbar-expand-sm text-white py-3">
      //   <div className="container">
      //     <div className=" align-items-center d-flex">
      //       <div>
      //         <img src={logo_1} alt="" className="logo_1 " />
      //       </div>
      //       <div className="justify-content-end !important ">
      //         <ul className="navbar-nav">
      //           <a href="#home">
      //             <li className="nav-item home-color">Home</li>
      //           </a>
      //           <a href="#about">
      //             <li className="nav-item">About</li>
      //           </a>
      //           <a href="#services">
      //             <li className="nav-item">Service </li>
      //           </a>

      //           <a href="#portfolio">
      //             <li className="nav-item">Portfolio</li>
      //           </a>

      //           <a href="#testimonials">
      //             <li className="nav-item">Testimonials</li>
      //           </a>

      //           <a href="#team">
      //             <li className="nav-item">Team</li>
      //           </a>

      //           <li className="nav-item">
      //             <select
      //               name=""
      //               id=""
      //               className="bg-black text-white border-0"
      //             >
      //               <option value=""> Drop Down</option>
      //               <option value=""> Dropdown1</option>
      //               <option value=""> Dropdown2</option>
      //               <option value=""> Dropdown3</option>
      //             </select>
      //           </li>
      //           <a href="#contact">
      //             <li className="nav-item">Contact</li>
      //           </a>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}
