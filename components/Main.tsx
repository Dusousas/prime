import React from "react";

export default function Main() {
  return (
    <>
      <section className="bgMain relative">
        {/* overlay escura */}
        <div className="absolute inset-0 bg-black/60" />

        {/* conteúdo */}
        <div className="maxW relative z-10 flex flex-col justify-center h-full">
          <p className="uppercase font-Roboto text-AmareloP font-medium tracking-wider">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <h1 className="font-Over font-bold text-7xl text-white mt-4">
            Build Your Perfect Body And Healthy Growth
          </h1>
          <p className="mt-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque reiciendis illo voluptas harum debitis minus iusto recusandae sint perferendis inventore, eaque animi blanditiis! Quis sapiente temporibus illum a quas!</p>
        </div>
      </section>
    </>
  );
}
