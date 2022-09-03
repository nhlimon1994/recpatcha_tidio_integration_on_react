import logo from './logo.svg';
import './App.css';
import ReCAPTCHA from "react-google-recaptcha";

import React, { useRef } from 'react';



const recaptchaRef = React.createRef();

function App() {
  // const recaptchaRef = useRef(null)
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  function onSubmit (event) {
      event.preventDefault();
      const recaptchaValue = recaptchaRef.current.getValue();
      // this.props.onSubmit(recaptchaValue);
      console.log('Captcha value on submi:', recaptchaValue);
      if(recaptchaValue && recaptchaValue !== ''){
          // do the submit or your custom logic
      }else{
        alert('Please check your captcha.')
      }
  }




  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={onSubmit}>
        <label>Name</label>
          <input  type="text" name="name" />
          <label>Email</label>
          <input  type="text" name="email" />
          <ReCAPTCHA
            sitekey="6Lc3vM0hAAAAACthpWiJoBOHGGFKAupOLR7eyMmX"
            onChange={onChange}
            ref={recaptchaRef}
          />
        <input  type="submit" value="submit" />
      </form>
      
      </header>
    </div>
  );
}

export default App;
