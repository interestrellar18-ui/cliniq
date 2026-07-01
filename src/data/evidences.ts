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

},

{
id:"005",

name:"Troponina elevada",

type:"Exame laboratorial",

category:"Marcador cardíaco",

description:
"Aumento dos níveis de troponina indicando lesão das células musculares cardíacas, geralmente associada a dano miocárdico.",

relatedDiseases:[
"Infarto agudo do miocárdio",
"Síndrome coronariana aguda",
"Miocardite"
],

importance:"Alta",

clinicalValue:
"É um dos principais marcadores utilizados na investigação de lesão cardíaca, especialmente em pacientes com suspeita de infarto."
},


{
id:"006",

name:"Infiltrado pulmonar em radiografia",

type:"Exame de imagem",

category:"Alteração pulmonar",

description:
"Presença de alteração na transparência pulmonar sugestiva de processo infeccioso ou inflamatório no tecido pulmonar.",

relatedDiseases:[
"Pneumonia",
"Tuberculose pulmonar",
"Edema pulmonar"
],

importance:"Média",

clinicalValue:
"Auxilia na identificação de alterações estruturais pulmonares e direciona a investigação de doenças respiratórias."
},


{
id:"007",

name:"Leucocitose",

type:"Exame laboratorial",

category:"Alteração hematológica",

description:
"Aumento do número de leucócitos no sangue, indicando possível ativação do sistema imunológico.",

relatedDiseases:[
"Infecções bacterianas",
"Processos inflamatórios",
"Doenças hematológicas"
],

importance:"Média",

clinicalValue:
"Ajuda na avaliação de respostas inflamatórias e infecciosas, devendo ser interpretada junto ao quadro clínico."
},


{
id:"008",

name:"Hemiparesia súbita",

type:"Sinal clínico",

category:"Alteração neurológica",

description:
"Perda ou redução da força muscular em um lado do corpo com início repentino, indicando possível comprometimento neurológico agudo.",

relatedDiseases:[
"Acidente vascular cerebral isquêmico",
"Acidente vascular cerebral hemorrágico",
"Lesões neurológicas"
],

importance:"Alta",

clinicalValue:
"É um sinal de alerta neurológico que exige avaliação imediata devido ao risco de sequelas permanentes."
},

{
id:"009",

name:"Febre prolongada",

type:"Sinal clínico",

category:"Síndrome infecciosa",

description:
"Elevação persistente da temperatura corporal por período prolongado, podendo indicar processos infecciosos, inflamatórios ou neoplásicos.",

relatedDiseases:[
"Tuberculose",
"Endocardite infecciosa",
"Linfoma"
],

importance:"Alta",

clinicalValue:
"Orienta investigação de causas crônicas de febre, principalmente quando associada a sintomas constitucionais."
},


{
id:"010",

name:"Sudorese noturna",

type:"Sintoma clínico",

category:"Sintoma constitucional",

description:
"Presença de episódios de transpiração intensa durante o período noturno, podendo estar associada a doenças sistêmicas.",

relatedDiseases:[
"Tuberculose",
"Linfomas",
"Infecções crônicas"
],

importance:"Média",

clinicalValue:
"Auxilia na identificação de doenças com repercussão sistêmica e deve ser avaliada junto a outros sinais clínicos."
},


{
id:"011",

name:"Perda ponderal involuntária",

type:"Sintoma clínico",

category:"Sintoma constitucional",

description:
"Redução de peso corporal sem intenção, podendo indicar aumento do metabolismo, inflamação crônica ou doenças consumptivas.",

relatedDiseases:[
"Neoplasias",
"Tuberculose",
"Doenças inflamatórias crônicas"
],

importance:"Alta",

clinicalValue:
"É um sinal de alerta que indica necessidade de investigação de doenças sistêmicas."
},


{
id:"012",

name:"Dímero-D elevado",

type:"Exame laboratorial",

category:"Marcador de coagulação",

description:
"Aumento do produto de degradação da fibrina, indicando ativação do sistema de coagulação.",

relatedDiseases:[
"Embolia pulmonar",
"Trombose venosa profunda",
"Coagulação intravascular disseminada"
],

importance:"Alta",

clinicalValue:
"Auxilia na avaliação de suspeita de eventos tromboembólicos, principalmente quando associado ao quadro clínico."
},


