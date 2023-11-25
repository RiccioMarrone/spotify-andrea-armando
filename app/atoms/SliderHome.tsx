"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
interface indici {
  start: number;
  finish: number;
  nSlider?: string;
  id: number;
}

const SliderHome: React.FC<indici> = ({ start, finish, nSlider, id }) => {
  const data = useSelector((state: RootState) => state.storeData.value);
  let countID = id;
  let contatore = -1;
  const boxShadow: string[] = [
    "shadow-[0px_0.4em_4px_#f8e16c]",
    "shadow-[0px_0.4em_4px_#ffc2b4]",
    "shadow-[0px_0.4em_4px_#4cc9f0]",
    "shadow-[0px_0.4em_4px_#b5179e]",
  ];
  return (
    <>
      {data
        ? data.results.slice(start, finish).map((mix, index) => {
            countID++;
            contatore++;
            if (contatore == 4) {
              contatore = 0;
            }

            return (
              <Link
                href={`/dashboard/brani/${encodeURIComponent(
                  countID
                )}/${encodeURIComponent(mix.videoId)}`}
                key={countID}
                className="snap-center flex flex-col"
              >
                {nSlider && nSlider == "mix" ? (
                  <img
                    className={`img-preferiti-home ${boxShadow[contatore]}`}
                    src={mix.thumbnail}
                    alt="foto"
                  />
                ) : (
                  <img
                    className="img-preferiti-home"
                    src={mix.thumbnail}
                    alt="foto"
                  />
                )}
                {nSlider && nSlider == "mix" ? (
                  <p className="p-descrizione-preferiti-home ">
                    Mix {mix.author}
                  </p>
                ) : (
                  <p className="p-descrizione-preferiti-home ">
                    Mix {mix.title}
                  </p>
                )}
              </Link>
            );
          })
        : ""}
    </>
  );
};

export default SliderHome;
