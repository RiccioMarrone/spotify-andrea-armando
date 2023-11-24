"use client";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { incrementa } from "../../features/counterId";
import { useState } from "react";
import Link from "next/link";

const HeaderHome: React.FC = () => {
  const data = useSelector((state: RootState) => state.storeData.value);
  const id = useSelector((state: RootState) => state.counterSlice.value);
  const dispatch = useDispatch();
  const [numbers, setNumbers] = useState(
    Array.from({ length: 21 }, (_, index) => index)
  );

  return (
    <>
      {data
        ? data?.results.slice(14, 20).map((brano, index) => {
            return (
              <Link
                href={`/dashboard/brani/${encodeURIComponent(
                  index
                )}/${encodeURIComponent(brano.videoId)}`}
                key={index}
                className="h-auto box-header-home-playlist rounded flex "
              >
                <img
                  className="img-header-home"
                  src={brano.thumbnail}
                  alt="immagine header"
                />
                <div className="ps-2 flex items-center justify-center flex-wrap p-header-home overflow-hidden">
                  {brano.title}
                </div>
              </Link>
            );
          })
        : ""}
    </>
  );
};
export default HeaderHome;
