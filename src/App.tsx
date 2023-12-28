import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import CompanyInfo from "./components/CompanyInfo";
import ProjectStats from "./components/ProjectStats";
import AboutProject from "./components/AboutProject";
import ThanksDialog from "./components/ThanksDialog";

interface tierTypes {
  name: string;
  min_money: number;
  description: string;
  left: number;
  extra_info: string;
}

interface dataTypes {
  company: string;
  logo: string;
  short_info: string;
  money_wanted: number;
  money_collected: number;
  backers: number;
  days_left: number;
  about: string[];
  tiers: tierTypes[];
  thanks_message: string;
  no_reward_info: string;
}

function App() {
  const [data, setData] = useState<dataTypes>();

  const thanksDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <Header />
      {data ? (
        <>
          <main className="bg-neutral-light-gray p-4 flex flex-col gap-4 font-primary">
            <CompanyInfo
              company={data.company}
              logo={data.logo}
              short_info={data.short_info}
            />
            <ProjectStats
              money_collected={data.money_collected}
              money_wanted={data.money_wanted}
              backers={data.backers}
              days_left={data.days_left}
            />
            <AboutProject about={data.about} tiers={data.tiers} />
            <button
              type="button"
              className="bg-black p-16 text-white"
              onClick={() => thanksDialog.current!.showModal()}
            >
              OPEN DIALOG
            </button>
          </main>
          <ThanksDialog message={data.thanks_message} ref={thanksDialog} />
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default App;
