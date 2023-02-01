import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import './Form.css'
import { BsArrowRight } from 'react-icons/bs'
import Erorr from "../Erorr/Erorr";


const Form = ()=> {

    const [submited , setSubmited] = useState(false)
    const [companyName , setCompanyName] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
   

    const submitHandler = (event)=> {
        event.preventDefault()
        setSubmited(true)
    }

    const companytnameHandler = (event)=> {
        setCompanyName(event.target.value)
    }

    const firstnameHandler = (event)=> {
        setFirstName(event.target.value);
    }

    const lastnameHandler = (event)=> {
        setLastName(event.target.value)
    }

    const emailHandler = (event)=> {
        setEmail(event.target.value)
    }

    const clickBtn = ()=> {
        console.log({Company:companyName, FirstName:firstName, LastName:lastName, Email:email});
        setCompanyName('')
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return(
        <div className="contaiiner_form">
            <form className="form" onSubmit={submitHandler}>
                <h2>Create account</h2>   
                <span>Already have an account? <a href="#">Sign in</a></span>
                    
                <Input title={'CompanyName'} clickHandel={companytnameHandler} state={companyName}/>
                    {companyName.length <= 2 && (
                        <Erorr title={'CompanyName'}/>
                    )}

                <div className="wraper_inputName">
                    <div className="wraper_firstName">
                        <Input title={'FirstName'} clickHandel={firstnameHandler} state={firstName}/>
                        {firstName.length <= 2 && (
                            <Erorr title={'FirstName'}/>
                        )}     
                    </div>

                    <div className="wraper_lastName">
                        <Input title={'LastName'} clickHandel={lastnameHandler} state={lastName}/>
                        {lastName.length <= 2 && (
                            <Erorr title={'LastName'}/>
                        )} 
                    </div>  
                </div>

                <Input title={'Email'} clickHandel={emailHandler} state={email}/>
                    {email.length <= 5 && (
                        <Erorr title={'Email'}/>
                    )}
                
                <button className="signUp_btn" type="submit" onClick={clickBtn}>Sign up <BsArrowRight /></button>

                <div className="wraper_downData">
                    <input type="checkbox" />
                    <span>I have read and agree to the <a href="#">Terms of Service</a></span>
                </div>
            </form>
        </div>
    )
}

export default Form