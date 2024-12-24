'use client'
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { sendEmailVerification } from 'firebase/auth'
import { db } from '../../firebase/firebase'
// import './formStyle.scss'
import "./login.css"
import { async } from '@firebase/util'
import Formnav from '../../components/formNavbar/Formnav'
import { Navigate, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Clientsignup() {

 
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail]=useState("")
  const [experience, setExperience] = useState(null)
  const [values, setValues] = useState({})
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [passwordcheck, setPasswordcheck] = useState({"error":false, "message":""})
  
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const [modalVisible, setModalVisible] = useState(false)
  
  const handleChange = (e) =>
  {

    setData({...data, [e.target.name]: e.target.value})
    
  }

  const nextBtnHandler = async (e) =>
  {
    e.preventDefault()

    if(data.password!=data.confirmpassword)
    {
      setPasswordcheck({"error":false, "message":"Passwords do not match"})
    }
    else{

      if(data.password.length<4)
      {
        setPasswordcheck({"error":false, "message":"Password cannot be less than 6 characters."})
      } 
      else
      {
        setPasswordcheck(true)
          const { password, confirmpassword, ...userDetails } = data;
        await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async(userCredential) => {
            // Signed in
           // const user = userCredential.user;

           // await user.sendEmailVerification()

            auth.onAuthStateChanged(async (user) => {
              if (user) {
              await sendEmailVerification(user);
                // rest of the code for adding user to Firestore collection
            

            try {
              const docRef = await addDoc(collection(db, "Users"), {
                user_id: user.uid,
                  ...userDetails,
                usertype: 'client',
                timestamps:serverTimestamp()
              });
              console.log("Document written with ID: ", docRef.id);
              alert("Account Created Successfully, check your email to verify immediatedly!")
              navigate("/signin")
            } catch (e) {
              console.error("Error adding document: ", e);
            }
            console.log(user);

          }
        });
           // navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
      }
    }
    
  }
 

  const handleSubmit = (e) => 
  {
    e.preventDefault()
    
  }



  useEffect(() => {
   // setData(values)
 }, [values]);



  return (
    
    <div>
       <Formnav />
 
      <div className='form_divi'>
      
      <div className="form_bodyi">
        <Form onSubmit={nextBtnHandler} className="formlogtwoy">
        <Container className='forlet'>
        <Row>
          <Col><p className='headingtwo'>Hire a Freelancer</p></Col>
          <Col className='clsignp'></Col>
        </Row>
            <Row className='rowele'>
              <Col className='clientfie'>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                  <Form.Control type='field'
                    id='firstname'
                    name="firstname"
                    required
                    placeholder='First name' onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col className='clientfie'>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                  <Form.Control name="lastname"
                    type='field'
                    required
                    placeholder='Last name'
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
             </Row>
            <Row className='rowele'>
              <Col className='clientfie'>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                  <Form.Control type='field' name='email'
                    placeholder='Enter your email'
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className='rowele'>
              {!passwordcheck.error && <div className="passordError"><span>{passwordcheck.message}</span></div>}
              <Col className='clientfie'>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                  <Form.Control type='password'
                    id='password'
                    name="password"
                    required
                    placeholder='Password' onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col className='clientfie'>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                  <Form.Control name="confirmpassword"
                    type='password'
                    required
                    placeholder='Confirm Password'
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
             </Row>
            <Row>
              <Col className='mbutton'><button className='text-button' type='submit'>Submit</button></Col>
              <Col className='clsignp'></Col>
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
        {/* <div className="form_body">
          <form className='signupForm form' onSubmit={nextBtnHandler}>
           <span className='heading'>Hire a Freelancer</span>
              <div className="input_group">
                <input className='firstname'  type='field' id='firstname' name="firstname"  placeholder='First name' onChange={handleChange}/>  
                <input className='lastname' name="lastname"  type='field' placeholder='Last name' onChange={handleChange}/>
                </div>
                <input className='email'  type='field' name='email' placeholder='Enter your email' onChange={handleChange}/> */}
                {/* <input className='experience'  type='field' name='experience' placeholder='Academic writing experience in yearss' onChange={handleChange}/> */}
               {/* {!passwordcheck.error && <div className="passwordError"><span>{passwordcheck.message}</span></div>} */}
                {/* <div className="input_group">
                <input className='password'  type='password' id='password' name="password"  placeholder='Password' onChange={handleChange}/>  
                <input className='confirmpassword' name="confirmpassword"  type='password' placeholder='Confirm Password' onChange={handleChange}/>
                </div>
               <div className='buttons'>
               <button className='btn' type='submit'>Submit</button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
  )
}

export default Clientsignup