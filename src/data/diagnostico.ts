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

},

{

id:"003",

nome:"Síndrome Meningítica Aguda",

categoria:"Infecção do sistema nervoso central",

dificuldade:"Avançado",

patologia:
"Processo inflamatório das meninges geralmente causado por agentes infecciosos, podendo evoluir com comprometimento neurológico.",


sintomas:[

"Febre alta",

"Cefaleia intensa",

"Rigidez de nuca",

"Náuseas e vômitos",

"Alteração do nível de consciência"

],


exames:[

"Punção lombar",

"Análise do líquor",

"Hemocultura",

"Tomografia de crânio"

],


achados:
"Alterações inflamatórias no líquor associadas ao quadro clínico compatível com meningite."

},


{

id:"004",

nome:"Infarto Agudo do Miocárdio",

categoria:"Doença cardiovascular",

dificuldade:"Intermediário",

patologia:
"Necrose do músculo cardíaco causada geralmente pela obstrução de uma artéria coronária, levando à isquemia prolongada.",


sintomas:[

"Dor torácica em aperto",

"Irradiação para membro superior esquerdo",

"Sudorese fria",

"Náuseas",

"Dispneia"

],


exames:[

"Eletrocardiograma",

"Troponina",

"Ecocardiograma",

"Cateterismo cardíaco"

],


achados:
"Alterações eletrocardiográficas associadas à elevação de marcadores de lesão miocárdica."

},


{

id:"005",

nome:"Embolia Pulmonar",

categoria:"Doença tromboembólica",

dificuldade:"Avançado",

patologia:
"Obstrução da circulação pulmonar causada pela migração de um trombo, geralmente originado em veias profundas dos membros inferiores.",


sintomas:[

"Dispneia súbita",

"Dor torácica ventilatório-dependente",

"Taquicardia",

"Ansiedade",

"Hemoptise"

],


exames:[

"Angiotomografia de tórax",

"Dosagem de D-dímero",

"Ultrassom Doppler de membros inferiores",

"Eletrocardiograma"

],


achados:
"Identificação de trombo em circulação pulmonar associado a sinais clínicos de insuficiência respiratória."

},


{

id:"006",

nome:"Pneumonia Comunitária",

categoria:"Infecção respiratória",

dificuldade:"Básico",

patologia:
"Infecção do parênquima pulmonar causada por bactérias, vírus ou fungos, levando a processo inflamatório nos alvéolos.",


sintomas:[

"Febre",

"Tosse produtiva",

"Dor torácica",

"Dispneia",

"Calafrios"

],


exames:[

"Radiografia de tórax",

"Hemograma",

"PCR",

"Cultura de escarro"

],


achados:
"Infiltrado pulmonar associado a sinais clínicos e laboratoriais de infecção."

},

{

id:"007",

nome:"Acidente Vascular Cerebral Isquêmico",

categoria:"Doença neurológica vascular",

dificuldade:"Avançado",

patologia:
"Evento causado pela obstrução de uma artéria cerebral, levando à redução do fluxo sanguíneo e morte neuronal por isquemia.",


sintomas:[

"Fraqueza súbita em um lado do corpo",

"Alteração da fala",

"Assimetria facial",

"Confusão mental",

"Perda de coordenação"

],


exames:[

"Tomografia de crânio",

"Ressonância magnética cerebral",

"Angiotomografia",

"Eletrocardiograma"

],


achados:
"Déficit neurológico focal associado a alterações compatíveis com isquemia cerebral."

},


{

id:"008",

nome:"Diabetes Mellitus Tipo 2",

categoria:"Doença metabólica",

dificuldade:"Intermediário",

patologia:
"Distúrbio metabólico caracterizado por resistência à insulina e aumento persistente dos níveis de glicose sanguínea.",


sintomas:[

"Poliúria",

"Polidipsia",

"Perda de peso",

"Fadiga",

"Visão turva"

],


exames:[

"Glicemia de jejum",

"Hemoglobina glicada",

"Teste de tolerância à glicose",

"Exame de urina"

],


achados:
"Hiperglicemia persistente associada a alterações metabólicas compatíveis com diabetes."

},


{

id:"009",

nome:"Lúpus Eritematoso Sistêmico",

categoria:"Doença autoimune",

dificuldade:"Avançado",

patologia:
"Doença inflamatória crônica causada por desregulação imunológica com produção de autoanticorpos e lesão de múltiplos órgãos.",


sintomas:[

"Fadiga",

"Dor articular",

"Lesões de pele",

"Febre",

"Fotossensibilidade"

],


exames:[

"FAN",

"Anti-DNA dupla hélice",

"Complemento sérico",

"Exames inflamatórios"

],


achados:
"Presença de autoanticorpos associada a manifestações clínicas sistêmicas compatíveis com doença autoimune."

},


{

id:"010",

nome:"Insuficiência Cardíaca Congestiva",

categoria:"Doença cardiovascular",

dificuldade:"Intermediário",

patologia:
"Condição em que o coração apresenta incapacidade de bombear sangue adequadamente, causando congestão pulmonar e sistêmica.",


sintomas:[

"Dispneia aos esforços",

"Edema de membros inferiores",

"Ortopneia",

"Fadiga",

"Ganho de peso por retenção hídrica"

],


exames:[

"Ecocardiograma",

"Radiografia de tórax",

"Peptídeo natriurético tipo B (BNP)",

"Eletrocardiograma"

],


achados:
"Sinais de congestão associados à redução da função cardíaca e alterações estruturais do coração."

},






];