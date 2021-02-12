// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import UploadIcon from '../../images/UploadIcon.svg';
import './FileUploader.css';

const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
};

const ERROR = {
    NOT_SUPPORTED_EXTENSION: 'NOT_SUPPORTED_EXTENSION',
    FILESIZE_TOO_LARGE: 'FILESIZE_TOO_LARGE',
    MAXIMUM_FILES_REACHED: 'MAXIMUM_FILES_REACHED'
}

interface Props {
    className?: string
    fileContainerStyle?: object
    onChange?: (files: File[], pictures: string[]) => void
    buttonClassName?: string
    buttonStyles?: object
    withPreview?: boolean
    previewMaxHeight?: number
    accept?: string
    name?: string
    withIcon?: boolean
    buttonText?: string
    withLabel?: boolean
    label?: string
    dragLabel?: string
    labelStyles?: object
    labelClass?: string
    imgExtension?: string[]
    maxFileSize?: number
    maxFileCount?: number
    fileTypeError?: string
    fileSizeError?: string
    maxFileCountError?: string
    errorClass?: string
    errorStyle?: object
    singleImage?: boolean
    style?: object
    defaultImages?: string[]
}

class FileUploader extends React.Component<Props>  {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [...props.defaultImages],
            files: [],
            fileErrors: [],
            dragDropStyle: ""
        };
        this.inputElement = '';
        this.onDropFile = this.onDropFile.bind(this);
        this.onUploadClick = this.onUploadClick.bind(this);
        this.triggerFileUpload = this.triggerFileUpload.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.files !== this.state.files) {
            this.props.onChange(this.state.files, this.state.pictures);
        }
    }

    /*
     Load image at the beggining if defaultImage prop exists
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultImages !== this.props.defaultImages) {
            this.setState({ pictures: nextProps.defaultImages });
        }
    }

    /*
    Check file extension (onDropFile)
    */
    hasExtension(fileName) {
        const pattern = '(' + this.props.imgExtension.join('|').replace(/\./g, '\\.') + ')$';
        return new RegExp(pattern, 'i').test(fileName);
    }

    /*
    Handle file validation
    */
    addFiles(files) {
        const allFilePromises = [];
        const fileErrors = [];

        // Iterate over all uploaded files
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let fileError = {
                name: file.name,
            };

            // Check if max file count will be exceeded
            if (this.props.maxFileCount && this.state.pictures.length + (i + 1) > this.props.maxFileCount) {
                fileError = Object.assign(fileError, {
                    type: ERROR.MAXIMUM_FILES_REACHED
                });
                fileErrors.push(fileError);
                continue;
            }

            // Check for file extension
            if (!this.hasExtension(file.name)) {
                fileError = Object.assign(fileError, {
                    type: ERROR.NOT_SUPPORTED_EXTENSION
                });
                fileErrors.push(fileError);
                continue;
            }
            // Check for file size
            if (file.size > this.props.maxFileSize) {
                fileError = Object.assign(fileError, {
                    type: ERROR.FILESIZE_TOO_LARGE
                });
                fileErrors.push(fileError);
                continue;
            }

            allFilePromises.push(this.readFile(file));
        }

        this.setState({
            fileErrors
        });

        const { singleImage } = this.props;

        Promise.all(allFilePromises).then(newFilesData => {
            const dataURLs = singleImage ? [] : this.state.pictures.slice();
            const files = singleImage ? [] : this.state.files.slice();

            newFilesData.forEach(newFileData => {
                dataURLs.push(newFileData.dataURL);
                files.push(newFileData.file);
            });

            this.setState({ pictures: dataURLs, files: files });
        });
    }

    onDropFile(e) {
        const files = e.target.files;
        this.addFiles(files);
    }

    onUploadClick(e) {
        // Fixes https://github.com/JakeHartnell/react-images-upload/issues/55
        e.target.value = null;
    }

    /*
       Read a file and return a promise that when resolved gives the file itself and the data URL
     */
    readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Read the image via FileReader API and save image result in state.
            reader.onload = function (e) {
                // Add the file name to the data URL
                let dataURL = e.target.result;
                dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
                resolve({ file, dataURL });
            };

            reader.readAsDataURL(file);
        });
    }

    /*
     Remove the image from state
     */
    removeImage(picture) {
        const removeIndex = this.state.pictures.findIndex(e => e === picture);
        const filteredPictures = this.state.pictures.filter((e, index) => index !== removeIndex);
        const filteredFiles = this.state.files.filter((e, index) => index !== removeIndex);

        this.setState({ pictures: filteredPictures, files: filteredFiles }, () => {
            this.props.onChange(this.state.files, this.state.pictures);
        });
    }

    /*
     Check if any errors && render
     */
    renderErrors() {
        const { fileErrors } = this.state;
        return fileErrors.map((fileError, index) => {
            return (
                <div className={'errorMessage ' + this.props.errorClass} key={index} style={this.props.errorStyle}>
                    {console.log(fileError)}
                    * {fileError.name}
                    {fileError.type === ERROR.FILESIZE_TOO_LARGE && this.props.fileSizeError}
                    {fileError.type === ERROR.NOT_SUPPORTED_EXTENSION && this.props.fileTypeError}
                    {fileError.type === ERROR.MAXIMUM_FILES_REACHED && this.props.maxFileCountError}

                </div>
            );
        });
    }

    /*
     Render the upload icon
     */
    renderIcon() {
        if (this.props.withIcon) {
            return <img src={UploadIcon} onClick={this.triggerFileUpload} className="uploadIcon" alt="Upload Icon" />;
        }
    }

    /*
     Render label
     */
    renderLabel() {
        if (this.props.withLabel) {
            return <p className={this.props.labelClass} style={this.props.labelStyles}>{this.props.label}</p>
        }
    }

    /*
     Render drag and drop label
     */
    renderDragLabel() {
        if (this.props.dragLabel) {
            return <p className={this.props.labelClass + " dragLabel"} style={this.props.labelStyles}>{this.props.dragLabel}</p>
        }
    }

    /*
     Render preview images
     */
    renderPreview() {
        let previewClass = "";
        if(this.props.previewMaxHeight) {
            previewClass = "uploadPicturesWrapperScroll";
        }
        return (
            <div className={"uploadPicturesWrapper " + previewClass} style={{ maxHeight: this.props.previewMaxHeight }}>
                {/* <FlipMove enterAnimation="fade" leaveAnimation="fade" style={styles}> */}
                {this.renderPreviewPictures()}
                {/* </FlipMove> */}
            </div>
        );
    }

    renderPreviewPictures() {
        return this.state.pictures.map((picture, index) => {
            return (
                <div key={index} className="uploadPictureContainer">
                    <div className="deleteImage" onClick={() => this.removeImage(picture)}>X</div>
                    <img src={picture} className="uploadPicture" alt="preview" />
                </div>
            );
        });
    }

    /*
     On button click, trigger input file to open
     */
    triggerFileUpload() {
        this.inputElement.click();
    }

    clearPictures() {
        this.setState({ pictures: [] })
    }


    render() {

        const dragOver = (e: any) => {
            e.preventDefault();
            this.setState({ dragDropStyle: "dragOver" })
        }

        const dragEnter = (e: any) => {
            this.setState({ dragDropStyle: "" })
            e.preventDefault();
        }

        const dragLeave = (e: any) => {
            e.preventDefault();
            this.setState({ dragDropStyle: "" })
        }

        const fileDrop = (e: any) => {
            e.preventDefault();
            this.setState({ dragDropStyle: "" })
            const files = e.dataTransfer.files;
            let filesArr = Object.keys(files).map((key) => files[key]);
            this.addFiles(filesArr);
        }

        return (
            <div
                className={"fileUploader " + this.props.className + " " + this.state.dragDropStyle} style={this.props.style}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
            >
                <div className="fileContainer" style={this.props.fileContainerStyle}>
                    {this.renderIcon()}
                    {this.renderLabel()}
                    <div className="errorsContainer">
                        {this.renderErrors()}
                    </div>
                    <button
                        type={this.props.buttonType}
                        className={"chooseFileButton " + this.props.buttonClassName}
                        style={this.props.buttonStyles}
                        onClick={this.triggerFileUpload}
                    >
                        {this.props.buttonText}
                    </button>
                    {this.renderDragLabel()}
                    <input
                        type="file"
                        ref={input => this.inputElement = input}
                        name={this.props.name}
                        multiple={!this.props.singleImage}
                        onChange={this.onDropFile}
                        onClick={this.onUploadClick}
                        accept={this.props.accept}
                    />
                    {this.props.withPreview ? this.renderPreview() : null}
                </div>
            </div>
        )
    }
}

