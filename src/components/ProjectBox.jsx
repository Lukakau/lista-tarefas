import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";


function ProjectBox(){
    const [projects, setProjects] = useState(
        JSON.parse(localStorage.getItem("projects")) || []
    );

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <ul className="space-y-3 p-6 bg-gradient-to-br from-indigo-900/80 via-purple-800/70 to-blue-900/80 rounded-xl shadow-lg flex flex-col gap-2 backdrop-blur-sm border border-white/10">
                {tasks.map((projects) => (
                    <li key={projects.id} className="flex gap-2">
                        <button
                            onClick={() => onProjectClick(projects.id)}
                            className={` w-screen from-violet-500 to-fuchsia-500 bg-gradient-to-bl text-white px-4 py-2 rounded-md font-bold ${task.isCompleted && "line-through"}`}
                        >
                            {task.title}
                        </button>
                        <button
                            onClick={() => onSeeProjectDetailsClick(projects)}
                            className="from-violet-500 to-fuchsia-500 bg-gradient-to-bl p-2 rounded-md text-white">
                            <ChevronRightIcon/>
                        </button>
                        <button 
                            onClick={() => onDeleteProject(projects.id)}
                            className="from-violet-500 to-fuchsia-500 bg-gradient-to-bl p-2 rounded-md text-white">
                            <DeleteIcon/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProjectBox;