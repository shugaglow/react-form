import { useState } from "react"
import styles from "./form.module.css"
import { FaApple } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import Onboarding from "/Images/onboarding-image.png"

function Form(){
    const [formDetails, setFormDetails] = useState({
        fullname: "", 
        email: "",
        password: "",
    })

    // const setFormDetails = (e)=>{


    // }

    const formSubmitter = (e)=>{
        e.preventDefault()

        

    }

    

    return(
        <div className={styles.mainContainer}>

            <div className={styles.leftContainer}>
            <div className={styles.topContainer}>
                    <h2>Hello There!</h2>
                    <p>Keep your online busines organized. <br />For free</p>
            </div>
            
                <img src={Onboarding} alt="onboarding image" />

            </div>

            <div className={styles.rightContainer}>

                <div className={styles.formContainer}>
        <form className={styles.formElement}>
            <div className={styles.inputGroup}>
            <label htmlFor="fullname">FullName</label>
            <input 
            type="text" 
            name="fullname" 
            id="fullname"
            className={styles.inputContainer}
            placeholder="Enter your full name"
            value={formDetails.fullname || ""}
            onChange={(e)=>setFormDetails({...formDetails, fullname:e.target.value})}/>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input 
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                className={styles.inputContainer}
                value={formDetails.email || ""}
                onChange={(e)=>setFormDetails({...formDetails, email:e.target.value})}
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={styles.inputContainer}
                value={formDetails.password || ""}
                onChange={(e)=>setFormDetails({...formDetails, password:e.target.value})}
                />
                <p>forget password?</p>
            </div>

            <div className={styles.buttonContainer}>
                <button onClick={(e)=>formSubmitter(e)}>Sign Up</button>
            </div>

            <div className={styles.bottomContainer}>
                <p>Or sign in with</p>
                <div className={styles.icons}>
                <FaApple  />
                <FaGoogle />
                <FaSquareFacebook />
                </div>

            </div>
        </form>
                </div>
            </div>
        </div>
    )
}

export default Form