FileUploader.defaultProps = {
    className: '',
    fileContainerStyle: {},
    buttonClassName: "",
    buttonStyles: {},
    withPreview: false,
    accept: "image/*",
    name: "",
    withIcon: true,
    buttonText: "Choose images",
    buttonType: "button",
    withLabel: true,
    label: "Max file size: 5mb, accepted: jpg|gif|png",
    labelStyles: {},
    labelClass: "",
    imgExtension: ['.jpg', '.jpeg', '.gif', '.png'],
    maxFileSize: 5242880,
    fileSizeError: " file size is too big",
    fileTypeError: " is not a supported file extension",
    maxFileCountError: " can not be added due to exceeding the maximum number of uploaded files",
    errorClass: "",
    style: {},
    errorStyle: {},
    singleImage: false,
    onChange: () => { },
    defaultImages: []
};

FileUploader.propTypes = {
    style: PropTypes.object,
    fileContainerStyle: PropTypes.object,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    buttonClassName: PropTypes.string,
    buttonStyles: PropTypes.object,
    buttonType: PropTypes.string,
    withPreview: PropTypes.bool,
    previewMaxHeight: PropTypes.number,
    accept: PropTypes.string,
    name: PropTypes.string,
    withIcon: PropTypes.bool,
    buttonText: PropTypes.string,
    withLabel: PropTypes.bool,
    label: PropTypes.string,
    labelStyles: PropTypes.object,
    labelClass: PropTypes.string,
    imgExtension: PropTypes.array,
    maxFileSize: PropTypes.number,
    fileSizeError: PropTypes.string,
    fileTypeError: PropTypes.string,
    errorClass: PropTypes.string,
    errorStyle: PropTypes.object,
    singleImage: PropTypes.bool,
    defaultImages: PropTypes.array
};

export default FileUploader;