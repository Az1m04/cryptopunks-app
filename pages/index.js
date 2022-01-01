import Head from "next/head";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import CollectionCard from "../components/CollectionCard";
import axios from "axios";
import PunkList from "../components/PunkList";
import pic from "../public/punks/6.jpg";
import SinglePunkDetails from "../components/SinglePunkDetails";

// className="flex flex-col items-center justify-center min-h-screen py-2"
export default function Home() {
  const [punkListData, setPunkListData] = useState([]);
  const [singlePunkData, setSinglePunkData] = useState(null);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseasData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x56F33E944d3542d6Dac2aFa906a0acD2Cb18fED6"
      );
      setPunkListData(openseasData?.data?.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="bg-black w-full h-screen">
      <Head>
        <title>Crypto Punks App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={``}>
        <Header />
      </div>
    {!singlePunkData?.id && (  <div className="uppercase text-9xl text-white font-extrabold text-center pb-10 ">
       <span className="text-6xl">Welcome to the</span> <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">cryptopunks </span>
       <span>nft</span>
      </div>)}
      {singlePunkData?.id && (
        <div className="m-7 ease-in ">
          <SinglePunkDetails singlePunkData={singlePunkData} />
        </div>
      )}
      <div className=" w-full ">
        <PunkList
          punkListData={punkListData}
          setSinglePunkData={setSinglePunkData}
        />
      </div>
    </div>
  );
}
