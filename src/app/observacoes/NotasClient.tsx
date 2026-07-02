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


const notasNormais = JSON.parse(

localStorage.getItem("notas") || "[]"

);



const notasCasos = JSON.parse(

localStorage.getItem("notasClinicas") || "[]"

);



const todas = [

...notasNormais,

...notasCasos

];



setNotas(todas);



},[]);



function salvarNota(){

if(!nota.trim()) return;

const nova = {

id:crypto.randomUUID(),

texto: nota,

data: data || "SEM DATA",

tipo:"geral"

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


const removida = notas[index];



const novas = notas.filter(

(_,i)=>i !== index

);



setNotas(novas);



localStorage.setItem(

"notas",

JSON.stringify(

novas.filter(

(n)=>n.tipo==="geral"

)

)

);



localStorage.setItem(

"notasClinicas",

JSON.stringify(

novas.filter(

(n)=>n.tipo==="caso"

)

)

);



}

return(

<main className="notes-page">

  
<button
className="back-button"
onClick={() => router.push("/")}
>
← VOLTAR AO ARQUIVO
</button>


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

  {
item.tipo === "caso" && (

<p className="case-id">

CASO #{item.caseId} - {item.caseTitle}

</p>

)
}

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


{
item.tipo === "caso" && (

<div className="case-info">

CASO #{item.caseId}

<br/>

{item.caseTitle}

</div>

)

}



<p>
{item.texto}
</p>



</div>


))
}



</div>



</div>


</section>


</main>


)

}