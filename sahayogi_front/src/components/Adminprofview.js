import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import './dashboard.css'
import { Link } from 'react-router-dom'
import sahayogi from '../images/logo.jpg'
import { BsPencilSquare } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import {FaPeopleCarry} from 'react-icons/fa';
import {FaUserCheck} from 'react-icons/fa';
import {ImProfile, ImCross} from 'react-icons/im';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
export const Adminprofile = () => {
    const logout=()=>{
        localStorage.clear();
        window.location.replace('/')
    }

    const [viewdata, setViewdata] = useState([]);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('t')
        }
    }

    const ApproveProfile = (id) => {
        const data={id:id}
         axios.put("http://localhost:180/profile/approve/",data ,config)
             .then(result => {
                 if (result.data.success) {
                     
                     alert('Approval Successful');
                 }
                 else {
                  alert('Something went wrong');
                 }
             })
             .catch(()=> {
                 alert('invalid');
             })
     } 


    useEffect(()=>{
        axios.get("http://localhost:180/profile/details")
        .then(result=>{
            console.log(result.data)
            setViewdata(result.data);
        })
        .catch(e=>{
            console.log("something went wrong")
        })
     }, [viewdata])

     
    return (
        <>
            <div className="d-flex" id="wrapper">
                {/* Sidebar */}
                <div className="bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">   <img src= {sahayogi} alt="#" height={200}/>SAHAYOGI HAATH</div>
                    <div className="list-group list-group-flush my-3">
                        <Link to="/dashboard" className="list-group-item list-group-item-action bg-transparent second-text active"><i className="fas fa-tachometer-alt me-2" />Dashboard</Link>
                        </div>
                        <div className="list-group-item list-group-item-action bg-transparent second-text fw-bold  ">
                        <p> Interface</p>
                        <Link to="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-gift me-2" />View Profile</Link>
                        <Link to='/viewuser' className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-comment-dots me-2" /> View Registered User</Link>
                        <Link to="/booking" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-map-marker-alt me-2" />View Worker</Link>
                        <Link to="/addworker" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i className="fas fa-map-marker-alt me-2" />Add Worker</Link>
                    </div>
                </div>
                
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" />
                            <h2 className="fs-2 m-0">Dashboard</h2>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user me-2" />Admin
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link to="/userprofile" className="dropdown-item">Profile</Link></li>
                                        <li><Link to="#" className="dropdown-item" onClick={logout}>Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid px-3">
                        <div className="row g-3 my-2">
                            <div className="col-md-3">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">8</h3>
                                        <p className="fs-5">Workers</p>
                                    </div>
                                    <i className="FaPeopleCarry primary-text border rounded-full secondary-bg p-3"
                                    ><FaPeopleCarry size={40}></FaPeopleCarry></i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5">Registered User</p>
                                    </div>
                                    <i className="FaUserCheck primary-text border rounded-full secondary-bg p-3" >
                                    <FaUserCheck size={40}></FaUserCheck></i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5">Profile</p>
                                    </div>
                                    <i className="ImProfile primary-text border rounded-full secondary-bg p-3" >
                                        <ImProfile size={40}></ImProfile> </i>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">4</h3>
                                        <p className="fs-5">Add Workers</p>
                                    </div>
                                    <i className="AiOutlineUsergroupAdd primary-text border rounded-full secondary-bg p-3" >
                                        <AiOutlineUsergroupAdd size={40}></AiOutlineUsergroupAdd> </i>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <h3 className="fs-4 mb-3">Recent Registred Profile</h3>
                            <div className="container mx-auto">
                                <table className="table bg-white rounded shadow-sm  table-hover">
                                    <thead style={{ fontSize: ".9em" }}>
                                        <tr>
                                            <th scope="col" className=''>Full Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Date of Birth</th>
                                            <th scope="col">Photo</th>
                                            <th scope="col">Verification</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr/>
            {viewdata.map(singleData=>{
            console.log(singleData);
            return (
        <tr>
          <td>{singleData.fullname}</td>
          <td>{singleData.address}</td>
          <td>{singleData.dateofbirth}</td>
          <td><img src={'http://localhost:180/'+singleData.photo} className="img-fluid"/></td>
          <div className='d-flex'>
           <div><Link to=''><i class="fa fa fa-times text-danger fs-4 "></i></Link></div>

           <div className='ml-5'><Link to='#'
          onClick={() => {
                                            ApproveProfile(singleData._id)
                                        }}
          
          ><i class="fa fa-check text-success fs-4"></i></Link></div></div>
        </tr>
            )
        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Invoice</h5>
                        </div>
                        <div className="modal-body">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Adminprofile;