import { useState } from "react";


function FormSection () {


const [emailError, setEmailError] = useState("");
const [passwordError,setPasswordError]=useState("");
const [confirmPasswordError, setConfirmPasswordError]=useState("");
const [firstNameError, setFirstNameError]=useState("");
const [lastNameError, setLastNameError]=useState("");
const [npiNumberError, setNPINumberError]=useState("");
const [bizAddressError, setBizAddressError]=useState("");
const [zipCodeError, setZipCodeError]=useState("");
const [countryError, setCountryError]=useState("");
const [telephoneError, setTelephoneError]=useState("");




let [password, setPassword] = useState("");


const validation = (e) => {
let pattern="";
let testValue="";
//let password = "";
//let confirmPassword = "";



    if(e.value === ""){
        console.log(e.name+" cannot be empty.");
    } else {

        if(e.name === "email" ){
            testValue=/^\S+@\S+\.\S+$/.test(e.value);
            if(!testValue){
                setEmailError(e.name+" is not valid. ");
            }
        }
        if(e.name === "password" ){
            pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/;
            testValue = pattern.test(e.value);
            if(!testValue){
                setPasswordError(e.name+" is not valid. ");
            }
            //password = e.value;
            setPassword (e.value);
        }
        if(e.name === "confirm-password"){
            //confirmPassword = e.value;
           console.log(e.value + "confirm pwd");
            console.log(password + "pwd");
            if(password !== e.value){
                setConfirmPasswordError(e.name+" does not match")
            }
        }

        if(e.name === "firstname"){
            pattern =  /^[a-zA-Z\-\’]+( [a-zA-Z\-\’]+)+$/;
            testValue = pattern.test(e.value);
            if(!testValue){
                setFirstNameError(e.name+" is not allowed. Please enter your first name correctly")
            }
        }

        if(e.name === "lastname"){
            pattern =  /^[a-zA-Z\-\’]+( [a-zA-Z\-\’]+)+$/;
            testValue = pattern.test(e.value);
            if(!testValue){
                setLastNameError(e.name+" is not allowed. Please enter your last name correctly")
            }
        }

        if(e.name === "npinumber"){
            pattern = /^ [0-9] {10}$/;
            testValue = pattern.test(e.value);
            if(!testValue){
                setNPINumberError(e.name+" is not valid")
            }
        }

        if(e.name === "bizaddress"){
            pattern = /^[a-zA-Z\s\d\/]*\d[a-zA-Z\s\d\/]*$/; //^d+w*s*(?:(?:[–/]?s*)?d*(?:s*d+/s*)?d+)?s+/;
            testValue = pattern.test(e.value);
            if(!testValue){
                setBizAddressError(e.name+" is not valid")
            }
        }

        if(e.name === "zipcode" ){
            testValue=/^\d{5}$|^\d{5}-\d{4}$/.test(e.value);
            if(!testValue){
                setZipCodeError(e.name+" is not valid. ");
            
            }
        }
            
        if(e.name === "telephone" ){
            testValue=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(e.value);
            if(!testValue){
                setTelephoneError(e.name+" is not valid. ");
            }
        }

        if(e.name === "country" ){
            testValue=/\S\s([^\r\n]*?)\s*\+[0-9]+$/.test(e.value);
            if(!testValue){
                setCountryError(e.name+" is not valid. ");
            
            }
        }
        
    }
}

    return(
        <div className = "form-banner bg-white mb-3">
            <div classname = "col"> 
                <form >
                        <div className="mx-auto">
                            <button id="submit-btn" type="submit" className="mt-3 text-white btn btn-success btn-sm" >To join AVAILITY, create an account</button>
                        </div>
                        <br/>

                        <label for="FirstName" className="form-label fw-bold text-dark">First Name: <span className="text-success">*</span></label>
                        <input id="firstname" name="firstname" type="text" className="form-control fst-italic" placeholder="Essien" onBlur={(event) => {validation(event.target)}}/>  
                        <span id="firstname-error" className="text-danger small">{firstNameError}</span>
                        <br/>

                        <label for="LastName" className="form-label fw-bold text-dark">Last Name: <span className="text-success">*</span></label>
                        <input id="lastname" name="lastname" type="text" className="form-control fst-italic" placeholder="Ehle" onBlur={(event) => {validation(event.target)}}/>  
                        <span id="lastname-error" className="text-danger small">{lastNameError}</span>
                        <br/>

                        <label for="npiNumber" className="form-label fw-bold text-dark">NPI number: <span className="text-success">*</span></label>
                        <input id="npinumber" name="npinumber" type="number" className="form-control fst-italic" placeholder="9999999999" onBlur={(event) => {validation(event.target)}}/>  
                        <span id="npinumber-error" className="text-danger small">{npiNumberError}</span>
                        <br/>

                        <label for="BusinessAddress" className="form-label fw-bold text-dark">Business Address: <span className="text-success">*</span></label>
                        <input id="bizaddress" name="businessaddress" type="text" className="form-control fst-italic" placeholder="21. Victor Wilson Street, Suit 21, May City, Michigan" 
                        onBlur={(event) => {validation(event.target)}}/>  
                        <span id="bizaddress-error" className="text-danger small">{bizAddressError}</span>
                        <br/>

                        <label for="ZipCode" className="form-label fw-bold text-dark">Zip Code: <span className="text-success">*</span></label>
                        <input id="zipcode" name="zipcode" type="text" className="form-control fst-italic" placeholder="35555-8789" onBlur={(event) => {validation(event.target)}}/>  
                        <span id="zipcode-error" className="text-danger small">{zipCodeError}</span>
                        <br/>

                        <label for="Country" className="form-label fw-bold text-dark">Country: <span className="text-success">*</span></label>
                        <input id="country" name="country" type="text" className="form-control fst-italic" placeholder="US" onBlur={(event) => {validation(event.target)}}/>  
                        <span id="country-error" className="text-danger small">{countryError}</span>
                        <br/>

                        <label for="Telephone" className="form-label fw-bold text-dark">Telephone number: <span className="text-success">*</span></label>
                        <input id="telephone" name="telephone" type="tel" className="form-control fst-italic" placeholder="(123)-456-7890" onBlur={(event) => {validation(event.target)}}/>  
                        <span id="telephone-error" className="text-danger small">{telephoneError}</span>
                        <br/>

                        <label for="Email" className="form-label fw-bold text-dark">Email Address: <span className="text-success">*</span></label>
                        <input id="email" name="email" type="email" className="form-control fst-italic" placeholder="johnsmith@gmail.com" onBlur={(event) => {validation(event.target)}}/>  
                        <span id="email-error" className="text-danger small">{emailError}</span>
                        <br/>

                        <label for="InputPasswordS" className="form-label fw-bold text-dark">Choose Password: <span className="text-success">*</span></label>
                        <input name="password" type="password" className="form-control" id="InputPassword1" onBlur={(event) => {validation(event.target)}} />
                        <span id="password-error" className="text-danger small">{passwordError}</span>
                        <br/>

                        <label for="ConfirmPasswordS" className="form-label fw-bold text-dark">Confirm Password<span className="text-success">*</span></label>
                        <input name="confirm-password" type="password" className="form-control" id="InputPassword1" onBlur={(event) => {validation(event.target)}} />
                        <span id="pwdconfirmation-error" className="text-danger small">{confirmPasswordError}</span>
                        <br/>

                        <div className="d-grid mx-auto">
                            <button id="submit-btn" type="submit" className="fw-bold mt-3 text-white btn btn-success btn-lg" >REGISTER NOW!</button>
                        </div>
        
                </form>
            </div>
        </div>
    );
    }
    export default FormSection;
