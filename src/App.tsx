import { useEffect, useState } from "react";
import Header from "./components/Header";
import CompanyInfo from "./components/CompanyInfo";

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
  about: String[];
  tiers: tierTypes[];
  thanks_message: string;
  no_reward_info: string;
}

function App() {
  const [data, setData] = useState<dataTypes>();

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <Header />
      {data ? (
        <main className="bg-neutral-dark-gray p-4">
          <CompanyInfo
            company={data.company}
            logo={data.logo}
            short_info={data.short_info}
          />
        </main>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default App;
