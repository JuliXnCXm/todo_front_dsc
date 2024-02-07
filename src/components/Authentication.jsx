import React from "react";
import Logo from "../assets/devchallenges-light.svg";
import Oauth from "./Oauth";
import FormAuth from "./FormAuth";
import useAuth from "../hooks/useAuth";
import "../styles/Authentication.css";
import ToggleAuth from "./ToggleAuth";
import Signature from "./Signature";

const Authentication = () => {
  const { isLogin, toggleState } = useAuth();

  return (
    <>
      <div className="authenticationContainer">
        <div className="content-container">
          <img className="content-container__image" src={Logo} alt="" />
          <div className="content-container__text">
            {isLogin ? (
              <h3>Login</h3>
            ) : (
              <>
                <h3>Join thousands of learners from around the world</h3>
                <p>
                  Master web development by making real-life projects. There are
                  multiple paths for you to choose
                </p>
              </>
            )}
          </div>
        </div>
        <FormAuth setLogin={isLogin} />
        <Oauth state={isLogin} />
        <ToggleAuth loginState={isLogin} setLogin={toggleState} />
      </div>
      <Signature />
    </>
  );
};

export default Authentication;
