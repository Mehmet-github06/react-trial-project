import React, { useState, useEffect } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";

function App() {
  const [users, setUsers] = useState({
    name: "",
    picture: "",
    email: "",
    dob: "",
    location: "",
    phone: "",
    login: "",
    gender: "",
  });

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [useradd, setUserAdd] = useState([]);
  const [loadind, setLoding] = useState(true);

  const getUsers = () => {
   
    const url = "https://randomuser.me/api/";
    axios
      .get(url)
      .then((res) => setUsers(res.data.results[0]))
      .catch((err) => console.log(err));
    handleName();
    // setLoding(true);
  };
  // getUsers();
  useEffect(() => {
    const sure = setInterval(() => {
      setLoding(false);
    }, 2000);
    getUsers();
    return () => {
      clearInterval(sure);
    };
  }, []);

  const {
    name: { first, last },
    picture: { large },
    email,
    dob: { age },
    location: { city },
    phone,
    login: { password },
    gender,
  } = users;

  const handleName = () => {
    setTitle("name");
    setValue(`${first} ${last}`);
  };
  const handleEmail = () => {
    setTitle("email");
    setValue(email);
  };
  const handleAge = () => {
    setTitle("age");
    setValue(age);
  };
  const handleStreet = () => {
    setTitle("street");
    setValue(city);
  };
  const handlePhone = () => {
    setTitle("phone");
    setValue(phone);
  };
  const handlePassword = () => {
    setTitle("password");
    setValue(password);
  };

  const handleAdd = () => {
    const newArry = {
      Firstname: first,
      Email: email,
      Phone: phone,
      Age: age,
    };

    const control = useradd.some(
      (item) =>
        item.Firstname === newArry.Firstname &&
        item.Email === newArry.Email &&
        item.Phone === newArry.Phone &&
        item.Age === newArry.Age
    );

    if (control) {
      alert("lütfen gir");
    } else {
      setUserAdd([...useradd, newArry]);
    }
  };

  return (
    <main>
      {loadind ? ( // Yükleniyor durumunu kontrol et
        <div className="loading">
         <img src="https://media1.giphy.com/media/uIJBFZoOaifHf52MER/giphy.gif" alt="gif" />
        </div>
      ) : (
        <>
          <div className="block bcg-orange">
            <img src={cwSvg} alt="cw" id="cw" />
          </div>
          <div className="block">
            <div className="container">
              <img src={large} alt="random user" className="user-img" />
              <p className="user-title">My {title} is</p>
              <p className="user-value">{value}</p>
              <div className="values-list">
                <button className="icon" data-label="name">
                  <img
                    src={gender === "female" ? womanSvg : manSvg}
                    alt="user"
                    id="iconImg"
                    onMouseEnter={handleName}
                  />
                </button>
                <button className="icon" data-label="email">
                  <img
                    src={mailSvg}
                    alt="mail"
                    id="iconImg"
                    onMouseEnter={handleEmail}
                  />
                </button>
                <button className="icon" data-label="age">
                  <img
                    src={gender === "female" ? womanAgeSvg : manAgeSvg}
                    alt="age"
                    id="iconImg"
                    onMouseEnter={handleAge}
                  />
                </button>
                <button className="icon" data-label="street">
                  <img
                    src={mapSvg}
                    alt="map"
                    id="iconImg"
                    onMouseEnter={handleStreet}
                  />
                </button>
                <button className="icon" data-label="phone">
                  <img
                    src={phoneSvg}
                    alt="phone"
                    id="iconImg"
                    onMouseEnter={handlePhone}
                  />
                </button>
                <button className="icon" data-label="password">
                  <img
                    src={padlockSvg}
                    alt="lock"
                    id="iconImg"
                    onMouseEnter={handlePassword}
                  />
                </button>
              </div>
              <div className="btn-group">
                <button className="btn" type="button " onClick={getUsers}>
                  new user
                </button>
                <button
                  className="btn"
                  type="button"
                  onClick={handleAdd}
                  id="AddBtn"
                >
                  add user
                </button>
              </div>

              <table className="table">
                <thead>
                  <tr className="head-tr">
                    <th className="th">Firstname</th>
                    <th className="th">Email</th>
                    <th className="th">Phone</th>
                    <th className="th">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {useradd.map(({ Email, Phone, Firstname, Age }, i) => (
                    <tr className="body-tr" key={i}>
                      <td>{Firstname}</td>
                      <td>{Email}</td>
                      <td>{Phone}</td>
                      <td>{Age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
