import React from 'react'
import './home.css'
import './bootstrap.min.css'
import './animate.css'
import './animate.min.css'
import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'

export default function Navbar() {
    const logout=()=>{
        localStorage.clear();
        window.location.replace('/')
    }


    var log;

if (
    localStorage.getItem('t')
)

log=(
<nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1  class="text-dark">Sahayogi Haath</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link to='/' class="nav-item nav-link active">Home</Link>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Service</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="feature.html" class="dropdown-item">Features</a>
                                <a href="quote.html" class="dropdown-item">Free Quote</a>
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <Link to='#' class="btn btn-success rounded-pill text-light py-2 px-4 ms-lg-5 m-3" onClick={logout}>Logout</Link>
                    <Link to='/viewprofile'><CgProfile size={40} ></CgProfile></Link>
                </div>
            </nav>



)

else{
    var log=(
<nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1  class="text-dark">Sahayogi Haath</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link to='/' class="nav-item nav-link active">Home</Link>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Service</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="feature.html" class="dropdown-item">Features</a>
                                <a href="quote.html" class="dropdown-item">Free Quote</a>
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <Link to='/login' class="btn btn-success rounded-pill text-light py-2 px-4 ms-lg-5">Login</Link>
                    <Link to='/register' class="btn btn-success rounded-pill text-light py-2 px-4 ms-lg-4">Signup</Link>
                </div>
            </nav>


    )
}
  return (
    <div>
        {log}
    </div>
  )
}
