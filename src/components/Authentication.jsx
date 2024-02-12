import React from "react";
import Logo from "../assets/todo.svg";
import FormAuth from "./FormAuth";
import useAuth from "../hooks/useAuth";
import "../styles/Authentication.css";
import ToggleAuth from "./ToggleAuth";

const Authentication = () => {
  const { isLogin, toggleState } = useAuth();

  return (
    <>
      <div className="authenticationContainer">
        <div className="content-container">
          <img className="content-container__image" src={Logo ? Logo : null} alt="" />
          <div className="content-container__text">
            {isLogin ? (
              <h3>Login</h3>
            ) : (
              <>
                <h3>Join thousands of people from around the world</h3>
                <p>
                  Master productivity by making tasks to organize your day. There are multiple options for you to choose
                </p>
              </>
            )}
          </div>
        </div>
        <FormAuth setLogin={isLogin} />
        <ToggleAuth loginState={isLogin} setLogin={toggleState} />
      </div>
    </>
  );
};

export default Authentication;
