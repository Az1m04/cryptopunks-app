import React from "react";
import Link from "next/link";
function SinglePunkDetails({ singlePunkData }) {
  return (
    <div className="flex  ml-6 space-x-20 ">
      <div className="">
        <img
          className="rounded-3xl"
          src={`${singlePunkData?.image_original_url}`}
          height={400}
          width={400}
        />
      </div>
      <div className="flex flex-col justify-between  w-11/12">
        <div className="text-white font-extrabold text-8xl ">
          {singlePunkData?.name}
          <div className=" mt-5 text-gray-800 text-6xl">
            #{singlePunkData?.id}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="ml-2">
              <img
                className="rounded-full"
                src={`${singlePunkData?.owner?.profile_img_url}`}
                height={50}
                width={50}
              />
            </div>
            <div className="text-white ml-4">
              <div>{singlePunkData?.owner?.address}</div>
              <div className="text-cyan-500">@Azim</div>
            </div>
          </div>
          <div className="text-white flex space-x-3">
            <div className="border-2 rounded-full border-zinc-600 p-2 hover:bg-gray-900">
              <Link href="https://github.com/Az1m04">
                <img src="https://img.icons8.com/material-outlined/40/ffffff/github.png" />
              </Link>
            </div>
            <div className="border-2 rounded-full border-zinc-600 py-2 px-3 hover:bg-blue-900 ">
              <Link href="https://www.linkedin.com/in/mdazimbabu/">
                <img
                  className="mt-1"
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-2--v1.png"
                />
              </Link>
            </div>
            <div className="border-2 rounded-full border-zinc-600 p-2 hover:bg-cyan-500">
              <img src="https://img.icons8.com/ios-glyphs/40/ffffff/more.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePunkDetails;
