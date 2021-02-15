import React, { useEffect, useState } from 'react'
import './CreatePost.css';
import { handleFormValidation } from '../../form/formValidator';
import { useForm, SubmitHandler } from "react-hook-form";
import { iMarker } from '../../../containers/main/Main';
import axios from 'axios';

interface Inputs {
    name: string,
    description: string,
    location?: string
}

interface iCreatePost {
    marker: iMarker;
}

export default function CreatePost(props: iCreatePost) {
    const { marker } = props;

    const [newLocationName, setNewLocationName] = useState("");


    const { register, handleSubmit, watch, errors } = useForm();
    const watchAllFields = watch();


    const createPostAPICall: SubmitHandler<Inputs> = data => {
        console.log(data);
    }

    useEffect(() => {
        if (marker) {
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${marker.longitude},${marker.latitude}.json?&access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`

            axios.get(url)
                .then(({ data }) => {
                    if(data.features && data.features.length > 0 && data.features[0].place_name) {
                        setNewLocationName(data.features[0].place_name)
                    }
                })
                .catch(err => {
                    console.log('error with reverse geocoding: ' + err)
                });
        }

    }, [marker]);

    console.log(newLocationName);

    const descriptionCharacterLimit = 15;

    return (
        <div className="create-post-container">
            <h1 className="h1-findr-title">Share a new (location/activity)</h1>


            <form className="create-post-input-container" onSubmit={handleSubmit(createPostAPICall)}>

                <div className="input-container">
                    <input
                        name="name"
                        className="input user-post-name"
                        placeholder="Name (Required)"
                        ref={register({ required: true, maxLength: 10 })}
                    />
                    {errors.name && handleFormValidation("Name", errors.name.type)}
                </div>

                <div className="input-container">
                    <textarea
                        name="description"
                        className="input user-post-description"
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

                <div className="input-container">
                    <input
                        name="location"
                        className="input user-post-location"
                        placeholder={`${newLocationName}: ${marker.latitude}, ${marker.longitude}`}
                        disabled={true}
                        ref={register}
                    />
                </div>


                <input
                    name="submit"
                    className="submit-button"
                    type="submit"
                />


            </form>


        </div>

    )
}
