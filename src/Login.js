import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./login.css";
import logo from "./linkedin1.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please Enter the full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  const loginToApp = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profilePic: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img src={logo} alt="" />
      <p style={{ color: "white", fontSize: "32px", margin: "24px 0px" }}>
        Make the most of your professional life
      </p>
      <div className="login__main">
        <form action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter profile picture URL (optional)"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            By clicking Agree & Join, you agree to the LinkedIn
            <span
              style={{
                color: "#0073B1",
                fontWeight: "bold",
                marginLeft: "2px",
              }}
            >
              User Agreement, Privacy Policy,
            </span>
            and
            <span
              style={{
                color: "#0073B1",
                fontWeight: "bold",
                marginLeft: "2px",
              }}
            >
              Cookie Policy.
            </span>
          </p>
          <button type="submit" onClick={register}>
            Agree and Join
          </button>
          <p style={{ fontSize: "15px" }}>
            Already have an account?
            <span
              style={{
                color: "#0073B1",
                fontWeight: "bold",
                marginLeft: "2px",
                cursor: "pointer",
              }}
              onClick={loginToApp}
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
