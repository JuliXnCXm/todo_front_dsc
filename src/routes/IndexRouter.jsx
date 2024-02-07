import React from "react";
import { Routes, Route } from "react-router-dom";
import Message from "../pages/MessagePage";
import Home from "../pages/Home";
import User from "../pages/User";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/message" element={<Message />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default IndexRouter;
