import Head from "next/head";
import Header from "../components/Header";
import React ,{useState,useEffect}from "react";
import CollectionCard from "../components/CollectionCard";
import axios from 'axios'
import PunkList from "../components/PunkList";

// className="flex flex-col items-center justify-center min-h-screen py-2"
export default function Home() {
  const [punkListData,setPunkListData]=useState([])
 useEffect(() => {

  const getMyNfts=async () =>{

    const openseasData=await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x56F33E944d3542d6Dac2aFa906a0acD2Cb18fED6')
    setPunkListData(openseasData?.data?.assets)

  }
  return getMyNfts
 }, [])

 console.log(punkListData)

  return (
    <div>
      <Head>
        <title>Crypto Punks App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div className={`bg-black  h-screen space-y-10 space-x-10`}>
        <Header/>
        <CollectionCard id={0} name={`Azim punk`} traits={[{'value':7}]} />
        <PunkList/>
      </div>
    </div>
  );
}
