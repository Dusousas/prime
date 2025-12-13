"use client";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import EffectMission from "./subc/EffetcMission";
import { motion } from "framer-motion";

export default function Mission() {
  const topArrows = [2, 8, 14, 20]; // right offsets (em "spacing" visual)
  const sideArrows = [36, 60, 84, 108]; // bottom offsets em px (subindo)

  return (
    <>
      <section className="py-20 bg-black relative overflow-hidden">
        <EffectMission />

        <div className="maxW relative z-10 flex gap-20">
          <article className="lg:w-[60%]">
            <h3 className="font-Roboto uppercase text-AmareloP text-xl font-medium">
              Sobre nós
            </h3>
            <h2 className="font-Over font-black text-white mt-4 text-center text-4xl lg:text-left lg:text-4xl">
              Giving Good Health To Good People.
            </h2>
            <p className="mt-4 text-white font-Roboto text-center lg:text-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit eveniet temporibus placeat explicabo mollitia illo
              sequi, tenetur enim voluptates molestiae fugiat voluptatibus nemo
              consectetur debitis, necessitatibus laudantium. Facere, repellat
              vel eum aliquam molestias ducimus illo voluptate dolores nostrum
              officia?
            </p>
          </article>

          <article className="lg:w-[40%] mx-auto">
            <div className="relative p-4">
              {/* SETAS DE CIMA (direita -> esquerda, piscando) */}
              <div className="pointer-events-none">
                {topArrows.map((r, i) => (
                  <motion.div
                    key={`top-${i}`}
                    className="absolute -top-9"
                    style={{ right: `${r * 4}px` }}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{
                      x: [6, 0, -10, -18],
                      opacity: [0, 0.45, 0.65, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: i * 0.22,
                    }}
                  >
                    <MdOutlineKeyboardDoubleArrowLeft className="text-4xl text-AmareloP" />
                  </motion.div>
                ))}
              </div>

              {/* Linhas horizontais completas que ultrapassam */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white -mx-8" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white -mx-8" />

              {/* Linhas verticais completas que ultrapassam */}
              <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-white -my-8">
                {/* SETAS LATERAIS (baixo -> cima, piscando) */}
                <div className="pointer-events-none">
                  {sideArrows.map((b, i) => (
                    <motion.div
                      key={`side-${i}`}
                      className="absolute"
                      style={{ bottom: `${b}px`, right: 0 }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{
                        y: [8, 0, -10, -18],
                        opacity: [0, 0.45, 0.65, 0],
                      }}
                      transition={{
                        duration: 2.2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: i * 0.24,
                      }}
                    >
                      <MdOutlineKeyboardDoubleArrowLeft className="text-4xl text-AmareloP rotate-90" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white -my-10" />

              {/* IMAGEM INTERATIVA */}
              <motion.img
                src="/video-img.png"
                alt=""
                className="w-full relative z-10 cursor-pointer select-none"
                initial={{ scale: 1, filter: "brightness(1)" }}
                whileHover={{
                  scale: 1.04,
                  rotate: -0.6,
                  filter: "brightness(1.08)",
                }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                style={{
                  boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                }}
              />

              {/* sombra suave no hover (fica bem “premium”) */}
              <motion.div
                className="absolute inset-4 -z-0 rounded-md"
                initial={{ opacity: 0, transform: "scale(0.98)" }}
                whileHover={{
                  opacity: 1,
                  transform: "scale(1)",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                }}
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
