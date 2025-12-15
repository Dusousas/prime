import React from "react";
import { FaFacebookF, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

type SocialItem = {
  id: number;
  href: string;
  label: string;
  icon: React.ReactNode;
  color: string; // cor do preenchimento
};

function SocialCircle({ href, label, icon, color }: Omit<SocialItem, "id">) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="group mt-4"
    >
      <span
        className="relative h-14 w-14 rounded-full border border-[#e6e6e6] overflow-hidden flex items-center justify-center"
        style={{ perspective: "900px" }}
      >
        {/* Fill (fica por baixo SEMPRE) */}
        <span
          className="absolute inset-0 z-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
          style={{ backgroundColor: color }}
        />

        {/* Ícone (fica por cima SEMPRE + giro 3D) */}
        <span
          className="relative z-10 text-white text-xl transition-transform duration-500 ease-out group-hover:scale-110"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* gira só o ícone */}
          <span className="inline-block transition-transform duration-500 ease-out group-hover:[transform:rotateY(180deg)]">
            {icon}
          </span>
        </span>
      </span>
    </a>
  );
}

export default function Contact() {
  const socials: SocialItem[] = [
    {
      id: 1,
      href: "https://facebook.com",
      label: "Facebook",
      icon: <FaFacebookF />,
      color: "#1877F2",
    },
    {
      id: 2,
      href: "https://instagram.com",
      label: "Instagram",
      icon: <FaInstagramSquare />,
      color: "#E1306C",
    },
    {
      id: 3,
      href: "https://wa.me/5599999999999",
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      color: "#25D366",
    },
  ];

  return (
    <>
      <section id="contato" className="bgFooter pt-20">
        <div className="maxW flex flex-col justify-center items-center gap-10 lg:gap-40 lg:flex-row">
          <article>
            <a
              href="/"
              className="text-AmareloP tracking-widest font-semibold text-3xl"
            >
              PRIME<span className="text-xl text-white">HEALTH</span>
            </a>

            <div className="flex gap-4">
              {socials.map((s) => (
                <SocialCircle
                  key={s.id}
                  href={s.href}
                  label={s.label}
                  icon={s.icon}
                  color={s.color}
                />
              ))}
            </div>
          </article>

          <article className="flex flex-col gap-10 lg:gap-20 lg:flex-row">
            <div className="">
              <div className="flex justify-center items-center gap-2 border-dotted border-white border-2 h-18 w-18 mx-auto">
                <IoLocationOutline className="text-4xl text-white" />
              </div>
              <p className="text-white mt-4">
                Av. Paulista, 1000 - São Paulo/SP
              </p>
            </div>

            <div>
              <div className="flex justify-center items-center gap-2 border-dotted border-white border-2 h-18 w-18 mx-auto">
                <IoLocationOutline className="text-4xl text-white" />
              </div>
              <p className="text-white mt-4 text-center">14 3563-1290</p>
            </div>

            <div>
              <div className="flex justify-center items-center gap-2 border-dotted border-white border-2 h-18 w-18 mx-auto">
                <IoLocationOutline className="text-4xl text-white" />
              </div>
              <p className="text-white mt-4 text-center">
                contato@primegmail.com
              </p>
            </div>
          </article>
        </div>

        <p className="text-center mt-20 pb-10 text-white font-Over uppercase">
          PrimeHealth - Todos os direitos reservados
        </p>
      </section>
    </>
  );
}
