import React from 'react'
import { useContext } from 'react'
import Formnav from '../../components/formNavbar/Formnav'

import './formStyle.scss'
import { Stepper, Step } from 'react-form-stepper'
import { DataContext } from '../../signup/page'
import { useNavigate } from 'react-router-dom'

function Confirmmail() {

  const {data, setData,page, setPage} = useContext(DataContext)
  const navigate = useNavigate()


  const previousHander = (e) =>
  {
    e.preventDefault()
    setPage(page-1)
  }

  const handleSubmit = () =>
  {
    
  }
  return (

  

        <div className="form_body">
            <div className="confirmmail_card">
              <h4 style={{color:"green"} } className='mtitle'>Sign up was Successful</h4>
              <div className="cardbody">
                 Confirm email has been sent to {data.email}. Click on the link in the email to activate your account.
              </div>
              <div className="ok_btn" onClick={()=>navigate('/signin')}>OK</div>
            </div>
                  {/* <div className='buttons'>

                  <div className='previousBtn' onClick={(e)=>previousHander(e)}>Previous</div>
                  <div className='nextBtn' onClick={handleSubmit}>Submit</div>
                  </div> */}
        </div>

  )
}

export default Confirmmail