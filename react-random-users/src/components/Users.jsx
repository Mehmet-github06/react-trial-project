import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [user, setUser] = useState({
    name: "",
    picture: "",
    email: "",
    dob: "",
    location: "",
    phone: "",
  });

  const url = "https://randomuser.me/api/ ";

  const getUser = () => {
    axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  };
  console.log(user);
  useEffect(() => {
    // const sure = setInterval(() => {
    //   getUser();
    // }, 7000);
    getUser();
    return () =>{
        clearInterval()
    } 
  }, []) ;

  const {
    name: { first, last },
    picture: { large },
    email,
    dob: { date },
    location: { city },
    phone,
  } = user;
  return (
    <div className="container">
      <div>
        <img className="rounded-4" src={large} alt="picture" />
      </div>

      <div>
        <p>Hi, My name is </p>
        <h1>
          {first} {last}
        </h1>
        <h3>{email}</h3>
        <h5>{date}</h5>
        <h5>{city}</h5>
        <h5>{phone}</h5>
      </div>
      <div>
        <button className="btn btn-success" onClick={getUser}>
          Get User
        </button>
      </div>
    </div>
  );
};

export default Users;
