"use client";


import {useState} from "react";
import {dicionario} from "@/data/dicionario";
import Link from "next/link";
import "./dicionario.css";


export default function DicionarioClient(){


const [busca,setBusca]=useState("");



const termos=dicionario.filter((item)=>

item.termo
.toLowerCase()
.includes(busca.toLowerCase())

);



return(


<main className="dictionary-page">


<Link
href="/"
className="dictionary-back"
>

← VOLTAR AO ARQUIVO

</Link>



<header className="dictionary-header">

<p>
ARQUIVO DE INVESTIGAÇÃO CLÍNICA
</p>


<h1>
DICIONÁRIO.EXE
</h1>


</header>





<section className="dictionary-window">


<div className="window-title">

DICIONÁRIO CLÍNICO

</div>



<input

placeholder="Pesquisar termo..."

value={busca}

onChange={(e)=>setBusca(e.target.value)}

/>




<div className="terms">


{

termos.map((item)=>(


<div
className="term-card"
key={item.termo}
>


<h2>
{item.termo}
</h2>


<span>
{item.categoria}
</span>


<p>
{item.definicao}
</p>


</div>


))

}


</div>



</section>



</main>


)

}