import "./About.css";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  console.log(value);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const FinalData = await response.json();
    setUsers(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-fluid mt-5">
    <h1 style={{textAlign:"center"}}>List of jsonplaceholder's users</h1>
       <div className="bigger">
        <input
          placeholder="Search  users..."
          className="inp"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    <div className="row text-center">
      {users.filter((res) => {
         return res.name.toLocaleLowerCase() === " "
         ? value
         : res.name.toLocaleLowerCase().includes(value);
      }).map((curElem) => {
        console.log(curElem);
        return (
          <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img style={{width:"170px", height:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmqMjdzNHPpvfNrR3bZEaeAYorxmwlEvJWw&usqp=CAU" className="rounded" width={155} alt="" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 textLeft"> <b>Name:</b> {curElem.name}</h4>{" "}
                  <span className="textLeft"><b>Phone number:</b>{curElem.phone}</span>
                  <br />
                  <span className="textLeft"><b>Company name:</b>{curElem.company.name}</span>
                  <br />
                  <span className="textLeft"> <b>Place:</b> {curElem.address.city}</span>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white starts">
                    <div className="d-flex flex-column">
                      <span className="articles"><b>Website</b></span>{curElem.website}
                    </div>
                    <div className="d-flex flex-column">
                      <span className="followers">Username</span>{curElem.username}
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default About;
