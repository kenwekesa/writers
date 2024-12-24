'use client'
import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import Formnav from '../../components/formNavbar/Formnav'
import './subjects.scss'
import "./login.css"
import { Stepper, Step } from 'react-form-stepper'
import { DataContext } from '@/app/signup/page'

function Subjects() {

  const {data, setData,page, setPage} = useContext(DataContext)
  const [subjects, setSubjects] = useState(()=>data.primarySubject!=null? data.primarySubject: [])
  const [error, setError] = useState({'flag':false,'message':""})
  const [modalVisible, setModalVisible] = useState(false)

  

  const handleCheck = (e) =>
  {
    console.log(e.target.value)

    const value = e.target.value;
    if (e.target.checked) {
      setSubjects([...subjects, value]);
    } else {
      setSubjects(subjects.filter(item => item !== value));
    }

  }

  const nextBtnHandler = (e) =>
  {
    if(error.flag)
    {
      setModalVisible(true)
    }
    else
    {
    e.preventDefault();
    setData({...data, "primarySubject":subjects})
    console.log(data)
    setPage(page+1);

    }

  }

  const previousBtnHandler = (e) =>
  {
     e.preventDefault()
     setPage(page-1)
  }

 
  useEffect(() => {

    console.log(subjects.length)
    console.log(subjects)
    if(subjects.length>1)
    {
      setError({"flag":true,"message":"Only choose one primary subject"})
      
    }
    else if(subjects.length<1)
    {
      
        setError({"flag":true,"message":"Choose one primary subject before you proceed"})
        
      
    }
    else{
      setError({"flag":false, "message":""})
    }
  }, [subjects]);

  const subject = [
                    {"title":"Management", "subjects":["HRM","Marketing","Management","OB"]},
                    {"title":"Science", "subjects":["Chemistry","Mathematics","Physics","Statistics"]},
                    {"title":"Engineering", "subjects":["Geography","Electronics","Tripple E","Civil & Mechanical"]},
                    {"title":"Commerce", "subjects":["Acc","Finance","Audits","Economics"]},
                    {"title":"English Literature", "subjects":["Essay","Article Writing","Poems","Literature"]},
                    {"title":"Law", "subjects":["Civil/Criminal","Coorporation","Property","Business"]},
                    {"title":"Psychology", "subjects":["Sociology","Psychology","Music"]},
                    {"title":"History", "subjects":["Ancient History","Roman History","International affairs","Political Science"]},
                    {"title":"Bio/Med/Nur", "subjects":["Medicine","Biology","Nursing/Healthcare","Pharmacy"]},
                    {"title":"Comp Science", "subjects":["Web Design","Programming","Database","Networking"]},
                    {"title":"General", "subjects":["Music","IT Write Up","Management","OB"]},
                    {"title":"Programming", "subjects":["HTML","CSS","JS","Java"]}


                    ]
  return (

    <div>
      <span className='headingon'>Choose one primary subject</span>
        <div className="subjects_body mabo">
          {/* <h3>Choose one primary subject {JSON.stringify(data)}</h3> */}
         
          <div className='subject'>
            <div className="subjects">

              <form className='subject_form mebo'>
               { subject.map((sub)=>(
                <div className='subject_entity'>
                 <div className='title mibo'>{sub.title}</div>
                {sub.subjects.map((subject)=>(
                 
                 <div className="subject_item">

                  <label>
                  <input type='checkbox' 
                   onChange={handleCheck} value={subject}
                   checked={subjects.includes(subject)}
                   /> {subject} </label>
                   </div>
                   ))}
                   </div>
                  ))}
              </form>

            </div>
            <div className="choices mchoi">
                <div className="choices_card">
                    <div className="primary">
                        <div className="title_badge">Primary Subject</div>
                           <span>{subjects[0]}</span>
                      
                    </div>
                    <div className="secondary">
                       <div className="title_badge">Secondary Subjects</div>
                       {()=>data.secondarySubjects? data.secondarySubjects.map((sec_subject)=><span>{sec_subject}</span>):""}
                    </div>
                </div>
            </div>
          </div>

          <div className='buttons'>

                  <div className='text-button' onClick={(e)=>previousBtnHandler(e)}>Previous</div>
                  <div className='text-button' onClick={(e) => nextBtnHandler(e)}>Next</div>
                  </div>


                 {modalVisible && <div className="MessageModal">
                      <div className="message">
                           <span>{error.message}</span>
                           <div className="btn" onClick={()=>setModalVisible(false)}>OK</div>
                      </div>
                  </div>
                }
        </div>
   </div>
  )
}

export default Subjects