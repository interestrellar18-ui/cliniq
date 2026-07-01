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

id:"003",

title:"Cefaleia de Início Súbito",

specialty:"Neurologia",

difficulty:"Avançado",

status:"Em investigação",


patient:{

name:"Lucas Ferreira Almeida",

age:36,

sex:"Masculino"

},


chiefComplaint:

"Dor de cabeça intensa iniciada de forma súbita há aproximadamente 1 hora.",


history:

"Paciente previamente hígido relata cefaleia de forte intensidade, descrita como a pior dor de sua vida, iniciada durante esforço físico. Evoluiu com náuseas, vômitos e rigidez cervical. Nega trauma recente.",


physicalExam:[

"Paciente agitado e com dor intensa",

"Rigidez de nuca",

"Fotofobia",

"Pressão arterial elevada",

"Alteração discreta do nível de consciência"

],


exams:[

{
  name:"Tomografia de crânio",

  result:"Imagem sugestiva de sangramento no espaço subaracnoideo.",

  media:[
    {
      type:"image",
      src:"/casos/003/tomografia003.png",
      caption:"Tomografia craniana inicial."
    }
  ]

},
{

name:"Punção lombar",

result:"Presença de sangue no líquor, confirmando suspeita de hemorragia."

}

],




clues:[

"Cefaleia em trovoada",

"Início súbito",

"Pior cefaleia da vida",

"Rigidez de nuca",

"Alteração neurológica"

],


hypotheses:[

"Hemorragia subaracnoidea",

"Meningite",

"Enxaqueca complicada",

"Trombose venosa cerebral"

],


diagnosis:

"Hemorragia subaracnoidea por ruptura de aneurisma cerebral.",


expectedAnswer:{


summary:

"O quadro apresenta sinais clássicos de uma cefaleia secundária grave, principalmente pela característica súbita e intensa associada a sinais meníngeos.",


discussion:

"A cefaleia em trovoada deve ser considerada uma emergência neurológica. A investigação inicial deve ser feita com tomografia de crânio e, quando necessário, complementada com análise do líquor.",


reasoning:[

"Reconhecer características de cefaleia de alerta.",

"Relacionar início súbito com possibilidade de sangramento intracraniano.",

"Identificar rigidez de nuca como sinal de irritação meníngea.",

"Investigar causas secundárias antes de considerar cefaleia primária."

],


conduct:[

"Realizar avaliação neurológica urgente.",

"Solicitar neuroimagem.",

"Controlar pressão arterial.",

"Encaminhar para tratamento especializado."

]


}

},

{

id:"004",

title:"Alteração Progressiva da Memória",

specialty:"Neurologia",

difficulty:"Intermediário",

status:"Em investigação",


patient:{

name:"Helena Duarte Martins",

age:67,

sex:"Feminino"

},



chiefComplaint:

"Esquecimentos frequentes e dificuldade para realizar atividades habituais há aproximadamente 1 ano.",



history:

"Paciente apresenta perda progressiva de memória recente, repetição das mesmas perguntas e dificuldade para organizar tarefas diárias. Familiares relatam mudança discreta de comportamento e episódios de desorientação em locais conhecidos. Nega episódios súbitos de perda de força ou alteração da fala.",



physicalExam:[

"Paciente consciente e colaborativa",

"Dificuldade em recordar informações recentes",

"Desorientação temporal leve",

"Déficit cognitivo progressivo"

],



exams:[


{

name:"Teste cognitivo",

result:"Redução do desempenho em memória recente e funções executivas."

},



{

name:"Ressonância magnética de encéfalo",

result:"Atrofia predominante em regiões temporais mediais, sugestiva de processo neurodegenerativo.",


media:[

{

type:"image",

src:"/casos/004/ressonancia004.png",

caption:"Ressonância magnética de encéfalo."

}

]

},



{

name:"Exames laboratoriais",

result:"Sem alterações metabólicas significativas que justifiquem o quadro."

}


],



clues:[

"Idade avançada",

"Perda progressiva de memória recente",

"Repetição de perguntas",

"Alteração funcional nas atividades diárias",

"Atrofia temporal medial na imagem"

],



hypotheses:[

"Doença de Alzheimer",

"Demência vascular",

"Depressão com prejuízo cognitivo",

"Demência por corpos de Lewy"

],



diagnosis:

"Doença de Alzheimer provável.",



expectedAnswer:{


summary:

"O quadro apresenta características compatíveis com síndrome demencial progressiva, principalmente pelo comprometimento inicial da memória recente associado à perda funcional.",



discussion:

"A doença de Alzheimer é a principal causa de demência em idosos. O diagnóstico é clínico, baseado na história, avaliação cognitiva e exclusão de causas reversíveis. Alterações em regiões temporais mediais podem apoiar a hipótese diagnóstica.",



reasoning:[

"Reconhecer padrão progressivo de declínio cognitivo.",

"Diferenciar alterações normais do envelhecimento de demência.",

"Associar comprometimento de memória recente com doença de Alzheimer.",

"Excluir causas reversíveis de déficit cognitivo."

],



conduct:[

"Realizar avaliação neuropsicológica.",

"Investigar causas secundárias de alteração cognitiva.",

"Iniciar acompanhamento neurológico.",

"Orientar familiares sobre suporte e segurança do paciente."

]


}

},

