// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
// import { SignupPage } from './Components/SignupPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductFeed } from './Components/ProductFeed';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const protectedRoute = (props) => {

//   const token = localStorage.getItem("AUTH_TOKEN");s
//   if (token)
//     return props.children;


//   return <Navigate to ="/login"/>
//   }

function App() {
  const token = localStorage.getItem("AUTH_TOKEN");


  return (
    <div className="App">
      <ToastContainer
        position='bottom-right'
        theme='colored'
      />

      <Routes>    

        {/* public   route*/}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* protected route */}
        {/* <Route path="/feed" element={token ? <ProductFeed /> : <Navigate to="/login" />} /> */}
        <Route path='/feed' element={< ProductFeed />} />
      </Routes>

    </div>
  )
}

export default App;
