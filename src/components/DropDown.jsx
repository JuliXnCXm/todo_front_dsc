import { React, useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../styles/DropDown.css";

const DropDown = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <div className="dropDown">
      <ul className="dropDown__menu">
        <li id="option">
          <span class="material-icons">account_circle</span>
          <span>My Profile</span>
        </li>
        <li id="option">
          <span class="material-icons">group</span>
          <span>Group chat</span>
        </li>
        <div className="Line"></div>
        <li id="option" className="logout" onClick={handleLogout}>
          <span class="material-icons">logout</span>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
