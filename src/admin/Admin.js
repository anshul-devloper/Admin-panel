import React, { useState } from "react";
import "./Admin.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useHistory } from "react-router-dom";

function Admin() {
  ////////////////////////////////////////////////////
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useHistory();
  const { name, email, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);

    let valid = true;

    if (valid) {
      history.push("/admin/dashboard");
      alert("LOGED IN");
    } else {
      alert("INVALID EMAIL OR PASSWORD");
    }

    // dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  ///////////////////////////////////////////////////////
  return (
    <>
      <h1 className="admin">ADMIN</h1>
      <div className="line"></div>

      {/*  form  */}
      <div className="container">
        <form
          className="signUpForm"
          encType="multipart/form-data"
          onSubmit={registerSubmit}
        >
          <div className="signUpName">
            <FaceIcon />
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={registerDataChange}
            />
          </div>
          <div className="signUpEmail">
            <MailOutlineIcon />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={registerDataChange}
            />
          </div>
          <div className="signUpPassword">
            <LockOpenIcon />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={registerDataChange}
            />
          </div>

          <input type="submit" value="Login" className="signUpBtn" />
        </form>
      </div>
    </>
  );
}

export default Admin;
