"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
interface indici {
  start: number;
  finish: number;
}

const SliderHome: React.FC<indici> = ({ start, finish }) => {
  const data = useSelector((state: RootState) => state.storeData.value);
  let countID = 6;
  return (
    <>
      {data
        ? data.results.slice(start, finish).map((mix) => {
            countID++;
            return (
              <Link
                href={`/dashboard/brani/${encodeURIComponent(
                  countID
                )}/${encodeURIComponent(mix.videoId)}`}
                key={countID}
                className="snap-center flex flex-col"
              >
                <img
                  className="img-preferiti-home"
                  src={mix.thumbnail}
                  alt="foto"
                />
                <p className="p-descrizione-preferiti-home ">{mix.author}</p>
              </Link>
            );
          })
        : ""}
    </>
  );
};

export default SliderHome;
