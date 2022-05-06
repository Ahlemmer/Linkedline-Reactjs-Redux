import React, { useState } from "react";
import "./login.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Img from "./img.png";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [Photoprofil, setPhotoprofil] = useState("");
  const dispatch = useDispatch();
  const loginToapp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.name,
          photoUrl: userAuth.user.Photoprofil,
        })
      );
    });
  };
  const register = () => {
    if (!name) {
      alert("Please enter a name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: Photoprofil,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <h1>You are not logged in</h1>
      <img src={Img} />
      <form>
        <input
          placeholder="Full name {required}"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          placeholder="Profil Pic Url"
          type="text"
          value={Photoprofil}
          onChange={(e) => setPhotoprofil(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="text"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit" onClick={loginToapp}>
          Sing In
        </button>
      </form>
      <p>
        Don't rember?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
