"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./observacoes.css";

export default function ObservacoesClient(){

  const router = useRouter();

const [nota,setNota] = useState("");
const [data,setData] = useState("");
const [notas,setNotas] = useState<any[]>([]);




useEffect(()=>{

const salvas = localStorage.getItem("notas");

if(salvas){
setNotas(JSON.parse(salvas));
}

},[]);




function salvarNota(){

if(!nota.trim()) return;


const nova = {
texto: nota,
data: data || "SEM DATA"
};


const atualizadas = [
...notas,
nova
];


setNotas(atualizadas);


localStorage.setItem(
"notas",
JSON.stringify(atualizadas)
);


setNota("");
setData("");

}





function apagarNota(index:number){

const novas = notas.filter(
(_,i)=>i !== index
);


setNotas(novas);


localStorage.setItem(
"notas",
JSON.stringify(novas)
);

}





return(

<main className="notes-page">


<header className="notes-title">

<p>
ARQUIVO DE INVESTIGAÇÃO CLÍNICA
</p>

<h1>
MINHAS NOTAS
</h1>

</header>





<section className="mail-window">


<div className="window-top">

<div>
NOTES.EXE
</div>


<div className="window-buttons">
_
□
X
</div>


</div>





<div className="window-content">



<div className="field">

<label>
DATA:
</label>

<input

type="date"

value={data}

onChange={(e)=>setData(e.target.value)}

/>

</div>






<div className="field">


<label>
ANOTAÇÃO:
</label>


<textarea

placeholder="Digite sua anotação..."

value={nota}

onChange={(e)=>setNota(e.target.value)}

/>


</div>






<button
className="save-button"
onClick={salvarNota}
>

SALVAR NOTA

</button>







<div className="notes-list">


{
notas.map((item,index)=>(


<div 
className="note-card"
key={index}
>


<div className="note-header">

<span>
DATA: {item.data}
</span>


<button
onClick={()=>apagarNota(index)}
>
X
</button>


</div>



<p>
{item.texto}
</p>



</div>


))
}



</div>



</div>


</section>

<button
className="back-button"
onClick={() => router.push("/")}
>
← VOLTAR AO ARQUIVO
</button>

</main>


)

}