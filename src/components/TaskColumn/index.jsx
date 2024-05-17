import React from "react";
import Todo from "../../assets/direct-hit.png";

import "./TaskColumn.css";
import TaskCard from "../TaskCard";
import DropArea from "../DropArea";
import { useTaskContext } from "../../context/TaskContext";

const TaskColumn = ({ title, icon, status, }) => {

    const { tasks, handleDelete, onDropHandler } = useTaskContext()

    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='' /> {title}
            </h2>
            <DropArea onDrop={() => onDropHandler(status, 0)} />

            {tasks.map(
                (task, index) =>
                    task.status === status && (
                        <React.Fragment key={index}>
                            <TaskCard
                                title={task.task}
                                tags={task.tags}
                                handleDelete={handleDelete}
                                index={index}
                            />
                            <DropArea onDrop={() => onDropHandler(status, index+1)} />
                        </React.Fragment>
                    )
            )}
        </section>
    );
};

export default TaskColumn;
