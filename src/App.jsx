import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import AddProject from "./components/AddProject";

function App() {
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects")) || []
  );
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function onProjectClick(projectId) {
    const newProjects = projects.map((project) => {
      if (project.id === projectId) {
        return { ...project, isCompleted: !project.isCompleted };
      }
      return project;
    });
    setProjects(newProjects);
  } 

    return(
        <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
              <h1 className="text-3xl text-slate-100 font-bold text-center">
                Gerenciador de Projetos
              </h1>

              <AddProject/>

              
            </div> 
        </div>
    );
}

export default App;