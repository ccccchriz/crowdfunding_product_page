interface AboutProjectProps {
  about: string[];
  tiers: {
    name: string;
    min_money: number;
    description: string;
    left: number;
    extra_info: string;
  }[];
  setModalIndex: Function;
}

export default function AboutProject({
  about,
  tiers,
  setModalIndex,
}: AboutProjectProps) {
  return (
    <div className="bg-white p-4 flex flex-col rounded-lg gap-8">
      <h2 className="font-bold text-2xl mt-4">About this project</h2>
      {about.map((el, index) => (
        <p key={index} className="text-neutral-dark-gray">
          {el}
        </p>
      ))}
      <h2 className="sr-only">Support Rewards</h2>
      {tiers.map((el, index) => (
        <div
          key={index}
          className={`border p-4 md:p-8 border-neutral-dark-gray rounded-lg mb-2 ${
            el.left == 0 && "opacity-40"
          }`}
        >
          <div className="grid md:grid-cols-2">
            <h3 className="font-bold">{el.name}</h3>
            <p className="text-primary-cyan font-medium mb-4 md:text-right">
              Pledge ${el.min_money} or more
            </p>
          </div>
          <p className="mb-4">{el.description}</p>
          <div className="grid md:grid-cols-2">
            <p className="flex items-center gap-2 mb-4 md:mb-0">
              <strong className="font-bold text-2xl">{el.left}</strong> left
            </p>
            {el.left == 0 ? (
              <button
                disabled
                className="bg-neutral-dark-gray px-4 py-2 rounded-full text-white font-medium"
              >
                Out of Stock
              </button>
            ) : (
              <button
                onClick={() => setModalIndex(index)}
                className="bg-primary-cyan px-4 py-2 rounded-full text-white font-medium"
              >
                Select Reward
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
