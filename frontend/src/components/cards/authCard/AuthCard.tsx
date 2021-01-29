import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import lockIcon from "../../../images/padlock.svg"
import userIcon from "../../../images/user.svg"
import './AuthCard.css';


interface Inputs {
    username: string,
    password: string,
    email?: string
}


interface iAuthCard{
    type: string;
}






export default function AuthCard(props:iAuthCard) {
    const { register, handleSubmit, watch, errors } = useForm();
    const watchAllFields = watch();
    const loginAPICall: SubmitHandler<Inputs> = data => {
        console.log(data);
    }

    // TODO: Make this into a react hook
    const handleFormValidation = (input_name: string, error_type: string) => {
        switch (error_type) {
            case "maxLength":
                return (<p className="error-text">{input_name} character length exceeded</p>)
            case "required":
                return (<p className="error-text">{input_name} is required</p>)
            default:
                break;
        }

    }

    function renderSignUp(){
        return (
        <div className="auth-card">
            <h1 className="h1-findr-title"> Sign Up</h1>
            <form onSubmit={handleSubmit(loginAPICall)}>
            <div className="user-post-input-container">
                    <div style={{position:"relative", height:"46px"}}>
                        <img className="login-input-icon" src={userIcon}/>
                        <input
                            name="email"
                            className="login-input-position user-post-input user-post-name"
                            placeholder="Email"
                            ref={register({ required: true })}
                        />
                    </div>
                    {errors.email && handleFormValidation("email", errors.email.type)}
            </div>

            <div className="user-post-input-container">
                    <div style={{position:"relative", height:"46px"}}>
                        <img className="login-input-icon" src={userIcon}/>
                        <input
                            name="username"
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
                <span> or <a href="register" style={{color:"dimgray"}}> create an account </a> </span> 
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
                <span> or <a href="register" style={{color:"dimgray"}}> create an account </a> </span> 
            </div>
        </div>
        )
    }



    return (
        props.type === "login" ? renderLogin() : props.type === "signup" ? renderSignUp() : <div> Insert correct prop type</div>
    )
}
