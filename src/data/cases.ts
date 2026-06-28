export interface ClinicalCase {

  id:string;

  title:string;

  specialty:string;

  difficulty:string;

  status:string;


  patient:{
    name:string;
    age:number;
    sex:string;
  };


  chiefComplaint:string;


  history:string;


  physicalExam:string[];


  exams:{

    name:string;

    result:string;


    media?:{

      type:"image" | "video";

      src:string;

      caption:string;

    }[];

  }[];


  clues:string[];


  hypotheses:string[];


  diagnosis:string;


  expectedAnswer:{

    summary:string;

    discussion:string;

    reasoning:string[];

    conduct:string[];

  };

}




export const cases:ClinicalCase[] = [


{

id:"001",

title:"Síndrome Febril Prolongada",

specialty:"Clínica Médica",

difficulty:"Intermediário",

status:"Em investigação",



patient:{

name:"André Menezes Silva",

age:42,

sex:"Masculino"

},



chiefComplaint:

"Febre persistente há aproximadamente 20 dias.",



history:

"Paciente apresenta febre diária, sudorese noturna, perda ponderal progressiva e cansaço intenso. Refere piora dos sintomas no período noturno.",



physicalExam:[

"Temperatura elevada",

"Sudorese noturna",

"Perda de peso",

"Astenia"

],



exams:[

{

name:"Hemograma",

result:"Leucocitose discreta e alterações inflamatórias."

},


{

name:"PCR",

result:"Elevada, indicando processo inflamatório ativo."

},


{

name:"Radiografia de tórax",

result:"Imagem sugestiva de alteração pulmonar a investigar.",


media:[

{

type:"image",

src:"/casos/001/rxtoraxcasoum.png",

caption:"Radiografia de tórax do paciente."

}

]

}

],



clues:[

"Febre há mais de 3 semanas",

"Perda ponderal",

"Sudorese noturna",

"Síndrome consumptiva"

],



hypotheses:[

"Tuberculose",

"Linfoma",

"Endocardite infecciosa",

"Infecção crônica"

],



diagnosis:

"Tuberculose pulmonar (a confirmar através de investigação complementar).",



expectedAnswer:{


summary:

"O quadro sugere uma síndrome febril prolongada com sinais de alerta, principalmente pela associação entre febre persistente, sudorese noturna e perda ponderal.",



discussion:

"O médico deve reconhecer que febre prolongada exige investigação ampla. As principais hipóteses incluem doenças infecciosas, neoplasias e doenças inflamatórias. Neste caso, a presença de sintomas constitucionais direciona a investigação para causas crônicas, especialmente tuberculose.",



reasoning:[

"Identificar que a duração da febre caracteriza uma febre prolongada.",

"Associar perda de peso e sudorese noturna com doenças crônicas.",

"Considerar tuberculose como hipótese principal devido ao padrão clínico.",

"Investigar diagnósticos diferenciais como linfoma e endocardite."

],



conduct:[

"Solicitar exames complementares direcionados.",

"Realizar investigação microbiológica para tuberculose.",

"Avaliar imagem pulmonar.",

"Realizar acompanhamento clínico e reavaliar hipóteses."

]


}

},

{

id:"002",

title:"Dor Torácica Aguda",

specialty:"Cardiologia",

difficulty:"Intermediário",

status:"Em investigação",



patient:{

name:"Mariana Costa Ferreira",

age:58,

sex:"Feminino"

},



chiefComplaint:

"Dor no peito iniciada há aproximadamente 2 horas, associada à falta de ar.",



history:

"Paciente relata dor torácica em aperto, localizada em região retroesternal, com irradiação para membro superior esquerdo. Refere náuseas, sudorese fria e sensação de mal-estar. Possui histórico de hipertensão arterial e diabetes mellitus.",



physicalExam:[

"Paciente ansiosa e desconfortável",

"Sudorese intensa",

"Palidez cutânea",

"Frequência cardíaca aumentada",

"Dor persistente em região torácica"

],



exams:[

{

name:"Eletrocardiograma",

result:"Alterações sugestivas de isquemia miocárdica.",


media:[

{

type:"image",

src:"/casos/002/ecgcasodois.png",

caption:"Eletrocardiograma inicial do paciente."

}

]

},



{

name:"Troponina",

result:"Marcador cardíaco elevado, sugerindo lesão miocárdica."

},



{

name:"Hemograma",

result:"Sem alterações significativas."

}

],



clues:[

"Dor torácica em aperto",

"Irradiação para braço esquerdo",

"Sudorese fria",

"Fatores de risco cardiovascular",

"Alteração de marcador cardíaco"

],



hypotheses:[

"Infarto agudo do miocárdio",

"Angina instável",

"Embolia pulmonar",

"Pericardite"

],



diagnosis:

"Infarto agudo do miocárdio com elevação de marcadores cardíacos.",



expectedAnswer:{


summary:

"Paciente apresenta quadro compatível com síndrome coronariana aguda, caracterizada por dor torácica típica associada a sinais de sofrimento miocárdico.",



discussion:

"A dor torácica deve ser investigada rapidamente devido ao risco de eventos cardiovasculares graves. A associação entre dor em aperto, irradiação, sudorese e elevação da troponina aumenta a probabilidade de infarto agudo do miocárdio.",



reasoning:[

"Reconhecer características de dor torácica típica.",

"Identificar fatores de risco cardiovascular.",

"Relacionar alteração da troponina com lesão do músculo cardíaco.",

"Diferenciar infarto de outros diagnósticos de dor torácica."

],



conduct:[

"Realizar monitorização cardíaca.",

"Solicitar eletrocardiograma seriado.",

"Avaliar necessidade de terapia de reperfusão.",

"Controlar fatores de risco cardiovasculares."

]


}

}


];

