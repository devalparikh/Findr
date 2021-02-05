
export const handleFormValidation = (input_name: string, error_type: string) => {
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