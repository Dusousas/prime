"use client";

import React from "react";
import { SiVerizon } from "react-icons/si";
import EffectAbout from "./subc/EffectAbout";
import { GiBiceps } from "react-icons/gi";

const about2Cards = [
  {
    title: "Dedicated Services",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
sequi ex assumenda sed veritatis, non incidunt aliquid nesciunt
corrupti nobis commodi, recusandae nisi tempore neque optio quos
tenetur magnam voluptatum!`,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    Icon: GiBiceps,
  },
  {
    title: "Dedicated Services",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
sequi ex assumenda sed veritatis, non incidunt aliquid nesciunt
corrupti nobis commodi, recusandae nisi tempore neque optio quos
tenetur magnam voluptatum!`,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    Icon: GiBiceps,
  },
    {
    title: "Dedicated Services",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
sequi ex assumenda sed veritatis, non incidunt aliquid nesciunt
corrupti nobis commodi, recusandae nisi tempore neque optio quos
tenetur magnam voluptatum!`,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    Icon: GiBiceps,
  },
    {
    title: "Dedicated Services",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
sequi ex assumenda sed veritatis, non incidunt aliquid nesciunt
corrupti nobis commodi, recusandae nisi tempore neque optio quos
tenetur magnam voluptatum!`,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
    Icon: GiBiceps,
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="py-20">
        <div className="maxW">
          <div className="flex flex-col gap-20 lg:flex-row">
            <article className="relative w-full flex justify-center items-center lg:w-[50%]">
              <img className="absolute w-[80%] lg:w-[65%]" src="/about-img.png" alt="" />
              <EffectAbout />
            </article>

            <article className="lg:w-[50%]">
              <h3 className="font-Roboto uppercase text-AmareloP text-xl font-medium text-center lg:text-left">
                Sobre nós
              </h3>
              <h2 className="font-Over font-black text-black mt-4 text-center text-4xl lg:text-left lg:text-4xl">
                Giving Good Health To Good People.
              </h2>
              <p className="mt-4 text-[#444444] font-Roboto text-center lg:text-xl lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae cumque reiciendis illo voluptas harum debitis minus
                iusto!
              </p>
              <div className="mt-6 flex flex-col items-center lg:items-start">
                <p className="flex items-center gap-2 text-[#444444] uppercase">
                  <SiVerizon className="text-AmareloP" />
                  Duis quis odio quis dui sagittis laoreet.
                </p>
                <p className="flex items-center gap-2 text-[#444444] uppercase">
                  <SiVerizon className="text-AmareloP" />
                  Duis quis odio quis dui sagittis laoreet.
                </p>
                <p className="flex items-center gap-2 text-[#444444] uppercase">
                  <SiVerizon className="text-AmareloP" />
                  Duis quis odio quis dui sagittis laoreet.
                </p>
                <p className="flex items-center gap-2 text-[#444444] uppercase">
                  <SiVerizon className="text-AmareloP" />
                  Duis quis odio quis dui sagittis laoreet.
                </p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <a
                    href=""
                    className="bg-AmareloP text-black uppercase px-8 py-4 font-semibold hover:bg-black hover:text-AmareloP transition-colors duration-300"
                  >
                    Entrar em contato
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* BLOCO ABOUT 2 */}
          <article className="mt-20 flex gap-10 justify-center flex-wrap">
            {about2Cards.map((card, idx) => (
              <div
                key={idx}
                className="group relative outline outline-[#e6e6e6] p-12 w-[500px] overflow-hidden cursor-pointer"
              >
                {/* Background image on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${card.img})` }}
                ></div>

                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Conteúdo */}
                <div className="relative z-10">
                  <div className="flex gap-10 items-center">
                    <div className="bg-AmareloP p-6 rounded-full group-hover:outline-2 group-hover:outline-white group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                      <card.Icon className="text-4xl" />
                    </div>
                    <h3 className="font-Roboto uppercase text-xl tracking-wide font-semibold group-hover:text-white transition-colors duration-500">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-6 group-hover:text-white transition-colors duration-500">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
