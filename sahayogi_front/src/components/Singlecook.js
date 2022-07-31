import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams , Link} from "react-router-dom";
import Navbar from "./navbar";
import "./dashboard.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaPeopleArrows } from "react-icons/fa";
import {BsFlag} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {BiShare} from 'react-icons/bi'
import {FcApproval} from 'react-icons/fc'
import {ImCross} from 'react-icons/im'
import { FaStar } from "react-icons/fa";
import {AiOutlineStar} from 'react-icons/ai'
import { Container, Radio, Rating } from "./RatingStyles";

export default function SingleCook() {
  const [singledata, setSingledata] = useState([]);
  const [prodata, setProdata] = useState([]);
  const [rate, setRate] = useState(0);
  const { id } = useParams();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("t"),
    },
  };

  const [text, settext] = useState("");
  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  // get user form the token
  const token_data = localStorage.getItem("t")
  const token = parseJwt(token_data)
  const userid = token?.cusId
  console.log(userid)

  const addcomment = (e) => {
    e.preventDefault();

    const adata = {text:text, user:userid , cook:id, rating:rate }
    
    
    

    axios
      .post("http://localhost:180/comment/add", adata)
      .then((result12) => {
        if (result12.data) {
          alert("Comment Added succsessfullly!!");
        }
        
      })
      .catch();
  };


  

  
  useEffect(() => {
    axios
      .get("http://localhost:180/cook/single/" + id, config)
      .then((result) => {

        setSingledata(result.data);
        console.log('hi')
      });

  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:180/comment/details/" +id)
      .then((result) => {
        console.log(result.data);
        setProdata(result.data);
      })

      .catch((e) => {
        console.log("something went wrong");
      });
  }, [prodata]);
  const givenRating =3

  

  return (
    <div>
      <Navbar></Navbar>
      <div className="container ">
        <div className="d-flex">
          <div className="maind row py-5">
            <div className="design text-center">
              <h1 className="hii"> Personal Details</h1>
              <div className="d-flex mt-5 ">
                <div className=" d-flex">
                  <img
                    src={"http://localhost:180/" + singledata.photo}
                    width="300"
                    height="300"
                    className="mb-4"
                  />
                </div>
                <div className="col-md-4">
                  <BsFillPeopleFill size={30}></BsFillPeopleFill>
                  <h5 className="mt-2">
                    {singledata.firstname} {singledata.lastname}
                  </h5>
                  <ImLocation2 size={30}></ImLocation2>
                  <h5 className="mt-2">{singledata.address}</h5>

                  <FaPeopleArrows size={30}></FaPeopleArrows>
                  <h5 className="mt-2">{singledata.gender}</h5>
                  <Link to={'/bookcook/'+ singledata._id}>  <button type="button" class="btn btn-info">Book Now</button></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 ml-5 mt-5 ">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Other Details</span>
            </h4>

            <ul className="list-group mb-3 z-depth-1">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Experience</h6>
                </div>
                <span className="text">{singledata.experience} years</span>
              </li>

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Working Location</h6>
                  <small className="text-muted">{singledata.workinglocation}</small>
                </div>
                
              </li>

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Age</h6>
                </div>
                <span className="text">{singledata.age} years</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Availability:{singledata.isApproved? <FcApproval size={25} className='ml-3'></FcApproval>:<ImCross size={20} className='ml-3'></ImCross>}</h6>
                  <small className="text-muted">{singledata.brand}</small>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h4>Rate worker</h4>
        
        {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={(e) => {
                setRate(givenRating);
                alert(`Are you sure you want to give ${givenRating} stars ?`);
              
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "FDD017"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
        <h4 className="">Reviews</h4>
        


        <form>
        <div class="form-group">
          
          <input
          type='textarea'
            class="form-control py-5"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Add a comment"
            value={text}
            onChange={(e) => settext(e.target.value)}
          ></input>
          
        </div>
        <button type="submit" class="btn btn-info"
          onClick={addcomment}
          
          >Post</button>

          
        </form>
       
        {prodata.map((singledata) => {
                return (
                  
                 <div>
                 <div className="d-flex">
                 <img
                        src={"http://localhost:180/" + singledata.user.photo}
                        className="imagesss rounded-circle p-2 m-3"
                      />
                      

                  <div>    
                 <h5 className="pl-1 pt-4">{singledata.user.firstname} {singledata.user.lastname}  <div className="float-right flag">


            
            {
              singledata.rating ===1 ?
              <Rating>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
            </Rating> : 
            singledata.rating ===2 ?
            <Rating>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
            </Rating> :
            singledata.rating ===3 ?
            <Rating>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
            </Rating> :
            singledata.rating ===4 ?
            <Rating>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
            </Rating> :
            singledata.rating ===5 ?
            <Rating>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
              <AiOutlineStar style={{color:"orange"}}></AiOutlineStar>
            </Rating> :<></>
            }
           
          </label>
        

                 
                 <BsFlag className="ml-4"></BsFlag> </div></h5>
                 
                 <p>{singledata.text}</p>
                 <AiOutlineLike size={25}></AiOutlineLike>
                 <BiShare size={25} className='ml-5'></BiShare>
                
                 </div></div>
                
                 
                   
                   <hr></hr>
                 </div>
                );
              })}



      </div>
    </div>
  );
}
