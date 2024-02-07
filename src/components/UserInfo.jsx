import React from "react";
import "../styles/UserInfo.css";

const UserInfo = ({ user, handleClickEdit }) => {
  return (
    <ul className="userinfo__table--body">
      <li className="userinfo__table--header">
        <div>
          <h2>Profile</h2>
          <span>Some info may be visible to other people</span>
        </div>
        <button
          className="userinfo__table--header__button"
          onClick={handleClickEdit}
        >
          Edit
        </button>
      </li>
      <li className="userinfo__table--photo">
        <span id="left">PHOTO</span>
        <span>
          {user.picture ? (
            <img
              className="userinfo__tabel--photo__image"
              src={user.picture}
              alt="userPhoto"
            />
          ) : (
            <span className="userPicture_none">{user.email[0]}</span>
          )}
        </span>
      </li>
      <li className="userinfo__table--name">
        <span id="left">NAME</span>
        {user.name ? <span>{user.name}</span> : <span>No name</span>}
      </li>
      <li className="userinfo__table--bio">
        <span id="left">BIO</span>
        {user.description ? (
          <span>{user.description}</span>
        ) : (
          <span>Write Something here ...</span>
        )}
      </li>
      <li className="userinfo__table--phone">
        <span id="left">PHONE</span>
        {user.phone ? <span>{user.phone}</span> : <span>Not set</span>}
      </li>
      <li className="userinfo__table--email">
        <span id="left">EMAIL</span>
        <span>{user.email}</span>
      </li>
      <li className="userinfo__table--password">
        <span id="left">PASSWORD</span>
        <span>**********</span>
      </li>
    </ul>
  );
};

export default UserInfo;
