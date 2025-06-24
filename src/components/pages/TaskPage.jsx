import { useSearchParams } from "react-router";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
    const [searchParams] = useSearchParams();    
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return (
        <div className="w-screen h-screen bg-slate-500 p-6 flex flex-col items-center justify-start gap-5">
            <div className="w-[500px] flex items-center justify-between p-4 rounded-md">
                <button className="w-10 flex items-center justify-center text-slate-100 ">
                    <ChevronLeftIcon />
                </button>
                <h1 className="text-3xl text-slate-100 font-bold text-center flex-1">
                    Detalhes da Tarefa
                </h1>
                {/* Espaço invisível do mesmo tamanho do botão para centraliza r */}
                <div className="w-10" />
            </div>
            <div className="w-[500px] bg-slate-400 p-4 rounded-md shadow">
                <h1 className="text-white font-bold">{title}</h1>
                <p className="text-white">{description}</p>
            </div>
        </div> 
    );
}

export default TaskPage;