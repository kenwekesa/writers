import React from "react";
import css from "./footer.css";
import footer from "../images/footer.png";
import Link from "next/link";

const Footer = () => (
  <div className="bg">
    <div className="page-footer">
      <div className="container-fluid">
        <div className="row ft">
          <div className="col-md-4 mb-md-0 mb-4" id="verticalLine">
            <ul className="list-unstyled">
              <p>
                <Link className="footlink" href="/signup">
                  Jobs for writers
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/signup">
                  Careers in writing
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/signup">
                  Research writing
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/signup">
                  Academic Writing
                </Link>
              </p>
            </ul>
          </div>

          <div className="col-md-4 mb-md-0 mb-4" id="verticalLine">
            <ul className="list-unstyled">
              <p>
                <Link className="footlink" href="/clientsignup">
                  Article writing
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/clientsignup">
                  Thesis writing
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/clientsignup">
                  Essay writing
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/clientsignup">
                  Programming
                </Link>
              </p>
            </ul>
          </div>

          <div className="col-md-4 mb-md-0 mb-4" id="verticle">
            <ul className="list-unstyled">
              <p>
                <Link className="footlink" href="/terms">
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/privacy">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/contactus">
                  Contacts
                </Link>
              </p>
              <p>
                <Link className="footlink" href="/prices">
                  Pricing
                </Link>
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p> All rights reserved © amzoncorp.com 2023 </p>
      </div>
    </div>
  </div>
);

export default Footer;
