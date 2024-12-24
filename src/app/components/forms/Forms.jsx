'use client'
import React, { useContext } from 'react'
import Formnav from '../../components/formNavbar/Formnav'
import "./login.css"
import Confirmmail from './Confirmmail'
import Personal from './Personal'
import Subjects from './Subjects'
import SubjectsSecondary from './SubjectsSecondary'
import './forms.scss'
import { Stepper, Step } from 'react-form-stepper'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { DataContext } from '@/app/signup/page'

function Form() {

  const {page, setPage} = useContext(DataContext)
  

   const formpage = () => {

     switch (page) {
        case 0:
          return <Personal page={page}/>
          break;
        case 1:
          return <Subjects page={page}/>
          break;
           
        case 3:
          return <Confirmmail page={page}/>
          break;

        case 2:
          return <SubjectsSecondary page={page}/>
          break;
             
        default:
          break;
              }
        }

        const nextBtnHandler = (e) =>
        {
          e.preventDefault()
          setPage(page+1)
        }
        const previousHander = (e) =>
        {
          e.preventDefault()
          setPage(page-1)
        }

        const handleSubmit = (e) => 
        {
          e.preventDefault()
        }

        return (
          <div className='form_parent'>
            {formpage()}
            <div className='already'>
             {page == 0 && <p className='linkk_span'>Already have an account? <Link to="/signin">Login here</Link></p>}
            </div>
          </div>
        )
 
  
}

export default Form