const Home = () => {
  return (
    <div className="bg-hero w-screen h-full xl:h-screen ">
      <div className="w-full h-full px-24 container mx-auto flex flex-col items-center justify-center">
        <span className="w-full flex flex-row items-center justify-center spcae-x-12">
          {/* Left */}
          <span className="w-full flex flex-col space-y-6">
            <h1 className="text-white text-7xl capitalize">
              HSKO donates <br />{" "}
              <span className="text-red-600">0.5% of every transaction</span>{" "}
              <br /> to charity.
            </h1>
            <span className="w-full max-w-xl">
              <p className="text-white font-bold">
                HSKO is a p2p community-driven, cryptocurrency on the Polygon
                blockchain (MATIC).{" "}
                <span className="text-slate-400 font-light">
                  HSKO will have a maximum supply of 1 billion tokens, with a 1%
                  txn fee used for development, marketing and charities.
                </span>
              </p>
            </span>
            <span className="w-full max-w-md flex flex-row space-x-4 justify-start">
              <Button
                style={"solid"}
                text={"buy now"}
                action={() => {
                  console.log("buying");
                }}
                type={"button"}
              />
              <Button
                style={"outline"}
                text={"learn more"}
                action={() => {
                  console.log("learning more");
                }}
                type={"button"}
              />
            </span>
          </span>
          {/* Right */}
          <span className="w-full max-w-md">
            <img src={"/logo.svg"} alt={"husko hero image"} />
          </span>
        </span>
      </div>
    </div>
  );
};

const Button = ({ style, text, action, type }) => {
  return (
    <button
      className={`flex w-full flex-row items-center justify-center space-x-1 text-lg 2xl:text-xl py-5 2xl:py-[11px] capitalize duration-300 whitespace-nowrap ${
        style === "solid"
          ? "bg-white text-black hover:bg-slate-100 focus:bg-slate-200"
          : style === "outline"
          ? "border border-white text-white hover:bg-white hover:text-black"
          : "text-sea hover:text-lime"
      }`}
      onClick={action}
      type={type}
    >
      {text && <p>{text}</p>}
    </button>
  );
};

export default Home;
