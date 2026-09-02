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

},

{
  id: "003",

  title: "A febre que não passa",

  specialty: "Clínica Médica",

  difficulty: "Intermediário",

  status: "Em investigação",


  patient: {
    name: "Mariana Alves Ribeiro",
    age: 29,
    sex: "Feminino"
  },


  chiefComplaint:
    "Estou com febre há alguns dias e não sei o que está acontecendo.",


  history:
    "Paciente relata início de febre há aproximadamente 5 dias, inicialmente baixa, mas chegando a 39,1 °C nas últimas 48 horas. Refere calafrios, cansaço intenso e dor de cabeça. Relata redução do apetite e perda de aproximadamente 2 kg desde o início dos sintomas. Nega tosse, dor torácica, vômitos ou diarreia. Refere que a febre melhora temporariamente após uso de antitérmico, mas retorna algumas horas depois.",


  physicalExam: [

    "Paciente consciente, orientada, prostrada e febril",

    "Pele quente",

    "Mucosas levemente hipocoradas",

    "Ausculta pulmonar sem alterações importantes",

    "Taquicardia à ausculta cardíaca",

    "Abdome flácido, sem dor significativa à palpação",

    "Frequência respiratória aumentada"

  ],


  exams: [

    {
      name: "Hemograma",

      result:
        "Leucócitos: 17.800/mm³ | Neutrófilos: 88% | Hemoglobina: 12,1 g/dL | Plaquetas: 198.000/mm³"
    },


    {
      name: "Proteína C reativa",

      result:
        "PCR: 18,6 mg/dL, significativamente elevada."
    },


    {
      name: "Lactato",

      result:
        "Lactato: 2,4 mmol/L, discretamente aumentado."
    },


    {
      name: "Função renal",

      result:
        "Ureia: 42 mg/dL | Creatinina: 1,2 mg/dL"
    },


    {
      name: "Radiografia de tórax",

      result:
        "Sem infiltrados ou consolidações pulmonares."
    },

    {
      name: "Sinais vitais",

      result: "PA: 108/68 mmHg FC: 112 bpm FR: 24 irpm SpO₂: 96% Temperatura: 39,1 °C"
    
    }

  ],

  clues: [

    "Febre há 5 dias",

    "Picos febris de até 39,1 °C",

    "Calafrios",

    "Astenia e prostração",

    "Perda ponderal recente",

    "Taquicardia",

    "Frequência respiratória aumentada",

    "Leucocitose com neutrofilia",

    "PCR elevada",

    "Lactato discretamente aumentado",

    "Ausência de foco pulmonar evidente"

  ],


  hypotheses: [

    "Processo infeccioso bacteriano",

    "Síndrome infecciosa sistêmica",

    "Foco infeccioso ainda não identificado",

    "Infecção viral prolongada"

  ],


  diagnosis:
    "Síndrome infecciosa sistêmica com provável foco bacteriano ainda não identificado.",


  expectedAnswer: {

    summary:
      "Paciente apresenta quadro febril associado a taquicardia, taquipneia, leucocitose com neutrofilia e elevação importante da PCR, sugerindo processo infeccioso sistêmico.",


    discussion:
      "A presença de febre persistente, calafrios, prostração e alterações dos sinais vitais deve levantar suspeita de infecção com repercussão sistêmica. A leucocitose com neutrofilia e a elevação da PCR reforçam a possibilidade de etiologia bacteriana. A ausência de alterações na radiografia de tórax torna um foco pulmonar menos provável, sendo necessária investigação de outros possíveis focos infecciosos.",


    reasoning: [

      "Reconhecer sinais clínicos de um processo infeccioso sistêmico.",

      "Interpretar leucocitose associada à neutrofilia.",

      "Valorizar taquicardia e frequência respiratória aumentada.",

      "Relacionar a elevação da PCR à presença de processo inflamatório.",

      "Interpretar o lactato discretamente aumentado no contexto clínico.",

      "Investigar ativamente um possível foco infeccioso."

    ],


    conduct: [

      "Realizar avaliação clínica completa e reavaliar sinais vitais.",

      "Investigar possíveis focos infecciosos por meio de anamnese e exame físico direcionados.",

      "Considerar coleta de culturas conforme suspeita clínica.",

      "Monitorizar evolução clínica e parâmetros laboratoriais.",

      "Iniciar tratamento específico conforme identificação do foco e avaliação clínica."

    ]

  }

},

