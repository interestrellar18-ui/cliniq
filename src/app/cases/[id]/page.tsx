import { cases } from "@/data/cases";
import { notFound } from "next/navigation";
import CaseClient from "./CaseClient";


export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {


  const { id } = await params;


  const caseData = cases.find(
    (item) => item.id === id
  );


  if (!caseData) {
    notFound();
  }


  return (

    <CaseClient caseData={caseData} />

  );

}