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

    name:"Paciente 001",

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

      result:"Imagem sugestiva de alteração pulmonar a investigar."

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


}

];