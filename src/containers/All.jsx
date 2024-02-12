import React, { useEffect, useState } from 'react'
import useTasks from '../hooks/useTasks'
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import Task from '../components/Task';
import '../styles/Home.css'


const All = () => {

    const { getAllTasks, tasks, isLoadingTasks } = useTasks();

    useEffect(() => {
        getAllTasks();
        console.log(tasks)
    }, []);

    return (
        <>
        {
            isLoadingTasks ?
            <>
                <Skeleton count={5} width={"50%"} style={{lineHeight: "20px"}}/>
                <Skeleton count={5} width={"50%"} style={{lineHeight: "20px"}}/>
            </>
            :
            <div className='all-container'>
                <ul>
                    {tasks.map((task, idx) => {
                        return (
                            <li key={idx}>
                                <Task task={task}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        }
        </>
    )
}

export default All
