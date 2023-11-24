"use client";
import React, { use } from "react";
import { useParams } from "next/navigation";

const Brano = () => {
  const search = useParams();

  return <div className="text-white">{search.slug}</div>;
};

export default Brano;
