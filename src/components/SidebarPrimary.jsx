import React, { useEffect, useState } from 'react'
import "../styles/SideBar.css";
import { NavLink } from "react-router-dom";

const SidebarPrimary = () => {

  const [pathname, setPathname] = useState()

  useEffect(() => {
    if (window) {
      setPathname(window.location.search)
    }
  }, [])

  return (
    <div>
      <ul className="Sidebar-primaryList">
        <NavLink to="/all" >
          <li>
            <span className="material-icons material-icons-outlined">
              wallet
            </span>
            <span>All</span>
          </li>
        </NavLink>
        <NavLink to="/today">
        <li>
          <span className="material-icons material-icons-outlined">event</span>
          <span>Today</span>
        </li>
        </NavLink>
        <NavLink to="/upcoming" >
        <li>
          <span className="material-icons material-icons-outlined">
            calendar_month
          </span>
          <span>Next 7 Days</span>
        </li>
        </NavLink>
        <NavLink to="/status" >
          <li>
            <span className="material-icons material-icons-outlined">
              military_tech
            </span>
            <span>Status</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SidebarPrimary
