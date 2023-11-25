"use client";
import React, { use } from "react";
import { useParams } from "next/navigation";

const Brano = () => {
  const search = useParams();
  console.log(search.slug);

  return (
    <>
      <header className="header-dettaglio h-60"></header>
    </>
  );
};

export default Brano;
