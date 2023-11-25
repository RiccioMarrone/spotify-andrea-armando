"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";

const ListMusic = () => {
  const search = useParams();
  const data = useSelector((state: RootState) => state.storeData.value);
  return (
    <>
      {data?.results
        .filter((playlist) => {
          if (playlist.videoId != search.slug[1]) {
            return playlist;
          }
        })
        .map((brani, index) => {
          return (
            <div
              key={brani.videoId}
              className="box-autore flex gap-1 px-1 md:px-2"
            >
              <Link
                href={`/dashboard/brani/${encodeURIComponent(
                  index
                )}/${encodeURIComponent(brani.videoId)}`}
                className="h-auto w-5/6 flex box-img-autore gap-1 md:gap-2"
              >
                <img src={brani.thumbnail} alt="foto" />
                <div className="flex flex-col justify-center">
                  <h5 className="text-white name-song">{brani.title}</h5>
                  <p className="text-white name-author">{brani.author}</p>
                </div>
              </Link>
              <div className="w-1/6 flex items-center justify-end pe-4 box-icon-dot">
                <BsThreeDots className="text-white icon-dot" />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ListMusic;
