const HomeBefore = () => {
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
          <span className="">
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

const Home = _ => {
  return (
    <div className="text-white text-lg">
      {/* Header  */}
      <div className="hero bg-hero md:h-screen max-h-full py-10 px-8 sm:px-14 md:px-4 lg:px-14 ">
        <div className="hero__wrapper md:flex md:flex-row-reverse md:items-center md:px-0">
          {/* Image - desk:right  */}
          <div className="hero__img mb-8 md:flex-auto md:w-2/5 lg:w-1/2">
            <img className="w-80 md:w-10/12 lg:w-8/12 mx-auto" src={"/logo.svg"} alt={"husko hero image"} />
          </div>
          {/* Content - desk:left  */}
          <div className="hero__content md:flex-auto md:w-3/5 lg:w-1/2">
            <h1 className="text-4xl sm:text-6xl">
              HSKO donates{" "}
              <span className="text-red-600">0.5% of every transaction</span> to
              charity
            </h1>
            <p className="font-bold py-6">
              HSKO is a p2p community-driven, cryptocurrency on the Polygon
              blockchain (MATIC). {" "}
              <span className="text-slate-400 font-light">
                HSKO will have a maximum supply of 1 billion tokens, with a 1%
                txn fee used for development, marketing and charities.
              </span>
            </p>
            <div className="btn-group flex space-x-4 sm:space-x-8 my-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
