import React, {useState} from 'react'
import axios from 'axios';
import { useForm, SubmitHandler } from "react-hook-form";
import lockIcon from "../../../images/padlock.svg"
import confirmLock from "../../../images/confirmLock.svg"
import userIcon from "../../../images/user.svg"
import emailIcon from "../../../images/mail.svg"


import './AuthCard.css';
import { getPreEmitDiagnostics } from 'typescript';

interface Inputs {
    username: string,
    password: string,
    email?: string
}

interface iAuthCard{
    type: string;
}

export default function AuthCard(props:iAuthCard) {
    const [formFieldErrors, setFormFieldErrors] = useState({password:"", username:"", email:""})


    const { register, handleSubmit, watch, errors } = useForm();
    const watchAllFields = watch();
    const loginAPICall: SubmitHandler<Inputs> = data => {
        console.log(data);
    }

    const signupAPICall: SubmitHandler<Inputs> = data => {
        setFormFieldErrors({password:"", username:"", email:""});

        console.log(data);
        axios.post('http://localhost:8000/api/users/signup', data) 
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.response)

            let errorArray = err.response.data.errors;
            // errorArray.push({message:"Second Test Error"})
            errorArray.map( (errObj:any) => { } );

            // let errorMessages = errorArray.join("\n")
            // setPasswordError(errorMessages)
            
        })
    }


    // TODO: Make this into a react hook
    const handleFormValidation = (input_name: string, error_type: string) => {
        console.log(error_type);
        console.log(input_name);
        switch (error_type) {
            case "maxLength":
                return (<p className="error-text">{input_name} character length exceeded</p>)
            case "required":
                return (<p className="error-text">{input_name} is required</p>)
            case "pattern":
                return (<p className="error-text">{input_name} needs to be a valid email address</p>)
            case "validate":
              
                return (<p className="error-text"> {formFieldErrors.password} </p>)
           
                // return (<p className="error-text">{input_name} do not match </p>)
                
            default:
                break;
        }
    }

    function renderSignUp(){
        return (
        <div className="auth-card" style={{height: "575px"}}>
            <h1 className="h1-findr-title"> Sign Up</h1>
            <form onSubmit={handleSubmit(signupAPICall)}>
            <div className="user-post-input-container">
                    <div style={{position:"relative", height:"46px"}}>
                        <img className="login-input-icon" src={emailIcon}/>
                        <input
                            name="email"
                            className="login-input-position user-post-input user-post-name"
                            placeholder="Email"
                            type="email"

                            ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
                        />
                    </div>
                    {errors.email && handleFormValidation("Email", errors.email.type)}
            </div>

            <div className="user-post-input-container">
                    <div style={{position:"relative", height:"46px"}}>
                        <img className="login-input-icon" src={userIcon}/>
                        <input
                            name="username"
                            type="username"
                            className="login-input-position user-post-input user-post-name"
                            placeholder="Username"
                            ref={register({ required: true })}
                        />
                    </div>
                    {errors.username && handleFormValidation("Username", errors.username.type)}
            </div>
            <div className="user-post-input-container">
                    <div style={{position:"relative", height:"46px"}}>
                        <img className="login-input-icon" src={lockIcon} style={{width:"16px"}}/>
                        <input
                            type="password"
                            name="password"
                            className="login-input-position user-post-input user-post-name"
                            placeholder="Password"
                            ref={register({ required: true })}
                        />
                    </div>
                    {errors.password && handleFormValidation("Password", errors.password.type)}          
            </div>

            <div className="user-post-input-container">
                    <div style={{position:"relative", height:"46px"}}>
                        <img className="login-input-icon" src={confirmLock} style={{width:"16px"}}/>
                        <input
                           type="password"
                           name="confirmPassword"
                           className="login-input-position user-post-input user-post-name"
                           placeholder="Confirm Password"
                           // @ts-ignore
                           ref={register({ required: true, 
                            validate: value =>{
                                if (value !== watch('password')) {
                                    // setPasswordError("Passwords do not match")
                                    return false
                                }
                            }
                        })}
                        />
                    </div>
                    {/* {errors.confirmPassword && handleFormValidation(passwordError, errors.confirmPassword.type)}   */}
                    {formFieldErrors.password && handleFormValidation(formFieldErrors.password, "validate")} 
            </div>

            <input
                    name="submit"
                    className="create-post-submit"
                    type="submit"
                    value="Sign Up"
            />
            </form>
            <div style={{textAlign:"center", color:"dimgray", fontSize:"12px"}}>
                <span> or <a href="login" style={{color:"dimgray"}}> Sign In </a> </span> 
            </div>
        </div>
        )
    }

    function renderLogin(){
        return (
        <div className="auth-card">
            <h1 className="h1-findr-title"> Sign In</h1>
            <form onSubmit={handleSubmit(loginAPICall)}>
            <div className="user-post-input-container">
                    <div style={{position:"relative", height:"46px"}}>
                        <img className="login-input-icon" src={userIcon}/>
                        <input
                            name="username"
                            className="login-input-position user-post-input user-post-name"
                            placeholder="Email/Username"
                            ref={register({ required: true })}
                        />
                    </div>
                    {errors.username && handleFormValidation("Username", errors.username.type)}
            </div>
            <div className="user-post-input-container">
                    <div style={{position:"relative", height:"46px"}}>
                        <img className="login-input-icon" src={lockIcon} style={{width:"16px"}}/>
                        <input
                            type="password"
                            name="password"
                            className="login-input-position user-post-input user-post-name"
                            placeholder="Password"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div style={{height:"25px", display: 'flex', position:"relative", alignItems:"center"}}>
                    {errors.password && handleFormValidation("Password", errors.password.type)}          

                        { 
                            <a style={{position:"absolute", right:"0", color:"dimgray", fontSize:"12px"}} href="forgot-password"> forgot password? </a>
                        }
                    </div>
            </div>

            <input
                    name="submit"
                    className="create-post-submit"
                    type="submit"
                    value="Login"
            />
            </form>
            <div style={{textAlign:"center", color:"dimgray", fontSize:"12px"}}>
                <span> or <a href="signup" style={{color:"dimgray"}}> create an account </a> </span> 
            </div>
        </div>
        )
    }

    return (
        props.type === "login" ? renderLogin() : props.type === "signup" ? renderSignUp() : <div> Insert correct prop type</div>
    )
}
