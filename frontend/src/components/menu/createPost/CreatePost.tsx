import React, { useEffect, useState } from 'react'
import { handleFormValidation } from '../../form/formValidator';
import { useForm, SubmitHandler } from "react-hook-form";
import ImageUploader from "../../fileUploader/FileUploader";
import { iMarker } from '../../../containers/main/Main';
import axios from 'axios';
import './CreatePost.css';

import './CreatePost.css';

interface Inputs {
    name: string,
    description: string,
    location?: string
}

interface iCreatePost {
    marker: iMarker;
}

const MAX_DESCRIPITON_CHARACTER_LIMIT = 15;
const MAX_IMAGES_COUNT = 5;
const MAX_IMAGE_SIZE = 5242880;

export default function CreatePost(props: iCreatePost) {
    const { marker } = props;

    const [newLocationName, setNewLocationName] = useState("");
    const [uploadedPictures, setUploadedPictures] = useState([] as Array<Array<File>>);

    const { register, handleSubmit, watch, errors } = useForm();
    const [uploadedPictures, setUploadedPictures] = useState([] as Array<Array<File>>);
    const watchAllFields = watch();


    const createPostAPICall: SubmitHandler<Inputs> = data => {
        console.log(data);
    }

    };
    
    };
    const onDrop = (pictures: Array<File>) => {
        setUploadedPictures([...uploadedPictures, pictures] as Array<Array<File>>);
    };
    // Everytime marker updates
    useEffect(() => {
        // Reverse Geocoding for marker's coordinates
        // Coordinates -> location (poi/address)
        if (marker) {
            const reverseGeocodingAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${marker.longitude},${marker.latitude}.json?&access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`


            // Make API Call for geocoding (not using useFetch for different api call format)
            axios.get(reverseGeocodingAPI)
                .then(({ data }) => {
                    if(data.features && data.features.length > 0 && data.features[0].place_name) {
                        // Set location to display as the most detailed map feature acquired from reverseGeocodingAPI call
                        // Usually will be a poi or address
                        setNewLocationName(data.features[0].place_name)
                    }
                })
                .catch(err => {
                    console.log('error with reverse geocoding: ' + err)
                });
        }
    }, [marker]);

    return (
        <div className="create-post-container" style={{ marginBottom: "40px" }}>
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
                        ref={register({ required: true, maxLength: MAX_DESCRIPITON_CHARACTER_LIMIT })}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {errors.description && handleFormValidation("Description", errors.description.type)}

                        {
                            watchAllFields.description
                                ?
                                MAX_DESCRIPITON_CHARACTER_LIMIT - watchAllFields.description.length < 0
                                    ?
                                    <p className="form-info error-text">
                                        Characters remaining: {MAX_DESCRIPITON_CHARACTER_LIMIT - watchAllFields.description.length}
                                    </p>

                                    :
                                    <p className="form-info">
                                        Characters remaining: {MAX_DESCRIPITON_CHARACTER_LIMIT - watchAllFields.description.length}
                                    </p>

                                :
                                <p className="form-info">
                                    Characters remaining: {MAX_DESCRIPITON_CHARACTER_LIMIT}
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

                <div className="input-container">
                    <ImageUploader
                        withIcon={true}
                        buttonText={uploadedPictures[uploadedPictures.length - 1] && uploadedPictures[uploadedPictures.length - 1].length > 0 ? 'Add more images' : 'Choose images'}
                        label="Upload Images"
                        labelStyles={{ textAlign: 'center', color: 'dimgray' }}
                        fileContainerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.664)" }}
                        onChange={onDrop}
                        imgExtension={['.jpg', '.png', '.jpeg', '.gif']}
                        maxFileSize={MAX_IMAGE_SIZE}
                        maxFileCount={MAX_IMAGES_COUNT}
                        withPreview={true}
                        dragLabel="or drag & drop images"
                        previewMaxHeight={500}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className="form-info">
                            Max file size: 5mb <br />
                        </p>
                        <p className="form-info">
                            Accepts: .jpg, .jpeg, .png, .gif
                        </p>
                    </div>
                </div>


                <input
                    name="submit"
                    className="submit-button"
                    type="submit"
                    style={{ marginBottom: "40px" }}
                />

            </form>


        </div>

    )
}
