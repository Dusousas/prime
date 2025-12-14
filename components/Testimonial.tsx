"use client";

import React, { useMemo } from "react";
import EffectMission from "./subc/EffetcMission";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type TestimonialItem = {
  id: number;
  name?: string;
  role?: string;
  text: string;
};

export default function Testimonial() {
  const testimonials: TestimonialItem[] = useMemo(
    () => [
      {
        id: 1,
        name: "Jardon Smith",
        role: "Aluno Prime",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, reprehenderit quia? Recusandae iste adipisci qui quidem quaerat ratione?",
      },
      {
        id: 2,
        name: "Maria Souza",
        role: "Aluna Prime",
        text: "Quaerat eius ipsa tempora nostrum! Eaque officia quibusdam adipisci ratione cumque blanditiis. Tincidunt feugiat risus.",
      },
      {
        id: 3,
        name: "Lucas Ferreira",
        role: "Aluno Prime",
        text: "Potenti viverra a sed in felis. Tincidunt habitant et scelerisque sit at sit risus neque tincidunt. A tempor malesuada eget enim, eleifend.",
      },
      {
        id: 4,
        name: "Ana Lima",
        role: "Aluna Prime",
        text: "Nibh volutpat rhoncus tortor ac. Posuere mattis orci, scelerisque volutpat dignissim nullam nascetur feugiat tortor.",
      },
    ],
    []
  );

  const cut = 32;
  const clip = `polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px)`;

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
            slidesPerView={2}
            breakpoints={{
              1024: { slidesPerView: 2, spaceBetween: 32 },
            }}
            className="!pb-2"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                {/* Mantém todos com MESMA ALTURA */}
                <div className="h-full">
                  {/* wrapper = borda */}
                  <div
                    className="w-full h-full"
                    style={{
                      clipPath: clip,
                      WebkitClipPath: clip,
                      background: "#fff",
                      padding: "1px",
                    }}
                  >
                    {/* conteúdo */}
                    <div
                      className="bg-black h-full flex flex-col p-10
                                 min-h-[260px] lg:min-h-[100px]"
                      style={{
                        clipPath: clip,
                        WebkitClipPath: clip,
                      }}
                    >
                      <p className="text-white font-Roboto leading-relaxed">
                        {item.text}
                      </p>

                      {/* Nome sempre no final */}
                      {(item.name || item.role) && (
                        <div className="mt-auto pt-8">
                          {item.name && (
                            <p className="text-white font-Over text-xl font-bold">
                              {item.name}
                            </p>
                          )}
                          {item.role && (
                            <p className="text-white/70 font-Roboto mt-1">
                              {item.role}
                            </p>
                          )}
                        </div>
                      )}
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
