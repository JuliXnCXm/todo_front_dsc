import React from "react";
import DropDown from "../components/DropDown";
import Logo from "../assets/devchallenges-light.svg";
import "../styles/UserHeader.css";

const UserHeader = ({ user }) => {
  return (
    <div className="userContainer--header">
      <img src={Logo} alt="" />
      <div className="userContainer--header__icon">
        {user.picture ? (
          <img src={user.picture} alt="userPhoto" />
        ) : (
          <span className="userPicture_none" id="userPicture_none--header_icon">
            {user.email[0]}
          </span>
        )}
        <span>{user.name}</span>
        <span class="material-icons material-icons-outlined dropdown-user-menu__button">
          arrow_drop_down
        </span>
        <DropDown />
      </div>
    </div>
  );
};

export default UserHeader;
