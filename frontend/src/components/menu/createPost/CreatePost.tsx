import React from 'react'
import './CreatePost.css';

import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
    name: string,
    description: string,
    location?: string
}

export default function CreatePost() {
    const { register, handleSubmit, watch, errors } = useForm();
    const watchAllFields = watch();


    const createPostAPICall: SubmitHandler<Inputs> = data => {
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

    const descriptionCharacterLimit = 15;

    return (
        <div className="create-post-container">
            <h1 className="create-post-title">Share a new (location/activity)</h1>


            <form className="create-post-input-container" onSubmit={handleSubmit(createPostAPICall)}>

                <div className="user-post-input-container">
                    <input
                        name="name"
                        className="user-post-input user-post-name"
                        placeholder="Name (Required)"
                        ref={register({ required: true, maxLength: 10 })}
                    />
                    {errors.name && handleFormValidation("Name", errors.name.type)}
                </div>

                <div className="user-post-input-container">
                    <textarea
                        name="description"
                        className="user-post-input user-post-description"
                        placeholder="Description (Required)"
                        rows={6}
                        ref={register({ required: true, maxLength: descriptionCharacterLimit })}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {errors.description && handleFormValidation("Description", errors.description.type)}

                        {
                            watchAllFields.description
                                ?
                                descriptionCharacterLimit - watchAllFields.description.length < 0
                                    ?
                                    <p className="form-info error-text">
                                        Characters remaining: {descriptionCharacterLimit - watchAllFields.description.length}
                                    </p>

                                    :
                                    <p className="form-info">
                                        Characters remaining: {descriptionCharacterLimit - watchAllFields.description.length}
                                    </p>

                                :
                                <p className="form-info">
                                    Characters remaining: {descriptionCharacterLimit}
                                </p>

                        }
                    </div>
                </div>

                <div className="user-post-input-container">
                    <input
                        name="location"
                        className="user-post-input user-post-location"
                        placeholder="(disabled) Select a location on the map"
                        disabled={true}
                        ref={register}
                    />
                </div>


                <input
                    name="submit"
                    className="create-post-submit"
                    type="submit"
                />


            </form>


        </div>

    )
}
