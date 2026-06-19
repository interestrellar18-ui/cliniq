import Link from "next/link";


interface FolderProps {

  id: string;

  title: string;

  locked?: boolean;

}



export default function Folder({

  id,

  title,

  locked

}: FolderProps) {


  return (

    <Link

      href={locked ? "#" : `/cases/${id}`}

      className={`folder ${locked ? "locked" : ""}`}

    >


      <div className="folder-top">

        PRONTUÁRIO #{id}

      </div>



      <div className="folder-art">


        <div className="paper paper-one">

          EXAME

        </div>



        <div className="paper paper-two">

          LAB

        </div>



        <div className="pixel-folder">

          <div className="tab-folder"></div>

        </div>


      </div>



      <div className="folder-title">

        {title}

      </div>


    </Link>

  );

}