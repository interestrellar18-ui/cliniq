"use client";


import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ClinicalCase } from "@/data/cases";
import "./case.css";



interface Props {

caseData: ClinicalCase;

}



export default function CaseClient({

caseData

}:Props){



const [status,setStatus] = useState(
caseData.status
);



const solved =
status==="Resolvido" &&
caseData.expectedAnswer;




return (

<main className="case-page">

<div className="clipboard-bg">

  <div className="clip-metal"></div>

  <div className="clipboard-paper">

    <span>
      ARQUIVO MÉDICO
    </span>

    <div className="fake-lines"></div>

  </div>

</div>



<div className="background-decoration"></div>



<header className="case-title">

ARQUIVO DE INVESTIGAÇÃO CLÍNICA

</header>





<section className="document">


<div className="clip"></div>




<div className="document-header">


<span>

PRONTUÁRIO #{caseData.id}

</span>


<h1>

{caseData.title}

</h1>


<p>

{caseData.specialty} • {caseData.difficulty}

</p>


</div>






<div className="status-area">


<h2>

STATUS DO CASO

</h2>



<div className="status-buttons">


<button
onClick={()=>setStatus("Em investigação")}
>

INVESTIGAR

</button>



<button
onClick={()=>setStatus("Em discussão")}
>

DISCUSSÃO

</button>



<button
onClick={()=>setStatus("Resolvido")}
>

RESOLVER

</button>



</div>



<div className="stamp">

{status.toUpperCase()}

</div>


</div>







<Section title="PACIENTE">


<p>
Nome: {caseData.patient.name}
</p>


<p>
Idade: {caseData.patient.age} anos
</p>


<p>
Sexo: {caseData.patient.sex}
</p>


</Section>







<Section title="QUEIXA PRINCIPAL">


<p>

{caseData.chiefComplaint}

</p>


</Section>








<Section title="HISTÓRIA CLÍNICA">


<p>

{caseData.history}

</p>


</Section>








<Section title="EXAME FÍSICO">


<ul>

{
caseData.physicalExam.map(
(item)=>(
<li key={item}>
{item}
</li>
)
)
}

</ul>


</Section>








<Section title="EVIDÊNCIAS">


{

caseData.clues.map(
(item,index)=>(

<div 
className="clue"
key={index}
>

#{index+1} {item}

</div>

)

)

}


</Section>








<Section title="HIPÓTESES DIAGNÓSTICAS">


<ul>

{

caseData.hypotheses.map(
(item)=>(

<li key={item}>
{item}
</li>

)

)

}

</ul>


</Section>









<div className="answer">


<h2>

RESPOSTA ESPERADA DO MÉDICO

</h2>




{

solved ? (


<div>


<h3>

Discussão clínica

</h3>


<p>

{caseData.expectedAnswer.summary}

</p>



<p>

{caseData.expectedAnswer.discussion}

</p>




<h3>

Raciocínio esperado

</h3>



<ul>

{

caseData.expectedAnswer.reasoning.map(
(item)=>(

<li key={item}>
{item}
</li>

)

)

}

</ul>




<h3>

Conduta esperada

</h3>



<ul>

{

caseData.expectedAnswer.conduct.map(
(item)=>(

<li key={item}>
{item}
</li>

)

)

}

</ul>



</div>



)

:

(


<div className="locked">

🔒

<br/>

RESPOSTA BLOQUEADA

<br/>

Resolva o caso para liberar.

</div>


)

}



</div>





</section>






<Link href="/" className="back">

← VOLTAR AO ARQUIVO

</Link>



</main>

);


}






function Section({

title,

children

}:{

title:string;

children:ReactNode;

}){


return (

<div className="section">


<h2>

{title}

</h2>


{children}


</div>

);


}