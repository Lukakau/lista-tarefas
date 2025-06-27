import { useSearchParams } from "react-router";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();    
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return (
        <div className="bg-[url('file:///C:/Users/lucas.pires/Downloads/31a10524d3e0aecc926f62732fb7f9a3bb2239ee%20(1).png')] bg-cover h-screen bg-center p-6 flex flex-col items-center justify-start gap-5">
            <div className="w-[500px] flex items-center justify-between p-4 rounded-md">
                <button 
                    onClick = {() => navigate(-1)}
                    className="w-10 flex items-center justify-center text-slate-100 ">
                <ChevronLeftIcon />
                </button>
                <h1 className="text-3xl text-slate-100 font-bold text-center flex-1">
                    Detalhes da Tarefa
                </h1>
                {/* Espaço invisível do mesmo tamanho do botão para centraliza r */}
                <div className="w-10" />
            </div>
            <div className="w-[500px] bg-gradient-to-br from-indigo-900/80 via-purple-800/70 to-blue-900/80 p-4 backdrop-blur-sm rounded-md shadow">
                <h1 className="text-white font-bold">{title}</h1>
                <p className="text-white">{description}</p>
            </div>
        </div> 
    );
}

export default TaskPage;