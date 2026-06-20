export interface Evidence {

  id:string;

  name:string;

  type:string;

  category:string;

  description:string;

  relatedDiseases:string[];

  importance:string;

  clinicalValue:string;

}



export const evidences:Evidence[]=[


{
id:"001",

name:"Febre prolongada",

type:"Sintoma",

category:"Constitucional",

description:
"Elevação persistente da temperatura corporal por período prolongado. Pode indicar processos infecciosos, inflamatórios ou neoplásicos.",

relatedDiseases:[
"Tuberculose",
"Linfoma",
"Endocardite infecciosa",
"Doenças autoimunes"
],

importance:"Alta",

clinicalValue:
"É um sinal de alerta que exige investigação organizada das principais causas de síndrome febril prolongada."

},



{
id:"002",

name:"Sudorese noturna",

type:"Sintoma",

category:"Constitucional",

description:
"Sudorese intensa durante o período noturno, frequentemente associada a doenças sistêmicas.",

relatedDiseases:[
"Tuberculose",
"Linfomas",
"Infecções crônicas"
],

importance:"Alta",

clinicalValue:
"Quando associada à febre e perda de peso aumenta a suspeita de doenças infecciosas crônicas ou malignidades."

},



{
id:"003",

name:"Perda ponderal",

type:"Sinal clínico",

category:"Estado geral",

description:
"Perda involuntária de peso corporal, podendo indicar doenças consumptivas.",

relatedDiseases:[
"Neoplasias",
"Infecções crônicas",
"Doenças inflamatórias"
],

importance:"Média",

clinicalValue:
"Ajuda a identificar doenças sistêmicas que alteram o metabolismo corporal."

},



{
id:"004",

name:"PCR elevada",

type:"Exame laboratorial",

category:"Marcador inflamatório",

description:
"Aumento da proteína C reativa indicando presença de processo inflamatório ou infeccioso.",

relatedDiseases:[
"Infecções bacterianas",
"Doenças inflamatórias",
"Neoplasias"
],

importance:"Média",

clinicalValue:
"Auxilia na avaliação da atividade inflamatória, mas não define isoladamente o diagnóstico."

}


];