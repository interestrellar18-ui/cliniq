export interface Diagnostico {

id:string;

nome:string;

categoria:string;

dificuldade:string;

patologia:string;

sintomas:string[];

exames:string[];

achados:string;

}



export const diagnosticos:Diagnostico[]=[


{

id:"001",

nome:"Tuberculose",

categoria:"Infecção bacteriana",

dificuldade:"Intermediário",

patologia:
"Doença infecciosa causada pelo Mycobacterium tuberculosis, com predileção pelo sistema respiratório.",


sintomas:[

"Febre prolongada",

"Sudorese noturna",

"Perda ponderal",

"Tosse persistente"

],


exames:[

"Baciloscopia",

"Teste molecular rápido",

"Radiografia de tórax"

],


achados:
"Quadro clínico compatível associado a evidências microbiológicas ou radiológicas."

},





{

id:"002",

nome:"Linfoma",

categoria:"Neoplasia hematológica",

dificuldade:"Avançado",

patologia:
"Grupo de neoplasias originadas dos linfócitos, podendo causar alterações sistêmicas.",


sintomas:[

"Febre",

"Sudorese noturna",

"Perda de peso",

"Linfadenopatia"

],


exames:[

"Hemograma",

"Biópsia de linfonodo",

"Tomografia"

],


achados:
"Presença de linfonodos aumentados e alterações compatíveis com malignidade."

}





];