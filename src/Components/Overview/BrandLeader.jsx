import React from "react";

import Brand from "./Brand";

export default function BrandLeader() {
  return (
    <>
      <div className="bg-gray-100  min-h-screen">
        <div className=" flex  ">
          <div className="max-w-6xl mx-auto px-4">
            <div className="py-4 text-center">
              <h1 className="text-5xl md:text-4xl font-semibold text-[#000] mb-4">
                A Brand Leader
              </h1>
              <p
                style={{ lineHeight: "1.5rem" }}
                className="text-lg md:text-[1rem] font-medium text-gray-700"
              >
                Offering the most powerful portfolio in the industry, our over
                30 brands and nearly 8,700 properties across 139 countries and
                territories give people more ways to connect, experience and
                expand their worlds.
              </p>
            </div>
          </div>
        </div>




<Brand/>

      </div>
    </>
  );
}