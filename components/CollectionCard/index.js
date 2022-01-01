import Image from "next/image";
import React from "react";
import weth from "../../public/assets/weth.png";


function CollectionCard({ id, name, traits,punkImage }) {
  return (
    <div className="rounded-3xl bg-gray-900  text-white">
      
        <Image className="rounded-tr-3xl rounded-tl-3xl"   src={punkImage} height={350} width={350} />

      <div className="p-4">
        <div className="text-2xl  font-bold">{name}</div>
        <div className="font-bold text-xl text-gray-600">#{id}</div>
        <div className="flex  items-center space-x-2 leading-3">
          <div>
            <Image src={weth} height={20} width={20} objectFit="cover"/>
          </div>
          <div className="text-lg font-bold">{traits[0]?.value}</div>
        </div>
      </div>
  
    </div>
  );
}

export default CollectionCard;
