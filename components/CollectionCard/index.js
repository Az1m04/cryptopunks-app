import Image from "next/image";
import React from "react";
import weth from "../../public/assets/weth.png";
import pic from "../../public/punks/6.jpg";

function CollectionCard({ id, name, traits }) {
    console.log(id,"DD")
  return (
    <div className="rounded-3xl bg-gray-900 w-1/6 text-white">
      
        <Image className="rounded-tr-3xl rounded-tl-3xl"   src={pic} height={350} width={350} />

      <div className="p-4">
        <div className="text-2xl  font-bold">{name}</div>
        <div className="font-bold text-xl text-gray-600">.#{id}</div>
        <div className="flex  items-center space-x-2 leading-3">
          <div>
            <Image src={weth} height={20} width={20}/>
          </div>
          <div className="text-lg font-bold">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
