import { createContext, useState, useEffect } from "react"
import {tasks as data} from '../data/tasks';


export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {

        const newTask = {
            title: task.title,
            id: tasks.length,
            description: task.description
        }

        setTasks([...tasks, newTask])
    }

    function deleteTask(taskId) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    useEffect(() => {
        setTasks(data);
    }, [])

    return(
        <TaskContext.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}