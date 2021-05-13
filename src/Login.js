import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useHistory, Redirect } from "react-router-dom";
import { auth, Gprovider, Fprovider } from "./firebase";
import logo from "./logo.png";
import firebase from "firebase";

function Login() {
  const history = useHistory();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          loginWithMobile();
        },
      }
    );
  }, [window.confirmationResult]);

  // const login = (event) => {
  //   event.preventDefault();

  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       history.push("/");
  //     })
  //     .catch((e) => alert(e.message));
  // };
  //Google login
  const loginWithGoogle = (event) => {
    event.preventDefault();

    auth
      .signInWithPopup(Gprovider)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  //Facebook login
  const loginWithFacebook = (event) => {
    event.preventDefault();

    auth
      .signInWithPopup(Fprovider)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  //Mobile login OTP
  const loginWithMobile = (event) => {
    event.preventDefault();
    const phoneNumber = "+91" + phone;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setConfirmationResult(confirmationResult);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  };
  //check otp
  const checkOtp = (event) => {
    event.preventDefault();
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        history.push("/");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        history.push("/login");
        console.log(error.message);
        alert("The OTP is invalid. Please try again.");
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Phone Number</h5>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="text"
          />
          {confirmationResult && <h5>OTP</h5>}
          {confirmationResult && (
            <input
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              type="password"
            />
          )}
          {/* <button
            onClick={loginWithMobile}
            type="submit"
            className="login__signInButtonM"
            id="sign-in-button"
          >
            {confirmationResult ? "Sign In with mobile" : "Send OTP"}
          </button> */}
          {confirmationResult ? (
            <button
              onClick={checkOtp}
              type="submit"
              className={
                confirmationResult
                  ? "login__signInButtonM"
                  : "login__signInButtonM hidden"
              }
            >
              Sign in with mobile
            </button>
          ) : null}
          <button
            onClick={loginWithMobile}
            type="submit"
            className={
              confirmationResult
                ? "login__signInButtonM hidden"
                : "login__signInButtonM"
            }
            id="sign-in-button"
          >
            Send OTP
          </button>
          <p className="separator"></p>
          <button
            onClick={loginWithGoogle}
            type="submit"
            className="login__signInButtonG"
          >
            Sign In with Google
          </button>
          <button
            onClick={loginWithFacebook}
            type="submit"
            className="login__signInButtonF"
          >
            Sign In with Facebook
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