{
  id: "004",

  title: "Ele só está cansado?",

  specialty: "Clínica Médica",

  difficulty: "Avançado",

  status: "Em investigação",


  patient: {
    name: "Carlos Eduardo Martins",
    age: 58,
    sex: "Masculino"
  },


  chiefComplaint:
    "Estou cansado e com falta de ar quando faço esforço.",


  history:
    "Paciente relata cansaço progressivo há aproximadamente 3 semanas. Inicialmente apresentava falta de ar apenas durante atividades físicas mais intensas. Nos últimos 4 dias, passou a apresentar dispneia ao realizar atividades habituais. Refere tosse seca ocasional e sensação de respiração acelerada. Nega febre e dor torácica. Relata perda de aproximadamente 3 kg no último mês, sem mudança intencional na alimentação. É hipertenso há 8 anos, com uso irregular da medicação anti-hipertensiva. Ex-tabagista, com histórico de tabagismo durante aproximadamente 20 anos.",


  physicalExam: [

    "Paciente consciente e orientado",

    "Respiração acelerada durante a avaliação",

    "Estertores discretos em bases pulmonares",

    "Ritmo cardíaco regular",

    "Sem edema importante de membros inferiores",

    "PA: 146/92 mmHg",

    "FC: 104 bpm",

    "FR: 30 irpm",

    "SpO₂: 93%",

    "Temperatura: 36,7 °C"

  ],


  exams: [

    {
      name: "Hemograma",

      result:
        "Leucócitos: 9.200/mm³ | Hemoglobina: 11,2 g/dL | Hematócrito: 34% | Plaquetas: 245.000/mm³"
    },


    {
      name: "Gasometria arterial",

      result:
        "pH: 7,46 | PaCO₂: 31 mmHg | PaO₂: 68 mmHg | HCO₃⁻: 22 mEq/L"
    },


    {
      name: "Eletrólitos",

      result:
        "Sódio: 138 mEq/L | Potássio: 4,1 mEq/L"
    },


    {
      name: "Radiografia de tórax",

      result:
        "Aumento discreto da trama vascular pulmonar e opacidades intersticiais bibasais."
    }

  ],


  clues: [

    "Dispneia progressiva",

    "Tosse seca",

    "Perda ponderal recente",

    "História de tabagismo",

    "Hipertensão arterial com tratamento irregular",

    "Taquicardia",

    "Frequência respiratória de 30 irpm",

    "SpO₂ de 93%",

    "PaO₂ reduzida",

    "Estertores bibasais",

    "Alterações intersticiais na radiografia de tórax"

  ],


  hypotheses: [

    "Comprometimento respiratório",

    "Doença pulmonar intersticial",

    "Insuficiência cardíaca",

    "Doença pulmonar relacionada ao tabagismo",

    "Insuficiência respiratória hipoxêmica inicial"

  ],


  diagnosis:
    "Insuficiência respiratória hipoxêmica inicial, com necessidade de investigação da causa pulmonar ou cardiovascular.",


  expectedAnswer: {

    summary:
      "Paciente apresenta dispneia progressiva associada a taquipneia, hipoxemia, redução da PaO₂ e alterações intersticiais na radiografia de tórax, indicando comprometimento respiratório que necessita de investigação.",


    discussion:
      "Apesar de aparentemente estável e consciente, o paciente apresenta sinais de alerta importantes. A frequência respiratória de 30 irpm, associada à SpO₂ de 93% e PaO₂ de 68 mmHg, demonstra alteração da oxigenação. A gasometria também apresenta redução da PaCO₂, compatível com hiperventilação. Os estertores bibasais e as opacidades intersticiais na radiografia sugerem comprometimento pulmonar, enquanto o aumento da trama vascular também exige correlação com possível componente cardiovascular.",


    reasoning: [

      "Reconhecer taquipneia como sinal de alerta clínico.",

      "Interpretar SpO₂ e PaO₂ reduzidas como evidências de hipoxemia.",

      "Analisar a gasometria arterial e reconhecer padrão de hiperventilação.",

      "Correlacionar estertores pulmonares com as alterações radiográficas.",

      "Considerar antecedentes de hipertensão e tabagismo na investigação.",

      "Não subestimar um paciente aparentemente estável com alterações respiratórias importantes."

    ],


    conduct: [

      "Realizar avaliação clínica e respiratória completa.",

      "Monitorizar frequência respiratória e saturação de oxigênio.",

      "Investigar a causa da hipoxemia e das alterações intersticiais.",

      "Considerar exames complementares cardiológicos e pulmonares conforme suspeita clínica.",

      "Avaliar necessidade de oxigenoterapia conforme evolução e critérios clínicos."

    ]

  }

},