{
id:"013",

name:"Alteração no eletrocardiograma",

type:"Exame complementar",

category:"Avaliação cardíaca",

description:
"Modificações na atividade elétrica do coração identificadas através do eletrocardiograma.",

relatedDiseases:[
"Infarto agudo do miocárdio",
"Arritmias cardíacas",
"Distúrbios de condução"
],

importance:"Alta",

clinicalValue:
"Permite identificar alterações cardíacas agudas e auxilia na tomada de decisão terapêutica."
},


{
id:"014",

name:"Anemia",

type:"Exame laboratorial",

category:"Alteração hematológica",

description:
"Redução da concentração de hemoglobina ou quantidade de hemácias no sangue, comprometendo o transporte de oxigênio.",

relatedDiseases:[
"Deficiência de ferro",
"Doenças crônicas",
"Perdas sanguíneas"
],

importance:"Média",

clinicalValue:
"Ajuda na investigação de alterações hematológicas e doenças sistêmicas."
},


{
id:"015",

name:"Rigidez de nuca",

type:"Sinal clínico",

category:"Sinal neurológico",

description:
"Resistência dolorosa à movimentação passiva do pescoço, associada à irritação das meninges.",

relatedDiseases:[
"Meningite bacteriana",
"Meningite viral",
"Hemorragia subaracnoidea"
],

importance:"Alta",

clinicalValue:
"É um sinal de alerta para comprometimento meníngeo e requer avaliação imediata."
},


{
id:"016",

name:"Gasometria arterial alterada",

type:"Exame laboratorial",

category:"Avaliação metabólica",

description:
"Alteração dos valores de oxigênio, dióxido de carbono e equilíbrio ácido-base do sangue arterial.",

relatedDiseases:[
"Insuficiência respiratória",
"Distúrbios metabólicos",
"Sepse"
],

importance:"Alta",

clinicalValue:
"Avalia gravidade clínica e auxilia no acompanhamento de pacientes críticos."
},


{
id:"017",

name:"Glicemia elevada",

type:"Exame laboratorial",

category:"Metabolismo glicídico",

description:
"Aumento dos níveis de glicose no sangue, indicando alteração no controle metabólico.",

relatedDiseases:[
"Diabetes mellitus",
"Síndrome metabólica",
"Estresse metabólico"
],

importance:"Média",

clinicalValue:
"Auxilia no diagnóstico e controle de alterações metabólicas relacionadas à glicose."
},


{
id:"018",

name:"Cultura microbiológica positiva",

type:"Exame laboratorial",

category:"Diagnóstico infeccioso",

description:
"Identificação de microrganismos em amostras biológicas, permitindo confirmação de agentes infecciosos.",

relatedDiseases:[
"Infecções bacterianas",
"Infecções fúngicas",
"Infecções hospitalares"
],

importance:"Alta",

clinicalValue:
"Permite direcionar o tratamento antimicrobiano de acordo com o agente identificado."
},

{
id:"019",

name:"Leucocitose",

type:"Exame laboratorial",

category:"Alteração hematológica",

description:
"Aumento do número de leucócitos no sangue, geralmente associado à resposta imunológica do organismo.",

relatedDiseases:[
"Infecções bacterianas",
"Processos inflamatórios",
"Leucemias"
],

importance:"Média",

clinicalValue:
"Auxilia na identificação de respostas inflamatórias e infecciosas, devendo ser interpretada junto ao quadro clínico."
},


{
id:"020",

name:"Infiltrado pulmonar na radiografia",

type:"Exame de imagem",

category:"Alteração pulmonar",

description:
"Área de aumento da densidade pulmonar identificada em exame radiológico, podendo representar acúmulo de secreção, inflamação ou infecção.",

relatedDiseases:[
"Pneumonia",
"Tuberculose pulmonar",
"Edema pulmonar"
],

importance:"Alta",

clinicalValue:
"Contribui para investigação de doenças pulmonares e auxilia na diferenciação de processos infecciosos e inflamatórios."
}


];