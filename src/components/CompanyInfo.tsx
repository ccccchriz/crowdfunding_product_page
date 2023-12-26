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
    <div className="bg-white p-4 flex flex-col items-center -mt-8 rounded-lg gap-2">
      <img src={logo} alt="" className="size-14 -mt-10" />
      <h2 className="font-bold text-center mt-2 text-2xl">{company}</h2>
      <p className="text-center text-neutral-dark-gray">{short_info}</p>
    </div>
  );
}
