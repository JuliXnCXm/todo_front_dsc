import React, { useState } from 'react'
import '../styles/Task.css'


const Task = ({task}) => {

  const color = (status) => {
    switch (status) {
      case "Empezada":
        return "#228391";
      case "Finalizada":
        return "#F58840";
      default:
        return "#541212";
    }
  }

  const [expand, setExpand] = useState(false);

  return (
    <div className="task_container" id={task?.completed && "completed"}>
      <div>
        <div className="circle"></div>
        <h1 onClick={() => setExpand(!expand)}>{task?.title}</h1>
      </div>
      {expand && (
        <div className="task_data">
          <p>{task?.description}</p>
          <div className="task_container_data">
            <span
              className="task_container_data-status"
              style={{ backgroundColor: color(task?.status) }}
            >
              {task?.status}
            </span>
            <span className="task_container_data-created_at">
              {task?.created_at.split("T")[0]}
            </span>
            <span className="task_container_data-category">
              {task?.category}
            </span>
            <span className="task_container_data-completed_at">
              {task?.completed_at === null ? "Sin asignar" : task?.completed_at}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task
