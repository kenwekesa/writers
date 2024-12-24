'use client'
import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Formnav from '../../components/formNavbar/Formnav'

import './subjects.scss'
import { Stepper, Step } from 'react-form-stepper'
import { DataContext } from '@/app/signup/page'
import "./login.css"
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { sendEmailVerification } from 'firebase/auth'
import { db } from '../../firebase/firebase'



function SubjectsSecondary() {

  const {data, setData,page, setPage} = useContext(DataContext)
  const [secondarySubjects, setsecondarySubjects] = useState(()=>data.secondarySubjects==undefined? []:data.secondarySubjects)
  const [error, setError] = useState({'flag':false,'message':""})
  const [modalVisible, setModalVisible] = useState(false)


  const navigate = useNavigate()
  const handleCheck = (e) =>
  {
    console.log(e.target.value)

    const value = e.target.value;
    if (e.target.checked) {
      setsecondarySubjects([...secondarySubjects, value]);
    } else {
      setsecondarySubjects(secondarySubjects.filter(item => item !== value));
    }

  }

  const nextBtnHandler = async(e) =>
  {
    if(error.flag)
    {
      setModalVisible(true)
    }
    else
    {
    e.preventDefault();
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
                usertype: 'writer',
                reg_complete:false,
                timestamps: serverTimestamp(),
                status: "unverified"
              });
              console.log("Document written with ID: ", docRef.id);
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

    console.log(secondarySubjects.length)
    console.log(secondarySubjects)
    if(secondarySubjects.length>2)
    {
      setError({"flag":true,"message":"You can only choose up to 2 subjects for this category"})
      
    }
    else if(secondarySubjects.length<1)
    {
      
        setError({"flag":true,"message":"Choose at least one subject before you proceed"})
        
      
    }
    else{
      setError({"flag":false, "message":""})
      setData({...data, "secondarySubjects":secondarySubjects})

    }
  }, [secondarySubjects]);

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
                   checked={secondarySubjects.includes(subject)}
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
                           <span>{data.primarySubject[0]}</span>
                      
                    </div>
                    <div className="secondary">
                       <div className="title_badge">Secondary Subjects</div>

                    {secondarySubjects.map((sec_subject)=><span>{sec_subject}</span>)}



                    </div>
                </div>
            </div>
          </div>

          <div className='buttons'>

            <div className='text-button' onClick={(e)=>previousBtnHandler(e)}>Previous</div>
            <div className='text-button' onClick={(e) => nextBtnHandler(e)}>Submit</div>
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

export default SubjectsSecondary