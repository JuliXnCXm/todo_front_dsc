import React, { useEffect, useState, useContext } from "react";
import UserHeader from "../components/UserHeader";
import "../styles/UserEditInfo.css";
import { useNavigate } from "react-router";
import FormEdit from "../components/FormEdit";
import SpinnerLoader from "../components/SpinnerLoader";
import { Button } from "react-bootstrap";
import Modal from "../components/Modal";
import DeleteModal from "../components/DeleteModal";

const UserEditInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleClose = () => setShow(false);

  return isLoading ? (
    <SpinnerLoader />
  ) : (
    <>
      <UserHeader user={user} />
      <div className="editInfoContainer">
        {show ? (
          <Modal>
            <DeleteModal handleClose={handleClose} />
          </Modal>
        ) : null}
        <div className="buttons_group">
          <div className="backButton" onClick={() => navigate(-1)}>
            <span class="material-icons material-icons-outlined">
              chevron_left
            </span>
            <span>Back</span>
          </div>
          <Button variant="outline-danger" onClick={() => setShow(true)}>
            Delete
          </Button>{" "}
        </div>
        <section className="userEditInfoContainer">
          <h1>Change Info</h1>
          <span>Changes will be reflected to every services</span>
          <FormEdit user={user} />
        </section>
      </div>
    </>
  );
};

export default UserEditInfo;
