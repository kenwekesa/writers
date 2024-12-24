"use client";
import React from "react";
import Formnav from "../components/formNavbar/Formnav";

// import Confirmmail from "./Confirmmail";
// import Personal from "./Personal";
// import Subjects from "./Subjects";

import "./formStyle.scss";
import { Stepper, Step } from "react-form-stepper";
import { useState } from "react";
import Form from '../components/forms/Forms'

export const DataContext = React.createContext();
function Signup() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);

  return (
    <div className="form_div">
      <Formnav />
      <Stepper activeStep={page + 1}>
        <Step label="Personal Details" />
        <Step label="Primary Subject" />
        <Step label="Secondary subjects" />
        <Step label="Confirm Email" />
      </Stepper>
      <DataContext.Provider value={{ page, setPage, data, setData }}>
        <Form />
      </DataContext.Provider>
    </div>
  );
}
export default Signup;
