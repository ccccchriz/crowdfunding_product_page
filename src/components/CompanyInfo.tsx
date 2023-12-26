interface CompanyInfoProps {
  company: string;
  logo: string;
  short_info: string;
}

export default function CompanyInfo({
  company,
  logo,
  short_info,
}: CompanyInfoProps) {
  return (
    <div className="bg-white p-4 flex flex-col items-center -mt-8 rounded-lg gap-4">
      <img src={logo} alt="" className="size-14 -mt-10" />
      <h2 className="font-bold text-center mt-2 text-2xl">{company}</h2>
      <p className="text-center text-neutral-dark-gray">{short_info}</p>
      <div className="grid grid-cols-[1fr_auto] w-full gap-2">
        <button
          type="button"
          className="text-white bg-primary-cyan font-bold py-2 px-2 rounded-full"
        >
          Back this project
        </button>
        <button type="button">
          <img src="assets/images/icon-bookmark.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
