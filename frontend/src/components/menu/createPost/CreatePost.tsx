import React, { useEffect, useState } from 'react'
import { handleFormValidation } from '../../form/formValidator';
import { useForm, SubmitHandler } from "react-hook-form";
import ImageUploader from "./imageUploader/ImageUploader";

import './CreatePost.css';

interface Inputs {
    name: string,
    description: string,
    location?: string
}

export default function CreatePost() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [uploadedPictures, setUploadedPictures] = useState([] as Array<Array<File>>);
    const watchAllFields = watch();


    const createPostAPICall: SubmitHandler<Inputs> = data => {
        console.log(data);
    }



    const dragOver = (e: any) => {
        e.preventDefault();
    }

    const dragEnter = (e: any) => {
        e.preventDefault();
    }

    const dragLeave = (e: any) => {
        e.preventDefault();
    }

    const fileDrop = (e: any) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        let filesArr = Object.keys(files).map((key) => files[key]);
        if (uploadedPictures.length > 0) {
            let newUploadedPictures = uploadedPictures;
            newUploadedPictures[newUploadedPictures.length - 1] = newUploadedPictures[newUploadedPictures.length - 1].concat(filesArr);
            console.log(newUploadedPictures)
            setUploadedPictures(newUploadedPictures as Array<Array<File>>);
        }

    }

    const onDrop = (pictures: Array<File>) => {
        setUploadedPictures([...uploadedPictures, pictures] as Array<Array<File>>);
    };

    const MAX_DESCRIPITON_CHARACTER_LIMIT = 15;
    const MAX_IMAGES_COUNT = 5;
    const MAX_IMAGE_SIZE = 5242880;


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
                        placeholder="(disabled) Select a location on the map"
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
                />


            </form>


        </div>

    )
}
