import reCAPTCHA from "react-google-recaptcha"

const Form = () =>{
    return(
            <form>
                <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="input"/>
                    <reCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY} 
                    ref={captchaRef}
                    />
                <button>Submit</button>
            </form>
    )
}
export default Form