{

id:"005",

title:"Dispneia Progressiva",

specialty:"Cardiologia",

difficulty:"Intermediário",

status:"Em investigação",



patient:{

name:"Ricardo Alves Martins",

age:67,

sex:"Masculino"

},



chiefComplaint:

"Falta de ar aos esforços há cerca de 3 meses.",



history:

"Paciente relata dispneia progressiva, inicialmente aos grandes esforços, evoluindo para atividades habituais. Refere ortopneia, necessidade de dormir com vários travesseiros, episódios de falta de ar durante a madrugada e aumento do volume das pernas ao final do dia. Possui histórico de hipertensão arterial sistêmica há 20 anos e baixa adesão ao tratamento.",



physicalExam:[

"Dispneia ao falar frases longas",

"Edema bilateral de membros inferiores (++/4+)",

"Estertores crepitantes em bases pulmonares",

"Turgência jugular",

"Frequência cardíaca aumentada"

],



exams:[


{

name:"Ecocardiograma",

result:"Redução da fração de ejeção ventricular esquerda, sugerindo disfunção sistólica."

},



{

name:"Radiografia de tórax",

result:"Aumento da área cardíaca e sinais de congestão pulmonar.",


media:[

{

type:"image",

src:"/casos/005/rxtorax005.png",

caption:"Radiografia de tórax evidenciando cardiomegalia e congestão pulmonar."

}

]

},



{

name:"BNP",

result:"Peptídeo natriurético cerebral elevado, compatível com sobrecarga cardíaca."

}


],



clues:[

"Dispneia progressiva",

"Ortopneia",

"Edema periférico",

"Cardiomegalia",

"Fração de ejeção reduzida"

],



hypotheses:[

"Insuficiência cardíaca congestiva",

"Doença pulmonar crônica",

"Embolia pulmonar",

"Síndrome nefrótica"

],



diagnosis:

"Insuficiência cardíaca com fração de ejeção reduzida (ICFEr).",



expectedAnswer:{


summary:

"Quadro compatível com insuficiência cardíaca, caracterizado por sintomas de congestão pulmonar e sistêmica associados à redução da função cardíaca.",



discussion:

"A combinação de dispneia, ortopneia, edema periférico e alterações no ecocardiograma indica falência da capacidade do coração de manter débito adequado. A hipertensão crônica é um importante fator de risco para remodelamento cardíaco e insuficiência ventricular.",



reasoning:[

"Reconhecer sinais clínicos de insuficiência cardíaca.",

"Identificar sintomas de congestão pulmonar e sistêmica.",

"Relacionar hipertensão crônica com disfunção ventricular.",

"Interpretar redução da fração de ejeção como alteração cardíaca funcional."

],



conduct:[

"Realizar avaliação cardiológica completa.",

"Iniciar tratamento medicamentoso conforme classificação clínica.",

"Controlar fatores de risco cardiovascular.",

"Orientar redução de sódio e acompanhamento contínuo."

]


}

},

];

