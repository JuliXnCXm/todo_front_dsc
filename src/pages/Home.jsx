
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import '../styles/Home.css'
import { Navigate } from "react-router";
import AuthContext from "../context/AuthContext";
import SpinnerLoader from "../components/SpinnerLoader";
import UserHeader from "../components/UserHeader";

const Home = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true)

  const { auth,getUser, user } = useContext(AuthContext);

  useEffect(() => {
    getUser()
  }, [])

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)
  return (
    <>
    { isLoading ? 
        <SpinnerLoader />
        :
        <>
          {
            auth ? 
            <>
              <UserHeader user={user} />
              <div className='home-container'>
                <SideBar />
                {children}
              </div>
            </>
            :
            <>
              <Navigate to={'/login'} />
            </> 
          }
        </>
    }  
    </>
  )
}

export default Home
