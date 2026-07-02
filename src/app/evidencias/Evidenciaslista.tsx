"use client";

import {useState} from "react";
import Link from "next/link";
import {Evidence} from "@/data/evidences";
import "./evidencias.css";


export default function EvidenciasLista({
evidences
}:{
evidences:Evidence[]
}){


const [search,setSearch] = useState("");



const filtered = evidences.filter((item)=>{


const text = (

item.name +
item.type +
item.category +
item.description +
item.relatedDiseases.join(" ")

).toLowerCase();



return text.includes(search.toLowerCase());


});



return(

<main className="evidence-page">

<Link

href="/"

className="back"

>

← VOLTAR AO ARQUIVO

</Link>

<div className="background-lines"/>


<div className="watermark">
CONFIDENCIAL
</div>



<header className="evidence-header">

<p>
ARQUIVO DE INVESTIGAÇÃO CLÍNICA
</p>


<h1>
EVIDÊNCIAS
</h1>


</header>




<div className="search-box">

<span className="pixel-search-icon"></span>


<input

type="text"

placeholder="Pesquisar evidência..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>





<section className="evidence-grid">


{
filtered.map((item)=>(


<Link

key={item.id}

href={`/evidencias/${item.id}`}

className="evidence-card"

>


<span className="card-number">

EVIDÊNCIA #{item.id}

</span>



<h2>
{item.name}
</h2>



<p>
{item.description}
</p>



<div className="importance">

IMPORTÂNCIA: {item.importance}

</div>



</Link>


))

}



</section>





{
filtered.length === 0 && (

<div className="not-found">

NENHUMA EVIDÊNCIA ENCONTRADA

</div>

)

}





</main>

)

}