import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { connect, disconnect, Mint} from "../global/utils/web3";
import { updateChain } from "../global/features/blockchainSlice";
// React
import { useEffect, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

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
  const account = useSelector((state) => state.blockchain.account)
  const [mintAmount, setMintAmount] = useState(1)
  const dispatch = useDispatch()
  const incrementAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount >  10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  }
  const decrementAmount = () => {
    let newMintAmount = mintAmount - 1;
    if(newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  }
  const connectweb3 = () => {
    if (account) {
      disconnect().then(
        (data) => dispatch(updateChain(data))
      )
    } else {
      connect().then((data) => dispatch(updateChain(data)))
    }
  }
  return (
    <div className="text-white text-lg ">
      <Header />
      <div className="container bg-hero max-w-full  max-h-full  py-10 px-8 sm:px-14 md:px-4 lg:px-14 ">
        {/* Header  */}
        <div className="mt-12 max-w-screen-2xl mx-auto hero__wrapper md:flex md:flex-row-reverse md:items-center md:px-0">
          {/* Image - desk:right  */}
          <div className="hero__img mb-8 md:flex-auto md:w-2/5 xl:w-1/2">
            <img
              className="w-80 md:w-10/12 lg:w-8/12 mx-auto"
              src={"/logo.svg"}
              alt={"husko hero image"}
            />
          </div>
          {/* Content - desk:left  */}
          <div className="hero__content md:flex-auto md:w-3/5 xl:w-1/2">
            <h1 className="text-4xl sm:text-6xl">
              HSKO NFT{" "}
              <span className="text-red-600">500 Unique art on blockchain</span> Mint Now
            </h1>
            <p className="font-bold py-6">
              HSKO is a p2p community-driven, cryptocurrency on the Polygon
              blockchain (MATIC).{" "}
              <span className="text-slate-400 font-light">
                HSKO will have a maximum supply of 1 billion tokens, with a 1%
                txn fee used for development, marketing and charities.
              </span>
            </p>
            <div className="btn-group flex justify-center space-x-4 sm:space-x-8 my-6">
              {account == null ? <Button
                style={"solid"}
                text={"Connect Wallet to Continue"}
                action={() => {
                  connectweb3()
                }}
                type={"button"}
              /> : <div>
              <div className="flex justify-center mb-4">
                <div className="mx-4 ">
                  <button className="rounded bg-white text-black px-8 py-2" onClick={(e) => {
                    e.preventDefault();
                    decrementAmount()
                  }}>-</button>
                </div>
                <div className="mx-4">
                  <small>{mintAmount}</small>
                </div>
                <div className="mx-4">
                  <button className="rounded bg-white text-black px-8 py-2" onClick={(e) => {
                    e.preventDefault()
                    incrementAmount()
                  }}>+</button>
                </div>
                
              </div>
              <div className="flex justify-center ">
              <button className="rounded bg-white text-black px-8 py-4" onClick={(e) => {
                e.preventDefault()
                Mint(mintAmount);
              }}>Mint</button>
              </div>
              
              </div>}
              
              {/* <Button
                style={"outline"}
                text={"learn more"}
                action={() => {
                  console.log("learning more");
                }}
                type={"button"}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
