import { useState } from "react";


function FormSection () {


const [emailError, setEmailError] = useState("");
const [passwordError,setPasswordError]=useState("");
const [confirmPasswordError, setConfirmPasswordError]=useState("");

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
        //pattern = /^\S+@\S+\.\S+$/;
        // testValue = pattern.test(e.value);
            testValue=/^\S+@\S+\.\S+$/.test(e.value);
            if(!testValue){
                setEmailError(e.name+" is not valid. ");
            //console.log(e.name+" is not valid. ");
            }
        }
        if(e.name === "password" ){
            pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/;
            testValue = pattern.test(e.value);
            if(!testValue){
                setPasswordError(e.name+" is not valid. ");

            // console.log(e.name+" is not valid. ");
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
    }


// console.log(e);
}



    return(
        <div className = "form-banner bg-white mb-3">
            <div classname = "col"> 
                <form >
                        <div className="mx-auto">
                            <button id="submit-btn" type="submit" className="mt-3 text-white btn btn-success btn-sm" >CREATE ACCOUNT</button>
                        </div>
                        <br/>

                        <label for="email" className="form-label fw-bold text-dark">Email: <span className="text-success">*</span></label>
                        <input id="email" name="email" type="text" className="form-control fst-italic" placeholder="johnsmith@gmail.com" onBlur={(event) => {validation(event.target)}}/>  
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
