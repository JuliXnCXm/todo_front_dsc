import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/User.css";
import UserHeader from "../components/UserHeader";
import SpinnerLoader from "../components/SpinnerLoader";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";

const User = () => {
  // const navigate = useNavigate();
  const { getUser, user, isLoading} = useContext(AuthContext);
  const handleClickEdit = (e) => {
    e.preventDefault();
    document.location.href = `/userEditInfo/${user._id}`;
  };
  localStorage.setItem(
    "user",
    JSON.stringify({
      email: user.email,
      name: user.name,
      picture: user.picture_url,
    })
  );

  useEffect(() => {
    getUser();
  }, []);

  return isLoading ? (
    <SpinnerLoader />
  ) : (
    <>
      <UserHeader user={user} />
      <div className="userContainer">
        <div className="userContainer--title">
          <h1>Personal info</h1>
          <h3>Basic info, like your name and photo</h3>
        </div>
        <div className="userinfo__table--container">
          <UserInfo user={user} handleClickEdit={handleClickEdit} />
        </div>
      </div>
    </>
  );
};

export default User;
