import { useState } from "react";
import { object, string } from "yup";
import axios from 'axios';

export const Signup = () => {

    const sinupSchema = object({
        name: string().min(1).max(20).required(),
        email: string().email().required(),
        password: string().min(4).max(10).required(),
        confirmPassword: string().min(4).max(10).required().test(
            'validate-confim-password',
            'Passwords not matching',
            function(confirmPass) {
               
                return this.parent.password === confirmPass;

            }
        ),
    })

    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    });
    const handleChangeEvent = (key, value) => {
        setValues({
            ...values,
            [key]: value
        })



        if (errors[key]) {
            setErrors({
                ...errors,
                [key]: ''
            })

        }


    }
// const singupUser=()=>{
//      axios({
// //         method:"POST",
// //         url:"",
// //         data:{
// //             name:values.name,
// //             email:values.email,
// //             password:values.password
// //         }

// //     }).then((res)=>{
//    // window.location href="/login"

//   //  }).catch((error)=>{
//     //alert ("signup failed")
//    // })

// // }
    const [errors, setErrors] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    });
    /// only after completeing the validatuon we can send it to API

    const handleSubmit = () => {
       


        sinupSchema.validate(values, { abortEarly: false })
            .then((res) => {
                setErrors({})
                // singupUser()
                console.log(res);

            }).catch((validError) => {
                let errorObj = {};
                validError.inner.forEach(validError => {

                    errorObj[validError.path] = validError.message;
                });
                setErrors(errorObj);
            })

    }
    return (

        <>
            <h1 style={{ color: "blue", marginTop: 40, background: "black" }}> Register Here</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <div style={{ width: 500 }}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={values.email}
                            onChange={(event) => { handleChangeEvent('email', event.target.value) }} />
                        <p className="text-danger">{errors["email"]}</p>
                    </div>
                    <div className="form-group">
                        <label >FullName</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Your Name"
                            value={values.name}
                            onChange={(event) => { handleChangeEvent('name', event.target.value) }}

                        />
                        <p className="text-danger">{errors["name"]}</p>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="text"
                            className="form-control"
                            value={values.password}
                            onChange={(event) => { handleChangeEvent('password', event.target.value) }}
                        />
                        <p className="text-danger">{errors["password"]}</p>
                    </div>
                    <div className="form-group">
                        <label >Confirm Password</label>
                        <input type="text" className="form-control"
                            value={values.confirmPassword}
                            onChange={(event) => { handleChangeEvent('confirmPassword', event.target.value) }}
                        />
                        <p className="text-danger">{errors["confirmPassword"]}</p>
                    </div>

                </div>

            </div>

            <button className="btn btn-primary" style={{ marginTop: 40 }} onClick={handleSubmit}>Submit</button> <br />
            <a href="/login"> Already have an account ? Login Here</a>




        </>

    )
}

