// // import React, { useState } from "react";
// // export const Login = () => {
// //     const [values, setValues] = useState({
// //         email: '',
// //         password: ''
// //     });
// //     const handleChangeEvent = (key, value) => {
// //         setValues({
// //             ...values,
// //             [key]: value
// //         })
// //         return (
// //             <>
// //                 <div>
// //                     <h1 style={{ color: "blue", marginTop: 40, background: "black" }}> Login Here</h1>
// //                     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
// //                         <div style={{ width: 500 }}>
// //                             <div className="form-group">
// //                                 <label >Email address</label>
// //                                 <input type="email"
// //                                     className="form-control"
// //                                     placeholder="name@example.com"
// //                                     value={values.email}
// //                                     onChange={(event) => { handleChangeEvent('email', event.target.value) }} />
// //                                 <p className="text-danger">{errors["email"]}</p>
// //                             </div>
// //                             <a href="/signup"> Don't have an account ? Signup here</a>
// //                         </div>
// //                         <input style={{ margin: 10, }} type="text" />Email <br></br>
// //                         <input type="password" />password <br />
// //                         <a href="/signup"> Don't have an account ? Signup here</a>


// //                     </div>
// //                     <input style={{ margin: 10, }} type="text" />Email <br></br>
// //                     <input type="password" />password <br />
// //                     <button className="btn btn-primary" style={{ marginTop: 40 }} > Login</button>
// //                     <a href="/signup"> Don't have an account ? Signup here</a>

// //                 </div>

// //             </>


// //         )
// //     }






// import React, { useState } from "react";

// export const Login = () => {
//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     });
//     const [errors, setErrors] = useState({
//         email: '',
//         password: ''

//     });

//     const handleChangeEvent = (key, value) => {
//         setValues({
//             ...values,
//             [key]: value
//         });
//     };

//     return (
//         <div>
//             <h1 style={{ color: "blue", marginTop: 40 }}> Login Here</h1>
//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
//                 <div style={{ width: 500 }}>
//                     <div className="form-group">
//                         <label>Email address</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             placeholder="name@example.com"
//                             value={values.email}
//                             onChange={(event) => handleChangeEvent('email', event.target.value)}
//                         />
//                         {/* Assuming errors is a state or prop, otherwise this will throw an error */}
//                         {/* <p className="text-danger">{errors["email"]}</p> */}
//                     </div>
//                     <div className="form-group">
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Enter your password"
//                             value={values.password}
//                             onChange={(event) => handleChangeEvent('password', event.target.value)}
//                         />
//                     </div>
//                     <button className="btn btn-primary" style={{ marginTop: 20 }}>Login</button>
//                     <div style={{ marginTop: 10 }}>
//                         <a href="/signup">Don't have an account? Signup here</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };









































// import { useState } from "react";
// import { object, string } from "yup";
// import axios from 'axios';

// export const Login = () => {
//     const loginSchema = object({
//         email: string().email().required(),
//         password: string().min(4).max(10).required(),
//     });

//     const [values, setValues] = useState({
//         username: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({
//         username: '',
//         password: ''
//     });

//     const handleChangeEvent = (key, value) => {
//         setValues({
//             ...values,
//             [key]: value
//         });

//         if (errors[key]) {
//             setErrors({
//                 ...errors,
//                 [key]: ''
//             });
//         }
//     };

//     const handleSubmit = () => {
//         loginSchema.validate(values, { abortEarly: false })
//             .then((res) => {
//                 setErrors({});
//                  loginUser()
//                 console.log(res);
//             }).catch((validError) => {
//                 let errorObj = {};
//                 validError.inner.forEach(error => {
//                     errorObj[error.path] = error.message;
//                 });
//                 setErrors(errorObj);
//             });
//     };

//     const loginUser = () => {
//         axios({
//             method: "POST",
//             url: 'https://fakestoreapi.com/auth/login',
//             body:JSON.stringify({
//                 username: values.email,
//                 password: values.password
//             })
        
//         }).then((res) => {
//             console.log(res.data,"login Response")
//             alert("success")
//             window.location.href = "/feed";
//         }).catch((error) => {
//             alert("Login failed");
//         });
//     };

//     return (
//         <>
//             <h1 style={{ color: "blue", marginTop: 40 }}>Login Here</h1>
//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
//                 <div style={{ width: 500 }}>
//                     <div className="form-group">
//                         <label>Email address</label>
//                         <input type="email"
//                             className="form-control"
//                             placeholder="name@example.com"
//                             value={values.email}
//                             onChange={(event) => { handleChangeEvent('email', event.target.value) }} />
//                         <p className="text-danger">{errors["email"]}</p>
//                     </div>
//                     <div className="form-group">
//                         <label>Password</label>
//                         <input type="password"
//                             className="form-control"
//                             value={values.password}
//                             onChange={(event) => { handleChangeEvent('password', event.target.value) }}
//                         />
//                         <p className="text-danger">{errors["password"]}</p>
//                     </div>
//                 </div>
//             </div>
//             <button className="btn btn-primary" style={{ marginTop: 40 }} onClick={handleSubmit}>Login</button> <br />
//             <a href="/signup">Don't have an account? Signup here</a>
//         </>
//     );
// };






































