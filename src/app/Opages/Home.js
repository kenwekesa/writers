"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import "./home.css";
import frontmain from "../images/frontmain.png";
import create from "../images/create.png";
import submit from "../images/submit.png";
import hired from "../images/hired.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import s6 from "../images/s6.png";
import s7 from "../images/s7.png";
import s8 from "../images/s8.png";
import s9 from "../images/s9.png";
import s10 from "../images/s10.png";
import s11 from "../images/s11.png";
import s12 from "../images/s12.png";
import s13 from "../images/s13.png";
import s14 from "../images/s14.png";
import s15 from "../images/s15.png";

// import GradientCircleProgressbar from './ GradientCircleProgressbar';
// import GradientCircleProgressbar from './ GradientCircleProgressbar';
import NumberCounter from "../services/utilities/NumberCounter";
// import VerifiedIcon from '@mui/icons-material/Verified';
// import ForumIcon from '@mui/icons-material/Forum';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <div className="text-box">
          <div className="text-b">
            <h1 className="tmain">Earn As You Write</h1>
            <div className="text-bt">
              <p className="bman">
                Join the team of top 3% writers across the globe
              </p>
              <div className="mopep">
                <Link href="/signup" className="text-btn bit">
                  Sign up now
                </Link>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                <Link href="clientsignup" className="text-btn bet">
                  Hire a writer
                </Link>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
              <div className="mid1">
                <div className="counterone">
                  <p className="mid-p pit">Available Orders</p>{" "}
                  <NumberCounter className="numcounter" targetNumber={305} />
                </div>
                <div className="counterone">
                  <p className="mid-p pit">Completed Orders</p>{" "}
                  <NumberCounter className="numcounter" targetNumber={4140} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={frontmain} className="frontImg" alt="one" />
          </div>
          <img src={frontmain} className="frontImr" alt="one" />
        </div>
        {/* <img src={ frontmain } className="frontImr" alt='one'/> */}
      </div>

      {/* SERVICES SECTION */}
      <section className="second-section" id="getstarted">
        <div className="sec2">
          <h1 className="sub-t">Get Started</h1>
          <div className="row secrows">
            <div className="col-md-4 mb-md-0 mb-4 secon">
              <img src={create} className="sec-2 simage" alt="one" />
              <div className="subT">
                <p>
                  Create Account <br />{" "}
                  <span>Create an account in less than 10 minutes.</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 secon">
              <img src={submit} className="sec-2 simage" alt="one" />
              <div className="subT">
                <p>
                  Submit Application <br />
                  <span>
                    Submit your application and get it approved <br />
                    within 5 days.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-4 secon">
              <img src={hired} className="sec-2 simage" alt="one" />
              <div className="subT">
                <p>
                  Hired <br />{" "}
                  <span>
                    Get writing now and start <br />
                    earning.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section>
        <div className="bout-sec">
          <div className="bout-cont bsecd">
            <h1 className="bout">About Us</h1>
            <p>
              Amzon Corp is an online academic writing platform. Since 2014, we
              have worked to guarantee the finest service standards, provide
              prospective academic authors with a steady income. We respect our
              staff members, promote from within, offer various incentive
              programs, and offer round-the-clock support.
            </p>
            <Link href="clientsignup" className="text-btn boutbtn">
              Sign up now
            </Link>
          </div>
          {/* <div className="bout-icons">
            <div>
              <ForumIcon className="bouts"></ForumIcon>
              <p>Chat with clients</p>
            </div>

            <div>
              <VerifiedIcon className="bouts"></VerifiedIcon>
              <p>Only verified clients</p>
            </div>

            <div className="bout2">
              <SupportAgentIcon className="bouts"></SupportAgentIcon>
              <p>Client support</p>
            </div>

            <div className="bout2">
              <AccountBalanceWalletIcon className="bouts"></AccountBalanceWalletIcon>
              <p>Payment on time</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* SUBJECTS SECTION */}
      <div className="subjects">
        <h1 className="subj-sub">Main Writing Subjects</h1>
        <div className="container-fluid text-center text-md-left">
          <div className="row ubbro">
            <div className="col-md-4 mb-md-0 mb-4">
              <ul className="list-unstyled subone">
                <h6>
                  <img src={s8} className="fa" alt="icon" /> &nbsp;&nbsp;
                  Finance & Economics
                </h6>
                <h6>
                  <img src={s2} className="fa" alt="icon" /> &nbsp;&nbsp; HR &
                  Management
                </h6>
                <h6>
                  <img src={s15} className="fa" alt="icon" /> &nbsp;&nbsp;
                  History & Archeology
                </h6>
                <h6>
                  <img src={s5} className="fa" alt="icon" /> &nbsp;&nbsp;
                  Business Studies
                </h6>
                <h6>
                  <img src={s3} className="fa" alt="icon" /> &nbsp;&nbsp; Law &
                  Sociology
                </h6>
              </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-4">
              <ul className="list-unstyled subtwo">
                <h6>
                  <img src={s11} className="fa" alt="icon" /> &nbsp;&nbsp;
                  Mathematics
                </h6>
                <h6>
                  <img src={s9} className="fa" alt="icon" /> &nbsp;&nbsp; Data
                  Analysis
                </h6>
                <h6>
                  <img src={s12} className="fa" alt="icon" /> &nbsp;&nbsp;
                  Health Sciences
                </h6>
                <h6>
                  <img src={s10} className="fa" alt="icon" /> &nbsp;&nbsp;
                  Computer science
                </h6>
                <h6>
                  <img src={s4} className="fa" alt="icon" /> &nbsp;&nbsp;
                  HTML,CSS & JAVA
                </h6>
              </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-4">
              <ul className="list-unstyled subthree">
                <h6>
                  <img src={s6} className="fa" alt="icon" /> &nbsp;&nbsp;
                  English Literature
                </h6>
                <h6>
                  <img src={s14} className="fa" alt="icon" /> &nbsp;&nbsp; Art &
                  Education
                </h6>
                <h6>
                  <img src={s7} className="fa" alt="icon" /> &nbsp;&nbsp;
                  Journalism
                </h6>
                <h6>
                  <img src={s1} className="fa" alt="icon" /> &nbsp;&nbsp;
                  Engineering
                </h6>
                <h6>
                  <img src={s13} className="fa fe" alt="icon" /> &nbsp;&nbsp;
                  Nursing
                </h6>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
