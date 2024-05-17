import React from "react";

import './styles.css';

import TaskForm from "../../components/TaskForm";
import TaskColumn from "../../components/TaskColumn";
import todoIcon from "../../assets/direct-hit.png";
import doingIcon from "../../assets/glowing-star.png";
import doneIcon from "../../assets/check-mark-button.png";
import { TaskContextProvider } from "../../context/TaskContext";


const TaskManager = () => {

    return (

        <TaskContextProvider>
            <TaskForm />
            <main className="task_container">
                <TaskColumn
                    title="To do"
                    icon={todoIcon}
                    status="todo"
                />
                <TaskColumn
                    title="Doing"
                    icon={doingIcon}
                    status="doing"
                />
                <TaskColumn
                    title="Done"
                    icon={doneIcon}
                    status="done"
                />
            </main>
        </TaskContextProvider>



    );
};

export default TaskManager;
