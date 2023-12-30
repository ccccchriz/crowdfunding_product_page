import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import CompanyInfo from "./components/CompanyInfo";
import ProjectStats from "./components/ProjectStats";
import AboutProject from "./components/AboutProject";
import ThanksDialog from "./components/ThanksDialog";
import SelectionDialog from "./components/SelectionDialog";

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
  const [modalIndex, setModalIndex] = useState<number>(-1);

  const thanksDialog = useRef<HTMLDialogElement>(null);
  const selectionDialog = useRef<HTMLDialogElement>(null);

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
          </main>
          <ThanksDialog message={data.thanks_message} ref={thanksDialog} />
          <SelectionDialog ref={selectionDialog}>
            {modalIndex == -1 && (
              <>
                <div className="p-2 grid gap-4">
                  <h3 className="font-bold text-lg">Pledge with no reward</h3>
                  <p className="text-neutral-dark-gray">
                    {data.no_reward_info}
                  </p>
                  <form
                    action=""
                    className="border-t border-t-neutral-dark-gray pt-4 w-full"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <label
                        htmlFor="pledge"
                        className="col-start-1 col-end-3 text-center text-neutral-dark-gray"
                      >
                        Enter your pledge
                      </label>
                      <input
                        type="number"
                        name="pledge"
                        id="pledge"
                        min={2}
                        max={data.money_wanted - data.money_collected}
                        className="border border-neutral-dark-gray rounded-full px-4"
                      />
                      <button
                        type="submit"
                        className="bg-primary-cyan text-white py-2 font-medium rounded-full"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </SelectionDialog>
          <button
            onClick={() => {
              setModalIndex(-1);
              selectionDialog.current!.showModal();
            }}
          >
            GUIASSSSSSSSSSS
          </button>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default App;
