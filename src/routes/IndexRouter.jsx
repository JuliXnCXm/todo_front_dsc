import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import UserEditInfo from "../pages/UserEditInfo";
import Auth from "../pages/Auth";
import Upcoming from "../containers/Upcoming";
import Status from "../containers/Status";
import All from "../containers/All";
import Today from "../containers/Today";

const IndexRouter = () => {

  return (
    <Routes>
      <Route path="/all" element={<Home><All /></Home>}/>
      <Route path="/today" element={<Home><Today /></Home>}/>
      <Route path="/status" element={<Home><Status /></Home>}/>
      <Route path="/upcoming" element={<Home><Upcoming /></Home>}/>
      <Route path="/user" element={<User />} />
      <Route path="/userEditInfo/:id" element={<UserEditInfo/>}/>
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default IndexRouter;
