import { useState } from "react";
import yup from 'yup';


export const SignupPage = () => {
    const [values,setValues]=useState({
        email:'',
        name:'',
        password:'',
        confirmPassword:'',

    });
    

    const handleChangeEvent=(key,value)=>{

       setValues({
        ...values,
        [key]: value,
    })

    }

    const handleSubmit=()=>{
        console.log("submitclicked",values)
    }
    return (
        
       
        <>
        <h1 style={{fontSize:30,color:"blue",marginTop:30}}>Register Here</h1>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:50 }}>
            <div>
                
            </div>

                <div style={{width:500}}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" 
                        className="form-control"
                         value={values.email}
                          placeholder="name@example.com" 
                            onChange={(event)=>{handleChangeEvent('email',event.target.value)}}
                          />
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" 
                        className="form-control"
                        value={values.name}
                         placeholder="Your Name"
                         onChange={(event)=>{handleChangeEvent('name',event.target.value)}}
                          />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password"
                         className="form-control"
                         value={values.password}
                         onChange={(event)=>{handleChangeEvent('password',event.target.value)}}
                          />
                    </div>
                    <div className="form-group">
                        <label >Confirm Password</label>
                        <input type="password"
                         className="form-control"
                         value={values.confirmPassword}
                         onChange={(event)=>{handleChangeEvent('confirmPassword',event.target.value)}} />
                    </div>

                </div>
                

            </div>
            <button style={{marginTop:20}} className="btn btn-primary"
            onClick={handleSubmit}>Signup</button> <br/>
            <a href="/login">Have an account ?Login Here</a>
        </>
    )
}