import axios from "axios";
import { useState } from "react";
import { object, string } from "yup";

export const Login = () => {
    const loginSchema = object({
        email: string().email().required(),
        password: string().min(4).max(10).required(),
    });

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChangeEvent = (key, value) => {
        setValues({
            ...values,
            [key]: value
        });

        if (errors[key]) {
            setErrors({
                ...errors,
                [key]: ''
            });
        }
    };

    const handleSubmit = () => {
        loginSchema.validate(values, { abortEarly: false })
            .then((res) => {
                setErrors({});
                loginUser();
                console.log(res);
            }).catch((validError) => {
                let errorObj = {};
                validError.inner.forEach(error => {
                    errorObj[error.path] = error.message;
                });
                setErrors(errorObj);
            });
    };

    const loginUser = () => {
        
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.email,  // Assuming email is used as username for the fake store API
                password: values.password
            })
        })
    //    setTimeout(()=>{
    //     localStorage.removeItem("AUTH_TOKEN")
    //    },1500000)
        .then(res => res.json())
            .then(json => {
                if (json.token) {
                    localStorage.setItem("AUTH_TOKEN", json.token)
                    window.location.href = "/feed";
                } else {
                    alert("Login failed");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Login failed");
            });
            
    };

    return (
        <>
            <h1 style={{ color: "blue", marginTop: 40 }}>Login Here</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <div style={{ width: 500 }}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={values.email}
                            onChange={(event) => { handleChangeEvent('email', event.target.value) }} />
                        <p className="text-danger">{errors["email"]}</p>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            value={values.password}
                            onChange={(event) => { handleChangeEvent('password', event.target.value) }}
                        />
                        <p className="text-danger">{errors["password"]}</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 40 }} onClick={handleSubmit}>Login</button> <br />
            <a href="/signup">Don't have an account? Signup here</a>
        </>
    );
};

































// import React, { useState } from "react";
// import { object, string } from "yup";

// export const Login = () => {
//     const loginSchema = object({
//         email: string().email().required(),
//         password: string().min(4).max(10).required(),
//     });

//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({
//         email: '',
//         password: ''
//     });

//     const [products, setProducts] = useState([]);

//     const handleChangeEvent = (key, value) => {
//         setValues({
//             ...values,
//             [key]: value
//         });

//         if (errors[key]) {
//             setErrors({
//                 ...errors,
//                 [key]: ''
//             });
//         }
//     };

//     const handleSubmit = () => {
//         loginSchema.validate(values, { abortEarly: false })
//             .then((res) => {
//                 setErrors({});
//                 loginUser();
//                 console.log(res);
//             }).catch((validError) => {
//                 let errorObj = {};
//                 validError.inner.forEach(error => {
//                     errorObj[error.path] = error.message;
//                 });
//                 setErrors(errorObj);
//             });
//     };

//     const loginUser = () => {
//         fetch('https://fakestoreapi.com/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: values.email,  // Assuming email is used as username for the fake store API
//                 password: values.password
//             })
//         })
//             .then(res => res.json())
//             .then(json => {
//                 if (json.token) {
//                     localStorage.setItem("AUTH_TOKEN", json.token);
//                     fetchProducts(json.token); 
//                     window.location.href="/feed" // Fetch products after successful login
//                 } else {
//                     alert("Login success");
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 alert("Login failed");
//             });
//     };

//     const fetchProducts = (token) => {
//         fetch('https://fakestoreapi.com/products', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 setProducts(data);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     };

//     return (
//         <>
//             <h1 style={{ color: "blue", marginTop: 40 }}>Login Here</h1>
//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
//                 <div style={{ width: 500 }}>
//                     <div className="form-group">
//                         <label>Email address</label>
//                         <input type="email"
//                             className="form-control"
//                             placeholder="name@example.com"
//                             value={values.email}
//                             onChange={(event) => { handleChangeEvent('email', event.target.value) }} />
//                         <p className="text-danger">{errors["email"]}</p>
//                     </div>
//                     <div className="form-group">
//                         <label>Password</label>
//                         <input type="password"
//                             className="form-control"
//                             value={values.password}
//                             onChange={(event) => { handleChangeEvent('password', event.target.value) }}
//                         />
//                         <p className="text-danger">{errors["password"]}</p>
//                     </div>
//                 </div>
//             </div>
//             <button className="btn btn-primary" style={{ marginTop: 40 }} onClick={handleSubmit}>Login</button> <br />
//             <a href="/signup">Don't have an account? Signup here</a>

//             {/* Display Products */}
//             {products.length > 0 && (
//                 <div>
//                     <h2>Products</h2>
//                     <ul>
//                         {products.map(product => (
//                             <li key={product.id}>{product.title}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </>
//     );
// };