{

  id:"005",

  title:"Não é só uma dor de cabeça",

  specialty:"Clínica Médica / Neurologia",

  difficulty:"Avançado",

  status:"Em investigação",


  patient:{

    name:"Lucas Henrique Moreira",

    age:23,

    sex:"Masculino"

  },


  chiefComplaint:

  "Cefaleia súbita e extremamente intensa iniciada há aproximadamente 18 horas.",


  history:

  "Paciente previamente hígido relata início súbito de cefaleia intensa há aproximadamente 18 horas. Descreve a dor como a pior dor de cabeça da vida, com intensidade 9/10. O quadro teve início durante atividade física. Desde então, apresenta náuseas, vômitos e fotofobia. Refere rigidez na região do pescoço. Nega história prévia de cefaleias semelhantes e não utilizou medicamentos antes da chegada ao serviço.",


  physicalExam:[

    "Paciente consciente e orientado, porém bastante incomodado pela dor",

    "Fotofobia presente",

    "Rigidez de nuca",

    "Pupilas isocóricas e fotorreagentes",

    "Sem déficit motor evidente",

    "Ausculta cardíaca sem alterações significativas",

    "Ausculta pulmonar sem alterações significativas"

  ],


  exams:[


    {

      name:"Hemograma",

      result:"Leucócitos: 13.600/mm³ | Neutrófilos: 82% | Hemoglobina: 14,8 g/dL | Plaquetas: 276.000/mm³"

    },


    {

      name:"Proteína C reativa",

      result:"PCR: 7,2 mg/dL, apresentando elevação discreta."

    },


    {

      name:"Eletrólitos",

      result:"Sódio: 137 mEq/L | Potássio: 4,0 mEq/L"

    },


    {

      name:"Tomografia computadorizada de crânio",

      result:"Presença de material hiperdenso nas cisternas basais, sugestivo de sangue no espaço subaracnoideo.",

      media:[

        {

          type:"image",

          src:"/casos/005/tc005.png",

          caption:"Tomografia de crânio evidenciando sangue nas cisternas basais."

        }

      ]

    }


  ],


  clues:[

    "Cefaleia súbita e de forte intensidade",

    "Pior dor de cabeça da vida",

    "Início durante esforço físico",

    "Náuseas e vômitos",

    "Fotofobia",

    "Rigidez de nuca",

    "Alteração da frequência cardíaca",

    "Leucocitose",

    "Sangue nas cisternas basais na tomografia"

  ],


  hypotheses:[

    "Hemorragia subaracnoidea",

    "Meningite",

    "Enxaqueca com sinais atípicos",

    "Hemorragia intracraniana"

  ],


  diagnosis:

  "Hemorragia subaracnoidea."


  ,


  expectedAnswer:{


    summary:

    "Quadro altamente sugestivo de hemorragia subaracnoidea, caracterizado por cefaleia súbita e extremamente intensa, associada a vômitos, fotofobia e rigidez de nuca, com confirmação por tomografia de crânio.",


    discussion:

    "A cefaleia súbita e intensa, descrita como a pior dor de cabeça da vida e iniciada durante esforço físico, representa um importante sinal de alerta para hemorragia subaracnoidea. A presença de rigidez de nuca, vômitos e fotofobia sugere irritação meníngea. A tomografia demonstrando material hiperdenso nas cisternas basais confirma a presença de sangue no espaço subaracnoideo e torna essa hipótese prioritária.",


    reasoning:[

      "Reconhecer a cefaleia súbita e intensa como sinal de alerta neurológico.",

      "Valorizar o início da dor durante esforço físico.",

      "Identificar sinais de irritação meníngea, como rigidez de nuca e fotofobia.",

      "Interpretar a presença de sangue nas cisternas basais na tomografia.",

      "Diferenciar hemorragia subaracnoidea de outras causas de cefaleia aguda."

    ],


    conduct:[

      "Realizar avaliação neurológica imediata.",

      "Manter monitorização clínica e neurológica.",

      "Acionar avaliação especializada em Neurologia/Neurocirurgia.",

      "Investigar a origem do sangramento, especialmente aneurisma cerebral.",

      "Instituir medidas de suporte e manejo das complicações conforme avaliação especializada."

    ]


  }

},

];

