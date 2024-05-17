import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext({});

export const useTaskContext = () => useContext(TaskContext);

const oldTasks = localStorage.getItem("tasks");

export const TaskContextProvider = ({ children }) => {
    const [activeCard, setActiveCard] = useState(null);
    const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleDelete = (taskIndexToBeDeleted) => {
        const newTasks = tasks.filter((_, index) => index !== taskIndexToBeDeleted);
        setTasks(newTasks);
    };

    const onDropHandler = (status, newPosition) => {
        if (activeCard === null || activeCard === undefined) return;
        const position = activeCard < newPosition ? newPosition - 1 : newPosition;
        const updatedTasks = [...tasks];
        const taskToBeMoved = updatedTasks.splice(activeCard, 1)[0]
        updatedTasks.splice(position, 0, { ...taskToBeMoved, status })
        setTasks(updatedTasks);
    }



    return <TaskContext.Provider value={{ tasks, setTasks, activeCard, setActiveCard, handleDelete, onDropHandler }}>
        {children}
    </TaskContext.Provider>;
}