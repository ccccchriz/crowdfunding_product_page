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

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    index?: number
  ) => {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).querySelector("input");
    if (index != undefined) {
      let tiers = data?.tiers;
      tiers![index] = {
        ...tiers![index],
        left: tiers![index].left - 1,
      };
      setData({
        ...data,
        money_collected: data?.money_collected! + +input!.value,
        backers: data?.backers! + 1,
        tiers: tiers,
      } as dataTypes);
    } else {
      setData({
        ...data,
        money_collected: data?.money_collected! + +input!.value,
        backers: data?.backers! + 1,
      } as dataTypes);
    }
    input!.value = "";
    selectionDialog.current!.close();
    thanksDialog.current!.showModal();
  };

  const handleClick = (index: number) => {
    setModalIndex(index);
    selectionDialog.current && selectionDialog.current.showModal();
  };

  return (
    <>
      <Header />
      {data ? (
        <>
          <main className="bg-neutral-light-gray p-4 flex flex-col items-center gap-4 font-primary">
            <div className="max-w-4xl">
              <CompanyInfo
                company={data.company}
                logo={data.logo}
                short_info={data.short_info}
                setModalIndex={handleClick}
              />
              <ProjectStats
                money_collected={data.money_collected}
                money_wanted={data.money_wanted}
                backers={data.backers}
                days_left={data.days_left}
              />
              <AboutProject
                about={data.about}
                tiers={data.tiers}
                setModalIndex={handleClick}
              />
            </div>
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
                    onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                      handleSubmit(event)
                    }
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
                        required
                        type="number"
                        name="pledge"
                        id="pledge"
                        min={2}
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
            {modalIndex >= 0 && modalIndex < data.tiers.length && (
              <>
                <div className="p-2 grid gap-4">
                  <div className="">
                    <h3 className="font-bold text-lg">
                      {data.tiers[modalIndex].name}
                    </h3>
                    <p className="text-primary-cyan font-medium">
                      Pledge ${data.tiers[modalIndex].min_money} or more
                    </p>
                  </div>
                  <p className="text-neutral-dark-gray">
                    {data.tiers[modalIndex].description}
                  </p>
                  <p className="flex items-center gap-2 text-neutral-dark-gray">
                    <strong className="text-xl text-black">
                      {data.tiers[modalIndex].left}
                    </strong>{" "}
                    left
                  </p>
                  <form
                    onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                      handleSubmit(event, modalIndex)
                    }
                    action=""
                    className="border-t border-t-neutral-dark-gray pt-4 w-full"
                  >
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-[1fr_auto_auto]">
                      <label
                        htmlFor="pledge"
                        className="col-start-1 col-end-3 text-center text-neutral-dark-gray md:col-end-2 self-center"
                      >
                        Enter your pledge
                      </label>
                      <input
                        required
                        type="number"
                        name="pledge"
                        id="pledge"
                        min={data.tiers[modalIndex].min_money}
                        className="border border-neutral-dark-gray rounded-full px-4"
                      />
                      <button
                        type="submit"
                        className="bg-primary-cyan text-white py-2 px-4 font-medium rounded-full"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </SelectionDialog>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default App;
