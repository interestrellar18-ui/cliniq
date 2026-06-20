import { evidences } from "@/data/evidences";
import Link from "next/link";
import "./evidence-id.css";


export default async function EvidencePage({
params,
}:{
params: Promise<{
id:string
}>
}){


const {id}=await params;


const evidence = evidences.find(
(item)=>item.id === id
);



if(!evidence){

return(

<main className="evidence-id-page">

<h1>
EVIDÊNCIA NÃO ENCONTRADA
</h1>

<Link href="/evidencias">
← VOLTAR
</Link>

</main>

)

}



return(

<main className="evidence-id-page">


<div className="grid-bg"></div>


<div className="watermark">
CONFIDENCIAL
</div>



<section className="file-card">


<div className="clip"></div>


<header className="file-header">


<div>

<p>
ARQUIVO DE INVESTIGAÇÃO CLÍNICA
</p>


<h1>
EVIDÊNCIA #{evidence.id}
</h1>


</div>



<div className="file-code">

ID:
<br/>

EV-{evidence.id}

</div>


</header>




<section className="identity">


<h2>
{evidence.name}
</h2>



<div className="tags">


<span>
{evidence.type}
</span>


<span>
{evidence.category}
</span>


<span>
IMPORTÂNCIA: {evidence.importance}
</span>


</div>


</section>





<div className="columns">



<div className="box">


<h3>
DESCRIÇÃO CLÍNICA
</h3>


<p>
{evidence.description}
</p>


</div>





<div className="box">


<h3>
DOENÇAS ASSOCIADAS
</h3>


<ul>

{
evidence.relatedDiseases.map(
(item)=>(

<li key={item}>
{item}
</li>

)
)

}

</ul>


</div>




<div className="clinical-box">


<h3>
VALOR CLÍNICO
</h3>


<p>
{evidence.clinicalValue}
</p>


</div>


</div>





<div className="stamp">

ANALISADO

</div>


</section>




<Link
href="/evidencias"
className="back-id"
>

← VOLTAR PARA EVIDÊNCIAS

</Link>


</main>

)

}