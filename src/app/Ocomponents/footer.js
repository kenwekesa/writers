import React from "react"
import css from "./footer.css";
import footer from '../images/footer.png';
import { Link } from "react-router-dom";


const Footer = () => 
<div className="bg">
<div className="page-footer">
<div className="container-fluid" >
<div className="row ft" >
<div className="col-md-4 mb-md-0 mb-4" id="verticalLine">
<ul className="list-unstyled">
<p><Link className="footlink" to="/signup">Jobs for writers</Link></p>
<p><Link className="footlink" to="/signup">Careers in writing</Link></p>
<p><Link className="footlink" to="/signup">Research writing</Link></p>
<p><Link className="footlink" to="/signup">Academic Writing</Link></p>
</ul>
</div>

<div className="col-md-4 mb-md-0 mb-4" id="verticalLine">
<ul className="list-unstyled">
<p><Link className="footlink" to="/clientsignup">Article writing</Link></p>
<p><Link className="footlink" to="/clientsignup">Thesis writing</Link></p>
<p><Link className="footlink" to="/clientsignup">Essay writing</Link></p>
<p><Link className="footlink" to="/clientsignup">Programming</Link></p>
</ul>
</div>

<div className="col-md-4 mb-md-0 mb-4" id="verticle">
<ul className="list-unstyled">
<p><Link className="footlink" to="/terms">Terms & Conditions</Link></p>
<p><Link className="footlink" to="/privacy">Privacy Policy</Link></p>
<p><Link className="footlink" to="/contactus">Contacts</Link></p>
<p><Link className="footlink" to="/prices">Pricing</Link></p>
</ul>
</div>
</div>
</div>

<div className="footer-copyright">
<p> All rights reserved © amzoncorp.com 2023 </p>
</div>
</div>
</div>

export default Footer