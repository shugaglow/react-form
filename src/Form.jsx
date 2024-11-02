import { useState } from "react"

function Form(){
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")


    const fullNameCollector = (e) =>{
        
        setFullname(e.target.value)
        // console.log(fullname)
    }

    const emailCollector = (e)=>{
        setEmail(e.target.value)
        // console.log(email)
    }
    return(
        <div>
            <div className="form">
            <form>
                <div className="input-group">
                <label htmlFor="fullname">Enter Full Name</label>
                <input 
                type="text" 
                name="fullname" 
                id="fullname"
                placeholder="Enter your full name"
                value={fullname || ""}
                onChange={(e)=>fullNameCollector(e)}/>
                </div>

                <div className="input-group">
                    <label htmlFor="email">Enter Your Email</label>
                    <input 
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email || ""}
                    onChange={(e)=>emailCollector(e)}
                    />
                </div>
            </form>
        </div>
        </div>
    )
}

export default Form