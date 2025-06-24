import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar react",
    description: "Estudar React para conseguir um emprego Front-End",
    isCompleted: false
  },
  {
    id: 2,
    title: "Estudar PHP Laravel",
    description: "Estudar PHP para ajudar o Mauricio",
    isCompleted: false
  },
  {
    id: 3,
    title: "Terminar essa aplicação básica",
    description: "Para provar a mim mesmo que sou capaz",
    isCompleted: false
  }
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  }

  return(
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
          <div className="w-[500] space-y-4">
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Gerenciador de Tarefas
            </h1>
            <AddTask 
              onAddTask={onAddTask}
            />
            <Tasks 
              tasks = {tasks} 
              onTaskClick={onTaskClick} 
              onDeleteTask={onDeleteTask} 
            />
          </div> 
      </div>
  );
}

export default App;