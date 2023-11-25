import dynamic from "next/dynamic";
import { Spinner } from "flowbite-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ErrorPage from "./atoms/errorPage";

const ServerHome = dynamic(
  () => import("./server/ServerHome").then((mod) => mod.default),
  {
    loading: () => (
      <div className="text-white flex h-screen items-center justify-center">
        <div className="h-auto bg-green-400 ">
          <p className="px-3 text-sm md:text-base text-white">Loadin server</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);
const SliderHome = dynamic(
  () => import("./atoms/SliderHome").then((mod) => mod.default),
  {
    ssr: false,
  }
);
const HeaderHome = dynamic(
  () => import("./atoms/HeaderHome").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="animate-spin text-white ">
        <AiOutlineLoading3Quarters className="text-2xl" />
      </div>
    ),
  }
);

const Home: React.FC = () => {
  return (
    <>
      <ErrorPage />
      <aside className="lg:hidden w-full navTop flex gap-5 flex-start ps-2   items-center fixed top-0 md:text-base ">
        {/* Profilo */}
        <div className="circle-profile flex items-center justify-center">A</div>

        {/* Tutto */}
        <p className="h-auto w-auto p-1 px-3 text-white rounded-full nav-btn-music p-btn-home bg-green-400">
          Tutti
        </p>
        {/* Musica */}
        <p className="h-auto w-auto p-1 px-3 text-white rounded-full nav-btn-music p-btn-home">
          Musica
        </p>

        {/* Podcast */}

        <p className="h-auto w-auto p-1 px-4 text-white rounded-full nav-btn-music p-btn-home">
          Podcast
        </p>
      </aside>
      {/* Header */}
      <header className="lg:hidden header-home flex flex-wrap  items-center  justify-center px-1 md:text-2xl gap-4 ">
        <HeaderHome />
      </header>

      <main className="min-h-screen lg:hidden w-full flex flex-col main-custom mt-8  px-3 md:text-2xl gap-2 md:gap-10 ">
        {/* Primo Slider */}
        <section className="w-full h-auto section-preferiti-home">
          <p className="p-section__slider-home">I tuoi mix preferiti</p>

          <div className="w-full h-auto flex overflow-scroll snap-x snap-mandatory mt-4 md:mt-8 gap-3">
            <SliderHome start={8} finish={13} nSlider="mix" id={6} />
          </div>
        </section>

        {/* Slider 2 */}

        <section className="w-full h-auto section-preferiti-home ">
          <p className="p-section__slider-home">Creato Per Andrea</p>

          <div className="w-full h-auto flex overflow-scroll  snap-x snap-mandatory gap-3 mt-4 md:mt-8 md:gap-5">
            <SliderHome start={2} finish={7} id={11} />
          </div>
        </section>

        {/* Slider 3 */}

        <section className="w-full h-auto section-preferiti-home mb-32">
          <p className="p-section__slider-home">Scopri di più</p>

          <div className="w-full h-auto flex overflow-scroll  snap-x snap-mandatory gap-3 mt-4 md:mt-8 md:gap-5">
            <SliderHome start={0} finish={1} id={16} />
          </div>
        </section>
      </main>
      <ServerHome />
    </>
  );
};
export default Home;
