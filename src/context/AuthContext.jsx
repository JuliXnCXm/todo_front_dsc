import { React, createContext, useState, useEffect } from "react";
import { apiRegister, apiLogin, serverUser } from "./Api";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(cookie.get("token"));

  useEffect(() => {
    if (token !== null && token !== undefined) {
      setAuth(true);
    }
  }, []);

  useEffect(() => {
    if (auth) {
      console.log("Auth")
    }
  }, [auth])

  const getUser = async () => {
    fetch(`${serverUser}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${cookie.get("token")}`,
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          let json = await res.json();
          setUser(json.user);
          cookie.set("user", JSON.stringify(json.user));
          if (user !== undefined) {
            setTimeout(() => {
              setIsLoading(false);
            }, 4000);
          }
        } else {
          console.log("Error");
          setTimeout(() => {
            navigate("/login")
          }, 3000);
        }
      })
      .catch((err) => {
        alert(err)
        setTimeout(() => {
          navigate("/login")
        }, 3000);
      });
  };

  const handleRegister = (userData) => {
    console.log(userData);
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
          setToken(cookie.get("token"));
          setAuth(true);
          navigate("/user")
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
          navigate(`/all`);
        } else {
          setAuth(false);
          console.log("Error");
          navigate(`/login`);
        }
      })
      .finally();
  };

  const handleLogout = () => {
    cookie.remove("token", { path: "/" });
    localStorage.removeItem("user");
    setAuth(false);
    navigate(`/login`);
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
