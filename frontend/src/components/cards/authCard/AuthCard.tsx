import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { useForm, SubmitHandler } from "react-hook-form";
import lockIcon from "../../../images/padlock.svg"
import confirmLock from "../../../images/confirmLock.svg"
import userIcon from "../../../images/user.svg"
import emailIcon from "../../../images/mail.svg"
import { useFetch } from "../../../useFetch"
import './AuthCard.css';
import { Spinner } from 'react-bootstrap';

interface Inputs {
    username: string,
    password: string,
    email?: string
}

interface iAuthCard {
    type: string;
}

interface errObj {
    field: string,
    message: string
}

export default function AuthCard(props: iAuthCard) {
    const [formFieldErrors, setFormFieldErrors] = useState({ password: "", username: "", email: "" })

    const [isLoading, APIresult, APIerror, fetchAPI] = useFetch();

    const { register, handleSubmit, watch, errors } = useForm();
    const watchAllFields = watch();

    useEffect(() => {
        // Update form errors
        if (APIerror && APIerror.data.errors) {
            APIerror.data.errors.map((errObj: errObj) => {
                setFormFieldErrors((prevState) => ({ ...prevState, [errObj.field]: errObj.message }));
            });
        }
    }, [APIerror])

    const loginAPICall: SubmitHandler<Inputs> = data => {
        console.log(data);
    }

    const signupAPICall: SubmitHandler<Inputs> = async form_data => {
        setFormFieldErrors({ password: "", username: "", email: "" });
        
        await fetchAPI({
            method: 'post',
            url: 'api/users/signup',
            data: form_data
        });
    }


    // TODO: Make this into a react hook
    const handleFormValidation = (input_name: string, error_type: string) => {
        // console.log("error msg: " + input_name + " " + "error type:" + error_type);
        switch (error_type) {
            case "maxLength":
                return (<p className="error-text">{input_name} character length exceeded</p>)
            case "required":
                return (<p className="error-text">{input_name} is required</p>)
            case "pattern":
                return (<p className="error-text">{input_name} needs to be a valid email address</p>)
            case "minLength":
                return (<p className="error-text">{input_name} needs to be greater than 3 characters and less than 20 characters.</p>)
            case "validate":
                return (<p className="error-text"> {input_name} needs to match</p>)
            case "backend":
                return (<p className="error-text"> {input_name} </p>)

            default:
                break;
        }
    }

    function renderSignUp() {
        return (
            <div className="auth-card" style={{ height: "auto", width: "350px" }}>
                <h1 className="h1-findr-title">Sign Up</h1>
                <form onSubmit={handleSubmit(signupAPICall)}>
                    <div className="user-post-input-container">
                        <div style={{ position: "relative", height: "46px" }}>
                            <img className="login-input-icon" src={emailIcon} />
                            <input
                                name="email"
                                className="login-input-position user-post-input user-post-name"
                                placeholder="Email"
                                type="email"

                                ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
                            />
                        </div>
                        {errors.email && handleFormValidation("Email", errors.email.type)}
                        {formFieldErrors.email && handleFormValidation(formFieldErrors.email, "backend")}
                    </div>

                    <div className="user-post-input-container">
                        <div style={{ position: "relative", height: "46px" }}>
                            <img className="login-input-icon" src={userIcon} />
                            <input
                                name="username"
                                type="username"
                                className="login-input-position user-post-input user-post-name"
                                placeholder="Username"
                                ref={register({ required: true })}
                            />
                        </div>
                        {errors.username && handleFormValidation("Username", errors.username.type)}
                        {formFieldErrors.username && handleFormValidation(formFieldErrors.username, "backend")}
                    </div>

                    <div className="user-post-input-container">
                        <div style={{ position: "relative", height: "46px" }}>
                            <img className="login-input-icon" src={lockIcon} style={{ width: "16px" }} />
                            <input
                                type="password"
                                name="password"
                                className="login-input-position user-post-input user-post-name"
                                placeholder="Password"
                                ref={register({
                                    required: true,
                                    minLength: 4,
                                    maxLength: 20
                                })}
                            />
                        </div>
                        {errors.password && handleFormValidation("Password", errors.password.type)}
                        {formFieldErrors.password && handleFormValidation(formFieldErrors.password, "backend")}
                    </div>

                    <div className="user-post-input-container">
                        <div style={{ position: "relative", height: "46px" }}>
                            <img className="login-input-icon" src={confirmLock} style={{ width: "16px" }} />
                            <input
                                type="password"
                                name="confirmPassword"
                                className="login-input-position user-post-input user-post-name"
                                placeholder="Confirm Password"
                                // @ts-ignore
                                ref={register({
                                    required: true,
                                    minLength: 4,
                                    maxLength: 20,
                                    validate: value => { return value === watch('password'); }
                                })}
                            />
                        </div>
                        {errors.confirmPassword && handleFormValidation("Passwords", errors.confirmPassword.type)}
                        {formFieldErrors.password && handleFormValidation(formFieldErrors.password, "backend")}
                    </div>

                    {
                        isLoading
                            ?
                            <div className="create-post-submit spinner">
                                <Spinner size="sm" animation="border" color="#f8f4e3" />
                            </div>
                            :

                            <input
                                name="submit"
                                className="create-post-submit"
                                type="submit"
                                value="Sign Up"
                            />
                    }

                </form>
                <div style={{ textAlign: "center", color: "dimgray", fontSize: "12px" }}>
                    <span> or <a href="login" style={{ color: "dimgray" }}> Sign In </a> </span>
                </div>
            </div>
        )
    }

    function renderLogin() {
        return (
            <div className="auth-card">
                <h1 className="h1-findr-title"> Sign In</h1>
                <form onSubmit={handleSubmit(loginAPICall)}>
                    <div className="user-post-input-container">
                        <div style={{ position: "relative", height: "46px" }}>
                            <img className="login-input-icon" src={userIcon} />
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
                        <div style={{ position: "relative", height: "46px" }}>
                            <img className="login-input-icon" src={lockIcon} style={{ width: "16px" }} />
                            <input
                                type="password"
                                name="password"
                                className="login-input-position user-post-input user-post-name"
                                placeholder="Password"
                                ref={register({ required: true })}
                            />
                        </div>
                        <div style={{ height: "25px", display: 'flex', position: "relative", alignItems: "center" }}>
                            {errors.password && handleFormValidation("Password", errors.password.type)}

                            {
                                <a style={{ position: "absolute", right: "0", color: "dimgray", fontSize: "12px" }} href="forgot-password"> forgot password? </a>
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
                <div style={{ textAlign: "center", color: "dimgray", fontSize: "12px" }}>
                    <span> or <a href="signup" style={{ color: "dimgray" }}> create an account </a> </span>
                </div>
            </div>
        )
    }

    return (
        props.type === "login" ? renderLogin() : props.type === "signup" ? renderSignUp() : <div> Insert correct prop type</div>
    )
}
