import {useContext} from "react";
import {TaskCard} from "./TaskCard";
import {TaskContext} from "../context/TaskContext";

export function TaskList() {

    const {tasks} = useContext(TaskContext);

    if (tasks.length === 0) {
        return (
            <div>
                <p className="text-white text-4xl font-bold text-center">No tasks available</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 gap-2">
            {
                tasks.map((task) => (
                    <TaskCard task={task} key={task.id}/>
                ))
            }
        </div>
    );

}

