"use client";


import {useState} from "react";
import {diagnosticos} from "@/data/diagnostico";
import Link from "next/link";
import "./diagnosticos.css";



export default function DiagnosticosClient(){


const [busca,setBusca]=useState("");



const filtrados = diagnosticos.filter((item)=>{


const texto = (

item.nome +
item.categoria +
item.patologia +
item.sintomas.join(" ")

).toLowerCase();


return texto.includes(
busca.toLowerCase()
);


});




return(


<main className="diagnostic-page">



<header className="diagnostic-header">


<p>
ARQUIVO DE INVESTIGAÇÃO CLÍNICA
</p>


<h1>
DIAGNÓSTICOS
</h1>


</header>





<div className="search-diagnostic">


🔎


<input

placeholder="Pesquisar diagnóstico..."

value={busca}

onChange={(e)=>setBusca(e.target.value)}

/>


</div>







<section className="diagnostic-grid">


{

filtrados.map((item)=>(


<article 
className="diagnostic-card"
key={item.id}
>



<span>
DIAGNÓSTICO #{item.id}
</span>



<h2>
{item.nome}
</h2>



<p>
{item.categoria}
</p>




<div className="difficulty">

{item.dificuldade}

</div>





<h3>
Sintomatologia
</h3>


<ul>

{
item.sintomas.map((s)=>(
<li key={s}>
{s}
</li>
))
}

</ul>






<h3>
Patologia
</h3>


<p>

{item.patologia}

</p>




<h3>
Exames importantes
</h3>


<ul>

{
item.exames.map((e)=>(
<li key={e}>
{e}
</li>
))
}


</ul>





</article>


))


}



</section>





<Link 
href="/"
className="back"
>

← VOLTAR AO ARQUIVO

</Link>




</main>


)

}