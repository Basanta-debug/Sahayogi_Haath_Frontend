import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Profile from './Profile'
import Home from './home'
import Login from './login'
import Register from './Register'
import Single from './Viewprofile'
import Dashboard from './Dashboard'
import Adminprofile from './Adminprofview'



export default function Content() {
    return (
       <Routes>
       
       
           <Route path='/register' element={<Register/>}></Route>
           <Route path='/login' element={<Login/>}></Route>

         
           
       </Routes>
    )
}
