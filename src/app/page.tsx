import Folder from "@/components/Folder";
import { cases } from "../data/cases";
import Link from "next/link";


export default function Home() {

  return (

    <main className="game">


      <header className="header">

        <h1>
          CLINIQ
        </h1>

        <p>
          ARQUIVO DE INVESTIGAÇÃO CLÍNICA
        </p>

      </header>




      <section className="top-menu">

        <div className="tab active">
          CASOS
        </div>

        <Link 
        href="/evidencias"
        className="tab"
        >
        EVIDÊNCIAS
        </Link>

       <Link
        href="/observacoes"
        className="tab"
        >
          MINHAS NOTAS
        </Link>


        <Link
        href="/diagnosticos"
        className="tab"
        >
        DIAGNÓSTICOS
        </Link>

      </section>





      <div className="main-area">



        <section className="cases">


          <div className="instruction">

            ▶ selecione um prontuário para iniciar investigação

          </div>





          <div className="folder-grid">


            {
              cases.map((item: {
                id: string;
                title: string;
              }) => (

                <Folder

                  key={item.id}

                  id={item.id}

                  title={item.title}

                />

              ))
            }




            <Folder

              id="003"

              title="Novo Caso"

              locked

            />



            <Folder

              id="004"

              title="Novo Caso"

              locked

            />



            <Folder

              id="005"

              title="Novo Caso"

              locked

            />



            <Folder

              id="006"

              title="Novo Caso"

              locked

            />



          </div>



        </section>







        <aside className="side-panel">


          <div className="counter">

            CASOS

            <strong>

              {cases.length.toString().padStart(2,"0")} / 45

            </strong>


          </div>





          <div className="box">


            <h3>
              INSTRUÇÕES
            </h3>


            <p>

              Clique em um prontuário
              para acessar história clínica,
              exames e evidências.

            </p>


          </div>






         <a
href="https://mail.google.com/mail/?view=cm&fs=1&to=inter.estrellar18@gmail.com&su=Novo caso clínico&body=Olá, gostaria de adicionar um novo caso ao arquivo."
target="_blank"
className="new-case"
>
  
<h3>
NOVO CASO
</h3>

<span>
+
</span>

</a>




        </aside>




      </div>




    </main>

  );

}