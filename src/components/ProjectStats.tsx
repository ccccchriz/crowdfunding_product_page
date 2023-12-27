interface ProjectStatsProps {
  money_wanted: number;
  money_collected: number;
  backers: number;
  days_left: number;
}

function dotNumber(number: number) {
  return [...`${number}`]
    .reverse()
    .map((digit, index) => (index % 3 == 0 ? `${digit},` : digit))
    .reverse()
    .join("")
    .slice(0, -1);
}

export default function ProjectStats({
  money_wanted,
  money_collected,
  backers,
  days_left,
}: ProjectStatsProps) {
  return (
    <div className="bg-white p-4 flex flex-col items-center rounded-lg gap-4 pt-6">
      <h2 className="sr-only">Project statistics</h2>
      <ul>
        <li className="grid text-center after:h-[1px] after:w-16 after:bg-neutral-dark-gray after:mx-auto after:my-4">
          <strong className="text-2xl">${dotNumber(money_collected)}</strong>
          <span className="text-neutral-dark-gray text-sm">
            of ${dotNumber(money_wanted)} backed
          </span>
        </li>
        <li className="grid text-center after:h-[1px] after:w-16 after:bg-neutral-dark-gray after:mx-auto after:my-4">
          <strong className="text-2xl">{dotNumber(backers)}</strong>
          <span className="text-neutral-dark-gray text-sm">total backers</span>
        </li>
        <li className="grid text-center">
          <strong className="text-2xl">{days_left}</strong>
          <span className="text-neutral-dark-gray text-sm">days left</span>
        </li>
      </ul>
      <meter
        min={0}
        max={money_wanted}
        value={money_collected}
        className="w-full h-6 rounded-full border-primary-cyan [&::-webkit-meter-bar]:bg-neutral-light-gray [&::-webkit-meter-optimum-value]:bg-primary-cyan"
        aria-hidden={true}
      />
    </div>
  );
}
