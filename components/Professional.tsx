"use client";

import React, { useMemo } from "react";
import EffetcMission from "./subc/EffetcMission";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaInstagramSquare, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

type Social = {
  type: "instagram" | "whatsapp" | "facebook";
  href: string;
  label: string;
};

type Personal = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: Social[];
};

function SocialIcon({ type }: { type: Social["type"] }) {
  if (type === "instagram")
    return <FaInstagramSquare className="text-AmareloP text-lg" />;
  if (type === "whatsapp")
    return <FaWhatsapp className="text-AmareloP text-lg" />;
  return <FaFacebookF className="text-AmareloP text-lg" />;
}

export default function Professional() {
  const personals: Personal[] = useMemo(
    () => [
      {
        id: 1,
        name: "Adalberto",
        role: "Personal",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores, ipsum dolorem sequi cum ut placeat.",
        image: "/profile/personal-1.png",
        socials: [
          { type: "instagram", href: "#", label: "Instagram" },
          { type: "whatsapp", href: "#", label: "WhatsApp" },
        ],
      },
      {
        id: 2,
        name: "Carla Mendes",
        role: "Personal",
        bio: "Inventore magnam voluptatem nam architecto consequatur est? Obcaecati maxime quae dignissimos culpa fugiat.",
        image: "/profile/personal-1.png",
        socials: [
          { type: "instagram", href: "#", label: "Instagram" },
          { type: "facebook", href: "#", label: "Facebook" },
        ],
      },
      {
        id: 3,
        name: "Lucas Ferreira",
        role: "Personal",
        bio: "Maiores, ipsum dolorem sequi cum ut placeat, laboriosam obcaecati maxime quae dignissimos culpa fugiat.",
        image: "/profile/personal-1.png",
        socials: [{ type: "instagram", href: "#", label: "Instagram" }],
      },
      {
        id: 4,
        name: "Lucas Ferreira",
        role: "Personal",
        bio: "Maiores, ipsum dolorem sequi cum ut placeat, laboriosam obcaecati maxime quae dignissimos culpa fugiat.",
        image: "/profile/personal-1.png",
        socials: [{ type: "instagram", href: "#", label: "Instagram" }],
      },
    ],
    []
  );

  return (
    <>
      <section id="profissionais" className="py-20 relative">
        <div className="pointer-events-none hidden lg:block">
          <motion.img
            src="/icons/icon1.png"
            alt=""
            className="absolute left-8 top-6 -rotate-45"
            animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          <motion.img
            src="/treino.png"
            alt=""
            className="absolute right-8 bottom-8 rotate-45"
            animate={{ y: [0, 20, 0], x: [0, -6, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="maxW">
          <p className="font-Roboto uppercase text-AmareloP text-xl font-medium text-center">
            Personais qualificados
          </p>
          <h2 className="font-Over font-black text-black mt-4 text-center text-4xl lg:text-5xl">
            Nossos profissionais
          </h2>

          {/* Espaço pra foto e redes que ficam pra fora do card */}
          <div className="mt-20">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={personals.length > 3}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-14" // espaço pro pagination e pras redes
            >
              {personals.map((p) => (
                <SwiperSlide key={p.id} className="!h-auto">
                  {/* Importante: deixar o slide com padding vertical pra não cortar foto/redes */}
                  <div className="pt-16 pb-10">
                    <div className="bg-black relative px-8 pb-10 pt-20 rounded-2xl">
                      {/* CAMADA QUE PRENDE O EFEITO DENTRO DO CARD */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                        <EffetcMission />
                      </div>

                      {/* FOTO (fora do card, em cima) */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-black rounded-full flex items-center justify-center bg-black z-20">
                        <img
                          className="rounded-full"
                          src={p.image}
                          alt={p.name}
                        />
                      </div>

                      {/* Conteúdo */}
                      <h2 className="text-AmareloP font-Roboto font-medium text-xl text-center relative z-10">
                        {p.name}
                      </h2>
                      <p className="text-white font-Roboto text-center uppercase text-sm tracking-wider font-thin relative z-10">
                        {p.role}
                      </p>
                      <p className="text-white font-Roboto text-center mt-4 relative z-10">
                        {p.bio}
                      </p>

                      {/* REDES (fora do card, embaixo, centralizado) */}
                      {p.socials?.length > 0 && (
                        <div className="absolute flex gap-4 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                          {p.socials.map((s, idx) => (
                            <a
                              key={`${p.id}-${s.type}-${idx}`}
                              href={s.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={s.label}
                              className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
                            >
                              <SocialIcon type={s.type} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
