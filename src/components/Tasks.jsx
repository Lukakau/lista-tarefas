import {ChevronRightIcon} from "lucide-react"
import {DeleteIcon} from "lucide-react"
import { useNavigate } from "react-router-dom";


function Tasks({ tasks, onTaskClick, onDeleteTask }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }
    
    return(
        <ul className="space-y-3 p-6 bg-gradient-to-br from-indigo-900/80 via-purple-800/70 to-blue-900/80 rounded-xl shadow-lg flex flex-col gap-2 backdrop-blur-sm border border-white/10">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={` w-screen from-violet-500 to-fuchsia-500 bg-gradient-to-bl text-white px-4 py-2 rounded-md font-bold ${task.isCompleted && "line-through"}`}
                    >
                        {task.title}
                    </button>
                    <button
                        onClick={() => onSeeDetailsClick(task)}
                        className="from-violet-500 to-fuchsia-500 bg-gradient-to-bl p-2 rounded-md text-white">
                        <ChevronRightIcon/>
                    </button>
                    <button 
                        onClick={() => onDeleteTask(task.id)}
                        className="from-violet-500 to-fuchsia-500 bg-gradient-to-bl p-2 rounded-md text-white">
                        <DeleteIcon/>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks