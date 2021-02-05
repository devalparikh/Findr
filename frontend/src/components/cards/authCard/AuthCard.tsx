import React, { useCallback, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import lockIcon from "../../../images/padlock.svg"
import confirmLock from "../../../images/confirmLock.svg"
import userIcon from "../../../images/user.svg"
import emailIcon from "../../../images/mail.svg"
import { useFetch } from "../../../useFetch"
import './AuthCard.css';
import { Spinner } from 'react-bootstrap';
import { handleFormValidation } from '../../form/formValidator';
import { url } from 'inspector';

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
    console.log(APIerror);

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

    const loginAPICall: SubmitHandler<Inputs> = async form_data => {
        setFormFieldErrors({ password: "", username: "", email: "" });

        await fetchAPI({
            method: 'post',
            url: 'api/users/signin',
            data: form_data,
            withCredentials: true
        });

    }

    const signupAPICall: SubmitHandler<Inputs> = async form_data => {
        setFormFieldErrors({ password: "", username: "", email: "" });

        await fetchAPI({
            method: 'post',
            url: 'api/users/signup',
            data: form_data,
            withCredentials: true
        });
    }


    function renderSignUp() {
        return (
            <div className="auth-card" style={{ height: "auto", width: "350px" }}>
                <h1 className="h1-findr-title">Sign Up</h1>
                <form onSubmit={handleSubmit(signupAPICall)}>
                    <div className="input-container">
                        <div className="icon-input">
                            <img className="" src={emailIcon} />
                            <input
                                name="email"
                                className="input user-post-name"
                                placeholder="Email"
                                type="email"

                                ref={register({ required: true, pattern: /^\S+@\S+\.\S+$/ })}
                            />
                        </div>
                        {errors.email && handleFormValidation("Email", errors.email.type)}
                        {formFieldErrors.email && handleFormValidation(formFieldErrors.email, "backend")}
                    </div>

                    <div className="input-container">
                        <div className="icon-input">
                            <img src={userIcon} />
                            <input
                                name="username"
                                type="username"
                                className="input user-post-name"
                                placeholder="Username"
                                ref={register({ required: true })}
                            />
                        </div>
                        {errors.username && handleFormValidation("Username", errors.username.type)}
                        {formFieldErrors.username && handleFormValidation(formFieldErrors.username, "backend")}
                    </div>

                    <div className="input-container">
                        <div className="icon-input">
                            <img src={lockIcon} style={{ width: "16px" }} />
                            <input
                                type="password"
                                name="password"
                                className="input user-post-name"
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

                    <div className="input-container">
                        <div className="icon-input">
                            <img className="login-input-icon" src={confirmLock} style={{ width: "16px" }} />
                            <input
                                type="password"
                                name="confirmPassword"
                                className="input user-post-name"
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
                            <div className="disabled-submit-button spinner">
                                <Spinner size="sm" animation="border" color="#f8f4e3" />
                            </div>
                            :

                            <input
                                name="submit"
                                className="submit-button"
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
                    <div className="input-container">
                        <div className="icon-input">
                            <img src={userIcon} />
                            <input
                                name="username"
                                className="input user-post-name"
                                placeholder="Username"
                                ref={register({ required: true })}
                            />
                        </div>
                        {errors.username && handleFormValidation("Username", errors.username.type)}
                        {formFieldErrors.username && handleFormValidation(formFieldErrors.username, "backend")}

                    </div>
                    <div className="input-container">
                        <div className="icon-input">
                            <img className="login-input-icon" src={lockIcon} style={{ width: "16px" }} />
                            <input
                                type="password"
                                name="password"
                                className="input user-post-name"
                                placeholder="Password"
                                ref={register({ required: true })}
                            />
                        </div>
                        <div style={{ height: "25px", display: 'flex', position: "relative", alignItems: "center" }}>
                            {errors.password && handleFormValidation("Password", errors.password.type)}
                            {formFieldErrors.password && handleFormValidation(formFieldErrors.password, "backend")}


                            {
                                <a style={{ position: "absolute", right: "0", color: "dimgray", fontSize: "12px" }} href="forgot-password"> forgot password? </a>
                            }
                        </div>
                    </div>

                    {
                        isLoading
                            ?
                            <div className="disabled-submit-button spinner">
                                <Spinner size="sm" animation="border" color="#f8f4e3" />
                            </div>
                            :

                            <input
                                name="submit"
                                className="submit-button"
                                type="submit"
                                value="Login"
                            />
                    }


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
