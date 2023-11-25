import React, { use } from "react";
import { useParams } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { SiSpotify } from "react-icons/si";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";

import Link from "next/link";
import dynamic from "next/dynamic";
import ListMusic from "../../../atoms/SezioneDettaglio/ListMusic";

const Brano = () => {
  const Header = dynamic(
    () =>
      import("../../../atoms/SezioneDettaglio/Header").then(
        (mod) => mod.default
      ),
    {
      loading: () => (
        <div className="text-white flex h-screen items-center justify-center">
          <div className="h-auto bg-green-400 ">
            <p className="px-3 text-sm md:text-base text-white">
              Loadin server
            </p>
          </div>
        </div>
      ),
      ssr: false,
    }
  );
  const ListaBrani = dynamic(
    () =>
      import("../../../atoms/SezioneDettaglio/ListMusic").then(
        (mod) => mod.default
      ),
    {
      ssr: false,
    }
  );

  return (
    <>
      <header className="lg:hidden header-dettaglio h-auto flex flex-col md:text-base">
        {/* Back */}
        <Link href="/" className="h-auto w-full relative  p-4 md:p-8">
          <IoIosArrowBack className="text-white icon-back " />
        </Link>

        {/* Brano Filtrato */}
        <Header />
      </header>
      {/* Section PlayList */}
      <main className=" lg:hidden relative min-h-screen h-auto mt-5 md:mt-10 flex flex-col">
        <section className=" h-auto relative flex flex-col">
          <div className="h-auto flex flex-col ps-3 gap-1 md:gap-3">
            {/* Creato per */}
            <span className="flex items-center gap-2 md:gap-4 span-brano md:text-base">
              <SiSpotify className="text-green-400 icon-back" />
              <p className=" p-section-brano">
                Creato per <strong className="text-white">Andrea</strong>
              </p>
            </span>

            {/* Icone download, play */}
            <div className="h-auto flex justify-between items-center px-4 mt-2 md:mt-4 icon-box md:text-2xl">
              <div className="flex gap-2 md:gap-4">
                <IoMdAddCircleOutline className="text-white" />
                <RxDownload className="text-white" />
                <BsThreeDots className="text-white" />
              </div>
              <FaCirclePlay className="text-green-400 play_btn" />
            </div>
          </div>
        </section>

        <section className="h-auto relative flex gap-2 md:gap-4  ps-3 md:ps-6 flex-col mt-4 md:mt-8 md:text-base mb-32">
          <ListMusic />
        </section>
      </main>
    </>
  );
};

export default Brano;
