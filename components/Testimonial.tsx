"use client";

import React, { useMemo } from "react";
import EffectMission from "./subc/EffetcMission";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  stars?: number; // 1..5
};

export default function Testimonial() {
  const testimonials: TestimonialItem[] = useMemo(
    () => [
      {
        id: 1,
        name: "Jardon Smith",
        role: "CEO",
        avatar: "/profile/profile-1.png",
        stars: 5,
        text: `Nibh volutpat rhoncus tortor ac. Posuere mattis orci, scelerisque volutpat dignissim nullam nascetur feugiat tortor.
Potenti viverra a sed in felis. Tincidunt habitant et scelerisque sit at sit risus neque tincidunt. A tempor malesuada eget enim, eleifend. Tincidunt feugiat risus.`,
      },
      {
        id: 2,
        name: "Maria Souza",
        role: "Aluna Prime",
        avatar: "/profile/profile-1.png",
        stars: 5,
        text: `Quaerat eius ipsa tempora nostrum! Eaque officia quibusdam adipisci ratione cumque blanditiis. Tincidunt feugiat risus.`,
      },
      {
        id: 3,
        name: "Lucas Ferreira",
        role: "Aluno Prime",
        avatar: "/profile/profile-1.png",
        stars: 5,
        text: `Potenti viverra a sed in felis. Tincidunt habitant et scelerisque sit at sit risus neque tincidunt. A tempor malesuada eget enim, eleifend.`,
      },
      {
        id: 4,
        name: "Ana Lima",
        role: "Aluna Prime",
        avatar: "/profile/profile-1.png",
        stars: 5,
        text: `Nibh volutpat rhoncus tortor ac. Posuere mattis orci, scelerisque volutpat dignissim nullam nascetur feugiat tortor.`,
      },
    ],
    []
  );

  // recortes (igual ao print)
  const cut = 34;
  const clip = `polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px)`;

  const Stars = ({ n = 5 }: { n?: number }) => (
    <div className="flex gap-1 mt-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < n ? "text-[#FBCE29] text-xl" : "text-white/25 text-xl"}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <>
      <section className="py-20 relative bg-black overflow-hidden">
        <EffectMission />

        <div className="maxW relative z-20">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={650}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1} // < lg: 1
            breakpoints={{
              1024: { slidesPerView: 2, spaceBetween: 32 }, // >= lg: 2
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                {/* Container do slide com altura padronizada */}
                <div className="h-full flex flex-col">
                  {/* BOX COM BORDA (SÓ TEXTO DENTRO) */}
                  <div
                    className="relative w-full"
                    style={{
                      clipPath: clip,
                      WebkitClipPath: clip,
                      background: "#fff",
                      padding: "1px",
                    }}
                  >
                    <div
                      className="
                        bg-black
                        px-10 py-10
                        min-h-[260px] lg:min-h-[280px] flex items-center justify-center h-full
                      "
                      style={{
                        clipPath: clip,
                        WebkitClipPath: clip,
                      }}
                    >
                      <p className="text-white  font-Roboto leading-relaxed whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* INFO FORA DA BORDA (ABAIXO) */}
                  <div className="mt-8 flex items-center gap-5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-[78px] h-[78px] rounded-full object-cover"
                    />

                    <div>
                      <p className="text-white font-Over text-xl font-bold">
                        {item.name}
                      </p>
                      <p className="text-white/70 font-Roboto mt-1">
                        {item.role}
                      </p>
                      <Stars n={item.stars ?? 5} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
