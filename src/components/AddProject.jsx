import Input from "./Input";
import {useState} from "react";

function AddProject({ onAddTask }) {
    const [title, setTitle] = useState("");  
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col gap-2">
            <Input 
                type="text" 
                placeholder="Digite o titulo do projeto" 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input 
                type="text"
                placeholder="Digite a descrição do projeto" 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
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
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                    Adicionar
            </button> 
        </div>
    )
}

export default AddProject;