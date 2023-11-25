"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setData } from "@/features/setData";
import { Button, Spinner } from "flowbite-react";

export interface Requestoptions {
  data: {
    url: string;
    options: {
      method: string;
      headers: {
        "X-RapidAPI-Key": string;
        "X-RapidAPI-Host": string;
      };
    };
  };
}
interface Header {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

const ServerHome: React.FC = () => {
  const [dataFetch, setDataFetch] = useState(null);
  const dispatch = useDispatch();
  const statoData = useSelector((state: RootState) => state.storeData.value);

  const richiesta: Requestoptions = {
    data: {
      url: "https://youtube-music-api3.p.rapidapi.com/recommend?gl=ID",
      options: {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1f342e3a94msh8897fc667fe05c5p1f3ab4jsn2b15d6653d61",
          "X-RapidAPI-Host": "youtube-music-api3.p.rapidapi.com",
        },
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(richiesta.data.url, richiesta.data.options);
        const data = await res.json();

        dispatch(setData(data));
        setDataFetch(() => data);
      } catch (error) {
        console.log(error);
      }
    };
    if (!dataFetch) {
      fetchData();
    }
  }, [dataFetch]);
  return <></>;
};

export default ServerHome;
