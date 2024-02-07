import { React, createContext, useState, useEffect } from "react";
import { apiRegister, apiLogin, serverUser } from "./Api";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(cookie.get("token"));

  useEffect(() => {
    if (token !== null && token !== undefined) {
      setAuth(true);
    }
  }, []);

  const getUser = async () => {
    fetch(`${serverUser}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          let json = await res.json();
          setUser(json.user);
          if (user !== undefined) {
            setTimeout(() => {
              setIsLoading(false);
            }, 4000);
          }
        } else {
          console.log("Error");
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      });
  };

  const handleRegister = (userData) => {
    fetch(apiRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(async (res) => {
        if (res.status === 201) {
          let json = await res.json();
          cookie.set("token", json.token, { path: "/" });
          setAuth(true);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = async (userData) => {
    fetch(apiLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(async (resp) => {
        if (resp.status === 200) {
          let json = await resp.json();
          cookie.set("token", json.token, { path: "/" });
          setAuth(true);
          navigate(`/user`);
        } else {
          setAuth(false);
          console.log("Error");
          navigate(`/`);
        }
      })
      .finally();
  };

  const handleLogout = () => {
    cookie.remove("token", { path: "/" });
    localStorage.removeItem("user");
    setAuth(false);
    navigate(`/`);
  };

  const data = {
    handleLogin,
    handleRegister,
    handleLogout,
    auth,
    user,
    isLoading,
    getUser,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
