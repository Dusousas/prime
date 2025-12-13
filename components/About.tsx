import { SiVerizon } from "react-icons/si";
import EffectAbout from "./subc/EffectAbout";

export default function About() {
  return (
    <>
      <section className="py-20">
        <div className="maxW flex gap-20">
          <article className="relative flex justify-center items-center lg:w-[50%]">
            <img className="absolute w-[65%]" src="/about-img.png" alt="" />
            <EffectAbout />
          </article>

          <article className="lg:w-[50%]">
            <h3 className="font-Roboto uppercase text-AmareloP text-xl font-medium">
              Sobre nós
            </h3>
            <h2 className="font-Over font-black text-black mt-4 text-center text-4xl lg:text-left lg:text-4xl">
              Giving Good Health To Good People.
            </h2>
            <p className="mt-4 text-[#444444] font-Roboto text-center lg:text-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              cumque reiciendis illo voluptas harum debitis minus iusto!
            </p>
            <div className="mt-6">
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
      </section>
    </>
  );
}
