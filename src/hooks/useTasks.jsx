import { useContext, useState } from "react";
import { apiTasks } from "../context/Api";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import Cookies from "universal-cookie";

const useTasks = () => {
    const cookie = new Cookies();
    const token = cookie.get("token");
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true)
    const [isLoadingTasks, setIsLoadingTasks] = useState(true)
    const [errorCategories, setErrorCategories] = useState(false)
    const [errorTasks, setErrorTasks] = useState(false)

    const getCategories = async () => {
        fetch(`${apiTasks}categories`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        .then(async (res) => {
            if (res.status === 200 ) {
                let json = await res.json();
                setCategories(json.categories);
                setIsLoadingCategories(false)
            }
        })
        .catch(err => {
            console.log(err);
            setIsLoadingCategories(false)
            setErrorCategories(true)
        })
    };

    const getAllTasks = async () => {
        fetch(`${apiTasks}alltask`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        .then(async (res) => {
            if (res.status === 200 ) {
                let json = await res.json();
                setTasks(json.tasks);
                setTimeout(() => {
                    setIsLoadingTasks(false);
                }, 10000)
            }
        })
        .catch(err => {
            console.log(err);
            setIsLoadingTasks(false)
            setErrorTasks(true)
        })
    };

    return {
      getCategories,
      getAllTasks,
      tasks,
      categories,
      isLoadingCategories,
      isLoadingTasks,
    };
};


export  default useTasks