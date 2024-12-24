import React from 'react'
import { useContext,useState,useEffect } from 'react'

import './formStyle.scss'
import "./login.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DataContext } from '@/app/signup/page'

function Personal() {

  const {data, setData,page, setPage} = useContext(DataContext)
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail]=useState("")
  const [experience, setExperience] = useState(null)
  const [values, setValues] = useState({})
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [passwordcheck, setPasswordcheck] = useState({"error":false, "message":""})
  

  const handleChange = (e) =>
  {
    setData({...data, [e.target.name]: e.target.value}) 
  }

  const nextBtnHandler = (e) =>
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
        setPage(page+1)
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
    <div className="form_bodyi">
        <Form onSubmit={nextBtnHandler} className="formlogtwoy">
        <Container className='forlet'>
        <Row>
          <Col><p className='headingone'>Join as a Freelancer</p></Col>
          <Col className='clsignp'></Col>
        </Row>
            <Row className='rowele'>
              <Col>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                <Form.Control type='field'
                  id='firstname'
                  name="firstname"
                  required
                  value={data != null ? data.firstname : ""}
                  placeholder='First name' onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                <Form.Control name="lastname"
                  value={data != null ? data.lastname : ""}
                  type='field'
                  required
                  placeholder='Last name'
                  onChange={handleChange}
                  />
                </Form.Group>
              </Col>
             </Row>
            <Row className='rowele'>
              <Col>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                <Form.Control type='field'
                  name='email'
                  required
                  value={data != null ? data.email : ""}
                  placeholder='Enter your email'
                  onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
             <Row className='rowele'>
              <Col>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                <Form.Control type='number'
                  name='experience'
                  value={data != null ? data.experience : ""}
                  required
                  placeholder='Academic writing experience in yearss'
                  onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className='rowele'>
              {!passwordcheck.error && <div className="passordError"><span>{passwordcheck.message}</span></div>}
              <Col>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                <Form.Control type='password'
                  id='password'
                  name="password"
                  required
                  value={data != null ? data.password : ""}
                  placeholder='Password'
                  onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 tisi" controlId="formBasicEmail">
                <Form.Control name="confirmpassword"
                  value={data != null ? data.confirmpassword : ""}
                  type='password'
                  required
                  placeholder='Confirm Password'
                  onChange={handleChange}
                  />
                </Form.Group>
              </Col>
             </Row>
            <Row>
              <Col className='mbutton'><button className='text-button' type='submit'>Next</button></Col>
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
    

          {/* <form className='signupForm form' onSubmit={nextBtnHandler}>
          <span className='heading'>Join as a Freelancer</span>
              <div className="input_group">
                <input className='firstname'  type='field' id='firstname' name="firstname" value={data!= null? data.firstname: ""} placeholder='First name' onChange={handleChange}/>  
                <input className='lastname' name="lastname" value={data!= null? data.lastname: ""} type='field' placeholder='Last name' onChange={handleChange}/>
                </div>
                <input className='email'  type='field' name='email' value={data!= null? data.email: ""} placeholder='Enter your email' onChange={handleChange}/>
                <input className='experience'  type='field' name='experience' value={data!= null? data.experience: ""} placeholder='Academic writing experience in yearss' onChange={handleChange}/>
               {!passwordcheck.error && <div className="passwordError"><span>{passwordcheck.message}</span></div>}
                <div className="input_group">
                <input className='password'  type='password' id='password' name="password" value={data!= null? data.password: ""} placeholder='Password' onChange={handleChange}/>  
                <input className='confirmpassword' name="confirmpassword" value={data!= null? data.confirmpassword: ""} type='password' placeholder='Confirm Password' onChange={handleChange}/>
                </div>
              <div className='buttons'>
             <button className='nextBtn' type='submit'>Next</button>
            </div>
          </form> */}
        </div>
  )
}

export default Personal