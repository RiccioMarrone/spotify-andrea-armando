"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

const Header: React.FC = () => {
  const search = useParams();
  const data = useSelector((state: RootState) => state.storeData.value);
  return (
    <>
      {data?.results
        .filter((brano) => {
          if (brano.videoId == search.slug[1]) {
            return brano;
          }
        })
        .map((element, index) => {
          return (
            <div
              key={index}
              className="h-auto flex flex-col items-center justify-center box-img-filter md:text-2xl"
            >
              <img className="branoFiltrato" src={element.thumbnail} />
              <p className="p-descrizione-preferiti-home">
                Mix {element.author}
              </p>
            </div>
          );
        })}
    </>
  );
};

export default Header;
