import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/about1.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>I</b> Am
              </h1>
              <hr className="w-50" />
              <p className="lead  mb-4">
                My name is Devendra I'm a Full Stack Developer☀️. I describe
                myself as a passionate developer who loves coding, open source,
                and the web platform ❤️. I like to create and contribute to open
                source projects. That helps me to learn a ton of new stuff, grow
                as a developer and support other open source projects
              </p>
              <div className="buttons d-flex justify-content-center">
                <Link
                  to="/login"
                  className="btn btn-primary me-4 rounded-pill px-4 py-2"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-primary rounded-pill px-4 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
