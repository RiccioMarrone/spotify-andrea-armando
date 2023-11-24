import React from "react";
import Link from "next/link";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";

import { TiHome } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { RiPlayListFill } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import Server from "../server/ServerHome";

const NavBar: React.FC = () => {
  // const statoData = useSelector((state: RootState) =>state.storeData.value);
  // console.log("home" + statoData)
  return (
    <nav className="lg:hidden md:text-xs fixed w-screen bottom-0 grid grid-cols-4 z-10">
      {/* Home */}
      <Link
        href="/"
        className=" col-span-1 h-full flex flex-col items-center justify-center gap-1 md:gap-2"
      >
        <TiHome className="icon" />
        <p className="p-icon-nav">Home</p>
      </Link>

      {/* Lente */}
      <Link
        href="/ricerca"
        className=" col-span-1 h-full flex flex-col items-center justify-center gap-1 md:gap-2"
      >
        <BsSearch className="icon" />
        <p className="p-icon-nav">Ricerca</p>
      </Link>

      {/* Playlist */}
      <Link
        href="/"
        className=" col-span-1 h-full flex flex-col items-center justify-center gap-1 md:gap-2"
      >
        <RiPlayListFill className="icon" />
        <p className="p-icon-nav">La tua Libreria</p>
      </Link>

      {/* Spotify */}
      <Link
        href="/"
        className=" col-span-1 h-full flex flex-col items-center justify-center gap-1 md:gap-2"
      >
        <FaSpotify className="icon" />
        <p className="p-icon-nav">Premium</p>
      </Link>
    </nav>
  );
};

export default NavBar;
