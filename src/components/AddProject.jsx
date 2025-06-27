import Input from "./Input";
import {useState} from "react";

function AddProject({ onAddTask }) {
    const [title, setTitle] = useState("");  
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 p-6 bg-gradient-to-br from-indigo-900/80 via-purple-800/70 to-blue-900/80 rounded-xl shadow-lg flex flex-col gap-2 backdrop-blur-sm border border-white/10">
            <Input 
                type="text" 
                placeholder="Digite o titulo do projeto" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input 
                type="text"
                placeholder="Digite a descrição do projeto" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}  
            />
            <button
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        alert("Por favor, preencha todos os campos.");
                        return;
                    }
                    onAddTask(title, description);
                    setTitle("");
                    setDescription("");
                }} 
                className="from-violet-500 to-fuchsia-500 bg-gradient-to-bl text-white px-4 py-2 rounded-md font-medium">
                    Adicionar
            </button> 
        </div>
    )
}

export default AddProject;