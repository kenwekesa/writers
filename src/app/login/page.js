"use client";
import React, { useContext } from "react";
import { useState } from "react";
// import './formStyle.scss'
import "./login.css";
import {auth} from '../firebase/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Formnav from "../components/formNavbar/Formnav";
import { AuthContext } from "../contextr/AuthContext";
import { findUser } from "../services/api/DataApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    //handle login here

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const users = await findUser(user.uid);
        dispatch({ type: "LOGIN", payload: user });
        console.log(users[0].usertype);
        users[0] != undefined && users[0].usertype == "writer"
          ? navigate("/eneworders")
          : users[0] != undefined && users[0].usertype == "admin"
          ? navigate("/adminallorders")
          : navigate("/cplace");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/missing-password") {
          setPassErrorMessage("You din't provide any password, try again!");
          setPassError(true);
        } else if (error.code === "auth/wrong-password") {
          setPassErrorMessage("Wrong password/Username, try again!");
          setPassError(true);
        } else {
          setPassErrorMessage("Wrong login credentials, try again!");
          setPassError(true);
        }
      });
  };
  return (
    <div className="form_div">
      <Formnav />
      <div className="form_body">
        <Row className="logspacing">
          <Col className="logcolspan"></Col>
          <Col>
            <p className="headingone">Login here</p>
          </Col>
          <Col className="logcolspan"></Col>
        </Row>
        {passError && (
          <Row className="login_error">
            <p>{passErrorMessage}</p>
          </Row>
        )}
        <Form>
          <Container fluid className="loginsizt">
            <Row>
              <Col className="logcolspan"></Col>
              <Col className="colloginz">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col className="logcolspan"></Col>
            </Row>
            <Row>
              <Col className="logcolspan"></Col>
              <Col className="colloginz">
                <Form.Group className="mb-3 tis" controlId="formBasicEmail">
                  <Form.Control
                    type="password"
                    name="topic"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col className="logcolspan"></Col>
              <p className="linkspaning">I forgot my password</p>
            </Row>
            <Row>
              <Col className="logcolspan"></Col>
              <Col className="mybutton">
                <div className="text-button" onClick={handleLogin}>
                  Login <span className="lognow">now</span>
                </div>
              </Col>
              <Col className="logcolspan"></Col>
            </Row>
          </Container>
        </Form>
        {/* <form className='loginForm form'>
          <span className='heading'>Login here</span>
              <input className='username'  type='field' placeholder='Enter your email'
               onChange={(e)=>setEmail(e.target.value)}
              />
              <input className='pass' type='password' placeholder='Enter your password'
              onChange={(e)=>setPassword(e.target.value)}
              />
              <span className='link_span'>I forgot my password</span>
              <div className='loginBtn text-button' onClick={handleLogin}>Login now</div>
          </form> */}
      </div>
    </div>
  );
}

export default Login;
