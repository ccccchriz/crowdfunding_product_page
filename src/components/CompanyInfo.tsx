import { useState } from "react";

interface CompanyInfoProps {
  company: string;
  logo: string;
  short_info: string;
  setModalIndex: Function;
}

export default function CompanyInfo({
  company,
  logo,
  short_info,
  setModalIndex,
}: CompanyInfoProps) {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  return (
    <div className="bg-white p-4 flex flex-col items-center -mt-8 rounded-lg gap-4">
      <img src={logo} alt="" className="size-14 -mt-10" />
      <h2 className="font-bold text-center mt-2 text-2xl">{company}</h2>
      <p className="text-center text-neutral-dark-gray">{short_info}</p>
      <div className="w-full gap-2 flex md:justify-between">
        <button
          type="button"
          onClick={() => setModalIndex(-1)}
          className="text-white bg-primary-cyan font-bold py-2 px-8 rounded-full grow md:grow-0"
        >
          Back this project
        </button>
        <button
          type="button"
          onClick={() => setIsBookmarked((value) => !value)}
          className="flex items-center gap-4 bg-neutral-light-gray rounded-full md:pr-4"
        >
          {isBookmarked ? (
            <img src="assets/images/icon-bookmarked.svg" alt="" />
          ) : (
            <img src="assets/images/icon-bookmark.svg" alt="" />
          )}
          <span
            className={`sr-only md:not-sr-only mr-4 font-bold ${
              isBookmarked && "text-primary-cyan"
            }`}
          >
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </span>
        </button>
      </div>
    </div>
  );
}
